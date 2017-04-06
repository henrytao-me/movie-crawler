const Shell = require('shelljs');

const downloads = require('./download.json')['Video']
const downloadDir = '~/Downloads/Dragon\ Ball/Dragon\ Ball/'

downloads.forEach(video => {
  const name = video.name
  const source = video.source.sd
  console.log(`Downloading video ${name} at ${source}`)
  Shell.exec(`curl ${source} -o ${downloadDir}${name}.mp4`)
})
