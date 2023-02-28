const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const mimetype = require('mime-types')
const cheerio = require('cheerio')
const FormData = require('form-data')

const os = require('os')
const chalk = require('chalk')
const clibox = require('cli-box')
const figlet = require('figlet')
const ip = require('ip')
const fs = require('fs')

const searchAnime = async (media = new Buffer, mimetype = '') => new Promise(async (resolve, reject) => {
    const form = new FormData()
    var ran = getRandom('.'+mimetype.split('/')[1])
    fs.writeFileSync(ran, media)
    form.append('name', 'image')
    form.append('filename', fs.createReadStream(ran))
    const response = await fetch("https://api.trace.moe/search",{
      method: "POST", 
      body: form,
      headers: {
        ...form.getHeaders()
      }
    })
    if (!response.ok) reject(`Imagem não encontrada!`);
    const result = await response.json()
    fs.unlinkSync(ran)
    const animeInfo = await fetch("https://trace.moe/anilist/", {
      "headers": {
        "content-type": "application/json",
      },
      "body": `{\"query\":\"query ($ids: [Int]) {\\n            Page(page: 1, perPage: 50) {\\n              media(id_in: $ids, type: ANIME) {\\n                id\\n                title {\\n                  native\\n                  romaji\\n                  english\\n                }\\n                type\\n                format\\n                status\\n                startDate {\\n                  year\\n                  month\\n                  day\\n                }\\n                endDate {\\n                  year\\n                  month\\n                  day\\n                }\\n                season\\n                episodes\\n                duration\\n                source\\n                coverImage {\\n                  large\\n                  medium\\n                }\\n                bannerImage\\n                genres\\n                synonyms\\n                studios {\\n                  edges {\\n                    isMain\\n                    node {\\n                      id\\n                      name\\n                      siteUrl\\n                    }\\n                  }\\n                }\\n                isAdult\\n                externalLinks {\\n                  id\\n                  url\\n                  site\\n                }\\n                siteUrl\\n              }\\n            }\\n          }\\n          \",\"variables\":{\"ids\":[${result.result[0].anilist}]}}`,
      "method": "POST"
    }).then(async res => (await res.json()).data.Page.media)
    try {
      var external_link = ''
      var genre = animeInfo[0].genres.join(', ')
      for(let index in animeInfo[0].externalLinks) {
        external_link += `*🔰 Site: _${animeInfo[0].externalLinks[index].site}_*\n*🌐 Url: _${animeInfo[0].externalLinks[index].url}_*`
        if(index != animeInfo[0].externalLinks.length - 1)  external_link += `\n\n`
      }
      var title = animeInfo[0].title.romaji
      var title_japan = animeInfo[0].title.native
      var title_english = animeInfo[0].title.english
      var is_adult = animeInfo[0].isAdult
      var season = animeInfo[0].season
    	const { episode, similarity, video} = result.result[0]
    	let ecch = () => is_adult ? "Sim" : "Não"
    	resolve({video: await getBuffer(video), text: `*🎯 Precisão: _${(similarity*100).toFixed(2)}%_*
*🔞 Hentai: _${ecch()}_*
*🇯🇵 Título em japones símbolo: _${title_japan}_*
*🇯🇵 Título em japones letra: _${title}_*
*🇺🇸 Título inglês: _${title_english}_*
*🎞️ Episodio: _${episode}_*
*📹 Temporada: _${season}_*
*ℹ️ Gêneros: _${genre}_*\n
*🌐 Links externos:*\n\n${external_link}`});
	} catch (e) {
		console.log(e)
		reject(`Eu não sei que anime é esse`)
	}
})

const simih = async (text, apikey = 'brizaloka') => {
	try {
		const simi = await fetch(`https://api.brizaloka-api.tk/ia/simsimi?apikey=${apikey}&text=${text}`, {method: 'GET'})
		const res = await simi.json()
		return res.resultado.resposta
	} catch {
		return 'Simi não sabe'
	}
}

