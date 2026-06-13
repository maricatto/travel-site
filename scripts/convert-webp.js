import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, extname, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const imagesDir = join(__dirname, '..', 'src', 'assets', 'images')

async function findJpgs(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await findJpgs(full))
    } else if (['.jpg', '.jpeg'].includes(extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

const jpgs = await findJpgs(imagesDir)
for (const jpg of jpgs) {
  const webp = jpg.replace(/\.(jpg|jpeg)$/i, '.webp')
  await sharp(jpg).webp({ quality: 85 }).toFile(webp)
  console.log(`✓ ${jpg.split('images')[1]} → webp`)
}
console.log(`\nConvertidos: ${jpgs.length} imagens`)
