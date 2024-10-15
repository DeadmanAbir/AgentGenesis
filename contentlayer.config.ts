import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
interface Document {
  _raw: {
    flattenedPath: string;
  };
  // Add any other properties of the document here if needed
}
/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: ComputedFields<'Agent'> = {
  slug: {
    type: 'string',
    resolve: (doc: Document) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc: Document) =>
      doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
};

const Agent = defineDocumentType(() => ({
  name: 'Agent',
  filePathPattern: `components/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    toc: {
      type: 'boolean',
      default: true,
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Agent],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // @ts-ignore
      [rehypePrettyCode, { theme: 'github-dark' }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
