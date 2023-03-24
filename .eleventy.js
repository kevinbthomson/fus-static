module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addPassthroughCopy('./src/img');

  eleventyConfig.addShortcode(
    'currentYear',
    () => `${new Date().getFullYear()}`
  );

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      output: '_site',
    },
  };
};
