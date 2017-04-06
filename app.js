const Shell = require('shelljs');

const downloads = require('./db-001-050.json')['Video']
const downloadDir = '~/Downloads/Dragon\\ Ball/Dragon\\ Ball/'

downloads.forEach((video, index) => {
  const name = `Dragon\\ Ball\\ ${video.name.replace('db', '')}.mp4`
  const source = video.source.sd
  const command = `\ncurl ${source} -o ${downloadDir}${name}`
  console.log(command)
  Shell.exec(command)
})