const getExtension = async (type) => {
	return await mimetype.extension(type)
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		if(i.admin == 'admin') admins.push(i.id)
		if(i.admin == 'superadmin') admins.push(i.id)
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const getEmoteTime = (hour) => {
  if(hour > 12 || hour < 0) return '🕛'
  switch (hour) {
    case 0:
    case 12:
      return '🕛'
    case 1:
      return '🕐'
    case 2:
      return '🕑'
    case 3:
      return '🕒'
    case 4:
      return '🕓'
    case 5:
      return '🕔'
    case 6:
      return '🕕'
    case 7:
      return '🕖'
    case 8:
      return '🕗'
    case 9:
      return '🕘'
    case 10:
      return '🕙'
    case 11:
      return '🕚'
  }
}

const startBanner = async () => {
  const message = `  📱  Dispositivo: ${os.platform()}\n`
  + `  💾  RAM total: ${(os.totalmem()/Math.pow(1024, 3)).toFixed(2)}GB\n`
  + `  💾  RAM disponível: ${(os.freemem()/Math.pow(1024, 3)).toFixed(2)}GB\n`
  + `  💻  ARCH: ${os.arch()}\n`
  + `  🌐  Ipv4: ${await ip.address()}\n`

  const header = await figlet.textSync('Alastor', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: process.stdout.columns,
    whitespaceBreak: false
  })
  var b5 = clibox({ 
    hAlign: 'left', 
    vAlign: 'center', 
    stretch: true, 
    height: 15, 
    width: process.stdout.columns, 
    marks: {
      nw: chalk.green.bold("+"),
      n:  chalk.green.bold("-"), 
      ne: chalk.green.bold("+"), 
      e:  chalk.green.bold("|"), 
      se: chalk.green.bold("+"), 
      s:  chalk.green.bold("-"), 
      sw: chalk.green.bold("+"), 
      w:  chalk.green.bold("|")
  } }, `   ${chalk.red.bold(header)}\n\n${chalk.yellow.bold(message)}`);

  console.log(b5);
  /* console.log(box(`${chalk.red.bold(header)}\n\n${chalk.yellow.bold(message)}`, {
    minWidth: 90,
    maxWidth: 120,
    color: 'green',
    padding: 6
  })) */

}

const encryptHex = async (message, keyHexFnf, ivHexFnf) => {
  var cipher = await Crypto.createCipheriv('aes-256-ctr', keyHexFnf, ivHexFnf)
  var encrypted = await cipher.update(message, 'utf-8', 'hex')
  encrypted += await cipher.final('hex')
  return encrypted;
}

const decryptHex =  async (message, keyHexFnf, ivHexFnf) => {
  var cipher = await Crypto.createDecipheriv('aes-256-ctr', keyHexFnf, ivHexFnf)
  var decrypted = await cipher.update(message, 'hex', 'utf-8')
  decrypted += await cipher.final('utf-8')
  return decrypted;
}


const spinner = { 
  "interval": 120,
  "frames": [
    "🌔",
    "🌓",
    "🌒",
    "🌑",
    "🌘",
    "🌗",
    "🌖",
    "🌕"
]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

}
const close = (id, text) => {
	spins.fail(id, {text: text})
}

const banner = cfonts.render(('ALASTOR|BOT'), {
    font: 'block',
    align: 'center',
	colors: ['red', '#BC0000'],   
    lineHeight: 1
});

async function generateAnagrams(word) {
    return new Promise(async (resolve, reject) => {
        var anagrams = []
        function go(prefix, postfix){
            var str,re,cnt,cntmax;
            cnt=0; cntmax=10000; str="";
            re=null
            if (cnt>=cntmax) return;
            if (postfix==""){
                if (re==null || prefix.match(re)==null){
                    anagrams.push(prefix)
                    str+=prefix+"\r\n"; cnt++;
                }
                return;
            }
            for (var i=0;i<postfix.length;i++){
                var prefix2=prefix+postfix.charAt(i);
                var postfix2=postfix.substring(0,i)+postfix.substring(i+1);
                go(prefix2,postfix2);
            }
        
        }
        go('', word)
        var an_one = Math.floor(Math.random() * (anagrams.length - 0) + 1);
        resolve(anagrams[an_one])
    })
}


async function randompalavra() {
    return new Promise(async (resolve, reject) => {
        fetch('https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=0&Submit=Nova+palavra',).then(async function (res, err) {
            if(err) reject(err)    
            var $ = cheerio.load(await res.text())
            resolve($('body > center > center > table:nth-child(4) > tbody > tr > td > div')[0].children[0].data)
        })
    }) 
}

