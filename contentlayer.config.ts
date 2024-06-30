import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from 'contentlayer/source-files';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
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
  filePathPattern: `agents/**/*.mdx`,
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
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Agent],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      // @ts-ignore
      [rehypePrettyCode, { theme: 'material-theme-palenight' }],
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
    remarkPlugins: [],
  },
});
