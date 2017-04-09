const Shell = require('shelljs');

const fill = (n) => {
  n = parseInt(n)
  return n < 10 ? `00${n}` : (n < 100 ? `0${n}` : n)
}

const files = [
  'dbmovies.json'
]
files.forEach(filename => {
  const downloads = require(`./${filename}`)
  const downloadDir = '~/Downloads/Dragon\\ Ball/Dragon\\ Ball\\ Movies/'
  downloads.forEach((video, index) => {
    let name = video.name.replace(/ /g, '\\ ')
    name = `${name}.mp4`
    const source = video.url
    const command = `\ncurl ${source} -o ${downloadDir}${name}`
    console.log(command)
    Shell.exec(command)
  })
})


// const Shell = require('shelljs');

// const fill = (n) => {
//   n = parseInt(n)
//   return n < 10 ? `00${n}` : (n < 100 ? `0${n}` : n)
// }

// const files = [
//   'dbs-001-050.json',
//   'dbs-051-100.json'
// ]
// files.forEach(filename => {
//   const downloads = require(`./${filename}`)['Video']
//   const downloadDir = '~/Downloads/Dragon\\ Ball/Dragon\\ Ball\\ Super/'
//   downloads.forEach((video, index) => {
//     let name = parseInt(video.name.replace('dbs', ''))
//     if (name < 80) {
//       return
//     }
//     name = `Dragon\\ Ball\\ Super\\ ${fill(name)}.mp4`
//     const source = video.source.sd
//     const command = `\ncurl ${source} -o ${downloadDir}${name}`
//     console.log(command)
//     Shell.exec(command)
//   })
// })
