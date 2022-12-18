const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const mimetype = require('mime-types')
const cheerio = require('cheerio')
const request = require('request')

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Imagem não encontrada!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Não se esses dados estão corretos:" : ""
    	let ecch = () => is_adult ? "Sim" : "Não"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Título em japones : *${title}*
~> Ortografia do Título : *${title_romaji}*
~> Título inglês : *${title_english}*
~> Episodio : *${episode}*
~> Temporada  : *${season}*`});
	} catch (e) {
		console.log(e)
		reject(`Eu não sei que anime é esse`)
	}
})

const simih = async (text) => {
	try {
		const sami = await fetch(`https://api.brizaloka-api.tk/ia/simsimi?apikey=brizaloka&text=${text}`, {method: 'GET'})
		const res = await sami.json()
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
      console.log(encodeURI(crissCrossListStr));
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

module.exports = { getExtension, wait, simih, getBuffer, 
    generateMessageID, getGroupAdmins, getRandom, start, 
    info, success, banner, close, 
    generateAnagrams, randompalavra, randomPalavraArray, themesWords,
    searchWordsImage, crissCrossImage }

