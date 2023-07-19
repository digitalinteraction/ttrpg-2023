#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const typeDirectories = fs
  .readdirSync('logos', { withFileTypes: true })
  .filter((f) => f.isDirectory())

function snakeCase(input) {
  return input
    .replace(/[ _]/g, '-')
    .replace(/[()]/g, '')
    .replace(/-+/g, '-')
    .toLowerCase()
}

const allowedExtensions = new Set(['.svg', '.png', '.jpg', '.jpeg'])

const output = {}

for (const type of typeDirectories) {
  const logoFiles = fs
    .readdirSync(path.join('logos', type.name), { withFileTypes: true })
    .filter((f) => f.isFile())

  const names = []

  for (const file of logoFiles) {
    if (!allowedExtensions.has(path.extname(file.name))) continue

    const name = snakeCase(file.name)

    if (name !== file.name) {
      fs.renameSync(
        path.join('logos', type.name, file.name),
        path.join('logos', type.name, name),
      )
    }

    names.push(name)
  }

  output[type.name] = names.sort().map((n) => path.join('logos', type.name, n))
}

fs.writeFileSync('_data/logos.json', JSON.stringify(output, null, 2))
