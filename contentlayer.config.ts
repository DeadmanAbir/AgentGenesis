import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Agent = defineDocumentType(() => ({
  name: 'Agent',
  filePathPattern: `agents/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Agent],
});