const themesWords = [
    'Dicionário completo',
    'Dicionário para crianças',
    'Alimentos',
    'Animais',
    'Cores',
    'Corpo humano',
    'Educação',
    'Família',
    'Figuras geométricas',
    'Mídia de comunicação',
    'Números',
    'Números de 0 a 9',
    'Profissões',
    'Transporte'
]

async function randomPalavraArray(lengthWords, themeNumber) {
    return new Promise(async (resolve, reject) => {
        fetch(`https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=${lengthWords}&fs2=${themeNumber}&Submit=Nova+palavra`).then(async res => {
          const html = await res.text()
          const $ = cheerio.load(html)
          const words = $('body > center > center > table:nth-child(4) > tbody > tr > td > div') 
          const wordsArray = []
          for(var i = 0; i < words.length - 1; ++i) {
            wordsArray.push(words[i].children[0].data.replace('\n', '').toLowerCase().trim())
          }
          resolve(wordsArray);
        }).catch(async err => {
          reject(err)
        })
    })
}

const searchWordsImage = (wordListArrayWords, width, height, theme) => {
    return new Promise(async (resolve, reject) => {
      var searchWordListStr = ''
      for(let i = 0;i < wordListArrayWords.length; ++i) {
        if(i == wordListArrayWords.length - 1) searchWordListStr += `${wordListArrayWords[i]}`
        else searchWordListStr += `${wordListArrayWords[i]}%2C+`
      }
  
      fetch("https://puzzlemaker.discoveryeducation.com/word-search/result", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
          "content-type": "application/x-www-form-urlencoded",
        },
        "body": `title=${theme}&width=${width}&height=${height}&share=1&format=0&lettercase=0&words=${searchWordListStr}&show_instructions=ON`,
        "method": "POST"
      }).then(async res => {
        const html = await res.text();
        const $ = await cheerio.load(html);
        const wordImage = 'https://puzzlemaker.discoveryeducation.com' + $('#pzl > img')[0].attribs.src
        const wordSolutionImage = 'https://puzzlemaker.discoveryeducation.com' + $('#sol > img')[0].attribs.src
        resolve([wordImage, wordSolutionImage]);
      }).catch(async err => {
        reject(err)
      })
    })
}

const crissCrossImage = (crissCrossArrayWords) => {
    return new Promise(async (resolve, reject) => {
      var crissCrossListStr = ''
      for(let i = 0;i < crissCrossArrayWords.length; ++i) {
        if(crissCrossArrayWords[i].includes(' ')) crissCrossArrayWords[i] = crissCrossArrayWords[i].split(' ')[0]
        if(i == crissCrossArrayWords.length - 1) crissCrossListStr += `${crissCrossArrayWords[i]}`
        else crissCrossListStr += `${crissCrossArrayWords[i]}\r\n`
      }
      fetch("https://puzzlemaker.discoveryeducation.com/criss-cross/result", {
        "headers": {
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "content-type": "application/x-www-form-urlencoded",
        },
        "body": `puzzle_height=50&puzzle_width=50&puzzle_size=30&title=&words=${encodeURI(crissCrossListStr)}&show_instructions=ON`,
        "method": "POST"
      }).then(async res => {
        const html = await res.text();
        const $ = await cheerio.load(html);
        const crissCrossImage = 'https://puzzlemaker.discoveryeducation.com' + $('#pzl > img')[0].attribs.src
        const crissCrossSolutionImage = 'https://puzzlemaker.discoveryeducation.com' + $('#sol > img')[0].attribs.src
        resolve([crissCrossImage, crissCrossSolutionImage]);
      })
    })
}

function dataAtualFormatada(time = new Date().getTime()){
  var data = new Date(time),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'),
      ano  = data.getFullYear();
  return dia+"/"+mes+"/"+ano;
}

module.exports = { 
dataAtualFormatada,
getExtension, searchAnime, simih, getBuffer, 
generateMessageID, getGroupAdmins, getRandom, start, 
info, success, banner, close, decryptHex, encryptHex,
generateAnagrams, randompalavra, randomPalavraArray, themesWords,
searchWordsImage, crissCrossImage, getEmoteTime, searchAnime, startBanner }

