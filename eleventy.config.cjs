const { eleventyAlembic } = require('@openlab/alembic/11ty')
const { EleventyRenderPlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin)
  eleventyConfig.addPlugin(eleventyAlembic, { useLabcoat: true })

  eleventyConfig.addShortcode('logoset', function (logos, size = '80') {
    return [
      '<cluster-layout space="var(--s1)" class="logoset" justify="center">',
      ...logos.map((logo) => `<img src="${logo}" height="${size}">`),
      '</cluster-layout>',
    ].join('')
  })

  eleventyConfig.addPassthroughCopy('logos')
  eleventyConfig.addPassthroughCopy('assets')
}
