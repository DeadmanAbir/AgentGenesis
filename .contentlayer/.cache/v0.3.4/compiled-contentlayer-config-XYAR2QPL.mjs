// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Agent = defineDocumentType(() => ({
  name: "Agent",
  filePathPattern: `agents/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Agent]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-XYAR2QPL.mjs.map
