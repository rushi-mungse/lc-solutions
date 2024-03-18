import {
  defineDocumentType,
  defineNestedType,
} from "contentlayer/source-files";

const Topic = defineNestedType(() => ({
  name: "Topic",
  fields: {
    topic: {
      type: "string",
    },
  },
}));

const Problems = defineDocumentType(() => ({
  name: "Problems",
  filePathPattern: "problems/*.mdx",
  contentType: "mdx",
  fields: {
    questionNumber: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    level: {
      type: "enum",
      options: ["Easy", "Medium", "Hard"],
      required: true,
    },
    topics: {
      type: "list",
      of: Topic,
    },
    toc: {
      type: "boolean",
      default: true,
      required: false,
    },
    link: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (component) => component._raw.flattenedPath,
    },
  },
}));

export default Problems;
