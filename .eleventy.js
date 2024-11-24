const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  eleventyConfig.setChokidarConfig({
    usePolling: true,
    interval: 500,
  });

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "build",
    },
  };
};
