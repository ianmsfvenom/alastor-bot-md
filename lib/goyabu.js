const fetch = require('node-fetch').default
const cheerio = require('cheerio')

const searchGoyabu = async (query) => {
    return new Promise(async (resolve, reject) => {
        fetch(`https://goyabu.org/?s=${query}`).then(async (res) => {
            if(!res.ok) return reject(res.status)
            const html = await res.text()
            const $ = await cheerio.load(html)
            const animesArray = []
            const cheerioArray = $('#home-content > div.loop-content.phpvibe-video-list.miau > .video')
            if(cheerioArray.length < 1) return resolve([])
            for await (let obj of cheerioArray) {
                const animeTitle = obj.children[3].children[1].children[1].children[0].data
                const animeUrl = 'https://goyabu.org' + obj.children[3].children[1].children[1].attribs.href
                const genres = obj.children[3].children[3].children[3].children[0].data
                await fetch(animeUrl).then(async res => {
                    const $ = await cheerio.load(await res.text())
                    const statsStr = $('#channel-content > div.row > div.left20.right20 > p:nth-child(2)').text()
                    const description = $('#channel-content > div.row > div.left20.right20 > p:nth-child(4)').text()
                    const thumbUrl = $('#channel-content > div.row > div.mleft20.mright20.text-center > img')[0].attribs['data-cfsrc']
                    const episodesArray = []
                    for(let i in $('#channel-content > div:nth-child(2) > a')) {
                        if(isNaN(i)) continue
                        episodesArray.push({
                            ep: parseInt(i) + 1,
                            url: 'https://goyabu.org' + $('#channel-content > div:nth-child(2) > a')[i].attribs.href
                        })
                    }
                    const statsJson = {
                        animeTitle,
                        genres,
                        thumbUrl,
                        type: statsStr.split('Tipo: ')[1].split('\n')[0],
                        episodes: statsStr.split('Episódios: ')[1].split(' Áudio:')[0],
                        audioType: statsStr.split('Áudio: ')[1].split(' Gêneros:')[0],
                        release: statsStr.split('Lançamento: ')[1].split(' Status:')[0],
                        status: statsStr.split('Status: ')[1].split('\n')[0],
                        description: description.replace('\n', ' '),
                        episodesArray
                    }
                    animesArray.push(statsJson)
                })                
            }
            resolve(animesArray)
        }).catch(err => {
            reject(err)
        })
    })
}

const downloadGoyabu = async (url) => {
    return new Promise(async (resolve, reject) => {
        if(!url.includes('https://goyabu.org/animes/')) reject('Invalid url')
        fetch(url).then(async res => {
            const $ = await cheerio.load(await res.text())
            const videoUrl = $('#player_1 > video:nth-child(1)')[0].attribs.src
            resolve(videoUrl);
        })
    })
}

module.exports = { downloadGoyabu, searchGoyabu }
