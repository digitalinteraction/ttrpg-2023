const { eleventyAlembic } = require('@openlab/alembic/11ty')
const { EleventyRenderPlugin } = require('@11ty/eleventy')
const eleventyWebcPlugin = require('@11ty/eleventy-plugin-webc')
const EleventyImage = require('@11ty/eleventy-img')
const { eleventyImagePlugin } = require('@11ty/eleventy-img')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin)
  eleventyConfig.addPlugin(eleventyAlembic, { useLabcoat: true })

  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: ['npm:@11ty/eleventy-img/*.webc'],
  })

  eleventyConfig.addPlugin(eleventyImagePlugin, {
    formats: ['webp', 'jpeg'],
    urlPath: '/img/',
    svgShortCircuit: true,
    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async',
    },
  })

  eleventyConfig.addShortcode(
    'logoset',
    async function (logos = [], size = '150px') {
      console.log(logos)
      const images = await Promise.all(
        logos.map(async (logo) => {
          const metadata = await EleventyImage(logo, {
            widths: [240],
            formats: ['webp'],
            outputDir: './_site/img',
          })

          const [data] = metadata.webp

          return `<img class="logo" src="${data.url}">`
        }),
      )

      return [
        `<grid-layout space="var(--s2)" class="logoset" min="${size}">`,
        ...images,
        '</grid-layout>',
      ].join('')
    },
  )

  eleventyConfig.addPassthroughCopy('assets')

  return {
    markdownTemplateEngine: 'njk',
  }
}
