import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from 'contentlayer/source-files';
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
    published: {
      type: 'boolean',
      default: true,
    },

    featured: {
      type: 'boolean',
      default: false,
      required: false,
    },
    component: {
      type: 'boolean',
      default: false,
      required: false,
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
});
