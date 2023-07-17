#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const types = fs.readdirSync('logos')

function snakeCase(input) {
  return input
    .replace(/[ _]/g, '-')
    .replace(/[()]/g, '')
    .replace(/-+/g, '-')
    .toLowerCase()
}

const output = {}

for (const type of types) {
  const logos = fs.readdirSync(path.join('logos', type))
  const names = []

  for (const logo of logos) {
    const name = snakeCase(logo)

    if (name !== logo) {
      fs.renameSync(
        path.join('logos', type, logo),
        path.join('logos', type, name),
      )
    }

    names.push(name)
  }

  output[type] = names.sort().map((n) => path.join('logos', type, n))
}

fs.writeFileSync('_data/logos.json', JSON.stringify(output, null, 2))
