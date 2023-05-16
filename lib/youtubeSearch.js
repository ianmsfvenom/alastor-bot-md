const youtube = require('scrape-youtube')
const youtubeSrc = async (query) => {
    return new Promise(async (resolve, reject) => {
        youtube.search(query).then(async res => {
            var vids = []
            for(let obj of res.videos) vids.push(obj)
            resolve({
                resultados: vids
            })
            return
        }).catch(err => {
            reject(err)
            return
        })
    })
}

module.exports = youtubeSrc