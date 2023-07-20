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
    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async',
    },
  })

  eleventyConfig.addShortcode('logoset', async function (logos, size = 80) {
    const height = `${size}, ${size * 2}`

    const images = await Promise.all(
      logos.map(async (logo) => {
        console.log(logo)
        const metadata = await EleventyImage(logo, {
          widths: [240],
          formats: ['webp'],
        })

        const [data] = metadata.webp

        return `<img class="logo" src="${data.url}"  height="${size}">`
      })
    )

    return [
      '<cluster-layout space="var(--s0)" class="logoset" justify="center">',
      ...images,
      '</cluster-layout>',
    ].join('')
  })

  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy('assets')
}
