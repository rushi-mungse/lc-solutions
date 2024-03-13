// contentlayer.config.js
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";
import { makeSource } from "contentlayer/source-files";

// content/definations/blogs.tsx
import {
  defineDocumentType,
  defineNestedType
} from "contentlayer/source-files";
var LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: {
      type: "string"
    },
    api: {
      type: "string"
    }
  }
}));
var Blogs = defineDocumentType(() => ({
  name: "Blogs",
  filePathPattern: "blogs/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    status: {
      type: "enum",
      options: ["draft", "published"],
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    toc: {
      type: "boolean",
      default: true,
      required: false
    },
    breadcrumb: {
      type: "string",
      required: true
    },
    links: {
      type: "nested",
      of: LinksProperties
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (component) => component._raw.flattenedPath
    }
  }
}));
var blogs_default = Blogs;

// contentlayer.config.js
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [blogs_default],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            if (codeEl.data?.meta) {
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, "");
              }
            }
            node.__rawstring__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: "rose-pine-moon",
          tokensMap: {
            fn: "entity.name.function",
            objKey: "meta.object-literal.key"
          },
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__withmeta__"] = node.children.at(0).tagName === "div";
            preElement.properties["__rawstring__"] = node.__rawstring__;
            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__;
            }
            if (node.__event__) {
              preElement.properties["__event__"] = node.__event__;
            }
            if (node.__style__) {
              preElement.properties["__style__"] = node.__style__;
            }
          }
        });
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-CC27R6SJ.mjs.map
