const {
    downloadContentFromMessage,
    useMultiFileAuthState,
    DisconnectReason,
    generateMessageID
} = require('@adiwajshing/baileys')
const uber = require('uberduck-api')
const pino = require('pino')
const WebSocket = require('ws')
const { help } = require('./menu')
const fetch = require('node-fetch').default
const { fetchJson } = require('./lib/fetcher')
const fs = require('fs')
const cheerio = require('cheerio')
const { Aki } = require('aki-api')
const { welcome, bye} = require('./src/js/welcomtext')
const {uploadimg} = require('./lib/uploadimg')
const util = require('util')
const execute = util.promisify(require('child_process').exec)
const { exec } = require('child_process')
const {stickerImgTag, addExif, stickerForVideo } = require('./lib/sticker')
const { getExtension, simih, getBuffer, getGroupAdmins, getRandom, banner, start, success, generateAnagrams, ytsearch, randompalavra } = require('./lib/functions')
const {color} = require('./lib/color')
const {helproleta} = require('./src/js/helproleta')
const {addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingPosition, getLevelingXp} = require('./lib/level')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ffmpeg = require('fluent-ffmpeg')
const cron = require('node-cron')
const linkfy = require('linkifyjs')
const translate = require('translatte')
const ID3Writer = require('browser-id3-writer')
const {mess, prefixs, vcard, OriginalOwner, ownerNumber, msgerr, 
    banmsgtype, banmsgporn, banmsglink, adminmsglink, adminmsgtype, 
    adminmsgporn, blockedcmdmsg, blockedmsg, notregister, backgroundbyeimg, 
    backgroundwelcomeimg, antinewchatmsg, antipvmsg, 
    delayantispamcmd, limitqnt, gpvotohelp, votohelp,
    registeruser, menuimg, panelOn
} = require('./config')
const chalk = require('chalk')
const usedCommandRecently = new Set()
const CC = require('currency-converter-lt')
var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|shorts\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
const gis = require('g-i-s');
const {redes_sociais} = require('./src/js/sociais')
const startPanel = require('./src/owner/server')
const { websocket_port } = require('./src/owner/config.json')
const panelSocket = panelOn ? require('socket.io-client')(`http://localhost:${websocket_port}`) : false
const antipalavra = JSON.parse(fs.readFileSync('./src/database/antis/antipalavra.json'))
const listantipalavra = JSON.parse(fs.readFileSync('./src/database/listaantipalavra.json'))
const voto = JSON.parse(fs.readFileSync('./src/database/voto.json'))
const gpvoto = JSON.parse(fs.readFileSync('./src/database/gpvoto.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/database/nsfw.json'))
const welcome_group = JSON.parse(fs.readFileSync('./src/database/welcomegp.json'))
const bye_group = JSON.parse(fs.readFileSync('./src/database/byegp.json'))
const welkom = JSON.parse(fs.readFileSync('./src/database/welkom.json'))
const muted = JSON.parse(fs.readFileSync('./src/database/muted.json'))
const limitedlist = JSON.parse(fs.readFileSync('./src/database/limitedlist.json'))
const antidoc = JSON.parse(fs.readFileSync('./src/database/antis/antidoc.json'))
const antiimg = JSON.parse(fs.readFileSync('./src/database/antis/antiimg.json'))
const antivid = JSON.parse(fs.readFileSync('./src/database/antis/antivid.json'))
const antiloc = JSON.parse(fs.readFileSync('./src/database/antis/antiloc.json'))
const antictt = JSON.parse(fs.readFileSync('./src/database/antis/antictt.json'))
const antisticker = JSON.parse(fs.readFileSync('./src/database/antis/antisticker.json'))
const antiaudio = JSON.parse(fs.readFileSync('./src/database/antis/antiaudio.json'))	
const antilink = JSON.parse(fs.readFileSync('./src/database/antis/antilink.json'))
const antilinkhard = JSON.parse(fs.readFileSync('./src/database/antis/antilinkhard.json'))
const antiporn = JSON.parse(fs.readFileSync('./src/database/antis/antiporn.json'))
const antifake = JSON.parse(fs.readFileSync('./src/database/antis/antifake.json'))
const dontback = JSON.parse(fs.readFileSync('./src/database/antis/dontback.json'))
const roletarussa = JSON.parse(fs.readFileSync('./src/database/roletarussa.json'))
const samih = JSON.parse(fs.readFileSync('./src/database/simi.json'))
const autostickerimg = JSON.parse(fs.readFileSync('./src/database/autostickerimg.json'))
const contratos = JSON.parse(fs.readFileSync('./src/database/contratos.json'))
const anagram = JSON.parse(fs.readFileSync('./src/database/anagram.json'))
const akinator = JSON.parse(fs.readFileSync('./src/database/akinator.json'))
const fechargp = JSON.parse(fs.readFileSync('./src/database/fechar.json'))
const abrirgp = JSON.parse(fs.readFileSync('./src/database/abrir.json'))
const chatsJid = JSON.parse(fs.readFileSync('./src/database/chatsjid.json'))

const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')
const tictactoe = JSON.parse(fs.readFileSync('./src/ttt/tictactoe.json'));
const { ttthelp } = require('./src/ttt/config/ttthelp');
const { tttme } = require('./src/ttt/config/tttme');
var tttset =  require('./src/ttt/config/tttset.json')
var esp = require('./src/ttt/config/tttframe.json')
const blackJack = require('./lib/blackjack.js')
const blackJackSessions = JSON.parse(fs.readFileSync('./src/database/blackjack.json'))

const forca = JSON.parse(fs.readFileSync('./src/database/forca.json'))
const puppet = JSON.parse(fs.readFileSync('./src/database/puppet_forca.json'))
const mines = JSON.parse(fs.readFileSync('./src/database/mines.json'))
const { getMinesPositions, MinesHelp } = require('./src/mines/mines')
var minecor = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']
var crashSocket = null
var crash = []
var doubleSocket = null
var double = []
const polls = []

var connected = false

function fmtMSS(s){
    const minutes = Math.floor(s / 60).toString().padStart(2, '0');
    const seconds = (s % 60).toString().padStart(2, '0');
    const result = `${minutes}:${seconds}`;
    return result
}

const IAmove1 = () => {
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
				tttset.reActivate2 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1:
			if (esp.a2 == "🔲") {
				tttset.reActivate2 = "off"
				esp.a2 = "⭕"
			}
		break
		case 2:
			if (esp.a3 == "🔲") {
				tttset.reActivate2 = "off"
				esp.a3 = "⭕"
			}
		break
		case 3:
			if (esp.b1 == "🔲") {
				tttset.reActivate2 = "off"
				esp.b1 = "⭕"
			}
		break
		case 4:
			if (esp.b2 == "🔲") {
				tttset.reActivate2 = "off"
				esp.b2 = "⭕"
			}
		break
		case 5:
			if (esp.b3 == "🔲") {
				tttset.reActivate2 = "off"
				esp.b3 = "⭕"
			}
		break
		case 6:
			if (esp.c1 == "🔲") {
				tttset.reActivate2 = "off"
				esp.c1 = "⭕"
			}
		break
		case 7:
			if (esp.c2 == "🔲") {
				tttset.reActivate2 = "off"
				esp.c2 = "⭕"
			}
		break
		case 8:
			if (esp.c3 == "🔲") {
				tttset.reActivate2 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
const IA = () => {
	if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
		tttset.reActivate1 = "off"
		esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
		tttset.reActivate1 = "off"
		esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
		tttset.reActivate1 = "off"
		esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
		tttset.reActivate1 = "off"
		esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
	} else if (tttset.tttdifficulty == "HARD" && ( 
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
					tttset.reActivate1 = "off"
					esp.a1 = "⭕"
				}
			break
			case 1:
				if (esp.a2 == "🔲") {
					tttset.reActivate1 = "off"
					esp.a2 = "⭕"
				}
			break
			case 2:
				if (esp.a3 == "🔲") {
					tttset.reActivate1 = "off"
					esp.a3 = "⭕"
				}
			break
			case 3:
				if (esp.b1 == "🔲") {
					tttset.reActivate1 = "off"
					esp.b1 = "⭕"
				}
			break
			case 4:
				if (esp.b2 == "🔲") {
					tttset.reActivate1 = "off"
					esp.b2 = "⭕"
				}
			break
			case 5:
				if (esp.b3 == "🔲") {
					tttset.reActivate1 = "off"
					esp.b3 = "⭕"
				}
			break
			case 6:
				if (esp.c1 == "🔲") {
					tttset.reActivate1 = "off"
					esp.c1 = "⭕"
				}
			break
			case 7:
				if (esp.c2 == "🔲") {
					tttset.reActivate1 = "off"
					esp.c2 = "⭕"
				}
			break
			case 8:
				if (esp.c3 == "🔲") {
					tttset.reActivate1 = "off"
					esp.c3 = "⭕"
				}
			break
		}
	}
}

function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'),
        ano  = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}

const ytdown = async (videoId = '') => {
    return new Promise(async (resolve, reject) => {
        await fetch('https://m.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': '95'
            },
            body: JSON.stringify({
                context: {
                    client: {
                    clientName: 'ANDROID',
                        clientVersion: '16.20'
                    }
                },
                videoId
            })
        }).then(async res => {
            const resJson = await res.json()
            const videosFormats = []
            const audioFormats = []
            for(let obj of resJson.streamingData.formats) {
                if(!obj.mimeType.includes('video/mp4')) continue
                videosFormats.push({
                    quality: obj.qualityLabel,
                    size: (obj.contentLength / Math.pow(1024, 2)).toFixed(2) + 'MB',
                    bytes: obj.contentLength,
                    mimeType: obj.mimeType.split(';')[0],
                    dl_link: obj.url
                })
            }
            for(let obj of resJson.streamingData.adaptiveFormats) {
                if(!obj.mimeType.includes('audio/mp4') && !obj.mimeType.includes('audio/webm')) continue
                audioFormats.push({
                    quality: obj.bitrate,
                    size: (obj.contentLength / Math.pow(1024, 2)).toFixed(2) + 'MB',
                    bytes: obj.contentLength,
                    mimeType: obj.mimeType.split(';')[0],
                    dl_link: obj.url
                })
            }
            resolve({
                title: resJson.videoDetails.title,
                channelName: resJson.videoDetails.author,
                channelUrl: `https://www.youtube.com/channel/${resJson.videoDetails.channelId}`,
                views: resJson.videoDetails.viewCount,
                description: resJson.videoDetails.shortDescription,
                audioFormats,
                videosFormats
            })
        }).catch(async err => {
            reject(err)
        })
    })
};

const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), delayantispamcmd * 1000)
}

var cassinov = [ '🍇 🍇 🍇', '🍒 🍒 🍒', '🍎 🍎 🍎', '🍇 🍇 🍎', '🍇 🍇 🍒', '🍇 🍎 🍇','🍇 🍎 🍎','🍇 🍎 🍒','🍇 🍒 🍇','🍇 🍒 🍎','🍇 🍒 🍒','🍎 🍇 🍇','🍎 🍇 🍎','🍎 🍇 🍒','🍎 🍎 🍇','🍎 🍎 🍒','🍎 🍒 🍇','🍎 🍒 🍎','🍎 🍒 🍒','🍒 🍇 🍇','🍒 🍇 🍎','🍒 🍇 🍒','🍒 🍎 🍇','🍒 🍎 🍎','🍒 🍎 🍒','🍒 🍒 🍇','🍒 🍒 🍎']
console.log(banner.string)

function horario(seconds){
    function pad(s){
      return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60*60));
    var minutes = Math.floor(seconds % (60*60) / 60);
    var seconds = Math.floor(seconds % 60);
    return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

setInterval(async () => {
    const dir = fs.readdirSync(__dirname)
    for(let obj of dir) {
        if( !obj.includes('pm2') && !obj.includes('git') && !obj.includes('heroku') && obj.split('.').length == 2 && !isNaN(obj.split('.')[0])) {
            fs.unlinkSync(obj)
        }
    }
}, 60000)

const getFileBuffer = async (mediakey, MediaType) => {
    const stream = await downloadContentFromMessage(mediakey, MediaType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
    }
    return buffer
}

async function startSocket() {
    const { state, saveCreds } = await useMultiFileAuthState('AlastorAuth')
    var client = require('@adiwajshing/baileys').default({
        logger: pino({level: 'silent'}),
        auth: state,
        version: [2, 2236, 10],
        printQRInTerminal: true
    })
    client.ev.on('group-participants.update', async (num) => {
        const mdata = await client.groupMetadata(num.id)
        const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
        const pushname = num.id
        const dbackid = []
        for(i=0;i<dontback.length;++i) dbackid.push(dontback[i].groupId)
        if((await dontback.find((x) => x.groupId == num.id))) {
            if (anu.action == 'add'){ 
                var ind = dontback.findIndex(x => x.groupId == num.id)
                if(dontback[ind].actived && (await dontback[ind].number.find(x => x == num.participants[0].split('@')[0]))) {
                    await client.sendMessage(mdata.id, {text:'*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
                    client.groupParticipantsUpdate(mdata.id, [num.participants[0]], 'remove')
                    return
                }
            }
        }
        if(antifake.includes(num.id)) {
            if(num.action === 'add' && !num.participants[0].startsWith(55)) {
                await client.sendMessage(mdata.id , {video: {url: 'https://download1327.mediafire.com/8sa3fyjc4oeg/4obpxlqhcaet3a7/ezgif.com-gif-maker+%282%29.mp4'},
                gifPlayback: true,
                caption: 'Olá número fake, você não é permitido aqui, saia agora para própria segurança'})
                client.groupParticipantsUpdate(mdata.id, [num.participants[0]], 'remove')
                return
            }
        }
        if(!welkom.includes(num.id)) return
        try {
            try {
                ppimg = await client.profilePictureUrl(num.participants[0])
            } catch {
                ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            try {
                ppgp = await client.profilePictureUrl(mdata.id)
            } catch {
                ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
            }
            const isByed =  (await bye_group.find(x => x.jid == num.id)) ? true : false
            const isWelcomed = (await welcome_group.find(x => x.jid == num.id)) ? true : false
            if(num.action === 'add') {
                if(isWelcomed) {
                    var ind = welcome_group.findIndex(x => x.jid == num.id)
                    teks = welcome_group[ind].msg
                        .replace('#data#', dataAtualFormatada())
                        .replace('#hora#', time)
                        .replace('#groupname#', mdata.subject)
                        .replace('#numuser#', '@'+num.participants[0].split('@')[0])
                        .replace('#botnum#', client.user.id)
                        .replace('#user#', pushname)
                } else {
                    teks = welcome(num.participants[0].split('@')[0], mdata.subject)
                }
                let buff = await getBuffer(ppimg)
                ran = getRandom('.jpg')
                await fs.writeFileSync(ran, buff)
                const uploadpp = await uploadimg('17desetembro', ran, ran)
                fs.unlinkSync(ran)
                imgbuff = await getBuffer(`https://api.brizaloka-api.tk/photomod/v1/menu?apikey=17desetembro&profileimg=${uploadpp.resultado.link}&background=${backgroundwelcomeimg}&description=Seja bem-vindo&title=BEM-VINDO&username=${num.participants[0].split('@')[0]}`)
                client.sendMessage(mdata.id, {image: imgbuff, mentions: num.participants, caption: teks})
            } else if(num.action === 'remove') {
                mem = num.participants[0]
                try {
                    ppimg = await client.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
                } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                if(isByed) {
                    var ind = bye_group.findIndex(x => x.jid == num.id)
                    teks = bye_group[ind].msg
                    .replace('#data#', dataAtualFormatada())
                    .replace('#hora#', time)
                    .replace('#groupname#', mdata.subject)
                    .replace('#numuser#', mem.split('@')[0])
                    .replace('#botnum#', client.user.id)
                    .replace('#user#', pushname)
                } else {
                    teks = bye(num.participants[0].split('@')[0])
                }
                let buff = await getBuffer(ppimg)
                ran = getRandom('.jpg')
                fs.writeFileSync(ran, buff)
                const upload = await uploadimg('17desetembro', ran, ran)
                imgbuff = await getBuffer(`https://api.brizaloka-api.tk/photomod/v2/menu?apikey=17desetembro&description=Ate mais ${mem.split('@')[0]}&profileimg=${upload.resultado.link}&background=${backgroundbyeimg}`)
                client.sendMessage(mdata.id, {image: imgbuff, caption: teks, mentions: num.participants})
                fs.unlinkSync(ran)

            }
        } catch (e) {
            console.log(e);
        }
    })
    client.ws.on('CB:call', async (json) => {
        if(json.tag == 'call' && json.content[0].tag == 'offer' && anticall.includes('Ativado')) {
            await client.sendMessage(json.attrs.from, {text: '*Parece que a curiosidade matou o gato. Agr vai saber das consequências de quem me liga* 😈'})
            await client.updateBlockStatus(json.attrs.from, 'block')
        }
    })
    
    cron.schedule('* * * * *', async () => {
        if(connected) {
            var date = new Date()
            var hour = date.getHours()
            var minute = date.getMinutes()
            for(i=0;i<fechargp.length;i++) {
                const groupMetadata = await client.groupMetadata(fechargp[i].jid)
                const groupAdmins = getGroupAdmins(groupMetadata.participants)
                const preNumberBot = client.user.id
                const botNumber = preNumberBot.includes(':') ? preNumberBot.split(':')[0]+'@s.whatsapp.net' : preNumberBot
                const isBotGroupAdmins = groupAdmins.includes(botNumber)
                if(isBotGroupAdmins && !fechargp[i].disabled) {
                    if(hour == fechargp[i].hour) {
                        if(minute >= fechargp[i].minute && !fechargp[i].actived) {
                            if(fechargp[i].minute == minute) {
                                await client.sendMessage(fechargp[i].jid, {text: '❌ FECHANDO GRUPO ❌'})
                                await client.groupSettingUpdate(fechargp[i].jid, 'announcement')
                                fechargp[i].actived = true
                            }
                            if(fechargp[i].minute > minute) {
                                await client.sendMessage(fechargp[i].jid, {text: '❌ FECHANDO GRUPO, DESCULPE-ME PELO ATRASO ❌'})
                                await client.groupSettingUpdate(fechargp[i].jid, 'announcement')
                                fechargp[i].actived = true
                            }
                        }
                    } else if(hour > fechargp[i].hour) fechargp[i].actived = false 
                }
            }
            fs.writeFileSync('./src/database/fechar.json', JSON.stringify(fechargp, null, 2))
            for(i=0;i<abrirgp.length;++i) {
                const groupMetadata = await client.groupMetadata(abrirgp[i].jid)
                const groupAdmins = getGroupAdmins(groupMetadata.participants)
                const preNumberBot = client.user.id
                const botNumber = preNumberBot.includes(':') ? preNumberBot.split(':')[0]+'@s.whatsapp.net' : preNumberBot
                const isBotGroupAdmins = groupAdmins.includes(botNumber)
                if(isBotGroupAdmins && !abrirgp[i].disabled) {
                    if(hour == abrirgp[i].hour) {
                        if(minute >= abrirgp[i].minute && !abrirgp[i].actived) {
                            if(abrirgp[i].minute == minute) {
                                await client.sendMessage(abrirgp[i].jid, {text: '✅ ABRINDO GRUPO ✅'})
                                client.groupSettingUpdate(abrirgp[i].jid, 'not_announcement')
                            }
                            if(abrirgp[i].minute > minute) {
                                await client.sendMessage(abrirgp[i].jid, {text: '✅ ABRINDO GRUPO, DESCULPE-ME PELO ATRASO ✅'})
                                client.groupSettingUpdate(abrirgp[i].jid, 'not_announcement')
                            }
                            abrirgp[i].actived = true
                        }
                    } else if(hour > abrirgp[i].hour) abrirgp[i].actived = false 
                }
            }
            fs.writeFileSync('./src/database/abrir.json', JSON.stringify(abrirgp, null, 2))
        }
    })

    client.ev.on('messages.upsert', async m => {
        try {
            const msg = m.messages[0]
            if(msg.key.fromMe) return
            if(msg.key && msg.key.remoteJid == 'status@broadcast') return
            if(chatsJid.indexOf(msg.key.remoteJid) < 0) {
                chatsJid.push(msg.key.remoteJid)
                fs.writeFileSync('./src/database/chatsjid.json', JSON.stringify(chatsJid))
            }
            const limitactive = JSON.parse(fs.readFileSync('./src/database/limitactive.json'))
            const antipv = JSON.parse(fs.readFileSync('./src/database/antis/antipv.json'))
            const antispamcmd = JSON.parse(fs.readFileSync('./src/database/antis/antispamcmd.json'))
            const antinewchatlist = JSON.parse(fs.readFileSync('./src/database/antis/antinewchatlist.json'))
            const antinewchat = JSON.parse(fs.readFileSync('./src/database/antis/antinewchat.json'))
            const anticall = JSON.parse(fs.readFileSync('./src/database/antis/anticall.json'))
            const leveling_block = JSON.parse(fs.readFileSync('./src/database/level_block.json'))
            const blockeds = JSON.parse(fs.readFileSync('./src/database/blocklist.json'))
            const blockcmd = JSON.parse(fs.readFileSync('./src/database/blockcmd.json'))
            
            const preNumberBot = client.user.id
            const botNumber = preNumberBot.includes(':') ? preNumberBot.split(':')[0]+'@s.whatsapp.net' : preNumberBot
            const type = (msg.message && Object.keys(msg.message)[0] == 'senderKeyDistributionMessage') ? Object.keys(msg.message)[2] : (msg.message && Object.keys(msg.message)[0] == 'messageContextInfo') ? Object.keys(msg.message)[1] : (msg.message && Object.keys(msg.message)[0]) ? Object.keys(msg.message)[0] : ''
            const from = msg.key.remoteJid
            const isGroup = from.endsWith('@g.us')
            const presender = isGroup ? msg.key.participant : msg.key.remoteJid
            const sender = presender.includes(':') ? `${presender.split(':')[0]}@s.whatsapp.net` : presender
            const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
            const groupMembers = isGroup ? groupMetadata.participants : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const isOwner = ownerNumber.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isGroupAdmins = groupAdmins.includes(sender) || false
            const groupName = isGroup ? groupMetadata.subject : ''
            const pushname = msg.pushName ? msg.pushName : ''
            const isAntiPalavra = isGroup ? antipalavra.includes(from) : false
            const isAntiSpamcmd = antispamcmd.includes('Ativado')
            const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
            const isAntiNewchat = (antinewchat.indexOf('Ativado') >= 0) ? true : false
            const isVotoInit = voto.length > 0 ? true : false
            const isWelkom = isGroup ? welkom.includes(from) : false
            const countMessage = JSON.parse(fs.readFileSync('./src/database/countmsg.json'))
            const crashRank = JSON.parse(fs.readFileSync('./src/database/crash.json'))
            const doubleRank = JSON.parse(fs.readFileSync('./src/database/double.json'))
            const isLimitActive = (limitactive.indexOf('Ativado') >= 0) ? true : false
            const isAntiDoc = isGroup ? antidoc.includes(from) : false
            const isAntiImg = isGroup ? antiimg.includes(from) : false
            const isAntiVid = isGroup ? antivid.includes(from) : false
            const isAntiLoc = isGroup ? antiloc.includes(from) : false
            const isAntiCtt = isGroup ? antictt.includes(from) : false
            const isAntiAudio = isGroup ? antiaudio.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false
            const isAntiPorn = from.endsWith('@g.us') ? antiporn.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
            const isBlockRoleta = roletarussa.includes(from)
            const isSimi = isGroup ? samih.includes(from) : false
            const isAutoStickerImg = isGroup ? autostickerimg.includes(from) : false
            const isNsfw = isGroup ? nsfw.includes(from) : false
            const isBlockLevel = leveling_block.level_blocked
            const isAntiCall = (anticall.indexOf('Ativado') >= 0) ? true : false
            const isPlayBlackJack = isGroup ? blackJackSessions.find(session => session.jid == from) ? true : false : false
            const palavrasid = []
            
            if(isBotGroupAdmins && (msg.key?.id == '' || msg.key?.participant == '' 
            || !msg.key?.id || !msg.key?.participant)) return client.groupParticipantsUpdate(from, [sender], 'remove')
            else if (!isGroup && (msg.key?.id == '' || !msg.key?.id)) return client.updateBlockStatus(from, 'block')
            
            if(isGroup && msg.messageStubType && msg.messageStubParameters) {
                if(msg.messageStubType == 30) {
                    teks = `*@${msg.key.participant.split('@')[0]} rebaixou os seguintes membros pra membros comuns:*\n\n`
                    for(i=0; i < msg.messageStubParameters.length; ++i) teks += `_*${i+1} - @${msg.messageStubParameters[i].split('@')[0]}*_\n`
                    msg.messageStubParameters.push(msg.key.participant)
                    console.log(`${chalk.white.bold('[ GRUPO: ')} ${chalk.green.bold(from.split('@')[0])}${chalk.white.bold(', AÇÃO:')} ${chalk.red.bold('REBAIXAMENTO')}${chalk.white.bold(' ]')}`)
                    await client.sendMessage(from, {text: teks, mentions: msg.messageStubParameters})
                } else if(msg.messageStubType == 29) {
                    teks = `*@${msg.key.participant.split('@')[0]} promoveu os seguintes membros pra administradores:*\n\n`
                    for(i=0; i < msg.messageStubParameters.length; ++i) teks += `_*${i+1} - @${msg.messageStubParameters[i].split('@')[0]}*_\n`
                    msg.messageStubParameters.push(msg.key.participant)
                    console.log(`${chalk.white.bold('[ GRUPO:')} ${chalk.green.bold(from.split('@')[0])}${chalk.white.bold(', AÇÃO:')} ${chalk.green.bold('PROMOÇÃO')}${chalk.white.bold(' ]')}`)
                    await client.sendMessage(from, {text: teks, mentions: msg.messageStubParameters})
                } 
            }
            if(!msg.message) return

            const dbids = []
            for(i=0; i < dontback.length; ++i) {
                dbids.push(dontback[i].groupId)
            }
            const isDontBack = (isGroup && dbids.indexOf(from) >= 0) ? true : false
            for(let obj of listantipalavra) {
                palavrasid.push(obj.jid)
            }

            if(isBotGroupAdmins && isAntiAudio && type === 'audioMessage') {
                if(isGroupAdmins) return client.sendMessage(from, {text: adminmsgtype},{quoted: msg})
                await client.sendMessage(from, {text: banmsgtype}, {quoted: msg})
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }
            if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
                if(isGroupAdmins) return client.sendMessage(from, {text: adminmsgtype},{quoted: msg})
                await client.sendMessage(from, {text: banmsgtype}, {quoted: msg})
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }
            if(isBotGroupAdmins && isAntiImg && type === 'imageMessage') {
                if(isGroupAdmins) return client.sendMessage(from, {text: adminmsgtype},{quoted: msg})
                await client.sendMessage(from, {text: banmsgtype}, {quoted: msg})
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }
            if(isBotGroupAdmins && isAntiDoc && type === 'documentMessage') {
                if(isGroupAdmins) return client.sendMessage(from, {text: adminmsgtype},{quoted: msg})
                await client.sendMessage(from, {text: banmsgtype}, {quoted: msg})
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }
            if(isBotGroupAdmins && isAntiLoc && type === 'locationMessage') {
                if(isGroupAdmins) return client.sendMessage(from, {text: adminmsgtype},{quoted: msg})
                await client.sendMessage(from, {text: banmsgtype}, {quoted: msg})
                client.groupParticipantsUpdate(from, [sender], 'remove')
            }

            if(msg.message.ephemeralMessage) msg.message = msg.message.ephemeralMessage.message
            const content = JSON.stringify(msg.message)
            const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
            body = (msg.message.conversation && prefixs.includes(msg.message.conversation.charAt(0))) ? msg.message.conversation : ( msg.message.imageMessage && prefixs.includes(msg.message.imageMessage.caption.charAt(0))) ? msg.message.imageMessage.caption : msg.message.videoMessage && prefixs.includes(msg.message.videoMessage.caption.charAt(0)) ? msg.message.videoMessage.caption : msg.message.extendedTextMessage && prefixs.includes(msg.message.extendedTextMessage.text.charAt(0)) ? msg.message.extendedTextMessage.text : (msg.message.listResponseMessage && prefixs.includes(msg.message.listResponseMessage.singleSelectReply.selectedRowId.charAt(0)) && msg.message.listResponseMessage.singleSelectReply.selectedRowId) ? msg.message.listResponseMessage.singleSelectReply.selectedRowId: ''
            budy = msg.message.conversation ? msg.message.conversation : msg.message.extendedTextMessage ? msg.message.extendedTextMessage.text : ''
            bady = msg.message.conversation ? msg.message.conversation : msg.message.imageMessage ? msg.message.imageMessage.caption : msg.message.videoMessage ? msg.message.videoMessage.caption : msg.message.extendedTextMessage ? msg.message.extendedTextMessage.text : (msg.message.listResponseMessage && msg.message.listResponseMessage.singleSelectReply.selectedRowId) ? msg.message.listResponseMessage.singleSelectReply.selectedRowId: ''
            bidy =  bady.toLowerCase()
            selectedButton = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
            const argsButton = selectedButton.trim().split(/ +/)
            const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
            const args = body.trim().split(/ +/).slice(1)
            const argis = bidy.trim().split(/ +/)
            const isCmd = prefixs.includes(body.charAt(0))
            const prefix = isCmd ? body.charAt(0) : ''

            const isCmdBlocked = (teks) => {
                return blockcmd.includes(teks)
            }
            const reply = async (teks) => {
                await client.sendMessage(from, {text: teks}, {quoted: msg})
            }
            const isUrl = (url) => {
                if(linkfy.find(url)[0]) return true
                return false
            }
            const mentions = (teks, member, id) => {
                (id == null || id == undefined || id == false) ? client.sendMessage(from, {text: teks.trim(), mentions: member}) : client.sendMessage(from, {text: teks.trim(), mentions: memberr})
            }
            const isListAntiPalavra = (teks) => {
                var ind = palavrasid.indexOf(from)
                var is_checked = false
                if(ind >= 0) {
                    for(let obj of listantipalavra[ind].palavras) {
                        if(teks.includes(obj)) is_checked = true
                    }
                    return is_checked
                } else return false
            }

            const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
                return`*🥳 Parabéns você subiu de nível 🥳*
*👤 Nome* : ${pushname}
*📞 Número* : ${sender.split("@")[0]}
*🤓 Xp* : ${getLevelingXp(sender)}
*🧠 Level* : ${getLevel} > ${getLevelingLevel(sender)}`
            }

            if ((isAntiPorn && isBotGroupAdmins)) {
                if (type === 'imageMessage') {
                    buff = await getFileBuffer(msg.message.imageMessage, 'image')
                    ran = getRandom('.'+await getExtension(msg.message.imageMessage.mimetype))
                    fs.writeFileSync(ran, buff)
                    const upload = await uploadimg('17desetembro', ran, ran)
                    setTimeout(async () => {
                        anu = await fetchJson(`https://api.brizaloka-api.tk/ia/porndetect?apikey=17desetembro&img=${upload.resultado.link}`)
                        console.log(anu);
                        if(parseInt(anu.probabilidades.porno) >= 70 && isGroupAdmins)  {
                            await client.sendMessage(from,{text: adminmsgporn}, {quoted: msg})
                            fs.unlinkSync(ran)
                            return
                        } else if(parseInt(anu.probabilidades.porno) >= 70 && !isGroupAdmins) {
                            await client.sendMessage(from,{text: banmsgporn}, {quoted: msg})
                            setTimeout(async function () {
                                client.groupParticipantsUpdate(from, [sender], 'remove')
                                fs.unlinkSync(ran)
                            }, 2000)
                            return
                        }
                        if(parseInt(anu.probabilidades.hentai) >= 70 && isGroupAdmins) {
                            await client.sendMessage(from,{text: adminmsgporn}, {quoted: msg})
                            fs.unlinkSync(ran)
                            return

                        }  else if(parseInt(anu.probabilidades.hentai) >= 70 && !isGroupAdmins) {
                            await client.sendMessage(from,{text: banmsgporn}, {quoted: msg})
                            setTimeout(async function () {
                                client.groupParticipantsUpdate(from, [sender], 'remove')
                                fs.unlinkSync(ran)
                            }, 2000)
                            return
                        }
                        if(parseInt(anu.probabilidades.sexy) >= 70) {
                            client.sendMessage(from,{text: 'Cuidado com oq manda em amigo, to com antiporn ativado'}, {quoted: msg})
                            fs.unlinkSync(ran)
                        }
                    }, 1600);
                }
            }

            if(isAutoStickerImg && type === 'imageMessage') {
                try {
                    imgbuff = await getFileBuffer(msg.message.imageMessage, 'image')
                    imgname = getRandom('.'+await getExtension(msg.message.imageMessage.mimetype))
                    fs.writeFileSync(imgname, imgbuff)
                    ran = getRandom('.webp')
                    execute(`ffmpeg -i ${imgname} -vf scale=512:512 ${ran}`, async function(err, result) {
                        if(err) console.log(err)
                        if(err) return reply(mess.error.stick)
                        sti = fs.readFileSync(ran)
                        await client.sendMessage(from, {sticker: sti}, {quoted: msg})
                        fs.unlinkSync(imgname)
                        await fs.unlinkSync(ran)
                    })
                } catch(e) {
                    console.log(e);
                }
            }       

            if (isCmd && isFiltered(from) && !isGroup) {
                console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSPAM\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Spam', 'de', color(sender.split('@')[0]), 'palavras :', color(args.length)+']')
                if(isAntiSpamcmd) return reply(`「 ❗ 」Spam detectado. Espere ${delayantispamcmd} segundos`)
            }
            if (isCmd && isFiltered(from) && isGroup) {
                console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSPAM\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Spam', 'de', color(sender.split('@')[0]), 'grupo: ', color(groupName), 'palavras :', color(args.length)+']')
                if(isAntiSpamcmd) return reply(`「 ❗ 」Spam detectado. Espere ${delayantispamcmd} segundos`)
            }

            const allContratosJid = []
            for(let obj of contratos) allContratosJid.push(obj.jid)
            colors = ['red','white','black','blue','yellow','green']
            const isContrated = allContratosJid.indexOf(sender) >= 0 ? true : false
            const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
            
            if (!isGroup && isCmd && sender) {
                console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮\n\x1b[1;37m┃ Número: ${color(sender.split('@')[0])}\n\x1b[1;37m┃ Data: ${color(time)}\n\x1b[1;37m┃ Comando: ${color(command)}\n\x1b[1;37m┃ Palavras: ${color(args.length)}\n\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`)
                if(panelOn) panelSocket.emit('sendMessage', {number: sender.split('@')[0], date: time, cmd: command, works: args.length, isGroup})
            } else if (!isGroup && !isCmd && sender) {
                console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮\n\x1b[1;37m┃ Número: ${color(sender.split('@')[0])}\n\x1b[1;37m┃ Data: ${color(time)}\n\x1b[1;37m┃ Comando: Não\n\x1b[1;37m┃ Palavras: ${color(argis.length)}\n\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`)
                if(panelOn) panelSocket.emit('sendMessage', {number: sender.split('@')[0], date: time, cmd: false, works: argis.length, isGroup})
            } else if (isCmd && isGroup && sender) {
                console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮\n\x1b[1;37m┃ Número: ${color(sender.split('@')[0])}\n\x1b[1;37m┃ Data: ${color(time)}\n\x1b[1;37m┃ Comando: ${color(command)}\n\x1b[1;37m┃ Palavras: ${color(args.length)}\n\x1b[1;37m┃ Grupo: ${color(groupName)}\n\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`)
                if(panelOn) panelSocket.emit('sendMessage', {number: sender.split('@')[0], date: time, cmd: command, works: args.length, isGroup, groupName})
            } else if (!isCmd && isGroup && sender) {
                console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮\n\x1b[1;37m┃ Número: ${color(sender.split('@')[0])}\n\x1b[1;37m┃ Data: ${color(time)}\n\x1b[1;37m┃ Comando: Não\n\x1b[1;37m┃ Palavras: ${color(argis.length)}\n\x1b[1;37m┃ Grupo: ${color(groupName)}\n\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`)
                if(panelOn) panelSocket.emit('sendMessage', {number: sender.split('@')[0], date: time, cmd: false, works: argis.length, isGroup, groupName})
            }
            if (isCmd && blockcmd.includes(command)) return reply(blockedcmdmsg)
            if (isCmd && blockeds.includes(sender.split('@')[0])) return reply(blockedmsg)

            if (isAntiPv && !isOwner && !isGroup) {
                reply(antipvmsg)
                client.updateBlockStatus(sender, 'block')
            }

            if (isCmd && !isOwner) addFilter(from)
            if (isCmd && allContratosJid.indexOf(sender) < 0 && command != 'assinar' && registeruser){ 
                buff = await getBuffer('https://drive.google.com/uc?export=download&id=1iQk7BZ64wR0Q_v-5QCSUhXdwJykfae0m')
                client.sendMessage(from, {video: buff, gifPlayback: true, caption: `Olá @${sender.split('@')[0]}, para poder usar meus comandos faça um contrato comigo com ${prefix}assinar nome|idade. Tenha um bom dia!` , mentions: [sender]}, {quoted: msg}) 
                return
            }

            const groupIdscount = []
            const numbersIds = []
            for(let obj of countMessage) {
                groupIdscount.push(obj.groupId)
            }
                
            if(isGroup && groupIdscount.indexOf(from) >= 0) {
                var ind = groupIdscount.indexOf(from)
                for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
                if(numbersIds.indexOf(sender) >=0) {
                    var indnum = numbersIds.indexOf(sender)
                    countMessage[ind].numbers[indnum].messages += 1
                    countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
                    fs.writeFileSync('./src/database/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
                } else {
                    const messages = 1
                    const cmd_messages = isCmd ? 1 : 0
                    countMessage[ind].numbers.push({
                        jid: sender,
                        messages: messages,
                        cmd_messages: cmd_messages
                    })
                    fs.writeFileSync('./src/database/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
                }
            } else if(isGroup) {
                countMessage.push({
                    groupId: from,
                    numbers: [{
                        jid: sender,
                        messages: 2,
                        cmd_messages: isCmd ? 1 : 0
                    }]
                })
                fs.writeFileSync('./src/database/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
            }

            if (!isGroup && !antinewchatlist.includes(sender)) {
                if(antinewchat.includes('Ativado') && !isOwner) {
                    reply(antinewchatmsg)
                    client.updateBlockStatus(sender, 'block')
                    return
                } else {
                    antinewchatlist.push(sender)
                    fs.writeFileSync('./src/database/antis/antinewchatlist.json', JSON.stringify(antinewchatlist, null, 2))
                }
            }

            if(isAntiPalavra) {
                isDetect = false
                ind = palavrasid.indexOf(from)
                for(let obj of listantipalavra[ind].palavras) {
                    if(bady.includes(obj)) isDetect = true;
                }
                if(isDetect && command != 'rmpalavra') {
                    if(isGroupAdmins) return reply('Palavra proibida detectad, sua sorte é que vc é adm')
                    await reply('Palavra proibida detectada, banindo usuário...')
                    client.groupParticipantsUpdate(from, [sender], "remove")
                }
            }

            votoactivegp = []
            for(let obj of gpvoto) votoactivegp.push(obj.group_id)
            const isVotoGroupActived = (isGroup && votoactivegp.indexOf(from) >= 0 ) ? true : false

            const groupIdWelcomed = []
            for(let obj of welcome_group) groupIdWelcomed.push(obj.jid)
            const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

            const GroupsMutedActived = []
            for(let obj of muted) {
                GroupsMutedActived.push(obj.jid)
            }
            const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
            const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
            if(isMuted && NumbersMuted.indexOf(sender) >= 0){
                client.groupParticipantsUpdate(from, [sender], 'remove')
                reply('*Eu avisei, vou descer o martelo do ban em tu 😡*')
            }

            const limitsids = []
            for(let nums of limitedlist) {
                limitsids.push(nums.jid)
            }

            if(!isOwner && isCmd && isLimitActive && limitsids.indexOf(sender) < 0) {
                var id = {
                    jid: sender,
                    limit: limitqnt
                }
                limitedlist.push(id)
                await fs.writeFileSync('./src/database/limitedlist.json', JSON.stringify(limitedlist, null, 2) + '\n')
            }
            
            if(!isOwner && isCmd && isLimitActive && limitsids.indexOf(sender) >= 0) {
                var ind = limitsids.indexOf(sender)
                if(limitedlist[ind].limit <= 0) return reply('*Voce chegou no limite máximo de comandos dados*')
                limitedlist[ind].limit -= 1
                await fs.writeFileSync('./src/database/limitedlist.json', JSON.stringify(limitedlist, null, 2) + '\n')
            }

            if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") tttset.autoEndTime = "off"
            else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
                if (isCmd) {
                const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
                addLevelingXp(tttset.player, randomEndTTTXP)
                const checkTTTIdEnd = getTTTId(tttset.player)
                if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
                addTTTpoints(tttset.player, randomEndTTTXP)
                client.sendMessage(tttset.local,{text: `❌ O TEMPO DE JOGO EXPIROU ❌\n\n Perdeu: ${randomEndTTTXP} XP 🔮`}, {quoted: tttset.mentionPlayer})
                } else {
                client.sendMessage(tttset.local,{text: `❌ O TEMPO DE JOGO EXPIROU ❌`}, {quoted: tttset.mentionPlayer})
                }
                esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
                esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
                esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
                tttset.tttstatus = "off"
                tttset.autoEndTime = "off"
            }

            if(!isCmd && isUrl(bady) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
                reply(banmsglink)
                kic = `${sender.split("@")[0]}@s.whatsapp.net`
                client.groupParticipantsUpdate(from, [kic], 'remove')
            }
            if( !isCmd && isUrl(bady) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
                reply(adminmsglink)
            }

            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            if(isBlockLevel) {
                try {
                    if (currentLevel != undefined && checkId != undefined) {
                        const amountXp = Math.floor(Math.random() * 10) + 500
                        requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                        getLevel = getLevelingLevel(sender)
                        addLevelingXp(sender, amountXp)
                        if (requiredXp <= getLevelingXp(sender)) {
                            addLevelingLevel(sender, 1)
                            await reply(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                        }
                    } else addLevelingId(sender)
                } catch (err) {
                    console.error(err)
                }
            }

            switch(argsButton[0]) {
                case 'animesep':
                    if(!argsButton[1]) return
                    argsJson = JSON.parse(selectedButton.slice(9))
                    if(argsJson.matched) {
                        htmlEpisodes = await fetch(argsJson.url).then(res => {return res.text()})
                        $ = await cheerio.load(htmlEpisodes)
                        episodes = []
                        for(i=0; i< $('.episodios > li').length;++i) {
                            tit = $('.episodios > li > .episodiotitle > a')[i].children[0].data
                            link = $('.episodios > li > .episodiotitle > a')[i].attribs.href
                            uploaded = $('.episodios > li > .episodiotitle > span')[i].children[0].data
                            jsonArgs = JSON.stringify({
                                url: link,
                                thumb: argsJson.thumb,
                                animeName: argsJson.anime,
                                episode: i+1
                            })
                            episodes.push({
                                title: tit, 
                                rowId: `!animesdown ${jsonArgs}`, 
                                description: uploaded
                            })
                        }
                        client.sendMessage(from, {
                            title: 'Baixar qual episódio?',
                            text: 'Escolha o episódio que deseja baixar',
                            footer: 'Clique no botão abaixo para escolher: ',
                            buttonText: 'Escolher episódio',
                            sections: [{
                                title: 'Episódios',
                                rows: episodes
                            }]
                        })

                    } else {
                        htmlSearch = await fetch(`https://animesonline.cc/search/${encodeURI(argsJson.query)}`).then(res => {return res.text()})
                        $ = await cheerio.load(htmlSearch)
                        console.log($('.animation-2.items2').length);
                        results = []
                        for(i = 0; i < $('.animation-2.items2').length; ++i) {
                            thumb = $('.animation-2.items2 > article > .poster > a > img')[i].attribs.src
                            tit = $('.animation-2.items2 > article > .poster > a > img')[i].attribs.alt
                            link = $('.animation-2.items2 > article > .poster > a')[i].attribs.href
                            rating = $('.animation-2.items2 > article > .poster > .rating')[i].children[1].data.trim()
                            resJson = JSON.stringify({
                                url: link,
                                title: tit,
                                thumb: thumb,
                                rating: rating,
                                query: body.slice(10)
                            })
                            results.push({
                                title: tit,
                                rowId: `!animenext ${resJson}`,
                                description: `Avaliação: ${rating}⭐`
                            })
                        }
                        client.sendMessage(from, {
                            title: 'Anime errado?',
                            text: 'Procure o anime que deseja na lista',
                            footer: 'Clique no botão abaixo para mostrar a lista:',
                            buttonText: 'Procurar anime',
                            sections: [{
                                title: 'Animes Relacionados',
                                rows: results
                            }]
                        })

                    }
                    break
                case 'initblackjack':
                    if(args.length > 1) return reply('*Passar bem então*')
                    if(!isGroup) return reply(mess.only.group)
                    if(isPlayBlackJack) return reply('*Há uma partida de blackjack ocorrendo...*')
                    blackJackGame = new blackJack(from, sender)
                    blackJackGame.addPlayer(sender)
                    blackJackSessions.push({
                        jid: from,
                        game: blackJackGame
                    })
                    fs.writeFileSync('./src/database/blackjack.json', JSON.stringify(blackJackSessions, null, 2))
                    client.sendMessage(from, {
                        title: '🃏*Blackjack*🃏',
                        text: `*Partida de blackjack iniciada com sucesso por @${sender.split('@')[0]}!*`,
                        mentions: [sender],
                        footer: 'Clique nas opções abaixo para se juntar a partida!',
                        buttonText: 'Ver opções',
                        sections: [{
                            title: 'Opções',
                            rows: [{
                                rowId: `${prefix}addblackjack`,
                                title: 'Juntar a partida',
                            }, {
                                rowId: `${prefix}startblackjack`,
                                title: 'Iniciar partida',
                            }]
                        }]
                    })
                    break
                case 'entrargp':
                    if(argsButton.length < 2) return
                    if(argsButton[1].split('|').length < 2) return 
                    if(parseInt(argsButton[1].split('|')[0]) == 0) {
                        try {
                            await reply('*⌛Entrando no grupo...⌛*')
                            await client.groupAcceptInvite(argsButton[1].split('|')[1].split('/')[3])
                        } catch {
                            await reply('❌ Falha ao entrar no grupo ❌')
                        }
                    } else return reply('*Envie o link do grupo correto para poder entrar*')
                    break
                case 'pmp4':
                    if (argsButton.length < 2) return
                    try {
                        reply('*🔎 Pesquisando próximo vídeo 🔎*')
                        teks = selectedButton.slice(4).trim()
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=17desetembro&query=${teks}`)
                        is_match = false
                        while(!is_match) {
                            ran = Math.floor(Math.random() * (anu.resultados.length - 0 + 1) + 0)
                            ran = (ran == anu.resultados.length) ? ran - 1 : ran 
                            date = anu.resultados[ran]
                            var dur = date.duration
                            if(dur < 600) {
                                dated = `*✅ Vídeo encontrado ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${(date.duration / 60).toFixed(2).toString().replace('.', ':')}*\n*Views: ${date.views}*\n*Canal:${date.channel.name}*`
                                buff = await getBuffer(date.thumbnail)
                                await client.sendMessage(from, {
                                    image: buff, 
                                    caption: dated, 
                                    footer: 'Escolha o formato que deseja ser enviado:', 
                                    headerType: 1, buttons: [
                                        {buttonId: `ytmp4 doc ${date.link} ${date.channel.name}`, buttonText: {displayText: '📄 Documento'}, type: 1},
                                        {buttonId: `ytmp4 aud ${date.link} ${date.channel.name}`, buttonText: {displayText: '🎬︎ Vídeo'}, type: 1},
                                        {buttonId: `p ${teks}`, buttonText: {displayText: '➡️ Próximo vídeo'}, type: 1}
                                    ]}
                                , {quoted: msg})
                                is_match = true
                            } else reply('*Vídeo com mais de 10 min detectada. Procurando outra...*')
                        }
                    } catch (e) {
                        console.log(e);
                        reply(msgerr)
                    }
                    break
                case 'p':
                    if (argsButton.length < 2) return
                    try {
                        reply('*🔎 Pesquisando próxima música 🔎*')
                        teks = selectedButton.slice(1).trim()
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=17desetembro&query=${teks}`)
                        is_match = false
                        while(!is_match) {
                            ran = Math.floor(Math.random() * (anu.resultados.length - 0 + 1) + 0)
                            ran = (ran == anu.resultados.length) ? ran - 1 : ran 
                            date = anu.resultados[ran]
                            var dur = date.duration
                            if(dur < 600) {
                                dated = `*✅ Música encontrada ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${(date.duration / 60).toFixed(2).toString().replace('.', ':')}*\n*Views: ${date.views}*\n*Canal:${date.channel.name}*`
                                buff = await getBuffer(date.thumbnail)
                                await client.sendMessage(from, {
                                    image: buff, 
                                    caption: dated, 
                                    footer: 'Escolha o formato que deseja ser enviado:', 
                                    headerType: 1, buttons: [
                                        {buttonId: `ytmp3 doc ${date.link} ${date.channel.name}`, buttonText: {displayText: '📄 Documento'}, type: 1},
                                        {buttonId: `ytmp3 aud ${date.link} ${date.channel.name}`, buttonText: {displayText: '🎵 Áudio'}, type: 1},
                                        {buttonId: `p ${teks}`, buttonText: {displayText: '➡️ Próxima música'}, type: 1}
                                    ]}
                                , {quoted: msg})
                                is_match = true
                            } else reply('*Música com mais de 10 min detectada. Procurando outra*')
                        }
                    } catch (e) {
                        console.log(e);
                        reply(msgerr)
                    }
                    break
                case 'ytmp3':
                    if(argsButton.length < 4) return
                    try {
                        anumusic = await ytdown(argsButton[2].match(p)[1])
                        reply('*⬇️ Baixando música, aguarde um instante...*')
                        buffdown = await fetch(anumusic.audioFormats[1]?.dl_link, {headers: {"range": "bytes=0-"}}).then(async res => await res.buffer())
                        ran = getRandom('.'+anumusic.audioFormats[1]?.mimeType.split('/')[1])
                        rano = getRandom('.mp3')
                        fs.writeFileSync(ran, buffdown)
                        exec(`ffmpeg -i ${ran} -vn ${rano}`, async (res, err) => {
                            if(err) return reply('Houve falha :/')
                            buffmusic = fs.readFileSync(rano)
                            const writer = new ID3Writer(buffmusic)
                            await writer.setFrame('TIT2', anumusic.title)
                            await writer.setFrame('TPE1', [anumusic.channelName, 'Downloaded by Alastor bot'])
                            await writer.setFrame('TALB', anumusic.channelName)
                            await writer.setFrame('APIC', {
                                type: 3,
                                data: await getBuffer(`https://i.ytimg.com/vi/${argsButton[2].match(p)[1]}/hqdefault.jpg`),
                                description: 'Downloaded by Alastor'
                            });
                            await writer.addTag();
                            const id3Buffer = Buffer.from(writer.arrayBuffer);
                            if(argsButton[1] == 'doc') {
                                await client.sendMessage(from, {document: id3Buffer, mimetype: 'audio/mp3', fileName: anumusic.title+'.mp3',
                                contextInfo: {
                                    stanzaId: await generateMessageID(),
                                    externalAdReply: {
                                        title: anumusic.title,
                                        showAdAttribution: true,
                                        mediaType: 2,
                                        body: `Artista: ${anumusic.channelName} • Downloaded by Alastor Bot`,
                                        thumbnailUrl: `https://i.ytimg.com/vi/${argsButton[2].match(p)[1]}/hqdefault.jpg`,
                                        mediaUrl: `https://youtu.be/${argsButton[2].match(p)[1]}`
                                    }
                                }})
                            } else if(argsButton[1] == 'aud') {
                                
                                await client.sendMessage(from, {
                                    audio: id3Buffer, 
                                    mimetype: 'audio/mpeg', 
                                    fileName: anumusic.title+'.mp3',
                                    contextInfo: {
                                        externalAdReply: {
                                            title: anumusic.title,
                                            showAdAttribution: true,
                                            mediaType: 2,
                                            body: `Artista: ${anumusic.channelName} • Downloaded by Alastor Bot`,
                                            thumbnailUrl: `https://i.ytimg.com/vi/${argsButton[2].match(p)[1]}/hqdefault.jpg`,
                                            mediaUrl: `https://youtu.be/${argsButton[2].match(p)[1]}`,
                                            sourceUrl: `https://youtu.be/${argsButton[2].match(p)[1]}`,
                                        }
                                    }
                                })
                            }
                            fs.unlinkSync(ran)
                            fs.unlinkSync(rano)
                        })
                    } catch (e) {
                        console.log(e);
                        reply('Houve falha :/')
                    }
                    break
                case 'ytmp4':
                    if(argsButton.length < 4) return
                    try {
                        if(argsButton[1] == 'doc') {
                            reply('*⬇️ Baixando vídeo, aguarde um instante...*')
                            anumusic = await ytdown(argsButton[2].match(p)[1])
                            if(anumusic.videosFormats.find(element => element.quality == '720p')) {
                                ind = anumusic.videosFormats.findIndex(element => element.quality == '720p')
                            } else if(anumusic.videosFormats.find(element => element.quality == '360p')) {
                                ind = anumusic.videosFormats.findIndex(element => element.quality == '360p')
                            } else if(anumusic.videosFormats.find(element => element.quality == '144p')) {
                                ind = anumusic.videosFormats.findIndex(element => element.quality == '144p')
                            }
                            buffmusic = await fetch(anumusic.videosFormats[ind].dl_link, {headers: {"range": "bytes=0-"}}).then(async res => await res.buffer())
                            client.sendMessage(from, {document: buffmusic, mimetype: 'video/mp4', fileName: anumusic.title+'.mp4'})
                        }else if(argsButton[1] == 'vid') {
                            reply('*⬇️ Baixando vídeo, aguarde um instante...*')
                            anumusic = await ytdown(argsButton[2].match(p)[1])
                            if(anumusic.videosFormats.find(element => element.quality == '720p')) {
                                ind = anumusic.videosFormats.findIndex(element => element.quality == '720p')
                            } else if(anumusic.videosFormats.find(element => element.quality == '360p')) {
                                ind = anumusic.videosFormats.findIndex(element => element.quality == '360p')
                            } else if(anumusic.videosFormats.find(element => element.quality == '144p')) {
                                ind = anumusic.videosFormats.findIndex(element => element.quality == '144p')
                            }
                            buffmusic = await fetch(anumusic.videosFormats[ind].dl_link, {headers: {"range": "bytes=0-"}}).then(async res => await res.buffer())
                            client.sendMessage(from, {video: buffmusic, mimetype: 'video/mp4', fileName: anumusic.title})
                        }
                    } catch(e) {
                        console.log(e);
                        reply('Houve falha :/')
                    }
                    break
                case 'finaki':
                    if(argsButton[1] == 'nao') return reply('*Puxa não foi desta vez 😔*') 
                    reply('*SABIA! EU VENCI OTÁRIO 🥳*')
                    akinator[0][from] = undefined
                    fs.writeFileSync('./src/database/akinator.json', JSON.stringify(akinator, null, 2))
                    break
                case 'akinator':
                    if(argsButton[1] == 'nao') return reply('*Até a próxima amigo*') 
                    if(akinator[0][from]) return reply('*Desculpe-me amigo alguem ja está jogando, aguarde pra chegar sua vez*')
                    var game = new Aki({region: 'pt'})
                    akinator[0][from] = {
                        id: from,
                        player: sender,
                        game
                    }
                    await akinator[0][from].game.start()
                    listMessage = {
                        text: akinator[0][from].game.question,
                        buttonText: 'Mostrar opções',
                        title: "Pergunta",
                        sections: [{
                            title: 'Opções',
                            rows: [{
                                rowId: `${prefix}respaki 0`,
                                title: 'Sim',
                                description: ''
                            },
                            {
                                rowId: `${prefix}respaki 1`,
                                title: 'Não',
                                description: ''
                            },{
                                rowId: `${prefix}respaki 2`,
                                title: 'Não sei',
                                description: ''
                            },{
                                rowId: `${prefix}respaki 3`,
                                title: 'Provavelmente sim',
                                description: ''
                            },
                            {
                                rowId: `${prefix}respaki 4`,
                                title: 'Provavelmente não',
                                description: ''
                            }]
                        }]
                    }
                    client.sendMessage(from, listMessage)
                    fs.writeFileSync('./src/database/akinator.json', JSON.stringify(akinator, null, 2))
                break
            }

            const allAnagramId = []
            for(let obj of anagram) allAnagramId.push(obj.id)
            const isPlayAnagram = (await anagram.find(obj => obj.id == sender)) ? true : false

            const allForcaId = []
            for(let obj of forca) allForcaId.push(obj.id)
            const isPlayForca = (await forca.find(obj => obj.id == sender)) ? true : false

            const allCrashId = []
            for(let obj of crash) allCrashId.push(obj.id)
            const isPlayCrash = (await crash.find(obj => obj.id == sender)) ? true : false

            const allDoubleId = []
            for(let obj of double) allDoubleId.push(obj.id)
            const isPlayDouble =  (await double.find(obj => obj.id == sender)) ? true : false

            var doubleRankIds = []
            for(let obj of doubleRank) doubleRankIds.push(obj.id)
            const isDoubleRank = (await doubleRank.find(obj => obj.id == sender)) ? true : false

            var crashRankIds = []
            for(let obj of crashRank) crashRankIds.push(obj.id)
            const isCrashRank = (await crashRank.find(obj => obj.id == sender)) ? true : false

            var minesId = []
            for(let obj of mines) minesId.push(obj.id)
            const isPlayMines = (await mines.find(obj => obj.id == sender)) ? true : false

            async function doubleStart() {
                doubleSocket = new WebSocket('wss://api-v2.blaze.com/replication/?EIO=3&transport=websocket')
                doubleSocket.on('open', async function() {
                    doubleSocket.send('421["cmd",{"id":"subscribe","payload":{"room":"double_v2"}}]')
                    for(var i = 0; i < double.length; ++i) {
                        if(!double[i].isWebSocketInit) {
                            client.sendMessage(double[i].id, {text: '*Websocket conectado com sucesso!*'})
                            double[i].isWebSocketInit = true
                        }
                    }
                })
                doubleSocket.on('message', function(data) {
                    var str = data.toString()
                    if(str.startsWith('42["data",')) {
                        var json = JSON.parse(str.slice(2))[1]
                        if(json.id == 'double.tick') {
                            for(let i = 0; i < double.length; ++i) {
                                if(json.payload.status == 'waiting' && !double[i].isInit) {
                                    client.sendMessage(double[i].id, {text: '*Entrando na partida... ⏱️*'})
                                    double[i].isInit = true
                                }
                                if(json.payload.status == 'rolling' && !double[i].isWaiting) {
                                    client.sendMessage(double[i].id, {text: '*A Partida está em andamento! Aguarde...⏱️*\n\n*Acesse o site https://blaze.com/pt/games/double para ver a roleta em tempo real*'})
                                    double[i].isWaiting = true
                                }
                                if(json.payload.status == 'complete' && !double[i].isDone) {
                                    var color = parseInt(json.payload.color)
                                    var color_str = (color == 0) ? 'branco' : (color == 2) ? 'preto' : (color == 1) ? 'vermelho' : ''
                                    if(color == double[i].color) {
                                        if(doubleRankIds.indexOf(double[i].player) >=0) {
                                            var pos = doubleRankIds.indexOf(double[i].player)
                                            doubleRank[pos].wins += 1
                                            doubleRank[pos].media = (doubleRank[pos].wins - doubleRank[pos].loses)
                                        }
                                        client.sendMessage(double[i].id, {text: `*✅ Partida finalizada, parabéns você ganhou!🥳 ✅*\n\n_*A roleta parou na cor ${color_str}*_\n*Hoje é seu dia de sorte ein 😉*`})
                                    } else {
                                        if(doubleRankIds.indexOf(double[i].player) >=0) {
                                            var pos = doubleRankIds.indexOf(double[i].player)
                                            doubleRank[pos].loses += 1
                                            doubleRank[pos].media = (doubleRank[pos].wins - doubleRank[pos].loses)
                                        }
                                        client.sendMessage(double[i].id, {text: `*❌ Partida finalizada você perdeu!😔 ❌*\n\n_*A roleta parou na cor ${color_str}*_\n*Tente novamente, talvez você ganhe na próxima*`})
                                    }
                                    double[i].isDone = true
                                    if(i == double.length - 1){
                                        doubleSocket.close()
                                    }
                                }
                            }
                        }
                    }
                })
                doubleSocket.on('close', async function() {
                    var allIsDone = []
                    for(let i = 0; i < double.length; ++i) {
                        if(double[i].isDone) allIsDone.push(double[i].id)
                    }
                    if(allIsDone.length != double.length) {  
                        doubleStart()
                    } else {
                        fs.writeFileSync('./src/database/double.json', JSON.stringify(doubleRank, null, 2))
                        double = []
                        doubleSocket = null
                    }
                })
            }
            async function crashstart() {
                crashSocket = new WebSocket('wss://api-v2.blaze.com/replication/?EIO=3&transport=websocket')
                crashSocket.on('open', async function () {
                    await crashSocket.send('420["cmd",{"id":"subscribe","payload":{"room":"crash_v2"}}]')
                    for(var i = 0; i < crash.length; ++i) {
                        if(!crash[i].isWebSocketInit) {
                            client.sendMessage(crash[i].id, {text: '*Websocket conectado com sucesso!*'})
                            crash[i].isWebSocketInit = true
                        }
                    }
                })
                crashSocket.on('message', async function(data) {
                    var str = data.toString()
                    if(str.startsWith('42["data",')) {
                        var json = JSON.parse(str.slice(2))[1]
                        if(json.id == 'crash.tick') {
                            for(let i = 0; i < crash.length; ++i) {
                                if(json.payload.status == 'waiting' && !crash[i].isInit) {
                                    client.sendMessage(crash[i].id, {text: '*Partida iniciado com sucesso!*'})
                                    crash[i].isInit = true
                                }
                                if(json.payload.status == 'graphing' && !crash[i].isWaiting) {
                                    client.sendMessage(crash[i].id, {text: '*A Partida está em andamento!*\n\n*Acesse o site https://blaze.com/pt/games/crash para ver o gráfico em tempo real*'})
                                    crash[i].isWaiting = true
                                }
                                if(json.payload.status == 'complete' && !crash[i].isDone) {
                                    var points = parseFloat(json.payload.crash_point)
                                    if(points >= crash[i].porcent) {
                                        if(crashRankIds.indexOf(crash[i].player) >=0) {
                                            var pos = crashRankIds.indexOf(crash[i].player)
                                            crashRank[pos].wins += 1
                                            crashRank[pos].media = (crashRank[pos].wins - crashRank[pos].loses)
                                        }
                                        client.sendMessage(crash[i].id, {text: `*✅ Partida finalizada, parabéns você ganhou!🥳 ✅*\n\n*O crash parou em ${points}, hoje é seu dia de sorte ein 😉*`})
                                    } else {
                                        client.sendMessage(crash[i].id, {text: `*❌ Partida finalizada você perdeu que pena!😔 ❌*\n\n*O crash parou em ${points}, tente novamente, talvez você consiga!*`})
                                    }
                                    crash[i].isDone = true
                                    if(i == crash.length - 1){
                                        crashSocket.close()
                                    }
                                }
                            }
                        }
                    }
                })
                crashSocket.on('close', async function () {
                    var allIsDone = []
                    for(let i = 0; i < crash.length; ++i) {
                        if(crash[i].isDone) allIsDone.push(crash[i].id)
                    }
                    if(allIsDone.length != crash.length) {  
                        crashstart()
                    } else {
                        fs.writeFileSync('./src/database/crash.json', JSON.stringify(crashRank, null, 2))
                        crash = []
                        crashSocket = null
                    }
                })
            }
            switch(command) {
                case 'pollinit':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!polls.find(predicate => predicate.id == from)) return reply('Não há nenhuma votação ocorrendo neste momento')
                    indPoll = polls.findIndex(element => element.id == from) 
                    hi = await client.relayMessage(polls[indPoll].id, {
                        messageContextInfo: {
                            messageSecret: 'gYi6tUoJuPr48FGDebJbl+0+nmYrRu3xThp16nE9ciU='
                        },
                        pollCreationMessage: {
                            name: polls[indPoll].title,
                            options: polls[indPoll].options,
                            selectableOptionsCount: 0
                        }
                    }, {})
                    console.log(hi);
                    polls.splice(indPoll, 1)
                    break
                case 'enq':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(args.length < 1) return reply('*Digite o título da opção*')
                    if(!polls.find(predicate => predicate.id == from)) return reply('Não há nenhuma votação ocorrendo neste momento')
                    teks = body.slice(command.length + 2)
                    indPoll = polls.findIndex(element => element.id == from)
                    polls[indPoll].options.push({optionName: teks})
                    reply('*Opção adicionada na enquente*')
                    break
                case 'poll':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(args.length < 1) return reply('*Digite o título da enquete*')
                    if(polls.find(predicate => predicate.id == from)) return reply('Há uma votação ocorrendo neste momento')
                    teks = body.slice(command.length + 2)
                    polls.push({
                        id: from,
                        title: teks,
                        options: []
                    }) 
                    reply(`*📊 Enquete pronta 📊*\n\n*Configure-a digitando o comando ${prefix}enq (texto) para adicionar opções na enquete e o comando ${prefix}pollinit para inicar a votação*`)
                    break
                case 'nhentai':
                    if(args.length < 1) return reply('Digite o código do mangá')
                    code = args[0]
                    fetch(`https://nhentai.to/g/${args[0]}`).then(async res => {
                        if(res.status != 200) return reply('Mangá não encontrado')
                        html = await res.text();
                        jsonRes = JSON.parse(html.split('N.gallery(')[1].split(`);`)[0].slice(0, -1).trim().slice(0, -1) +'}')
                        teks = `*🇺🇸Titulo: _${jsonRes.title.pretty}_*\n*🇯🇵Título japonês: ${jsonRes.title.japanese}*\n`
                        tags = `*🏷️Tags(s):*`
                        groupHentai = `*👥Grupo(s):*`
                        artists = `*👤Artista(s):*`
                        language = `*🗣️Idioma(s):*`
                        categories = `*🏷️Categoria(s):*`
                        for(let obj of jsonRes.tags) {
                            if(obj.type == 'tag') tags += ` *${obj.name},*`
                            if(obj.type == 'group') groupHentai += ` *${obj.name},*`
                            if(obj.type == 'language') language += ` *${obj.name},*`
                            if(obj.type == 'artist') artists += ` *${obj.name},*`
                            if(obj.type == 'category') categories += ` *${obj.name},*`
                        }
                        teks += `\n${artists}\n${language}\n${categories}\n${groupHentai}\n${tags}`
                        bufferZip = await (await fetch(`https://cdn.dogehls.xyz/download.php?id=${html.split('"media_id": "')[1].split('",')[0]}`)).buffer()
                        await client.sendMessage(from, {document: bufferZip, caption: teks, mimetype: 'application/zip', fileName: jsonRes.title.pretty})
                    })
                    break
                case 'animesdown':
                    if(type != 'listResponseMessage') return
                    if(args.length < 1) return
                    argsRes = JSON.parse(body.slice(12))
                    console.log(argsRes);
                    htmlAnimeVideo = await fetch(argsRes.url).then(res => {return res.text()})
                    $ = cheerio.load(htmlAnimeVideo);
                    urlIframeVideo = $('#option-1 > iframe')[0].attribs.src
                    client.sendMessage(from, {
                        image: {url: argsRes.thumb},
                        caption: `*Anime: ${argsRes.animeName}*\n*Episódio: ${argsRes.episode}*`,
                        footer: 'Clique no botão abaixo para ver o anime on-line',
                        templateButtons: [{
                            index: 1, 
                            urlButton: {
                                displayText: 'Assistir anime online 🎥',
                                url: urlIframeVideo
                            }
                        }]
                    })
                    break
                case 'animenext':
                    if(type != 'listResponseMessage') return
                    if(args.length < 1) return
                    let argsJson = JSON.parse(body.slice(11))
                    acceptArgRes = JSON.stringify({
                        matched: true,
                        url: link,
                        query: argsJson.query,
                        thumb: argsJson.thumb
                    })
                    rejectArgRes = JSON.stringify({
                        matched: false,
                        url: argsJson.link,
                        query: argsJson.query,
                        thumb: argsJson.thumb
                    })
                    client.sendMessage(from, {
                        image: {url: argsJson.thumb},
                        caption: `*✅ Anime encontrado com sucesso!✅*\n*Nome:_${argsJson.title}_*\n*Avaliação: _${argsJson.rating}_⭐*\n*Url: ${argsJson.url}*`,
                        footer: 'Este é o anime correto?',
                        headerType: 1,
                        buttons: [{
                            buttonId: `animesep ${acceptArgRes}`,
                            buttonText: {displayText: 'Sim ✅'}, 
                            type: 1
                        }, {
                            buttonId: `animesep ${rejectArgRes}`,
                            buttonText: {displayText: 'Não ❌'},
                            type: 1
                        }]
                    })
                    break
                case 'animesrc':
                    if(args.length < 0) return reply('Digite o nome do anime')
                    htmlSearch = await fetch(`https://animesonline.cc/search/${encodeURI(body.slice(10))}`).then(res => {return res.text()})
                    $ = cheerio.load(htmlSearch)
                    if($('.animation-2.items2').length < 1) return reply('Não foi encontrado nenhum anime relacionado')
                    thumb = $('.animation-2.items2 > article > .poster > a > img')[0].attribs.src
                    tit = $('.animation-2.items2 > article > .poster > a > img')[0].attribs.alt
                    link = $('.animation-2.items2 > article > .poster > a')[0].attribs.href
                    rating = $('.animation-2.items2 > article > .poster > .rating')[0].children[1].data.trim()
                    acceptArgRes = JSON.stringify({
                        matched: true,
                        url: link,
                        query: body.slice(10),
                        anime: tit,
                        thumb: thumb
                    })
                    rejectArgRes = JSON.stringify({
                        matched: false,
                        url: link,
                        query: body.slice(10)
                    })
                    client.sendMessage(from, {
                        image: {url: thumb},
                        caption: `*✅ Anime encontrado com sucesso!✅*\n*Nome:_${tit}_*\n*Avaliação: ${rating}⭐*\n*Url: ${link}*`,
                        footer: 'Este é o anime correto?',
                        headerType: 1,
                        buttons: [{
                            buttonId: `animesep ${acceptArgRes}`,
                            buttonText: {displayText: 'Sim ✅'}, 
                            type: 1
                        }, {
                            buttonId: `animesep ${rejectArgRes}`,
                            buttonText: {displayText: 'Não ❌'},
                            type: 1
                        }]
                    })
                    break
                case 'painel':
                    if(!isOwner) return reply(mess.only.ownerB)
                    client.sendMessage(from, {
                        text: '*Agora também é possível configurar o alastor bot pelo painel do proprietário!*',
                        footer: 'Clique no botão abaixo para acessar o painel',
                        templateButtons: [
                            {
                                index: 1, 
                                urlButton: {
                                    displayText: 'Acessar painel',
                                    url: process.env.BASE_URL
                                }
                            }
                        ]
                    })
                    break
                case 'blackjack':
                    if(isPlayBlackJack) return client.sendMessage(from, {text: '*Já existe uma partida em andamento!*'})
                    if(!isGroup) return reply(mess.only.group)
                    client.sendMessage(from, {
                        image: {url: 'https://blog.bodog.com/wp-content/uploads/2021/12/jugar-blackjack.jpg'},
                        caption: `*🃏 Bem-vindo ao Blackjack 🃏*\n\n_*Deseja iniciar uma partida no grupo?*_\n_Obs: Para resetar a partida, dê o comando ${prefix}resetblackjack_`,
                        footer: 'Clique nos botões abaixo: ',
                        buttons: [{
                            buttonId: 'initblackjack',
                            buttonText: { displayText: 'Sim' }, type: 1,
                        }, {
                            buttonId: '',
                            buttonText: { displayText: 'Não' }, type: 1,
                        }]
                    })
                    break
                case 'mblackjack':
                    if(type != 'listResponseMessage') return
                    if(!isGroup) return reply(mess.only.group)
                    if(!isPlayBlackJack) return reply('*Nenhuma partida está acontecendo neste momento*')
                    i = blackJackSessions.findIndex(x => x.jid == from)
                    if(i == -1) return reply('*Nenhuma partida está acontecendo neste momento*')
                    teks = `*🃏 Blackjack 🃏*\n\n*Pontos do dealer: ${blackJackSessions[i].game.dealerTotalCards}*\n*Baralho do dealer:* `
                    for(let j = 0; j < blackJackSessions[i].game.dealerCards.length; j++) {
                        teks += `_*${blackJackSessions[i].game.dealerCards[j]},*_ `
                    }
                    teks += `\n*Pontos e baralhos dos jogadores:*\n\n`
                    for(let j = 0; j < blackJackSessions[i].game.players.length; j++) {
                        teks += `\n_*@${blackJackSessions[i].game.players[j].id.split('@')[0]}*_\n*Pontos: _${blackJackSessions[i].game.players[j].totalCards}_*
*Estourou: ${(blackJackSessions[i].game.players[j].totalCards > 21) ? 'Sim': 'Não'}*\n*Baralho:* `
                        for(let k = 0; k < blackJackSessions[i].game.players[j].cards.length; k++) {
                            if(k == blackJackSessions[i].game.players[j].cards.length-1) teks += `_*${blackJackSessions[i].game.players[j].cards[k]}*_`
                            else teks += `_*${blackJackSessions[i].game.players[j].cards[k]},*_ `
                        }
                    }
                    reply(teks)
                    break
                case 'rblackjack':
                    if(type != 'listResponseMessage') return
                    if(!isGroup) return reply(mess.only.group)
                    if(!isPlayBlackJack) return reply('*Nenhuma partida está acontecendo neste momento*')
                    if(args.length < 2) return
                    if(isNaN(args[0])) return
                    i = blackJackSessions.findIndex(x => x.jid == from)
                    if(i == -1) return reply('*Nenhuma partida está acontecendo neste momento*')
                    if(args[0] > blackJackSessions[i].game.players.length && args[0] < 0) return
                    if(blackJackSessions[i].game.players[args[0]].id != sender) return reply(`*Não está na sua vez ainda*`)
                    if(blackJackSessions[i].game.playersLosers[args[0]].includes(sender)) return reply(`*Jogador estourado*`)
                    if(blackJackSessions[i].game.playersWinners[args[0]].includes(sender)) return reply(`*Jogador já venceu o jogo*`)
                    teks = ''
                    isRemoved = false
                    if(args[1]== 'yes') {
                        cardPlayer = parseInt(Math.random() * (11 - 1) + 1)
                        blackJackSessions[i].game.players[args[0]].totalCards += cardPlayer
                        blackJackSessions[i].game.players[args[0]].cards.push(cardPlayer)
                        if(blackJackSessions[i].game.players[args[0]].totalCards > 21) {
                            teks += `_*Jogador @${sender.split('@')[0]} estourou com ${blackJackSessions[i].game.players[args[0]].totalCards}!*_\n\n`
                            blackJackSessions[i].game.playersLosers.push(blackJackSessions[i].game.playersInGame[args[0]])
                            blackJackSessions[i].game.playersInGame.splice(args[0], 1)
                            isRemoved = true
                        } else if(blackJackSessions[i].game.players[args[0]].totalCards == 21) {
                            teks += `_*Jogador @${sender.split('@')[0]} ganhou com ${blackJackSessions[i].game.players[args[0]].totalCards}!*_\n\n`
                            blackJackSessions[i].game.playersWinners.push(blackJackSessions[i].game.playersInGame[args[0]])
                            blackJackSessions[i].game.playersInGame.splice(args[0], 1)
                            isRemoved = true
                        } else {
                            teks += `_*@${sender.split('@')[0]} recebeu a carta ${cardPlayer}*_\n_*Valor total: ${blackJackSessions[i].game.players[args[0]].totalCards}*_\n\n`
                        }
                    } else teks += `_*@${sender.split('@')[0]} não recebeu a carta*_\n\n`
                    fs.writeFileSync('./src/database/blackjack.json', JSON.stringify(blackJackSessions, null, 2))
                    if(args[0] < blackJackSessions[i].game.playersInGame.length - 1) {
                        nextPlayer = (isRemoved) ? parseInt(args[0]) : parseInt(args[0]) + 1
                        console.log(blackJackSessions[i].game.playersInGame[nextPlayer]);
                        teks += `_*Deseja comprar @${blackJackSessions[i].game.playersInGame[nextPlayer].split('@')[0]}?*_`
                        client.sendMessage(from, {
                            title: '🃏*Blackjack*🃏',
                            text: teks,
                            footer: 'Clique em um dos botões abaixo para responder',
                            buttonText: 'Ver Opções',
                            sections: [{
                                title: 'Opções',
                                rows: [{
                                    rowId: `${prefix}rblackjack ${nextPlayer} yes`,
                                    title: 'Sim',
                                }, {
                                    rowId: `${prefix}rblackjack ${nextPlayer} no`,
                                    title: 'Não',
                                }, {
                                    rowId: `${prefix}mblackjack`,
                                    title: 'Mostrar Baralho'
                                }]
                            }]
                        })
                    } else {
                        nextPlayer = 0
                        cardDealer = parseInt(Math.random() * (11 - 1) + 1)
                        blackJackSessions[i].game.dealerTotalCards += cardDealer
                        blackJackSessions[i].game.dealerCards.push(cardDealer)
                        if(blackJackSessions[i].game.dealerTotalCards > 21) {
                            reply('_*🃏 Fim de jogo! 🃏*_\n*O Dealer estourou! Os jogadores venceram*')
                            blackJackSessions.splice(i, 1)
                            fs.writeFileSync('./src/database/blackjack.json', JSON.stringify(blackJackSessions, null, 2))
                        } else {
                            teks += `*Dealer recebeu a carta ${cardDealer}*\n_*Valor total: ${blackJackSessions[i].game.dealerTotalCards}*_\n\n`
                            teks += `_*Deseja comprar @${blackJackSessions[i].game.playersInGame[nextPlayer].split('@')[0]}?*_`
                            client.sendMessage(from, {
                                title: '🃏*Blackjack*🃏',
                                text: teks,
                                footer: 'Clique em um dos botões abaixo para responder',
                                buttonText: 'Ver Opções',
                                sections: [{
                                    title: 'Opções',
                                    rows: [{
                                        rowId: `${prefix}rblackjack ${nextPlayer} yes`,
                                        title: 'Sim',
                                    }, {
                                        rowId: `${prefix}rblackjack ${nextPlayer} no`,
                                        title: 'Não',
                                    }, {
                                        rowId: `${prefix}mblackjack`,
                                        title: 'Mostrar Baralho'
                                    }]
                                }]
                            })
                            fs.writeFileSync('./src/database/blackjack.json', JSON.stringify(blackJackSessions, null, 2))
                        }
                    }
                    break
                case 'addblackjack':
                    if(type != 'listResponseMessage') return
                    if(!isGroup) return reply(mess.only.group)
                    if(!isPlayBlackJack) return reply('*Nenhuma partida está acontecendo neste momento*')
                    for(let i = 0; i < blackJackSessions.length; i++) {
                        if(blackJackSessions[i].jid == from) {
                            if(!blackJackSessions[i].game.getPlayers().includes(sender) && !blackJackSessions[i].game.isStarted  
                            && blackJackSessions[i].game.players.length < 4) {
                                blackJackSessions[i].game.addPlayer(sender)
                                fs.writeFileSync('./src/database/blackjack.json', JSON.stringify(blackJackSessions, null, 2))
                                reply('*Jogador adicionado com sucesso!*')
                            } else if(blackJackSessions[i].game.getPlayers().includes(sender)) return reply('*Jogador já está na partida*')
                            else if(blackJackSessions[i].game.isStarted) return reply('*Partida já iniciada*')
                            else if(blackJackSessions[i].game.players.length >= 4) return reply('*Limite de jogadores atingido*')
                        }
                    }
                    break
                case 'startblackjack':
                    if(type != 'listResponseMessage') return
                    if(!isGroup) return reply(mess.only.group)
                    if(!isPlayBlackJack) return reply('*Nenhuma partida está acontecendo neste momento*')
                    i = blackJackSessions.findIndex(x => x.jid == from)
                    if(i == -1) return reply('*Nenhuma partida está acontecendo neste momento*')
                    if(blackJackSessions[i].jid == from) {
                        if(blackJackSessions[i].game.playerStart == sender && blackJackSessions[i].game.players.length > 1) {
                            blackJackSessions[i].game.isStarted = true
                            dealerCard = parseInt(Math.random() * (11 - 1) + 1)
                            teks = `*✅ Partida inciada com sucesso! ✅*\n\n*🖥️ Cartas da mesa: ${dealerCard}*\n\n*🃏 Cartas dos jogadores:*\n`
                            blackJackSessions[i].game.dealerTotalCards += dealerCard
                            blackJackSessions[i].game.dealerCards.push(dealerCard)
                            for(let j = 0; j < blackJackSessions[i].game.players.length; j++) {
                                playerCard = parseInt(Math.random() * (11 - 1) + 1)
                                blackJackSessions[i].game.players[j].totalCards += playerCard
                                blackJackSessions[i].game.players[j].cards.push(playerCard)
                                teks += `*${j + 1} @${blackJackSessions[i].game.players[j].id.split('@')[0]}* - ${playerCard}\n`
                            }
                            teks += `Deseja comprar @${blackJackSessions[i].game.players[0].id.split('@')[0]}?`
                            fs.writeFileSync('./src/database/blackjack.json', JSON.stringify(blackJackSessions, null, 2))
                            client.sendMessage(from, {
                                title: '🃏*Blackjack*🃏',
                                text: teks,
                                footer: 'Clique em um dos botões abaixo para responder',
                                sections: [{
                                    title: 'Opções',
                                    rows: [{
                                        rowId: `${prefix}rblackjack 0 yes`,
                                        title: 'Sim',
                                    }, {
                                        rowId: `${prefix}rblackjack 0 no`,
                                        title: 'Não',
                                    }]
                                }]
                            })
                        } else if(blackJackSessions[i].game.playerStart != sender) return reply('*Somente o jogador que iniciou a partida pode começar*')
                        else if(blackJackSessions[i].game.players.length <= 1) return reply('*Precisa-se no mínimo de 2 jogadores*')
                    }
                    
                    break
                case 'resetblackjack':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isPlayBlackJack) return reply('*Há nenhuma partida de blackjack...*')
                    var pos_game = blackJackSessions.findIndex(x => x.jid == from)
                    if(pos_game == -1) return reply('*Você não está em uma partida de blackjack...*')
                    blackJackSessions.splice(pos_game, 1)
                    fs.writeFileSync('./src/database/blackjack.json', JSON.stringify(blackJackSessions, null, 2))
                    reply('*Partida de blackjack resetada com sucesso!*')
                    break
                case 'crashar':
                    return
                    if(!isOwner) return reply('*Você não é meu criador*')
                    if(args.length < 1) return reply('*Digite o número que deseja crashar*')
                    teks = body.slice(9)
                    const number = teks.split('|')[0].trim().replace(/[+-\s]/g, '')
                    const qntTrava = teks.split('|')[1].trim()
                    if(isNaN(num)) return reply('*Digite um número válido*') 
                    if(isNaN(qntTrava)) return reply('*Digite a quantidade de travas*')
                    for(let i = 0; i < qntTrava; i++) {
                        await client.sendMessage(number, {
                                text: 'hi'
                            }, {
                                quoted: {
                                    key: {
                                        id: msg.key.id,
                                        remoteJid: 'sexoooo',
                                        participant: sender
                                    }, 
                                    message: {
                                        conversation: 'hi'
                                    }
                                }
                        })
                    }
                    reply('*Crashado com sucesso!*')
                    break
                case 'del':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(!isGroupAdmins) return reply(mess.only.Badmin)
                    if(!msg.message.extendedTextMessage?.contextInfo?.stanzaId) return reply('*Marque uma msg*')
                    await client.sendMessage(from, {delete: {
                        id: msg.message.extendedTextMessage.contextInfo.stanzaId,
                        fromMe: false,
                        remoteJid: from,
                        participant: msg.message.extendedTextMessage.contextInfo.participant
                    }})
                    await reply('*Msg deletada com sucesso!*')
                    break
                case 'snapdown':
                    if(!msg.message.listResponseMessage) return
                    if(args.length < 1) return
                    teks = body.slice(10)
                    json_data = JSON.parse(teks)
                    try {
                        if(json_data.format == 'mp3') {
                            reply('*⬇️ Baixando música aguarde... ⬇️*')
                            let buff =  await (await fetch(json_data.dl_link, {
                                headers: {
                                    "range": `bytes=0-${json_data.bytes}`
                                }
                            })).buffer()
                            await reply('*🔄 Convertendo para mp3 🔄*')
                            ran = getRandom('.weba')
                            rano = getRandom('.mp3')
                            await fs.writeFileSync(ran, buff)
                            exec(`ffmpeg -i ${ran} -vn ${rano}`, async (err, res) => {
                                if(err) return reply(`*Falha na conversao, Música possui copyright, baixe pelo comando ${prefix}play (nome da música ou link)*`)
                                var date = new Date()
                                let year = json_data.uploaded.includes('year') ? (await date.getFullYear() - json_data.uploaded.split(' ')[0]) : await date.getFullYear()
                                const writer = new ID3Writer(fs.readFileSync(rano))
                                await writer.setFrame('TIT2', json_data.title);
                                await writer.setFrame('TPE1', [json_data.artist,' Downloaded by Alastor Bot'])
                                await writer.setFrame('TPE2', [json_data.artist +' * Downloaded by Alastor Bot'])
                                await writer.setFrame('TALB', json_data.artist)
                                await writer.setFrame('TYER', year)
                                await writer.setFrame('APIC', {
                                    type: 3,
                                    data: await getBuffer(`https://i.ytimg.com/vi/${json_data.id}/hqdefault.jpg`),
                                    description: 'Downloaded by Alastor'
                                });
                                await writer.addTag();
                                const id3Buffer = Buffer.from(writer.arrayBuffer);
                                if(json_data.type =='aud') {
                                    await client.sendMessage(from, {
                                        audio: id3Buffer, 
                                        mimetype: 'audio/mpeg',
                                        contextInfo: {
                                            stanzaId: 'ASDADNN213KNADLKDSNAKJS',
                                            externalAdReply: {
                                                title: json_data.title,
                                                showAdAttribution: true,
                                                mediaType: 2,
                                                body: `Artista: ${json_data.artist} • Enviado há: ${json_data.uploaded}`,
                                                thumbnailUrl: `https://i.ytimg.com/vi/${json_data.id}/hqdefault.jpg`,
                                                mediaUrl: `https://youtu.be/${json_data.id}`
                                            }
                                        }
                                    })
                                } else if(json_data.type == 'doc') {
                                    await client.sendMessage(from, {
                                        document: id3Buffer, 
                                        mimetype: 'audio/mp3', 
                                        fileName: json_data.title+'.mp3'
                                    })
                                }
                                fs.unlinkSync(rano)
                                fs.unlinkSync(ran)
                            })

                        } else {
                            reply('*⬇️ Baixando vídeo aguarde... ⬇️*')
                            console.log(json_data.dl_link);
                            let buff =  await (await fetch(json_data.dl_link)).buffer()
                            if(json_data.type == 'vid') {
                                client.sendMessage(from, {video: buff, mimetype: 'video/mp4', fileName: json_data.title+'.mp4'})
                            } else if(json_data.type == 'doc') {
                                client.sendMessage(from, {
                                    document: buff, 
                                    mimetype: 'video/mp4', 
                                    fileName: json_data.title+'.mp4'
                                })
                            }
                        }
                    } catch (e) {
                        client.sendMessage(from, {
                            text: `Falha no download do arquivo\nProvavelmente possui copyright, deseja baixar pela api oficial do youtube?`,
                            footer: `Clique no botão abaixo para confirmar: `,
                            buttons: [{
                                buttonId: `ytmp3 ${json_data.type} https://youtu.be/${json_data.id} ${json_data.artist}`,
                                buttonText: '✅ Sim ✅',
                                type: 1
                            }],
                            headerType: 1
                        })
                    }
                    break
                case 'snapnext':
                    if(!msg.message.listResponseMessage) return
                    if(args.length < 1) return
                    try {
                        teks = body.slice(10)
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=17desetembro&query=${teks}`)
                        let rowsObj = []
                        for(let obj of anu.resultados) {
                            rowsObj.push({
                                title: obj.title, 
                                description: `Link: ${obj.link} • Duração: ${fmtMSS(obj.duration)}`,
                                rowId: `${prefix}snaptube ${obj.link}`,
                                type: 1
                            },)
                        }
                        client.sendMessage(from, {
                            text: 'Veja o titulo que deseja baixar',
                            title: '⬇️ Snaptube Search ⬇️',
                            footer: 'Clique no botão abaixo para ver os resultados:',
                            buttonText: `Resultados`,
                            sections: [{
                                title: 'Resultados',
                                rows: rowsObj
                            }]
                        })
                    } catch {
                        reply('*Falha ao pesquisar*')
                    }
                    break
                case 'snaptube':
                case 'snap':
                    try {
                        if( args.length < 1) return reply('*E o texto animal*')
                        reply('*🔍Procurando Música via snaptube...🔎*')
                        teks =  command == 'snaptube' ? body.slice(10) : body.slice(6)
                        console.log(teks);
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=17desetembro&query=${teks}`)
                        date = anu.resultados[0]
                        dated = `*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${(date.duration / 60).toFixed(2).toString().replace('.', ':')}*\n*Views: ${date.views}*\n*Canal: ${date.channel.name}*`
                        buff_music = await fetchJson(`https://api.snaptube.app/v1/video/details?url=${date.link}`)
                        var mp3 = []
                        var mp4 = []
                        for(let obj of buff_music.videoInfo.downloadInfoList) {
                            if(obj.formatExt == 'mp3') {
                                mp3.push({
                                    title: `Qualidade: ${obj.formatAlias} • Música`,
                                    description: `Tamanho: ${(obj.size / Math.pow(1024, 2)).toFixed(2)} MB`,
                                    rowId: `${prefix}snapdown {"uploaded": "${date.uploaded}", "artist": "${date.channel.name}", "title": "${date.title}", "id":"${date.id}", "type":"aud", "bytes":"${obj.size}", "format": "mp3", "dl_link":"${obj.partList[0].urlList[0]}"}`
                                },{
                                    title: `Qualidade: ${obj.formatAlias} • Documento`,
                                    description: `Tamanho: ${(obj.size / Math.pow(1024, 2)).toFixed(2)} MB`,
                                    rowId: `${prefix}snapdown {"uploaded": "${date.uploaded}", "artist": "${date.channel.name}", "title": "${date.title}", "id":"${date.id}", "type": "doc", "bytes":"${obj.size}", "format":"mp3", "dl_link":"${obj.partList[0].urlList[0]}"}`
                                })
                            } else if(obj.formatExt == 'mp4') {
                                mp4.push({
                                    title: `Qualidade: ${obj.formatAlias} • Vídeo`,
                                    description: `Tamanho: ${(obj.size / Math.pow(1024, 2)).toFixed(2)} MB`,
                                    rowId: `${prefix}snapdown {"uploaded": "${date.uploaded}", "artist": "${date.channel.name}", "title": "${date.title}", "id":"${date.id}", "type": "vid", "bytes":"${obj.size}", "format":"mp4", "dl_link":"${obj.partList[0].urlList[0]}"}`
                                },{
                                    title: `Qualidade: ${obj.formatAlias} • Documento`,
                                    description: `Tamanho: ${(obj.size / Math.pow(1024, 2)).toFixed(2)} MB`,
                                    rowId: `${prefix}snapdown {"uploaded": "${date.uploaded}", "artist": "${date.channel.name}", "title": "${date.title}", "id":"${date.id}", "type": "doc", "bytes":"${obj.size}", "format":"mp4", "dl_link":"${obj.partList[0].urlList[0]}"}`
                                })
                            }
                        }
                        thumb_buff = await getBuffer(buff_music.videoInfo.thumbnail)
                        await client.sendMessage(from, {
                            text: dated,
                            footer: 'Escolha a opção que deseja baixar:',
                            title: '⬇️ Snaptube Downloader ⬇️',
                            buttonText: 'Escolher formato',
                            sections: [{
                                title: 'Musica errada?',
                                rows: [{title: 'Proxima música ➡️', rowId: `${prefix}snapnext ${body.slice(10)}`}]
                            },{
                                title: 'Música • MP3',
                                rows: mp3
                            }, {
                                title: 'Vídeo • MP4',
                                rows: mp4
                            }]
                        })
                    } catch (e){
                        console.log(e)
                        reply('*Música não encontrada*')
                    }
                    break
                case 'anticall':
                    try {
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiCall) return reply('Ja esta ativo')
                        anticall.push('Ativado')
                        fs.writeFileSync('./src/database/antis/anticall.json', JSON.stringify(anticall))
                        reply('Ativou com sucesso o recurso de anticall neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        if(!isAntiCall) return reply('Já está desativado')
                        anticall.splice(0, 1)
                        fs.writeFileSync('./src/database/antis/anticall.json', JSON.stringify([]))
                        reply('Desativou com sucesso o recurso de anticall neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'entrargp':
                    if(!isOwner) return reply(mess.only.ownerB)
                    if(args.length < 1) return reply('Envie o link de um grupo válido')
                    try {
                        await reply('*Pegando dados do grupo, aguarde um instante...*')
                        gp_info = await client.groupGetInviteInfo(args[0].split('/')[3])
                        client.sendMessage(from, {text: `Nome do grupo: _${gp_info.subject}_\n*Participantes: _${gp_info.participants.length}_*\n*Proprietário: ${gp_info.owner.split('@')[0]}*`, 
                            footer: `Os dados estão corretos?`,
                            buttons: [{buttonId: `entrargp 0|${args[0]}`, buttonText: {displayText: 'Sim'}, type: 1},
                            {buttonId: `entrargp 1|${args[0]}`, buttonText: {displayText: 'Não'}, type: 1}]
                        })
                    } catch {
                        reply('Insira um link de um grupo válido')
                    }
                    break
                case 'rbug':
                    await reply('*Resolvendo bug de mensagem...*')
                    setTimeout(async function() {
                        await reply('*Bug resolvido!*')
                    }, 1000)
                    break
                case 'magma':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/magma?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'circuit':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/circuit?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'space':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/space?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'box3d':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/box3d?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'matrix':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/matrix?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'wolflogo':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    gb1 = teks.split('|')[0]
                    gb2 = teks.split('|')[1]
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/wolflogo?apikey=17desetembro&text1=${gb1}&text2=${gb2}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'lionlogo':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    gb1 = teks.split('|')[0]
                    gb2 = teks.split('|')[1]
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/lionlogo?apikey=17desetembro&text1=${gb1}&text2=${gb2}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'bearlogo':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/bearlogo?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'imglitch':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/impressive_glitch?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'neonlight':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/neonlight?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'dropwater':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/dropwater?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'thunder':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/thunder?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'avengers':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    gb1 = teks.split('|')[0]
                    gb2 = teks.split('|')[1]
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/avengers?apikey=17desetembro&text1=${gb1}&text2=${gb2}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'marvel':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    gb1 = teks.split('|')[0]
                    gb2 = teks.split('|')[1]
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/marvel?apikey=17desetembro&text1=${gb1}&text2=${gb2}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'ph':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    gb1 = teks.split('|')[0]
                    gb2 = teks.split('|')[1]
                    anu = await fetchJson(`https://api.brizaloka-api.tk/textpro/ph?apikey=17desetembro&text1=${gb1}&text2=${gb2}`)
                    buff = await getBuffer(anu.img)
                    client.sendMessage(from, {image: buff})
                    break
                case 'graffiti':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/graffiti?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'shinerainbow':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/shinerainbow?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'glowing':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/glowing?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'gradient':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/gradient?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'cemitery':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/cemitery?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'coffev2':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/coffev2?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'coffe':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/coffe?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'love':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/love?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'naruto':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/naruto?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'undergrass':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/undergrass?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'flower':
                    if(args.length < 1) return reply('*Digite o texto após digitar*')
                    teks = body.slice(command.length + 2)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/photooxy/flower?apikey=17desetembro&text=${teks}`)
                    buff = await getBuffer(anu.resultado)
                    client.sendMessage(from, {image: buff})
                    break
                case 'cnpj':
                    if(args.length < 1) return reply('*Digite um CNPJ válido!*')
                    anu = await fetchJson(`https://api.brizaloka-api.tk/consulta/cnpj?apikey=17desetembro&cnpj=${args[0]}`)
                    if(!anu.resultado) return reply('*CNPJ não inválido! Digite o CNPJ sem nenhum símbolo ou espaço*')
                    anu = anu.resultado
                    reply(`*Nome da empresa: ${anu.nome}*\n*Situação: ${anu.situacao}*\n*Tipo: ${anu.tipo}*\n*Nome fantasia: ${anu.fantasia}*\n*Estado: ${anu.uf}*\n*CEP: ${anu.cep}*\n*Abertura: ${anu.abertura}*\n*Telefone ${anu.telefone}*\n*Logradouro: ${anu.logradouro}*`)
                    break
                case 'encomenda':
                    if(args.length < 1) return reply('*Digite o código de rastreio*')
                    anu = await fetchJson(`https://api.brizaloka-api.tk/consulta/rastreamento/correio?apikey=17desetembro&codigo=${args[0]}`)
                    if(anu.resultado.length == 0) return reply('*Código de rastreio inválido*')
                    date = `✅ *Encomenda encontrada* ✅\n\n`
                    for(i=0; i < anu.resultado.length; ++i) {
                        var data = anu.resultado[i].data
                        var hora = anu.resultado[i].hora
                        var status = anu.resultado[i].status
                        var local = anu.resultado[i].local
                        date += `*Status:* ${status}\n*Local:* ${local}\n*Data:* ${data}\n*Hora:* ${hora}\n\n`
                    }
                    reply(date)
                    break
                case 'ddd':
                    if(args.length < 1) return reply('Digite um ddd válido junto com o comando')
                    teks = body.slice(5)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/consulta/ddd?apikey=17desetembro&ddd=${args[0]}`)
                    if(!anu.resultado) return reply('DDD não encontrado')
                    res_teks = `Cidades que possuem o DDD ${args[0]}:\n`
                    for(var i = 0; i < anu.resultado.length; ++i) {
                        res_teks += `${anu.resultado[i]}\n`
                    }
                    reply(res_teks)
                    break
                case 'cep':
                    if(args.length < 1) return reply('*Digite um CEP para ver o endereço!*')
                    teks = body.slice(5)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/consulta/cep?apikey=17desetembro&cep=${teks}`)
                    if(!anu.resultado) return reply('*CEP não encontrado!*')
                    date = anu.resultado
                    reply(`*CEP:* ${date.cep}\n*Endereço:* ${date.logradouro}\n*Bairro:* ${date.bairro}\n*Cidade:* ${date.localidade}\n*Estado:* ${date.uf}`)
                    break
                case 'ip':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(4)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/consulta/ip?apikey=17desetembro&ip=${teks}`)
                    if(!anu.pais) return reply('❌ Ip não encontrado')
                    reply(`*📡 IP: ${teks}*\n\n*🌐 País: ${anu.resultado.pais}*\n*📡 Cidade: ${anu.resultado.cidade}*\n*📡 Estado: ${anu.resultado.estado}*\n*📡 Latitude: ${anu.resultado.latitude}*\n*📡 Longitude: ${anu.resultado.longitude}*\n*Fuso horário: ${anu.resultado.fuso_horario}*\n*Provedora: ${anu.resultado.provedora}*`)
                    break
                case 'wikipedia':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(11)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/search/wikipedia?apikey=17desetembro&query=${teks}`)
                    if(!anu.pesquisa) return reply('❌ Não encontrei nada!')
                    result = anu.pesquisa
                    date = `*Título: ${result.titulo}*\n*Descrição: ${result.descrição}*\n*Link: ${result.link}*\n\n*Resultado da pesquisa:*\n${result.resultado}`
                    buff = await getBuffer(result.thumb)
                    client.sendMessage(from, {image: buff, caption: date})
                    break
                case 'gsearch':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/search/googlesrc?apikey=17desetembro&query=${teks}`)
                    if(anu.resposta.results.length == 0) return reply('❌ Não encontrei nada!')
                    result = anu.resposta.results[Math.floor(Math.random() * anu.resposta.results.length)]
                    reply(`*${result.title}*\n${result.link}`)
                    break
                case 'gmaps':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(7)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/search/googlemaps?apikey=17desetembro&query=${teks}`)
                    if(anu.resultado.length == 0) return reply('❌ Não encontrei nada!')
                    client.sendMessage(from, {location: {degreesLatitude: anu.resultado[0].lat, degreesLongitude: anu.resultado[0].lon}})
                    break
                case 'pensador':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(10)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/search/pensador?apikey=17desetembro&query=${teks}`)
                    if(anu.frases.length == 0) return reply('❌ Não encontrei nada!')
                    var frase = anu.frases[Math.floor(Math.random() * anu.frases.length)]
                    reply(`*Frase: ${frase.frase}*\n*- _${teks}_*`)
                    break
                case 'thumbzilla':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(12)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/porn/thumbzilla?apikey=17desetembro&query=${teks}`)
                    date = `✅ Vídeo encontrado ✅\nTítulo: ${anu.titulo}\nLink: ${anu.link}\nDuração: ${anu.duration}\nViews: ${anu.views}\nLikes: ${anu.likes}\nDeslikes: ${anu.dislikes}\nTags: ${anu.tags}`
                    reply(date)
                    break
                case 'xnxx':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(6)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/porn/xnxx?apikey=17desetembro&query=${teks}`)
                    date = `✅ Vídeo encontrado ✅\nTítulo: ${anu.titulo}\nLink: ${anu.link}\nDuração: ${anu.duration}\nViews: ${anu.views}\nQualidade: ${anu.qualidade}\nLikes: ${anu.likes}\nDeslikes: ${anu.deslikes}\nRating: ${anu.rating}\nLink de download; ${anu.dl_link}`
                    buff = await getBuffer(anu.image_thumb)
                    client.sendMessage(from, {image: buff, caption: date})
                    break
                case 'fapster':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/porn/fapster?apikey=17desetembro&query=${teks}`)
                    date = `✅ Vídeo encontrado ✅\nTítulo: ${anu.titulo}\nLink: ${anu.link}\nUpado há: ${anu.uploaded}\nViews: ${anu.views}\nLikes: ${anu.likes_porcent}\nDuração: ${anu.duration}`
                    buff = await getBuffer(anu.thumb)
                    client.sendMessage(from, {image: buff, caption: date})
                    break
                case 'rule34':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(8)
                    anu= await fetchJson(`https://api.brizaloka-api.tk/porn/rule34?apikey=17desetembro&query=${teks}`)
                    buff = await getBuffer(anu.image)
                    client.sendMessage(from, {image: buff, caption: `Link: ${anu.link}`})
                    break
                case 'xanimu':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(8)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/porn/xanimu?apikey=17desetembro&query=${teks}`)
                    date = `✅ Vídeo encontrado ✅\nTítulo: ${anu.titulo}\nLink de Download: ${anu.video_download}\nViews: ${anu.views}\nRating: ${anu.rating}\nDuração: ${anu.duration}`
                    buff = await getBuffer(anu.thumb_image)
                    client.sendMessage(from, {image: buff, caption: date}, {quoted: msg})
                    break
                case 'xvideos':
                    if(args.length < 1) return reply('❌ Você precisa de um nome para pesquisar!')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/porn/xvideos?apikey=17desetembro&query=${teks}`)
                    date = `✅ Vídeo encontrado ✅\nTítulo: ${anu.titulo}\nLink: ${anu.link}\nDuração: ${anu.duration}\nCanal: ${anu.canal}\nLink de Download: ${anu.dl_link}`
                    buff = await getBuffer(anu.thumb)
                    client.sendMessage(from, {image: buff, caption: date}, {quoted: msg})
                    break
                case 'minareset':
                    if(!isPlayMines) return reply('*Nehuma partida foi iniciada*')
                    play_i = minesId.indexOf(from)
                    mines.splice(play_i, 1)
                    fs.writeFileSync('./src/database/mines.json', JSON.stringify(mines, null, 2))
                    reply('*Campo minado resetado com sucesso!*')
                    break
                case 'mineshelp':
                    reply(MinesHelp(prefix))
                    break
                case 'minatips':
                    if(!isPlayMines) return reply('*Nehuma partida foi iniciada*')
                    play_i = minesId.indexOf(from)
                    if(mines[play_i].tips_d >= 3) {
                        is_columns = Math.random() < 0.5
                        if(!is_columns) {
                            m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
                            row = mines[play_i].pos_mines[m_sorted].charAt(0)
                            mines_row = 0
                            for(let obj of mines[play_i].pos_mines) {
                                if(obj.startsWith(row)) mines_row += 1
                            }
                            mines[play_i].tips_d -= 3
                            fs.writeFileSync('./src/database/mines.json', JSON.stringify(mines, null, 2))
                            reply(`*_💡Há ${mines_row} bomba(s) na fileira ${row}💡_*`)
                        } else {
                            m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
                            column = mines[play_i].pos_mines[m_sorted].charAt(1)
                            mines_column = 0
                            for(let obj of mines[play_i].pos_mines) {
                                if(obj.endsWith(column)) mines_column += 1
                            }
                            mines[play_i].tips_d -= 3
                            fs.writeFileSync('./src/database/mines.json', JSON.stringify(mines, null, 2))
                            reply(`*_💡Há ${mines_column} bomba(s) na coluna ${column}💡_*`)
                        }
                    } else return reply('*Acerte 3 ou mais vezes para ter direito a uma dica*')
                    break
                case 'mina':
                    if(!isPlayMines) return reply('*Nehuma partida foi iniciada*')
                    if(args.length < 1) return reply('*Diga a dificuldade: easy, normal, hard*')
                    teks = args[0].toLowerCase()
                    play_i = minesId.indexOf(from)
                    for(let obj of args) {
                        teks = obj.toLowerCase()
                        if(!minecor.includes(teks)) return reply('Escolha uma coordenada')
                        if(mines[play_i].selected_cord.includes(teks)) return reply('Coordenada já selecionada')
                        if(mines[play_i].pos_mines.includes(teks)) {
                            mines[play_i].minesp[teks] = '💣'
                            mines[play_i].attempts -= 1
                            mines[play_i].tips_d = 0
                        } else {
                            mines[play_i].minesp[teks] = '🟩'
                            mines[play_i].hits += 1
                            mines[play_i].tips_d += 1
                        }
                        mines[play_i].selected_cord.push(teks)
                    }
                    e = mines[play_i].minesp
                    res_teks = `💣 *CAMPO MINADO* 💣\n
    X 1️⃣2️⃣3️⃣4️⃣5️⃣
    A ${e.a1}${e.a2}${e.a3}${e.a4}${e.a5}
    B ${e.b1}${e.b2}${e.b3}${e.b4}${e.b5}
    C ${e.c1}${e.c2}${e.c3}${e.c4}${e.c5}
    D ${e.d1}${e.d2}${e.d3}${e.d4}${e.d5}
    E ${e.e1}${e.e2}${e.e3}${e.e4}${e.e5}

    *Minas: ${mines[play_i].qnt_mines}*
    *Tentativas ${mines[play_i].attempts}*
    *Acertos: ${mines[play_i].hits}*`

                    if(mines[play_i].attempts <= 0) {
                        res_teks += '\n\n*😭 Que pena! você perdeu!❌*'
                        await mines.splice(play_i, 1)
                        console.log(mines);
                        fs.writeFileSync('./src/database/mines.json', JSON.stringify(mines, null, 2))
                        reply(res_teks)
                    } else {
                        if(mines[play_i].selected_cord.length >= mines[play_i].cord_to_win.length) {
                            containAll = mines[play_i].cord_to_win.every(e => {
                                return mines[play_i].selected_cord.includes(e)
                            })
                            if(containAll) {
                                res_teks += '\n\n*🥳 Parabéns! você venceu!✅*'
                                await mines.splice(play_i, 1)
                                console.log(mines);
                                fs.writeFileSync('./src/database/mines.json', JSON.stringify(mines, null, 2))
                                reply(res_teks)
                            }
                        } else {
                            if(mines[play_i].tips_d >= 3) {
                                res_teks += `\n\nVocê Tem direito a ${parseInt(mines[play_i].tips_d/3)} Dica(s)`
                                fs.writeFileSync('./src/database/mines.json', JSON.stringify(mines, null, 2))
                                reply(res_teks)
                            } else {
                                fs.writeFileSync('./src/database/mines.json', JSON.stringify(mines, null, 2))
                                reply(res_teks)
                            }
                        }
                    }
                    break
                case 'minado':
                    if(isPlayMines) return reply('*Uma partida já foi iniciada, espere acabar para iniciar uma nova...*')
                    if(args.length < 1) return reply('*Diga a dificuldade: easy, normal, hard*')
                    teks = args[0].toLowerCase()
                    if(teks == 'easy') q_mines = 5
                    else if(teks == 'normal') q_mines = 8
                    else if(teks == 'hard') q_mines = 12
                    else return reply('*Dificuldade inválida*')
                    p_mines = await getMinesPositions(minecor, q_mines)
                    atp = (q_mines == 5) ? 3 : (q_mines == 8) ? 5 : (q_mines == 12) ? 8 : 5
                    ctw = minecor.filter(function(el) {
                        return !p_mines.includes(el)
                    })
                    var minframes = JSON.parse(fs.readFileSync('./src/mines/minesframe.json'))
                    mines.push({
                        id: from,
                        pos_mines: p_mines,
                        qnt_mines: q_mines,
                        selected_cord: [],
                        cord_to_win: ctw,
                        attempts: atp,
                        tips_d: 0,
                        hits: 0,
                        minesp: minframes,
                    })
                    fs.writeFileSync('./src/database/mines.json', JSON.stringify(mines, null, 2))
                    reply(`✅ *CAMPO MINADO INICIADO* ✅\n\nX 1️⃣2️⃣3️⃣4️⃣5️⃣\nA ⬛⬛⬛⬛⬛\nB ⬛⬛⬛⬛⬛\nC ⬛⬛⬛⬛⬛\nD ⬛⬛⬛⬛⬛\nE ⬛⬛⬛⬛⬛\n\n*Minas: ${q_mines}*\n*Dificuldade: ${teks}*\n*Tentativas: ${atp}*`)
                    break
                case 'exe':
                    if(!isOwner) return reply(mess.only.ownerB)
                    teks = body.slice(5)
                    (async= () => {

                    })
                    eval(teks)
                    break
                case 'gimage':
                    if(args.length < 1) return reply('*Envie o texto que deseja pesquisar*')
                    teks = body.slice(8)
                    await gis(teks, async function(err, res) {
                        ran = Math.floor(Math.random() * (res.length - 0)) + 0
                        buff = await getBuffer(res[ran].url)
                        await client.sendMessage(from, {image: buff}, {quoted: msg})
                    JSON.s  
                    })
                    break
                case 'pmp4':
                case 'playmp4':
                    try {
                        if( args.length < 1) return reply('*E o texto animal*')
                        reply('*🔍Procurando Música aguarde🔎*')
                        teks = body.slice(6)
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=17desetembro&query=${teks}`)
                        date = anu.resultados[0]
                        dated = `*✅ Música encontrada ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${(date.duration / 60).toString().replace('.', ':')} segs*\n*Views: ${date.views}segs*\n*Canal:${date.channel.name}*`
                        buff = await getBuffer(date.thumbnail)
                        var dur = date.duration
                        if(dur > 360) return reply('*Desculpe-me senhor pois apenas é aceito 6 minutos de duração*')
                        await client.sendMessage(from, {
                            image: buff, 
                            caption: dated, 
                            footer: 'Escolha o formato que deseja ser enviado: ', 
                            headerType: 1, buttons: [
                                {buttonId: `ytmp4 doc ${date.link} ${date.channel.name}`, buttonText: {displayText: '📄 Documento'}, type: 1},
                                {buttonId: `ytmp4 vid ${date.link} ${date.channel.name}`, buttonText: {displayText: '🎬︎ Vídeo'}, type: 1},
                                {buttonId: `pmp4 ${teks}`, buttonText: {displayText: '➡️ Próximo vídeo'}, type: 1}
                            ]}
                        , {quoted: msg})
                    } catch (e){
                        console.log(e)
                        reply('Error tente novamente')
                    }
                    break
                case 'msg':
                    if(!isOwner) return reply(mess.only.ownerB)
                    reply(JSON.stringify(msg, null, 2))
                    break
                case 'p':
                case 'play':
                    try {
                        if( args.length < 1) return reply('*E o texto animal*')
                        reply('*🔍Procurando Música aguarde🔎*')
                        teks =  (command == 'p') ? body.slice(3) : body.slice(6)
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=17desetembro&query=${teks}`)
                        date = anu.resultados[0]
                        dated = `*✅ Música encontrada ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${(date.duration / 60).toFixed(2).toString().replace('.', ':')}*\n*Views: ${date.views}*\n*Canal:${date.channel.name}*`
                        buff = await getBuffer(date.thumbnail)
                        var dur = date.duration
                        if(dur > 600) return reply('*Desculpe-me senhor pois apenas é aceito 10 minutos de duração*')
                        await client.sendMessage(from, {
                            image: buff, 
                            caption: dated, 
                            footer: 'Escolha o formato que deseja ser enviado:', 
                            headerType: 1, buttons: [
                                {buttonId: `ytmp3 doc ${date.link} ${date.channel.name}`, buttonText: {displayText: '📄 Documento'}, type: 1},
                                {buttonId: `ytmp3 aud ${date.link} ${date.channel.name}`, buttonText: {displayText: '🎵 Áudio'}, type: 1},
                                {buttonId: `p ${teks}`, buttonText: {displayText: '➡️ Próxima música'}, type: 1}
                            ]}
                        , {quoted: msg})
                    } catch (e){
                        console.log(e)
                        reply('*Música não encontrada*')
                    }
                    break
                case 'emoji':
                    if(args.length < 1) return reply(`*Dê o comando com o seguinte exemplo ${prefix}emoji 😁+🥳*`)
                    teks = body.slice(7)
                    em1 = teks.split('+')[0].trim()
                    em2 = teks.split('+')[1].trim()
                    anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${em1}_${em2}`)
                    if(anu.results.length < 1) return reply('*Falha ao mesclar emojis*')
                    buff = await getBuffer(anu.results[0].url)
                    ran = getRandom('.png')
                    rano = getRandom('.webp')
                    fs.writeFileSync(ran, buff)
                    execute(`ffmpeg -i ${ran} -vf scale=512:512 ${rano}`, async (res,err) => {
                        if(err) return reply('*Houve falha*')
                        await client.sendMessage(from, { sticker: fs.readFileSync(rano) })
                        fs.unlinkSync(ran)
                        fs.unlinkSync(rano)
                    })
                    break
                case 'crashrank':
                    if(crashRank.length < 2) return reply('Precisa de no mínimo 2 jogadores para o rank')
                    crashRank.sort((a, b) => b.media - a.media)
                    crashRankIds = []
                    for(let obj of crashRank) {
                        crashRankIds.push(obj.id)
                    }
                    teks = `*🏆 Lista dos melhores jogadores de crash 🏆*\n\n`
                    for(i=0;i < crashRank.length ; ++i) {
                        if(i == 0) teks += `🥇 ${i+1}º *${crashRank[i].pushname}*\n*Número: _${crashRank[i].id.split('@')[0]}_*\n*Vitórias: _${crashRank[i].wins}_*\n*Derrotas: _${crashRank[i].loses}_*\n\n`
                        else if(i == 1) teks += `🥈 ${i+1}º *${crashRank[i].pushname}*\n*Número: _${crashRank[i].id.split('@')[0]}_*\n*Vitórias: _${crashRank[i].wins}_*\n*Derrotas: _${crashRank[i].loses}_*\n\n`
                        else if(i == 2) teks += `🥉 ${i+1}º *${crashRank[i].pushname}*\n*Número: _${crashRank[i].id.split('@')[0]}_*\n*Vitórias: _${crashRank[i].wins}_*\n*Derrotas: _${crashRank[i].loses}_*\n\n`
                        else teks += `${i+1}º *${crashRank[i].pushname}*\n*Número: _${crashRank[i].id.split('@')[0]}_*\n*Vitórias: _${crashRank[i].wins}_*\n*Derrotas: _${crashRank[i].loses}_*\n\n`
                    }
                    reply(teks)
                    break
                case 'doublerank':
                    if(doubleRank.length < 2) return reply(`Precisa de no mínimo 2 jogadores para o rank`)
                    doubleRank.sort((a, b) => b.media - a.media)
                    doubleRankIds = []
                    for(let obj of doubleRank) {
                        doubleRankIds.push(obj.id)
                    }
                    teks = `*🏆 Lista dos melhores jogadores de double 🏆*\n\n`
                    for(i=0;i < doubleRank.length ; ++i) {
                        if(i == 0) teks += `🥇 ${i+1}º *${doubleRank[i].pushname}*\n*Número: _${doubleRank[i].id.split('@')[0]}_*\n*Vitórias: _${doubleRank[i].wins}_*\n*Derrotas: _${doubleRank[i].loses}_*\n\n`
                        else if(i == 1) teks += `🥈 ${i+1}º *${doubleRank[i].pushname}*\n*Número: _${doubleRank[i].id.split('@')[0]}_*\n*Vitórias: _${doubleRank[i].wins}_*\n*Derrotas: _${doubleRank[i].loses}_*\n\n`
                        else if(i == 2) teks += `🥉 ${i+1}º *${doubleRank[i].pushname}*\n*Número: _${doubleRank[i].id.split('@')[0]}_*\n*Vitórias: _${doubleRank[i].wins}_*\n*Derrotas: _${doubleRank[i].loses}_*\n\n`
                        else teks += `${i+1}º *${doubleRank[i].pushname}*\n*Número: _${doubleRank[i].id.split('@')[0]}_*\n*Vitórias: _${doubleRank[i].wins}_*\n*Derrotas: _${doubleRank[i].loses}_*\n\n`
                    }
                    reply(teks)
                    break
                case 'doublestart':
                    if(isPlayDouble && !isGroup) return reply('*Voce já apostou espere a partida terminar*')
                    if(isPlayDouble && isGroup) return reply('*Para evitar confusão de mensagens no grupo, só uma pessoa pode apostar, caso não queira esperar aposte no privado*')
                    if(args.length < 1) return reply('Diga a porcentagem que deseja apostar')
                    if(isNaN(args[0])) return reply('Diga a porcentagem em apenas números')
                    if(parseInt(args[0]) >= 3) return reply('Diga o número da cor correta')
                    if(!isDoubleRank) {
                        doubleRank.push({
                            pushname: pushname,
                            id: sender,
                            wins: 0,
                            loses: 0,
                            media: 0,
                        })
                        fs.writeFileSync('./src/database/double.json', JSON.stringify(doubleRank, null, 2))
                    }
                    double.push({
                        id: from,
                        player: sender,
                        color: parseInt(args[0]),
                        isInit: false,
                        isWaiting: false,
                        isDone: false,
                        isWebSocketInit: false
                    })
                    if(doubleSocket == null) {
                        reply('*Iniciando websocket... ⏱️*')
                        doubleStart()
                    } else {
                        reply('*Websocket já iniciado, encontrando partida... ⏱️*')
                    }
                    break
                case 'crashstart':
                    if(isPlayCrash && !isGroup) return reply('*Voce já apostou espere a partida terminar*')
                    if(isPlayCrash && isGroup) return reply('*Para evitar confusão de mensagens no grupo, só uma pessoa pode apostar, caso não queira esperar aposte no privado*')
                    if(args.length < 1) return reply('Diga a porcentagem que deseja apostar')
                    if(isNaN(args[0])) return reply('Diga a porcentagem em apenas números')
                    if(!isCrashRank) {
                        crashRank.push({
                            pushname: pushname,
                            id: sender,
                            wins: 0,
                            loses: 0,
                            media: 0,
                        })
                        fs.writeFileSync('./src/database/crash.json', JSON.stringify(crashRank, null, 2))
                    }
                    crash.push({
                        id: from,
                        porcent: parseInt(args[0]),
                        isInit: false,
                        isWaiting: false,
                        isDone: false,
                        isWebSocketInit: false
                    })
                    if(crashSocket == null) {
                        reply('*Iniciando websocket... ⏱️*')
                        crashstart()
                    } else {
                        reply('*Websocket já iniciado, encontrando partida... ⏱️*')
                    }
                    break
                case 'double':
                case 'doubleinit':
                    if(isPlayCrash && !isGroup) return reply('*Voce já apostou espere a partida terminar*')
                    if(isPlayCrash && isGroup) return reply('*Para evitar confusão de mensagens no grupo, só uma pessoa pode apostar, caso não queira esperar aposte no privado*')
                    rows = []
                    for(i=2;i<101;++i) rows.push({ title: `${i}%`, rowId: `${prefix}crashstart ` + i });
                    client.sendMessage(from , {
                        text: 'Aposte em uma cor e torça para que ganhe',
                        footer: 'Escolha a cor que deseja apostar',
                        title: 'Bem vindo ao jogo do double',
                        buttonText: 'Ver cores',
                        sections: [
                            {
                                title: 'Opções',
                                rows: [
                                    {title: '⚪ Branco 14x', description: 'Chances de ganhar 7%', rowId: `${prefix}doublestart 0`},
                                    {title: '⚫ Preto 2x', description: 'Chances de ganhar 46.5%', rowId: `${prefix}doublestart 2`},
                                    {title: '🔴 Vermelha 2x', description: 'Chances de ganhar 46.5%', rowId: `${prefix}doublestart 1`}
                                ]
                            }
                        ]
                    })
                    break
                case 'crash':
                case 'crashinit':
                    if(isPlayCrash && !isGroup) return reply('*Voce já apostou espere a partida terminar*')
                    if(isPlayCrash && isGroup) return reply('*Para evitar confusão de mensagens no grupo, só uma pessoa pode apostar, caso não queira esperar aposte no privado*')
                    rows = []
                    for(i=2;i<201;++i) rows.push({ title: `${i/2}%`, rowId: `${prefix}crashstart ` + i/2 });
                    client.sendMessage(from , {
                        text: 'Diga a porcentagem que vai aumentar?',
                        footer: 'Escolha a porcentagem que vai ser apostada',
                        title: 'Bem vindo ao jogo do crash',
                        buttonText: 'Ver opções',
                        sections: [
                            {
                                title: 'Opções',
                                rows: rows
                            }
                        ]
                    })
                    break
                case 'blaze':
                    client.sendMessage(from, {
                        text: 'Olá, seja bem-vindo aos jogos de aposta da blaze',
                        footer: 'Escolha que jogo deseja jogar: ',
                        title: 'Jogos de apostas Blaze',
                        buttonText: 'Mostrar jogos',
                        sections: [
                            {
                                title: 'Jogos de azar',
                                rows: [
                                    {title: 'Crash', description: 'Jogar crash na blaze', rowId: `${prefix}crash`},
                                    {title: 'Double', description: 'Jogar double na blaze', rowId: `${prefix}double`},
                                ]
                            },
                            {
                                title: 'Ranks',
                                rows: [
                                    {title: 'Rank do Crash', description: 'Ver os melhores jogadores de crash', rowId: `${prefix}crashrank`},
                                    {title: 'Rank do Double', description: 'Ver os melhores jogadores de double', rowId: `${prefix}doublerank`}
                                ]
                            }
                        ]
                    })
                    break
                case 'resetforca':
                    if(!isPlayForca) return reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
                    pla_pos = allForcaId.indexOf(sender)
                    forca.splice(pla_pos, 1)
                    fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                    reply(`*Jogo da forca reiniciado com sucesso. Para iniciar outra partida dê o comando ${prefix}jogodaforca*`)
                    break
                case 'forca':
                    if(!isPlayForca) return reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
                    if(args.length < 1) return reply(`*Dê o comando mais a letra para advinhar*`)
                    if(args[0].trim().length < 2) {
                        p_pos = allForcaId.indexOf(sender)
                        find = forca[p_pos].word.match(args[0].toLowerCase())
                        is_correct = false 
                        while(find != null) {
                            res_tmp = forca[p_pos].word.indexOf(args[0].toLowerCase())
                            forca[p_pos].array_under_word[res_tmp] = args[0].toLowerCase()
                            forca[p_pos].array_word[res_tmp] = 0
                            forca[p_pos].word = forca[p_pos].word.replace(args[0].toLowerCase(), 0)
                            find = forca[p_pos].word.match(args[0].toLowerCase())
                            is_correct = true
                        }
                        if(is_correct) {
                            str_under = ''
                            for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
                            attempts = forca[p_pos].attempts
                            if(str_under == forca[p_pos].word_original) {
                                reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_`)
                                forca.splice(p_pos, 1)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                            } else {
                                reply(`*Você acertou!✅*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_\n*Você tem ${attempts} chances*`)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                            }
                        } else  {
                            str_under = ''
                            for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
                            forca[p_pos].attempts -= 1
                            attempts = forca[p_pos].attempts
                            if(forca[p_pos].attempts <= 0) {
                                forca.splice(p_pos, 1)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                                reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
                            } else {
                                reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                            }
                        }
                    } else {
                        p_pos = allForcaId.indexOf(sender)
                        if(forca[p_pos].word_original == args[0].toLowerCase()) {
                            attempts = forca[p_pos].attempts
                            reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${forca[p_pos].word_original.split('').join(' ')}*_`)
                            forca.splice(p_pos, 1)
                            fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                        } else {
                            str_under = ''
                            for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
                            forca[p_pos].attempts -= 1
                            attempts = forca[p_pos].attempts
                            if(forca[p_pos].attempts <= 0) {
                                forca.splice(p_pos, 1)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                                reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
                            } else {
                                reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                            }
                        }
                    }
                    break
                case 'jogodaforca':
                    if(isPlayForca) return reply(`*Termine a partida iniciada para jogar uma nova, ou dê o comando ${p}resetforca*`)
                    word_correct = (await randompalavra()).slice(1).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    under_word = '-'.repeat(word_correct.length)
                    forca.push({
                        id: sender,
                        word_original: word_correct,
                        word: word_correct,
                        under_word: under_word,
                        array_word: Array.from(word_correct),
                        array_under_word: Array.from(under_word),
                        tam: word_correct.length,
                        attempts: 6
                    })
                    fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                    reply(`*Jogo da forca iniciado!✅*\n\n*Palavra: ${under_word.split('').join(' ')}*\n*Para advinhar uma letra , dê o comando ${prefix}forca mais a letra*`)
                    break
                case 'rstanagram': 
                    if(!isPlayAnagram) return reply(`*Você não inciou uma partida, para iniciar dê o comando ${prefix}anagrama*`)
                    pla_pos = allAnagramId.indexOf(sender)
                    anagram.splice(pla_pos, 1)
                    fs.writeFileSync('./src/database/anagram.json', JSON.stringify(anagram, null, 2))
                    reply('*Partida anagrama encerrada com sucesso!*')
                break
                case 'ranagram':
                    if(args.length < 1) return reply('*Digite o comando mais a palavra*')
                    if(!isPlayAnagram) return reply(`*Você não inciou uma partida, para iniciar dê o comando ${prefix}anagrama*`)
                    pla_pos = allAnagramId.indexOf(sender)
                    if(anagram[pla_pos].correct_word != args[0].toLowerCase()) {
                        anagram[pla_pos].attempts -= 1
                        if(anagram[pla_pos].attempts <= 0) {
                            anagram.splice(pla_pos, 1)
                            fs.writeFileSync('./src/database/anagram.json', JSON.stringify(anagram, null, 2))
                            reply(`*❌ Você perdeu o jogo, não tem mais nenhuma chance! ❌*`)
                        } else {
                            fs.writeFileSync('./src/database/anagram.json', JSON.stringify(anagram, null, 2))
                            reply(`*❌ Você errou, você tem ${anagram[pla_pos].attempts} chance(s)! ❌*`)
                        }
                    } else {
                        anagram.splice(pla_pos, 1)
                        fs.writeFileSync('./src/database/anagram.json', JSON.stringify(anagram, null, 2))
                        reply('*✅ Parabéns você acertou! ✅*')
                    }
                    break
                case 'anagrama':
                    if(isPlayAnagram) return reply('*Termine a primeira partida para jogar a outra ou resete a partida atual*')
                    var correct_word = (await randompalavra()).slice(1).toLowerCase()
                    var anagram_word = await generateAnagrams(correct_word)
                    anagram.push({
                        id: sender,
                        correct_word: correct_word,
                        anagram_word: anagram_word,
                        attempts: 5
                    })
                    fs.writeFileSync('./src/database/anagram.json', JSON.stringify(anagram, null, 2))
                    reply(`✅ *Jogo anagrama iniciado!* ✅\n*Descubra esse anagrama:*\n_*${anagram_word}*_\n\n*Você tem 5 chances para resolver*\n*Para responder, dê o comando ${prefix}rpagr mais a palavra*`)
                    break
                case 'blocklevel':
                    if(!isOwner) return reply(mess.only.ownerB)
                    if(args.length < 1) return reply('Diga 1 para ativar e 0 para desativar')
                    if(Number(args[0]) === 0) {
                        leveling_block.level_blocked = false
                        fs.writeFileSync('./src/database/level_block.json', JSON.stringify(leveling_block, null, 2))
                        reply('*Sistema de níveis desbloqueado com sucesso!*')
                    } else if(Number(args[0]) === 1) {
                        leveling_block.level_blocked = true
                        fs.writeFileSync('./src/database/level_block.json', JSON.stringify(leveling_block, null, 2))
                        reply('*Sistema de níveis bloqueado com sucesso!*')
                    } else return reply('*Diga 1 para ativar e 0 para desativar*')
                    break
                case 'basemd':
                    client.sendMessage(from, 
                        { text: `Você quer ter um bot multi device e que não precise de conexão com o celular, 
mas não tem uma base de código ou não sabe programar? Compre uma base pronta igual aos bots normais, veja abaixo a tabela:

*- 🥳🤯 Mega bot completo com jogos da blaze, multiprefixo, snaptube downloader e mais de 150 comandos*
_*🪙 Preço: 165,00*_

*- 🔥 Bot completo com akinator, akinator, yt downloader com editor metadados da música*
_*🪙 Preço: 110,00*_

*- 🔥 Base semi completa com template, botão e lista, com akinator, tiktaktoe e outros jogos*
_*🪙 Preço: 55,00*_

*- 🍃 Base básica com lista e botão com alguns comandos de exemplo*
_*🪙 Preço: 35,00*_

*- 🍃 Base simples sem template, lista e botão e sem comandos de exemplo*
_*🪙 Preço: 20,00*_

Obs: *O que esta sendo vendido são bases de prontas de bot, o alastor bot não possui relação com o que está sendo vendido*`,
                        footer: 'Entre em contato com o vendedor',
                        templateButtons: [{
                            index: 0,
                            urlButton: {
                                url: 'https://api.whatsapp.com/send/?phone=557187645787&text=Desejo%20comprar%20uma%20base%20md&app_absent=0',
                                displayText: 'Chamar no whatsapp'
                            }
                        },{
                            index:1,
                            urlButton: {
                                url: 'https://api.brizaloka-api.tk',
                                displayText: 'Visite o brizas-api'
                            }
                        }]
                    })
                    break
                case 'togif':
                    if ((isMedia && msg.message.videoMessage.seconds < 20 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 20)) {
                    const encmedia = isQuotedVideo ? msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : msg.message.videoMessage
                    media = getRandom('.'+(await getExtension(encmedia.mimetype)))
                    buff = await getFileBuffer(encmedia, 'video')
                    fs.writeFileSync(media, buff)
                        ran = getRandom('.mp4')
                        execute(`ffmpeg -i ${media} -fs 5M ${ran}`, async function(err, res){
                            if(err) return console.log(err)
                            client.sendMessage(from, {video: fs.readFileSync(ran), gifPlayback: true}, {quoted: msg})
                            fs.unlinkSync(media)	
                            fs.unlinkSync(ran)
                        })
                    } else if(isQuotedSticker){
                        const encmedia = isQuotedSticker ? msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : msg.message.stickerMessage
                        rane = getRandom('.'+(await getExtension(encmedia.mimetype)))
                        buffimg = await getFileBuffer(encmedia, 'sticker')
                        console.log(rane);
                        await fs.writeFileSync(rane, buffimg)
                        const media = rane
                        link = await stickerForVideo(media)
                        setTimeout(async () => {
                            buff = await getBuffer(link)
                            await client.sendMessage(from, {video: buff, gifPlayback: true}, {quoted: msg})
                        }, 5000)
                        
                    } else {
                        reply('*Diga as dimensões com largura e altura e o video tem que ter 20 segundo*')
                    }
                    break
                case 'abrirhr':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(args.length < 1) return reply(`Fale as horas que o grupo deve fechar no seguinte formato ${prefix}abrirhr 14:30`)
                    teks = args[0]
                    if(teks != 'dis') {
                        hourteks = teks.split(':')[0].trim()
                        minteks = teks.split(':')[1].trim()
                        if(isNaN(hourteks)) return reply(`Fale as horas que o grupo deve fechar no seguinte formato ${prefix}abrirhr 14:30`)
                        if(isNaN(minteks)) return reply(`Fale as horas que o grupo deve fechar no seguinte formato ${prefix}abrirhr 14:30`)
                        if(hourteks >= 24 && hourteks < 0) return reply(`Pelo oq sei o dia tem 24 horas`)
                        if(minteks >= 60 && minteks < 0) return reply(`Pelo oq sei a hora tem 60 minutos`)
                        jidgps = []
                        for(let obj of abrirgp) {
                            jidgps.push(obj.jid)
                        }
                        if(jidgps.indexOf(from) >= 0) {
                            indpos = jidgps.indexOf(from)
                            abrirgp[indpos].actived = false
                            abrirgp[indpos].hour = parseInt(hourteks)
                            abrirgp[indpos].minute = parseInt(minteks)
                            abrirgp[indpos].disabled = false
                        } else {
                            abrirgp.push({
                                jid: from,
                                actived: false,
                                hour: parseInt(hourteks),
                                minute: parseInt(minteks),
                                disabled: false
                            })
                        }
                        fs.writeFileSync('./src/database/abrir.json', JSON.stringify(abrirgp, null, 2))
                        reply(`*Horário marcado para abrir o grupo as ${args[0]}*`)
                    } else {
                        jidgps = []
                        for(let obj of abrirgp) {
                            jidgps.push(obj.jid)
                        }
                        if(jidgps.indexOf(from) >= 0) {
                            indpos = jidgps.indexOf(from)
                            abrirgp[indpos].disabled = true
                        } else {
                            abrirgp.push({
                                jid: from,
                                actived: false,
                                hour: 0,
                                minute: 0,
                                disabled: true
                            })
                        }
                        fs.writeFileSync('./src/database/abrir.json', JSON.stringify(abrirgp, null, 2))
                        reply(`*Horário marcado para abrir grupo desabilitado*`)
                    }
                    break
                case 'fecharhr':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(args.length < 1) return reply(`Fale as horas que o grupo deve fechar no seguinte formato ${prefix}fecharhr 14:30`)
                    teks = args[0]
                    if(teks != 'dis') {
                        hourteks = teks.split(':')[0].trim()
                        minteks = teks.split(':')[1].trim()
                        if(isNaN(hourteks)) return reply(`Fale as horas que o grupo deve fechar no seguinte formato ${prefix}fecharhr 14:30`)
                        if(isNaN(minteks)) return reply(`Fale as horas que o grupo deve fechar no seguinte formato ${prefix}fecharhr 14:30`)
                        if(hourteks >= 24 && hourteks < 0) return reply(`Pelo oq sei o dia tem 24 horas`)
                        if(minteks >= 60 && minteks < 0) return reply(`Pelo oq sei a hora tem 60 minutos`)
                        jidgps = []
                        for(let obj of fechargp) {
                            jidgps.push(obj.jid)
                        }
                        if(jidgps.indexOf(from) >= 0) {
                            indpos = jidgps.indexOf(from)
                            fechargp[indpos].actived = false
                            fechargp[indpos].hour = parseInt(hourteks)
                            fechargp[indpos].minute = parseInt(minteks)
                            fechargp[indpos].disabled = false
                        } else {
                            fechargp.push({
                                jid: from,
                                actived: false,
                                hour: parseInt(hourteks),
                                minute: parseInt(minteks),
                                disabled: false
                            })
                        }
                        fs.writeFileSync('./src/database/fechar.json', JSON.stringify(fechargp, null, 2))
                        reply(`*Horário marcado para fechar grupo as ${args[0]}*`)
                    } else {
                        jidgps = []
                        for(let obj of fechargp) {
                            jidgps.push(obj.jid)
                        }
                        if(jidgps.indexOf(from) >= 0) {
                            indpos = jidgps.indexOf(from)
                            fechargp[indpos].disabled = true
                        } else {
                            fechargp.push({
                                jid: from,
                                actived: false,
                                hour: 0,
                                minute: 0,
                                disabled: true
                            })
                        }
                        fs.writeFileSync('./src/database/fechar.json', JSON.stringify(fechargp, null, 2))
                        reply(`*Horário marcado para fechar grupo desabilitado*`)
                    }
                    break
                case 'add':
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    await reply(`Adicionando ${args[0]} no grupo...`)
                    client.groupParticipantsUpdate(from, [args[0].replace(/[\s-\+()]/g, "")+'@s.whatsapp.net'], 'add')
                break
                case 'ibere':
                    if(args.length < 1) return reply('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'ibere', teks).then(async res => {
                        buff = await getBuffer(res)
                        client.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break
                case 'eminem':
                    if(args.length < 1) return reply('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'eminem', teks).then(async res => {
                        buff = await getBuffer(res)
                        client.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break
                case 'chapolin':
                    if(args.length < 1) return reply('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'chapolin-br', teks).then(async res => {
                        buff = await getBuffer(res)
                        client.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break
                case 'patolino':
                    if(args.length < 1) return reply('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'patolino', teks).then(async res => {
                        buff = await getBuffer(res)
                        client.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break
                case 'faustao':
                    if(args.length < 1) return reply('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'faustao', teks).then(async res => {
                        buff = await getBuffer(res)
                        client.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break
                case 'resetaki':
                    if(akinator[0][from] && akinator[0][from].player != sender) return reply('*Não é você que está jogando*')
                    akinator[0][from] = undefined
                    fs.writeFileSync('./src/database/akinator.json', JSON.stringify(akinator, null, 2))
                    buttons_opts = [
                        {buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
                        {buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
                    ]
                    sendbuttonsMessage = {
                        text: `*Jogo reiniciado com sucesso! Deseja jogar outra partida*`,
                        footer: 'Sim ou não?',
                        buttons: buttons_opts,
                        headerType: 1
                    }
                    client.sendMessage(from, sendbuttonsMessage)
                    break
                case 'respaki':
                    if(!msg.message.listResponseMessage) return
                    if(akinator[0][from] && akinator[0][from].player != sender) return reply('*Não é você que está jogando*')
                    if(args.length < 1) return
                    await akinator[0][from].game.step(args[0])
                    if(akinator[0][from].game.progress > 85) {
                        await akinator[0][from].game.win()
                        teks = `Por acaso seu personagem é ${akinator[0][from].game.answers[0].name}?`
                        buttons_opts = [
                            {buttonId: 'finaki sim', buttonText: {displayText: 'Sim'}, type: 1},
                            {buttonId: 'finaki nao', buttonText: {displayText: 'Não'}, type: 1},
                        ]
                        sendbuttonsMessage = {
                            image: {url: akinator[0][from].game.answers[0].absolute_picture_path},
                            caption: `Já sei!\n\n${teks}`,
                            footer: 'Sim ou não?',
                            buttons: buttons_opts,
                            headerType: 1
                        }
                        client.sendMessage(from, sendbuttonsMessage)
                    } else {
                        listMessage = {
                            text: akinator[0][from].game.question,
                            buttonText: 'Mostrar opções',
                            title: "Pergunta",
                            sections: [{
                                title: 'Opções',
                                rows: [{
                                    rowId: `${prefix}respaki 0`,
                                    title: 'Sim',
                                    description: ''
                                },
                                {
                                    rowId: `${prefix}respaki 1`,
                                    title: 'Não',
                                    description: ''
                                },{
                                    rowId: `${prefix}respaki 2`,
                                    title: 'Não sei',
                                    description: ''
                                },{
                                    rowId: `${prefix}respaki 3`,
                                    title: 'Provavelmente sim',
                                    description: ''
                                },
                                {
                                    rowId: `${prefix}respaki 4`,
                                    title: 'Provavelmente não',
                                    description: ''
                                }]
                            }]
                        }
                        client.sendMessage(from, listMessage)
                    }
                break
                case 'akinator':
                    buttons_opts = [
                        {buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
                        {buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
                    ]
                    client.sendMessage(from, {
                        image: {url: 'https://apkmody.io/wp-content/uploads/2021/03/Akinator-VIP-APK-cover.jpg'},
                        caption: '*Seja bem vindo ao akinator*',
                        footer: 'Deseja iniciar uma partida?',
                        buttons: buttons_opts,
                        headerType: 1
                    })
                    break
                case 'randomship':
                    try {
                        buff = await getBuffer('https://arqaparecida.org.br/assets/img/arq_noticia/282.jpg')
                        if(!isGroup) return reply(mess.only.group)
                        r1 = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        r2 = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        if(args.length < 1) {
                            client.sendMessage(from, {text: `*Pesquisando quem é a alma gêmea do @${groupMembers[r1].jid.slice(0, -15)}...*`, mentions: [groupMembers[r1].jid]})
                            setTimeout(async function () {
                                client.sendMessage(from, {image: buff, caption: `*✅ Consegui achar a alma gêmea do @${groupMembers[r1].jid.slice(0, -15)} ✅*\n 
    *De acordo com meus cálculos altamente precisos, a pessoa que combina com @${groupMembers[r1].jid.slice(0, -15)} é: @${groupMembers[r2].jid.slice(0, -15)}*`, mentions: [groupMembers[r1].jid, groupMembers[r2].jid]})
                            }, 3000)
                        
                        }
                        else {
                            num1 = args[0]
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                                else return('Número não encontrado')
                            }
                            else return reply('Marque um Numero')
                            client.sendMessage(from, {text: `*Pesquisando quem é a alma gêmea do @${num1.slice(0, -15)} ...*`, mentions: [num1]})
                            setTimeout(async function () {
                                client.sendMessage(from, {image: buff, caption: `*✅ Consegui achar a alma gêmea do @${num1.slice(0, -15)} ✅*\n 
    *De acordo com meus cálculos altamente precisos, a pessoa que combina com @${num1.slice(0, -15)} é: @${groupMembers[r2].jid.slice(0, -15)}*`, mentions: [num1, groupMembers[r2].jid]})
                            }, 3000)
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'gay':
                    try {
                        buff = await getBuffer('https://www.economiasc.com/wp-content/uploads/2020/08/kit-2-bandeiras-gls-gay-lgbt-arco-iris-150m-x-090m-D_NQ_NP_819487-MLB28709953300_112018-F.jpg')
                    r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(r == 0) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não é gay*\n*mas talvez você seja 🤨`, mentions: [num1]})
                        if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gay*\n*perdeu o bv com o amigo*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gay*\n*ta devendo 50 pro traveco 🤣🤣*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gay*\n*da o butico por 5 conto pra pagar o agiota 🤣🤣*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'comunista':
                    try {
                        buff = await getBuffer('https://conscienciapopularlivre.files.wordpress.com/2019/03/stalin.png?w=1101')
                        r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*☭O @${num1.slice(0, -15)} é ${r}% comunista☭*\n*Passa fome o dia todo*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*☭O @${num1.slice(0, -15)} é ${r}% comunista☭*\n*Troca vodka invés de água*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*☭O @${num1.slice(0, -15)} é ${r}% comunista☭*\n*Manda os amigos pro gulag*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'nazista':
                    try {
                        buff = await getBuffer('https://i.imgur.com/Dk8p21B.jpeg')
                        r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*卐 O @${num1.slice(0, -15)} é ${r}% nazista 卐*\n*humilha o amiguinho judeu na escola*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*卐 O @${num1.slice(0, -15)} é ${r}% nazista 卐*\n*Tá em 5 gps nazistas no wpp*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*卐 O @${num1.slice(0, -15)} é ${r}% nazista 卐*\n*Já tem uma vaga no inferno*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'corno':
                    try {
                    buff= await getBuffer('http://www.clicrbs.com.br/blog/fotos/129960post_foto.jpg')
                    r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(num1.includes(OriginalOwner)) return reply('*Meu criador não é corno*\n*Mas pelo oq eu vi aq os dados me dizem ao contrário sobre você🤨*')
                        if(r == 0) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não é corno*\n*mas talvez você seja 🤨`, mentions: [num1]})
                        if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% corno*\n*jogador de free fire*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% corno*\n*1km de chifre kkkkkkk*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% corno*\n*pesca satélite com o chifre é? kkkkk🤣🤣*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'seudia':
                        try {
                        buff= await getBuffer('https://tudoparaum.files.wordpress.com/2013/05/sunrise-beach_00251139.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não tem chances de ter um bom dia*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de o seu dia ser bom*\n*A sorte n é pra tds amigo*`, mentions: [num1]})
                            if(r > 33 && r <= 40) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de o seu dia ser bom*\n*Eh algo de ruim ainda pode acontecer*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de o seu dia ser bom*\n*Boa chance de ter um bom dia*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de o seu dia ser bom*\n*Tenha um ótimo dia amigo*`, mentions: [num1]})
                        }, 3000)
                        } catch {
                            reply(msgerr)
                        }
                break
                case 'bv':
                        try {
                        buff = await getBuffer('https://cdn.olhares.com/client/files/foto/big/493/4931645.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não tem chances de perder o bv*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de perder o bv*\n*Ainda e pequeno 🤣🤣 *`, mentions: [num1]})
                            if(r > 33 && r <= 40) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de perder o bv*\n*Mediana*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de perder o bv*\n*Tem uma boa chance de perder ein 🙃*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de perder o bv*\n*Falta pouco amigo com paciência tu consegue 😎*` , mentions: [num1]})
                        }, 3000)
                        } catch {
                            reply(msgerr)
                        }
                break
                case 'gado':
                    try {
                    buff= await getBuffer('https://cdn.brasildefato.com.br/media/96db3810e29d6d33206f14bd7ec5ebeb.jpg')
                    r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(r == 0) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não é gado*\n*mas talvez você seja 🤨`, mentions: [num1]})
                        if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gado*\n*o que fala "ela é diferente poh"*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gado*\n*comprou água de banho da belle delphine ksksksk*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gado*\n*esse aí gastou todo o auxílio em pack do pé kkkkkk🤣🤣*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        reply(msgerr)
                    }
                    break
                    case 'gostosa':
                    case 'gostoso':
                        try {
                        buff = await getBuffer('https://vozdabahia.com.br/wp-content/uploads/2020/06/1_mia2-9308495.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} parece que pegou fogo e foi apagado com gasolina kkkkkkkk, tu é mt feio em neguin kkkkkk*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Tão feio que pra dar role com os amigos(as), eles tem que falar com a mãe "Seu jorge por favor me empresta o dragão" 🤣🤣*`, mentions: [num1]})
                            if(r > 33 && r <= 40) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Parece mais um sirigueijo, um caranguejo amassado kkkkkkkk*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Bonitinho você ein 😳👉👈*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Passa o zap o-onii-chan 😳👉👈*`, mentions: [num1]})
                        }, 3000)
                        } catch {
                            reply(msgerr)
                        }
                        break
                    case 'qi':
                        try {
                        buff = await getBuffer('https://www.saudebusiness.com/sites/saudebusiness.com/files/styles/article_featured_retina/public/uploads/2016/01/alberteinstein.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem apenas 2 neurônios*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r} de QI*\n*Burro pra klr kkkkkk 🤣🤣🤣*`, mentions: [num1]})
                            if(r > 33 && r <= 40) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r} de QI*\n*Passa de ano arrastado*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r} de QI*\n*Tira maior que 6 no boletim*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r} de QI*\n*Um novo Einstein*`, mentions: [num1]})
                        }, 3000)
                        } catch {
                            reply(msgerr)
                        }
                        break
                    case 'feio':
                        try {
                        buff = await getBuffer('https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/5d110052411408c78d2e670395d5e27aabcf9ab5815ff670acd9af359309b777_1.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = msg.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = msg.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        client.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não é feio, sorte da porra*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% feio(a)*\n*Eh ta média...*`, mentions: [num1]})
                            if(r > 33 && r <= 40) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% feio(a)*\n*nem todos nascem bonitos né*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% feio(a)*\n*Parece um cão chupando manga kkkkkkkk*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return client.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% feio(a)*\n*Cara feia do klr parece um dinossaro kkkkkkkkkkkkk*`, mentions: [num1]})
                        }, 3000)
                        } catch {
                            reply(msgerr)
                        }
                        break
                case 'ship':
                    try {
                    buff = await getBuffer('https://arqaparecida.org.br/assets/img/arq_noticia/282.jpg')
                    r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) reply('*ATA, AGORA É POSSÍVEL SHIPAR FANTASMAS*')
                    if(args.length< 2) reply('*NINGUÉM MERECER SER SHIPADO SOZINHO NÉ*')
                    num1 = args[0]
                    if(!isNaN(num1.slice(1)))
                    {
                        if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}

                    num2 = args[1]
                    if(!isNaN(num2.slice(1)))
                    {
                        if(num2.startsWith('@')) {num2 = num2.slice(1)+'@s.whatsapp.net'}
                    }
                    if(num2.slice(0, -15) == '') { num2 = num2+'@s.whatsapp.net'}
                    reply('*⌛Buscando dados na máquina do tempo, aguarde...⌛*')
                    setTimeout(async function(){
                        client.sendMessage(from, {image: buff, caption: `✅ *RESULTADOS OBTIDOS* ✅\n*CHANCES DE NAMORO ENTRE @${num1.slice(0, -15)} E @${num2.slice(0, -15)}* \n*SÃO DE: ${r}%*`,  mentions: [num1, num2]})
                    }, 3000)
                    } catch {
                        reply(msgerr)
                        }
                    break
                case 'librahoje':
                    try {
                        anu = await fetchJson(`https://api.cryptonator.com/api/ticker/gbp-brl`)
                        price = await new CC({from: 'GBP', to: 'BRL', amount: 1}).convert()
                        reply(`*Preço do libra esterlina atualmente: R$: ${price/100}*`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'rublohoje':
                    try {
                        anu = await fetchJson(`https://api.cryptonator.com/api/ticker/rub-brl`)
                        price = await new CC({from: 'RUB', to: 'BRL', amount: 1}).convert()
                        reply(`*Preço do rublo russo atualmente: R$: ${price/100}*`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'ienehoje':
                    try {
                        anu = await fetchJson(`https://api.cryptonator.com/api/ticker/jpy-brl`)
                        price = await new CC({from: 'JPY', to: 'BRL', amount: 1}).convert()
                        reply(`*Preço do iene atualmente: R$: ${price/100}*`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'eurohoje':
                    try {
                        price = await new CC({from: 'EUR', to: 'BRL', amount: 1}).convert()
                        reply(`*Preço do euro atualmente: R$: ${price/100}*`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'realhoje':
                    try {
                        price = await new CC({from: 'BRL', to: 'USD', amount: 1}).convert()
                        reply(`*Preço do real atualmente: US$: ${price/100}*`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'dolarhoje':
                    try {
                        
                        price = await new CC({from: 'USD', to: 'BRL', amount: 1}).convert()
                        console.log(price);
                        reply(`*Preço do dólar atualmente: R$: ${price/100}*`)
                    } catch (e) {
                        console.log(e);
                        reply(msgerr)
                    }
                    break
                case 'bitcoinhoje':
                    try {
                        anu = await fetchJson(`https://api.cryptonator.com/api/ticker/btc-brl`)
                        price = await new CC({from: 'BTC', to: 'BRL', amount: 1}).convert()
                        reply(`*Preço do bitcoin atualmente: R$: ${price/100}*`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'ccoin':
                    bl = body.slice(7)
                    bl1 = bl.split('|')[0].trim()
                    bl2 = bl.split('|')[1].trim()
                    bl3 = bl.split('|')[2].trim()
                    vl = bl3
                    try {
                        if(args.length < 1) return reply('*Digite o nome da moeda pra a ser convertida*')
                        if(args.length < 3) return reply('*Digite o nome da moeda que deseja converter*')
                        if(args.length < 5) return reply('*Digite o número a ser convertido*')
                        if(isNaN(bl3)) return reply('Digite o número para poder converter')
                        price = (await new CC({from: bl1.toUpperCase(), to: bl2.toUpperCase(), amount: 1}).convert()) / 100
                        if(!price) return reply('*❌ Moeda não encontrada ❌*')
                        bl3 = parseFloat(bl3*price).toFixed(2)
                        reply(`*✅ Conversão concluída ✅*\n*Da moeda ${bl1} para a moeda ${bl2}*\n*Valor atual: ${price}*\n*Valor multiplicado para ${vl}: ${bl3}*`)
                    } catch (e) { 
                        console.log(e)
                        reply('*❌ Moeda não encontrada ❌*')
                    }
                    break
                case 'cvcoin':
                    bl = body.slice(8)
                    bl1 = bl.split('|')[0].trim()
                    bl2 = bl.split('|')[1].trim()
                    try {
                        if(args.length < 1) return reply('*Digite o nome da moeda pra a ser convertida*')
                        if(args.length < 3) return reply('*Digite o nome da moeda que deseja converter*')
                        price = (await new CC({from: bl1.toUpperCase(), to: bl2.toUpperCase(), amount: 1}).convert()) / 100
                        if(!price) return reply('*❌ Moeda não encontrada ❌*')
                        reply(`*✅ Conversão concluída ✅*\n*Da moeda ${bl1.toUpperCase()} para a moeda ${bl2.toUpperCase()}*\n*Valor atual: ${price}*`)
                    } catch{
                        reply('*❌ Moeda não encontrada ❌*')
                    }
                    break
                    
                case 'ytsrcmp4':
                    teks = body.slice(10)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=17desetembro&query=${teks}`)
                    obj_yt = []
                    for(i=0;i< anu.resultados.length; ++i) {
                        let data = {
                            rowId: `${prefix}playmp4 `+ anu.resultados[i].title,
                            title: `${prefix}playmp4`,
                            description: anu.resultados[i].title
                        }
                        obj_yt.push(data)
                    }
                    butt = {
                        title: "✅ Músicas encotradas ✅",
                        buttonText: "Mostra lista de músicas",
                        text: `Palavra chave: ${teks}`,
                        listType: 1,
                        sections: [
                            {
                                title: "Músicas relacionadas",
                                rows: obj_yt
                            }
                        ]
                    }
                    client.sendMessage(from, butt) 
                    break
                case 'ytsrc':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=17desetembro&query=${teks}`)
                    const objs = []
                    for(i=0;i< anu.resultados.length; ++i) {
                        let data = {
                            rowId: `${prefix}play `+ anu.resultados[i].title,
                            title: `${prefix}play`,
                            description: anu.resultados[i].title
                        }
                        objs.push(data)
                    }
                    const list = {
                        title: "✅ Músicas encotradas ✅",
                        buttonText: "Mostra lista de músicas",
                        description: `Palavra chave: ${teks}`,
                        listType: 1,
                        sections: [
                            {
                                title: "Músicas relacionadas",
                                rows: objs
                            }
                        ]
                    }
                    client.sendMessage(from, list)
                    break
                case 'sociais':
                    reply(redes_sociais)
                    break
                case 'assinar':
                    if(isContrated) return reply('*Caro amigo, Você já possui um contrato comigo*')
                    if(args[0].length < 1) return reply('*Você está brincando comigo senhor? Você não escreveu nada*')
                    teks = body.slice(9)
                    if(teks.split('|').length < 1) return reply('*Você esqueceu de escrever seu nome senhor*')
                    if(teks.split('|').length < 2) return reply('*Você esqueceu de escrever sua idade senhor*')
                    gb1 = teks.split('|')[0].trim()
                    gb2 = teks.split('|')[1].trim()
                    if(isNaN(gb2)) return reply('*Sem infantilidade meu caro amigo, sua idade agora tem letras?*')
                    contratos.push({
                        jid: sender,
                        name: gb1,
                        idade: gb2
                    })
                    fs.writeFileSync('./src/database/contratos.json', JSON.stringify(contratos, null, 2))
                    buff = await getBuffer('https://drive.google.com/uc?export=download&id=1OscQOCetMNgtAnRjTAJ0-2YdM2ghEN8P')
                    client.sendMessage(from, {video: buff, caption: `*Obrigado por ter assinado o contrato @${sender.split('@')[0]}, pode contar comigo a qualquer momento, só me chamar qnd precisar*`, gifPlayback: true}, {quoted: msg})
                    break
                case 'darkjokes':
                    try {
                    anu = await fetchJson('https://api.zeks.xyz/api/darkjokes?apikey=apivinz')
                    buff = await getBuffer(anu.result)
                    client.sendMessage(from, {image: buff})
                    } catch (e) {
                        console.log(e)
                        reply(msgerr)
                    }
                    break
                case 'caçaniquel':
                    reply('*🎰Girando a roleta...🎰*')
                    r1 = Math.floor(Math.random() * cassinov.length + 0)
                    r2 = Math.floor(Math.random() * cassinov.length + 0)
                    r3 = Math.floor(Math.random() * cassinov.length + 0)
                    setTimeout(async function () {
                        if(r1 <= 2) {
                            teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*✅ Você ganhou!! ✅*\n*🥳👏 Parabéns 👏🥳*`
                            reply(teks)
                        } 
                        else if(r2 <= 2) {
                            teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*✅ Você ganhou!! ✅*\n*🥳👏 Parabéns 👏🥳*`
                            reply(teks)
                        }
                        else if(r3 <= 2) {
                            teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*✅ Você ganhou!! ✅*\n*🥳👏 Parabéns 👏🥳*`
                            reply(teks)
                        }
                        else {
                            teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*❌ Você perdeu!! ❌*\n*😭🥺Que penaaa 🥺😭*`
                            reply(teks)
                        }
                    }, 3000)
                    break
                case 'papel':
                        ran = Math.floor(Math.random() * 2 + 0)
                        if(ran == 2) return reply('*📜 Papel. Empate 😐*')
                        if(ran == 1) return reply('*✂️ Tesoura. Você perdeu 😜*')
                        if(ran == 0) return reply('*🪨 Pedra. Você ganhou 😩*')
                    break
                    case 'pedra':
                        ran = Math.floor(Math.random() * 2 + 0)
                        if(ran == 2) return reply('*📜 Papel. Você perdeu 😜*')
                        if(ran == 1) return reply('*✂️ Tesoura. Você ganhou 😩*')
                        if(ran == 0) return reply('*🪨 Pedra. Empate 😐*')
                    break
                    case 'tesoura':
                        ran = Math.floor(Math.random() * 2 + 0)
                        if(ran == 2) return reply('*📜 Papel. Você ganhou 😩*')
                        if(ran == 1) return reply('*✂️ Tesoura. Empate 😐*')
                        if(ran == 0) return reply('*🪨 Pedra. Você perdeu 😜*')
                    break
                case 'ytmp3':
                    try{
                        if(args.length < 1) return reply('CADE O LINK ANIMAL')
                        if(!args[0].match(p)) return reply('❌ Isso não é um link do youtube ❌')
                        reply('*Aguarde estou procurando o link...*')
                        anumusic = await ytdown(args[0].match(p)[1])
                        await reply('*⬇️ Baixando áudio ⬇️*')
                        buffdown = await fetch(anumusic.audioFormats[1]?.dl_link, {headers: {"range": "bytes=0-"}}).then(async res => await res.buffer())
                        ran = getRandom('.'+anumusic.audioFormats[1]?.mimeType.split('/')[1])
                        rano = getRandom('.mp3')
                        fs.writeFileSync(ran, buffdown)
                        exec(`ffmpeg -i ${ran} -vn ${rano}`, async (res, err) => {
                            if(err) return reply('Error')
                            buff = fs.readFileSync(rano)
                            const writer = new ID3Writer(buff)
                            await writer.setFrame('TIT2', anumusic.title)
                            await writer.setFrame('TPE1', [anumusic.channelName, 'Downloaded by Alastor bot'])
                            await writer.setFrame('TALB', anumusic.channelName)
                            await writer.setFrame('APIC', {
                                type: 3,
                                data: await getBuffer(`https://i.ytimg.com/vi/${args[0].match(p)[1]}/hqdefault.jpg`),
                                description: 'Downloaded by Alastor'
                            });
                            await writer.addTag();
                            const id3Buffer = Buffer.from(writer.arrayBuffer);
                            await reply('*🥳🥳 Download completo, enviando... 🥳🥳*')
                            console.log(await generateMessageID());
                            await client.sendMessage(from, {
                                audio: id3Buffer, 
                                mimetype: 'audio/mpeg', 
                                contextInfo:{
                                    externalAdReply: {
                                        stanzaId: await generateMessageID(),
                                        title: anumusic.title,
                                        showAdAttribution: true,
                                        mediaType: 2,
                                        body: `Artista: ${anumusic.channelName} • Downloaded by Alastor Bot`,
                                        thumbnailUrl: `https://i.ytimg.com/vi/${args[0].match(p)[1]}/hqdefault.jpg`,
                                        mediaUrl: `https://youtu.be/${args[0].match(p)[1]}`
                                    }
                                }})
                            fs.unlinkSync(rano)
                            fs.unlinkSync(ran)
                        })
                    } catch(e) {
                        console.log(e)
                        reply('Error')
                    }
                    break
                case 'ytmp4':
                    try{
                        if(args.length < 1) return reply('CADE O LINK ANIMAL')
                        if(!args[0].match(p)) return reply('❌ Isso não é um link do youtube ❌')
                        reply('*Aguarde estou procurando o link...*')
                        anumusic = await ytdown(args[0].match(p)[1])
                        if(anumusic.videosFormats.find(element => element.quality == '720p')) {
                            ind = anumusic.videosFormats.findIndex(element => element.quality == '720p')
                        } else if(anumusic.videosFormats.find(element => element.quality == '360p')) {
                            ind = anumusic.videosFormats.findIndex(element => element.quality == '360p')
                        } else if(anumusic.videosFormats.find(element => element.quality == '144p')) {
                            ind = anumusic.videosFormats.findIndex(element => element.quality == '144p')
                        }
                        reply('*⬇️ Baixando vídeo ⬇️*')
                        buff = await getBuffer(anumusic.videosFormats[ind].dl_link)
                        reply('*🥳🥳 Download completo, enviando... 🥳🥳*')
                        client.sendMessage(from, {video: buff, mimetype: 'video/mp4'}, {quoted: msg})
                    } catch (e){
                        console.log(e)
                        reply('Error')
                    }
                    break
                case 'tomp3':
                    try {
                    if (!isQuotedVideo) return reply('❌ APENAS VIDEOS SENHOR ❌')
                    const encmedia = isQuotedVideo ? msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : msg.message.videoMessage
                    media = getRandom('.'+(await getExtension(encmedia.mimetype)))
                    buff = await getFileBuffer(encmedia, 'video')
                    fs.writeFileSync(media, buff)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                        fs.unlinkSync(media)
                        if (err) return reply('❌ Falha ao converter video em audio ❌')
                        buffer = fs.readFileSync(ran)
                        client.sendMessage(from, {audio: buffer}, {quoted: msg})
                        fs.unlinkSync(ran)
                    })
                    } catch (e) {
                        console.log(e);
                        reply(msgerr)
                    }
                    break
                case 'lyrics':
                    try {
                    reply(mess.wait)
                    teks = body.slice(8)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=${teks}`, {method: 'get'})
                    reply(`*Nome da música: ${teks}*\n*Letras: ${anu.lyrics}*`)
                    } catch (e) {
                        console.log(e)
                        reply(msgerr)
                    }
                    break
                case 'ptlyrics':
                    try {
                    reply(mess.wait)
                    teks = body.slice(10)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=17desetembro&query=${teks}`, {method: 'get'})
                    dated = `*Nome da música: ${teks}*\n*Letras:*\n*${anu.lyrics}*`
                    translate(dated, {to: 'pt'}).then(res => {
                        reply(res.text)
                    }).catch (err => {
                        reply(msgerr)
                    })
                    } catch (e) {
                        console.log(e)
                        reply(msgerr)
                    }
                    break
                case 'gtts':
                    try {
                    if (args.length < 1) return client.sendMessage(from, {text: 'CADE A PRR DO CODIGO DO IDIOMA???'}, {quoted: msg})
                    const gtts = require('./lib/gtts')(args[0])
                    if (args.length < 2) return client.sendMessage(from, {text: 'CADE A PRR DO TEXTO'}, {quoted: msg})
                    dtt = body.slice(9)
                    ranm = getRandom('.mp3')
                    rano = getRandom('.ogg')
                    dtt.length > 600
                    ? reply('QUER ESCREVER A BIBLIA KLR??')
                    : gtts.save(ranm, dtt, function() {
                        exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                            fs.unlinkSync(ranm)
                            buff = fs.readFileSync(rano)
                            if (err) return reply('Falhou:(')
                            client.sendMessage(from, {audio: buff, pttAudio: true}, {quoted: msg})
                            fs.unlinkSync(rano)
                        })
                    })
                    } catch (e) {
                        console.log(e);
                        reply(msgerr)
                    }
                    break
                case 'public':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/public?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/public?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'orgy':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/orgy?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/orgy?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'pantsu':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/pantsu?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/pantsu?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'glasses':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/glasses?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/glasses?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'cuckold':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/cuckold?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/cuckold?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'thighs':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/thighs?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/thighs?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'pussy':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/pussy?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/pussy?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'ahegao':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/ahegao?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/ahegao?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'uniform':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/uniform?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/uniform?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'gangbang':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/gangbang?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/gangbang?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'tentacles':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/tentacles?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/tentacles?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'manga':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/manga?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/manga?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'incest':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/incest?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/incest?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'creampie':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/creampie?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/creampie?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'eroneko':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroneko?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroneko?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'erokitsune':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/erokitsune?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/erokitsune?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'girlmasturbate':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/girlsolo?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/girlsolo?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'nsfwfeet':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/feet?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, image, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/feet?apikey=17desetembro')
                                client.sendMessage(from, {image: buffer}, image, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                break
                case 'hentainekogif':
                    buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/nsfwnekogif?apikey=17desetembro')
                    ran = getRandom('.gif')
                    rano = getRandom('.mp4')
                    try {
                        if(isNsfw) {
                            fs.writeFileSync(ran, buffer)
                            execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function () {
                                await client.sendMessage(from, {video: fs.readFileSync(rano), gifPlayback: true}, {quoted: msg})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                                
                            })
                        } else if(!isGroup) {
                            fs.writeFileSync(ran, buffer)
                            execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function () {
                                await client.sendMessage(from, {video: fs.readFileSync(rano), gifPlayback: true}, {quoted: msg})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                            })
                        } else return reply('❌Somente PV e com o nsfw ativado❌')
                    }
                    catch (e) {
                        reply(msgerr)
                    }
                    break
                case 'yuri':
                    try {
                        if (isNsfw)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/yuri?apikey=17desetembro')
                            client.sendMessage(from, {image: buffer,  caption: 'Pelo visto o senhor(a) curte desejos homossexuais'}, {quoted: msg})
                        }
                        else if (!isGroup)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/yuri?apikey=17desetembro')
                            client.sendMessage(from, {image: buffer,  caption: 'Pelo visto o senhor(a) curte desejos homossexuais'}, {quoted: msg})
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'anal':
                    try {
                        if (isNsfw)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/anal?apikey=17desetembro')
                            client.sendMessage(from, {image: buffer}, {quoted: msg, caption: 'Fetiches meios estranhos que o senhor(a) tem'})
                        }
                        else if (!isGroup)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/anal?apikey=17desetembro')
                            client.sendMessage(from, {image: buffer}, {quoted: msg, caption: 'Fetiches meios estranhos que o senhor(a) tem'})
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'nsfwneko':
                    try {
                        if (isNsfw) {
                            try{
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroneko?apikey=17desetembro')
                            client.sendMessage(from, {image: buffer, caption: 'Você tem fetiches de animais humanizados? Te vejo no inferno senhor'}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else if(!isGroup)
                        {
                            try{
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroneko?apikey=17desetembro')
                            client.sendMessage(from, {image: buffer, caption: 'Você tem fetiches de animais humanizados? Te vejo no inferno senhor'}, {quoted: msg})
                            }
                            catch{
                                reply(msgerr)
                            }
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'randomhentai':
                    try {
                        if (isNsfw)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/hentai?apikey=17desetembro')
                            client.sendMessage(from, {image: buffer, caption: 'Vejo que o senhor tem desejos depravados'}, {quoted: msg})
                        }
                        else if (!isGroup)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/hentai?apikey=17desetembro')
                            client.sendMessage(from, {image: buffer, caption: 'Vejo que o senhor tem desejos depravados'}, {quoted: msg})
                        }
                        else return reply('❌Somente PV e com o nsfw ativado❌')
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        reply(' *ERROR* ')
                    }
                    break
                case 'nsfw':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (args.length < 1) return reply('E pra ativar ou n klr?')
                        if (Number(args[0]) === 1) {
                            if(isNsfw) return reply('Ja esta ativo')
                            nsfw.push(from)
                            fs.writeFileSync('./src/database/nsfw.json', JSON.stringify(nsfw))
                            reply('O modo nsfw foi ativado!')
                        }
                        else if (Number(args[0]) === 0) {
                            nsfw.splice(from, 1)
                            fs.writeFileSync('./src/database/nsfw.json', JSON.stringify(nsfw))
                            reply('O modo nsfw foi desativado!')
                        }
                        else {
                            reply('1 pra ativar e 0 pra desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'ttthelp':
                    client.sendMessage(from, {text: ttthelp(prefix)}, {quoted: msg})
                break
                case 'tttme':
                    if (!isGroup) return reply(mess.only.group)
                    const checkTTTIdMe = getTTTId(sender)
                    if (checkTTTIdMe === undefined) addTTTId(sender)
                    client.sendMessage(from, {text: tttme(sender.split('@')[0], getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender))}, {quoted:msg})
                break
                case 'tttrank':
                    if (!isGroup) return reply(mess.only.group)
                    tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
                    mentioned_jid = []
                    let board = '*🔥Ranking dos melhores players🔥*\n\n'
                    try {
                    for (let i = 0; i < 3; i++) {
                        if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
                        } else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
                        } else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
                        }
                        mentioned_jid.push(tictactoe[i].jid)
                        } 
                        mentions(board, mentioned_jid, true)
                        } catch (err) {
                        console.log(err)
                        await client.sendMessage(from, {text: `*É necessário 3 jogadores para se construir um ranking*`}, {quoted: msg})
                    }
                break
                case 'coord':
                    tttset.playertest = sender
                    if (!isGroup) {
                        reply(ptbr.group())
                    } else if (tttset.tttstatus == "off") {
                        reply(`*O jogo não foi iniciado*\n*Digite ${prefix}ttt <dificukdade> para iniciar*`)
                    } else if (tttset.player != tttset.playertest) {
                        reply(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
                    } else if (tttset.tttantibug == "on") {
                        reply(`Aguarde a ação anterior ser concluída...`)
                    } else {
                    tttset.tttantibug = "on"
                    const coordX = args[0]
                    if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
                    coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
                    coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
                        reply(`*Diga a cordenada*\nExemplo: ${prefix}coord a1`)
                        tttset.tttantibug = "off"
                    } else {
                    switch (args[0]) {
                        case 'a1':
                            if (esp.a1 != "🔲") {
                                await reply('*Esse espaço ja foi marcado, tente outro')
                        } else {
                            esp.a1 = "❌"
                            while (tttset.reActivate1 == "on") {
                                IA()
                            }
                        }
                        break
                        case 'a2':
                            if (esp.a2 != "🔲") {
                                await reply('*Esse espaço ja foi marcado, tente outro')
                            } else {
                                esp.a2 = "❌"
                                while (tttset.reActivate1 == "on") {
                                    IA()
                                }
                            }
                        break
                        case 'a3':
                            if (esp.a3 != "🔲") {
                                await reply('*Esse espaço ja foi marcado, tente outro')
                            } else {
                                esp.a3 = "❌"
                                while (tttset.reActivate1 == "on") {
                                    IA()
                                }
                            }
                        break
                        case 'b1':
                            if (esp.b1 != "🔲") {
                                await reply('*Esse espaço ja foi marcado, tente outro')
                            } else {
                                esp.b1 = "❌"
                                while (tttset.reActivate1 == "on") {
                                    IA()
                                }
                            }
                        break
                        case 'b2':
                            if (esp.b2 != "🔲") {
                                await reply('*Esse espaço ja foi marcado, tente outro')
                            } else {
                                esp.b2 = "❌"
                                while (tttset.reActivate1 == "on") {
                                    IA()
                                }
                            }
                        break
                        case 'b3':
                            if (esp.b3 != "🔲") {
                                await reply('*Esse espaço ja foi marcado, tente outro')
                            } else {
                                esp.b3 = "❌"
                                while (tttset.reActivate1 == "on") {
                                    IA()
                                }
                            }
                        break
                        case 'c1':
                            if (esp.c1 != "🔲") {
                                await reply('*Esse espaço ja foi marcado, tente outro')
                            } else {
                                esp.c1 = "❌"
                                while (tttset.reActivate1 == "on") {
                                    IA()
                                }
                            }
                        break
                        case 'c2':
                            if (esp.c2 != "🔲") {
                                await reply('*Esse espaço ja foi marcado, tente outro')
                            } else {
                                esp.c2 = "❌"
                                while (tttset.reActivate1 == "on") {
                                    IA()
                                }
                            }
                        break
                        case 'c3':
                            if (esp.c3 != "🔲") {
                                await reply('*Esse espaço ja foi marcado, tente outro')
                            } else {
                                esp.c3 = "❌"
                                while (tttset.reActivate1 == "on") {
                                    IA()
                                }
                            }
                        break
                    }
                tttset.reActivate1 = "on"
                await reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
                var randomTTTXP = 0
                if (WinnerX()) {
                    if (isCmd) {
                        switch (tttset.tttdifficulty) {
                            case "EASY":
                            randomTTTXP = Math.floor(Math.random() * 25) + 25
                            addLevelingXp(tttset.player, randomTTTXP)
                            break
                            case "NORMAL":
                            randomTTTXP = Math.floor(Math.random() * 75) + 75
                            addLevelingXp(tttset.player, randomTTTXP)
                            break
                            case "HARD":
                            randomTTTXP = Math.floor(Math.random() * 200) + 200
                            addLevelingXp(tttset.player, randomTTTXP)
                            break
                            case "IMPOSSIBLE":
                            randomTTTXP = Math.floor(Math.random() * 1000) + 1000
                            addLevelingXp(tttset.player, randomTTTXP)
                            break
                        }
                        client.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*\n\n *VOCÊ GANHOU ${randomTTTXP}XP*`})
                    } else {
                        client.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*`})
                    }
                    const currentTTTwins = getTTTwins(tttset.player)
                    const checkTTTIdWin = getTTTId(tttset.player)
                    if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
                    addTTTwin(tttset.player, 1)
                    addTTTpoints(tttset.player, randomTTTXP)
                    esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
                    esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
                    esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
                    tttset.tttstatus = "off"
                    tttset.waitingTime = "on"
                } else if (WinnerO()) {
                        if (isCmd) {
                        switch (tttset.tttdifficulty) {
                            case "EASY":
                            randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
                            addLevelingXp(tttset.player, randomTTTXP)
                            break
                            case "NORMAL":
                            randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
                            addLevelingXp(tttset.player, randomTTTXP)
                            break
                            case "HARD":
                            randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
                            addLevelingXp(tttset.player, randomTTTXP)
                            break
                            case "IMPOSSIBLE":
                            randomTTTXP = 0
                            addLevelingXp(tttset.player, randomTTTXP)
                            break
                        }	
                        client.sendMessage(from, {text: `*Você perdeu*\n\n AGORA VC PAGARÁ: ${randomTTTXP}XP`})
                        } else {
                        client.sendMessage(from, {text: `*Você perdeu*`})
                        }
                        const currentTTTdefeats = getTTTdefeats(tttset.player)
                        const checkTTTIdDefeat = getTTTId(tttset.player)
                        if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
                        addTTTdefeat(tttset.player, 1)
                        addTTTpoints(tttset.player, randomTTTXP)
                        esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
                        esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
                        esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
                        tttset.tttstatus = "off"
                        tttset.waitingTime = "on"
                    } else if (Tie()) {
                        if (isCmd) {
                        client.sendMessage(from, {text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`})
                        } else {
                        client.sendMessage(from, {text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`})
                        }
                        const currentTTTties = getTTTties(tttset.player)
                        const checkTTTIdTie = getTTTId(tttset.player)
                        if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
                        addTTTtie(tttset.player, 1)
                        esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
                        esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
                        esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
                        tttset.tttstatus = "off"
                        tttset.waitingTime = "on"
                    }
                    tttset.tttantibug = "off"
                    }
                    }
                    break
                case 'ttt':				
                    if (!isGroup) {
                        reply(mess.only.group)
                    } else if (tttset.tttstatus == "on") {
                        reply(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
                    } else if (tttset.waitingTime == "on") {
                        reply(`*Aguarde a ação anterior ser concluída...*`)
                    } else if (args[0].toLowerCase() != 'easy' & args[0].toLowerCase() != 'normal' && args[0].toLowerCase() != 'hard' && args[0].toLowerCase() != 'impossible') {
                        reply(`*Dificuldade não encontrada, escolha uma válida*\n*Dificuldades: easy, normal, hard e impossible*`)
                    } else {
                        tttset.tttstatus = "on"
                        tttset.player = sender
                        tttset.playerName = sender.split('@')[0]
                        tttset.mentionPlayer = msg
                        tttset.local = from
                        if (args[0].toLowerCase() == 'easy') {
                            tttset.tttdifficulty = "EASY"
                        } else if (args[0].toLowerCase() == 'normal') {
                            tttset.tttdifficulty = "NORMAL"
                        } else if (args[0].toLowerCase() == 'hard') {
                            tttset.tttdifficulty = "HARD"
                        } else if (args[0].toLowerCase() == 'impossible') {
                            tttset.tttdifficulty = "IMPOSSIBLE"
                        }
                        const randomStartIA = Math.floor(Math.random() * 3)
                        if (randomStartIA == 0) {
                            IA()
                            tttset.reActivate1 = "on"	
                        }
                        await client.sendMessage(from, {text: `*PARTIDA INICIADA*\n*Dificuldade: ${tttset.tttdifficulty}*\n\n🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}\n\nTenha um bom jogo!`})
                        setTimeout( () => {
                            tttset.waitingTime = "off"
                            tttset.autoEndTime = "on"
                        }, 240000) 
                    }
                    break
                case 'helproleta':
                    reply(helproleta)
                    break
                case 'roletarussamed':
                    if(!isGroup) return reply(mess.only.group)
                    if(roletarussa.includes(from)) return reply('*Comandos de roleta russa bloqueados*')
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    reply('*🔫Girando o tambor, Aguarde 10 segundos... 🔫*\n*😈😈 E se preparem para as consequências 😈😈*')
                    setTimeout(async function() {
                        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        mem = groupMembers[r].jid
                        if(mem.includes(OriginalOwner)) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            mem = groupMembers[r].jid
                        }
                        await client.sendMessage(from, {text: `*💥 O @${mem.split('@')[0]} Não teve sorte💥*\n*😈 Agora se prepare para as consequências 😈*`, mentions: [mem]})
                        await client.groupParticipantsUpdate(from, [mem], 'remove')
                        blockeds.push(mem)
                        fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
                    }, 10000)
                    break
                case 'roletarussaeasy':
                    if(!isGroup) return reply(mess.only.group)
                    if(roletarussa.includes(from)) return reply('*Comandos de roleta russa bloqueados*')
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    reply('*🔫Girando o tambor, Aguarde 10 segundos... 🔫*\n*😈😈 E se preparem para as consequências 😈😈*')
                    setTimeout(async function() {
                        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        mem = groupMembers[r].jid
                        if(mem.includes(OriginalOwner)) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            mem = groupMembers[r].jid
                        }
                        await client.sendMessage(from, {text: `*💥 O @${mem.split('@')[0]} Não teve sorte💥*\n*😈 Agora se prepare para as consequências 😈*`, mentions: [mem]})
                        await client.groupParticipantsUpdate(from, [mem], 'remove')
                        await client.sendMessage(from, {text: `*😈💥 O @${mem.split('@')[0]} pagou pelo seus atos💥😈*`, mentions: [mem]})
                    }, 10000)
                    break
                case 'roletarussapac':
                    if(!isGroup) return reply(mess.only.group)
                    reply('*🔫Girando o tambor...🔫, Aguarde 3 segundos*')
                    setTimeout(async function() {
                        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        mem = groupMembers[r].jid
                        if(mem.includes(OriginalOwner)) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            mem = groupMembers[r].jid
                        }
                        await client.sendMessage(from, {text: `*💥 O @${mem.split('@')[0]} foi burro o suficiente de apontar um revólver carregado na cabeça e atirar💥*`, mentions:[mem]})
                    }, 3000)
                    break
                case 'nfsticker':
                case 'nfstiker':
                    try {
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length < 3) {
                        const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                        rane = getRandom('.'+await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, buffimg)
                        const media = rane
                        ran = getRandom('.webp')
                        npack = args[0]
                        nauthor = args[1]
                        rano = getRandom('.exif')
                        await addExif(npack, nauthor, rano)
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply(mess.error.stick)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                try {
                                    exec(`webpmux -set exif ${rano} ${ran} -o ${ran}`, async (error) => {	
                                        if(error) return reply(`*Houve uma falha, se tentar de novo pode funcionar :3*`)
                                        await client.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: msg})
                                        fs.unlinkSync(media)	
                                        fs.unlinkSync(ran)
                                        fs.unlinkSync(rano)
                                    })
                                } catch {
                                    exec(`webpmux -set exif ${rano} ${ran} -o ${ran}`, async (error) => {
                                        if(error) return reply(`*Houve uma falha, se tentar de novo pode funcionar :3*`)
                                        await client.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: msg})
                                        fs.unlinkSync(media)	
                                        fs.unlinkSync(ran)
                                        fs.unlinkSync(rano)
                                    })
                                }
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-fs 0.99M`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length < 3) {
                        const encmedia = isQuotedVideo ? msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : msg.message.videoMessage
                        rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                        imgbuff = await getFileBuffer(encmedia, 'video')
                        fs.writeFileSync(rane, imgbuff)
                        const media = rane
                        ran = getRandom('.webp')
                        reply(mess.wait)
                        npack = args[0]
                        nauthor = args[1]
                        rano = getRandom('.exif')
                        await addExif(npack, nauthor, rano)
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Não foi possível converter ${tipe} em sticker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                try {
                                    exec(`webpmux -set exif ${rano} ${ran} -o ${ran}`, async (error) => {	
                                        if(error) return reply(`*Houve uma falha, se tentar de novo pode funcionar :3*`)
                                        await client.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: msg})
                                        fs.unlinkSync(media)	
                                        fs.unlinkSync(ran)
                                        fs.unlinkSync(rano)
                                    })
                                } catch {
                                    exec(`webpmux -set exif ${rano} ${ran} -o ${ran}`, async (error) => {			
                                        if(error) return reply(`*Houve uma falha, se tentar de novo pode funcionar :3*`)			
                                        await client.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: msg})
                                        fs.unlinkSync(media)	
                                        fs.unlinkSync(ran)
                                        fs.unlinkSync(rano)
                                    })
                                }
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-fs 0.99M`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    }
                    else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'nstiker':
                case 'nsticker':
                    teks = command == 'nstiker' ? body.slice(9) : body.slice(10)
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                        if(teks.split('|').length < 2) return reply('*Diga o nome do autor e pacote usando | para separa-los*')
                        const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                        rane = getRandom('.'+await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, buffimg)
                        const media = rane
                        gb1 = teks.split('|')[0].trim()
                        gb2 = teks.split('|')[1].trim()
                        ran = getRandom('')
                        buff = await stickerImgTag(media, gb1, gb2, ran)
                        client.sendMessage(from, {sticker: buff.result}, {quoted: msg})
                    } else return reply('*Apenas imagem podem ser colocadas nome de pacote e autor.*')
                    break
                case 'fsticker':
                case 'fstiker':
                    try {
                    if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                        rane = getRandom('.'+await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, buffimg)
                        const media = rane
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply(mess.error.stick)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                client.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: msg})
                                await fs.unlinkSync(media)
                                await fs.unlinkSync(ran)
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : msg.message.videoMessage
                        rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                        imgbuff = await getFileBuffer(encmedia, 'video')
                        fs.writeFileSync(rane, imgbuff)
                        const media = rane
                        ran = getRandom('.webp')
                        reply(mess.wait)
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Não foi possível converter ${tipe} em sticker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                client.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: msg})
                                await fs.unlinkSync(media)
                                await fs.unlinkSync(ran)
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    }
                    else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'csticker':
                case 'cstiker':
                    if ((isMedia && msg.message.imageMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                        rane = getRandom('.'+await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, buffimg)
                        media = rane
                        getpunt = getRandom('.png')
                        inpunt = getRandom('.webp')
                        exec(`magick ${media} -resize 512x512^ -gravity center -extent 512x512 ${getpunt} && magick ${getpunt} -quality 50 -define webp:lossless=true ${inpunt}`, async (error) => {
                            if (error) return reply("Error!")
                            await client.sendMessage(from, {sticker: fs.readFileSync(inpunt)}, {quoted: msg})
                            await fs.unlinkSync(media)
                            await fs.unlinkSync(getpunt)
                            await fs.unlinkSync(inpunt)
                        })
                    } else {
                        reply("Apenas image!")
                    }
                    break
                case 's':
                case 'stiker':
                case 'sticker':
                    try{
                        if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            console.log(encmedia);
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.webp')
                            execute(`ffmpeg -i ${media} -vf scale=512:512 ${ran}`, async function(err, result) {
                                if(err) return reply(mess.error.stick)
                                await client.sendMessage(from, {sticker: {url: `./${ran}`}}, {quoted: msg})
                                await fs.unlinkSync(media)
                                await fs.unlinkSync(ran)
                            })
                        } else if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
                            const encmedia = isQuotedVideo ? msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : msg.message.videoMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'video')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            if(args.length < 1) framerate = 12
                            else framerate = args[0]
                            ran = getRandom('.webp')
                            reply(mess.wait)
                            execute(`ffmpeg -i ${media} -y -vcodec libwebp -fs 0.99M -filter_complex "[0:v] scale=512:512,fps=${framerate},pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, async function(err, res){
                                if(err) return reply(mess.error.stick)
                                await client.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: msg})
                                reply('*Se estiver cortado ou parado, digite o n° de fps apos escrever o comando*')
                                await fs.unlinkSync(media)	
                                await fs.unlinkSync(ran)
                            })
                        } else return reply(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
                    } catch (e) {
                        console.log(e)
                        reply(msgerr)
                    }
                    break
                case 'trash':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/trash?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/trash?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/trash?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'thomas':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/thomas?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/thomas?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/thomas?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'tatto':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/tatto?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/tatto?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/tatto?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'stonks':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/stonks?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/stonks?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/stonks?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'spank':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/spank?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/spank?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/spank?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'rip':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/rip?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/rip?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/rip?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'notstonks':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/notstonks?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/notstonks?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/notstonks?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'mms':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/mms?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/mms?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/mms?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'karaba':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/karaba?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/karaba?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/karaba?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'jail':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/jail?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/jail?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/jail?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'hitler':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/hitler?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/hitler?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/hitler?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'facepalm':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/facepalm?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/facepalm?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/facepalm?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'bluediscord':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/bluediscord?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/bluediscord?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/bluediscord?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'blackdiscord':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/blackdiscord?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/blackdiscord?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/blackdiscord?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'delete':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/delete?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/delete?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/delete?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'confusedstonks':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/confusedstonks?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/confusedstonks?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/confusedstonks?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'dobross':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/dobross?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/dobross?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/dobross?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'beatiful':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/beatiful?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/beatiful?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/beatiful?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'affect':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/affect?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/affect?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/affect?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'ad':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/ad?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/ad?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/ad?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'msg':
                    if(!isOwner) return reply(mess.only.ownerB)
                    reply(JSON.stringify(msg, null, 2))
                    break
                case 'invert':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/invert?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/invert?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/invert?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'greyscale':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/greyscale?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/greyscale?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/greyscale?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'lgbt':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/gay?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/gay?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/gay?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'blur':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/blur?apikey=17desetembro&level=5&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/blur?apikey=17desetembro&level=5&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/blur?apikey=17desetembro&level=5&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'sepie':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            reply(mess.wait)
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/sepie?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            reply(mess.wait)
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/sepie?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            reply(mess.wait)
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/sepie?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {image: buff}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'lisa':
                    teks = body.slice(6)
                    buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/lisapresentation?apikey=17desetembro&text=${teks}`)
                    client.sendMessage(from, {image: buff}, {quoted: msg})
                break
                case 'amongus':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            reply(mess.wait)
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            rano = getRandom('.gif')
                            rane = getRandom('.mp4')
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/amongus?apikey=17desetembro&img=${upload.resultado.link}&text1=${sender.split('@')[0]}%20nao%20era%20o%20impostor&text2=1%20impostor%20restando`)
                            fs.writeFileSync(rano, buff)
                            await exec(`ffmpeg -i ${rano} -pix_fmt yuv420p ${rane}`, async () => {
                                await client.sendMessage(from, {video: fs.readFileSync(rane), gifPlayback:true}, {quoted: msg})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                                fs.unlinkSync(rane)
                            })
                        } else if(args[0] == 'me') {
                            reply(mess.wait)
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.gif')
                            rane = getRandom('.mp4')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/amongus?apikey=17desetembro&img=${upload.resultado.link}&text1=${sender.split('@')[0]}%20nao%20era%20o%20impostor&text2=1%20impostor%20restando`)
                            fs.writeFileSync(rano, buff)
                            await exec(`ffmpeg -i ${rano} -pix_fmt yuv420p ${rane}`, async () => {
                                await client.sendMessage(from, {video: fs.readFileSync(rane), gifPlayback:true}, {quoted: msg})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                                fs.unlinkSync(rane)
                            })
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            reply(mess.wait)
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.gif')
                            rane = getRandom('.mp4')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/amongus?apikey=17desetembro&img=${upload.resultado.link}&text1=${sender.split('@')[0]}%20nao%20era%20o%20impostor&text2=1%20impostor%20restando`)
                            fs.writeFileSync(rano, buff)
                            await exec(`ffmpeg -i ${rano} -pix_fmt yuv420p ${rane}`, async () => {
                                await client.sendMessage(from, {video: fs.readFileSync(rane), gifPlayback:true}, {quoted: msg})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                                fs.unlinkSync(rane)
                            })
                        } else return reply('*Apenas fotos*')
                    } catch (e){
                        console.log(e)
                        reply(msgerr)
                    }
                    break
                case 'triggerfig':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            reply(mess.wait)
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=17desetembro&img=${upload.resultado.link}`)
                            rano = getRandom('.mp4')
                            rane = getRandom('.gif')
                            fs.writeFileSync(rano, buff)
                            execute(`ffmpeg -i ${rano} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${rane}`, async function(err, res){
                                if(err) return reply(mess.error.stick)
                                await client.sendMessage(from, {sticker: fs.readFileSync(rane)}, {quoted: msg})
                                fs.unlinkSync(rano)	
                                fs.unlinkSync(rane)
                                fs.unlinkSync(media)
                            })
                        } else if(args[0] == 'me') {
                            reply(mess.wait)
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=17desetembro&img=${upload.resultado.link}`)
                            rano = getRandom('.mp4')
                            rane = getRandom('.gif')
                            fs.writeFileSync(rano, buff)
                            execute(`ffmpeg -i ${rano} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${rane}`, async function(err, res){
                                if(err) return reply(mess.error.stick)
                                await client.sendMessage(from, {sticker: fs.readFileSync(rane)}, {quoted: msg})
                                fs.unlinkSync(rano)	
                                fs.unlinkSync(rane)
                                fs.unlinkSync(ran)
                            })
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            reply(mess.wait)
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=17desetembro&img=${upload.resultado.link}`)
                            rano = getRandom('.mp4')
                            rane = getRandom('.gif')
                            fs.writeFileSync(rano, buff)
                            execute(`ffmpeg -i ${rano} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${rane}`, async function(err, res){
                                if(err) return reply(mess.error.stick)
                                await client.sendMessage(from, {sticker: fs.readFileSync(rane)}, {quoted: msg})
                                fs.unlinkSync(rano)	
                                fs.unlinkSync(rane)
                                fs.unlinkSync(ran)
                            })
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'triggered':
                    try{
                        if (isMedia && !msg.message.videoMessage || isQuotedImage) {
                            reply(mess.wait)
                            const encmedia = isQuotedImage ? msg.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : msg.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('17desetembro', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {video: buff, gifPlayback: true}, {quoted: msg})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            reply(mess.wait)
                            try {
                                ppimg = await client.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {video: buff, gifPlayback: true}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else if(msg.message.extendedTextMessage.contextInfo.mentionedJid) {
                            reply(mess.wait)
                            mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await client.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('17desetembro', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=17desetembro&img=${upload.resultado.link}`)
                            client.sendMessage(from, {video: buff, gifPlayback: true}, {quoted: msg})
                            fs.unlinkSync(ran)
                        } else return reply('*Apenas fotos*')
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'ttp':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        attp2 = await getBuffer(`https://api.brizaloka-api.tk/ttp/ttp1?apikey=17desetembro&text=${body.slice(5)}&color=00ffff`)
                        client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'ttp2':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp2?apikey=17desetembro&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'ttp3':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp3?apikey=17desetembro&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'ttp4':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp4?apikey=17desetembro&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'ttp5':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp5?apikey=17desetembro&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'ttp6':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp6?apikey=17desetembro&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'attp':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
                        attp2 = await getBuffer(url)
                        client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'attp2':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp1?apikey=17desetembro&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'attp3':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp2?apikey=17desetembro&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'attp4':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp3?apikey=17desetembro&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'attp5':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp4?apikey=17desetembro&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'attp6':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp5?apikey=17desetembro&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'attp7':
                    try{                 
                    if (args.length < 1) return reply(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp6?apikey=17desetembro&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            client.sendMessage(from, {sticker: attp2}, {quoted: msg})
                    } catch(e) {
                        console.log(e)
                        reply(msgerr)
                    }
                break
                case 'hidemarcar':
                    if (!isGroup) return reply(mess.only.group)
                    value = body.slice(12)
                    group = await client.groupMetadata(from)
                    member = group['participants']
                    mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    options = {
                        text: value,
                        mentions: mem
                    }
                    await client.sendMessage(from, options)
                    
                    break
                case 'marcar':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                            teks += `*#* @${mem.id.split('@')[0]}\n`
                            members_id.push(mem.id)
                        }
                        mentions(teks, members_id, true)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'marcar2':
                    try {
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                            teks += `╠➥ @${mem.id.split('@')[0]}\n`
                            members_id.push(mem.id)
                        }
                        reply(teks)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'marcar3':
                    try {
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                            teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
                            members_id.push(mem.id)
                        }
                        client.sendMessage(from, {text: teks}, {quoted: msg})
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'autostickerimg':
                    try {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAutoStickerImg) return reply('Ja esta ativo')
                        autostickerimg.push(from)
                        fs.writeFileSync('./src/database/autostickerimg.json', JSON.stringify(autostickerimg))
                        reply('Ativou com sucesso o recurso de sticker automaticas de imagem neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        autostickerimg.splice(from, 1)
                        fs.writeFileSync('./src/database/autostickerimg.json', JSON.stringify(autostickerimg))
                        reply('Desativou com sucesso o recurso de sticker automaticas de imagem neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'simih':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isSimi) return reply('O modo Simi está ativo')
                            samih.push(from)
                            fs.writeFileSync('./src/database/simi.json', JSON.stringify(samih))
                            reply('Ativado com sucesso o modo simi neste grupo ✔️')
                        } else if (Number(args[0]) === 0) {
                            samih.splice(from, 1)
                            fs.writeFileSync('./src/database/simi.json', JSON.stringify(samih))
                            reply('Desativado com sucesso o modo simi neste grupo ✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'roletrussablock':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isBlockRoleta) return reply('Ja esta ativo')
                            roletarussa.push(from)
                            fs.writeFileSync('./src/database/roletarussa.json', JSON.stringify(roletarussa))
                            reply('Bloqueado roleta russa com sucesso neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            roletarussa.splice(from, 1)
                            fs.writeFileSync('./src/database/roletarussa.json', JSON.stringify(roletarussa))
                            reply('Bloqueado roleta russa com sucesso neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'promote':
                    try {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
                    mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                    if (mentioned.length > 1) {
                        teks = 'Promovido com sucesso\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        mentions(from, mentioned, true)
                        client.groupParticipantsUpdate(from, mentioned, 'promote')
                    } else {
                        mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como Administrador do Grupo!`, mentioned, true)
                        client.groupParticipantsUpdate(from, mentioned, 'promote')
                    }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'demote':
                    try {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
                    mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                    if (mentioned.length > 1) {
                        teks = 'Rebaixado com sucesso\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        mentions(teks, mentioned, true)
                        client.groupParticipantsUpdate(from, mentioned, 'demote')
                    } else {
                        mentions(`Rebaixado com sucesso @${mentioned[0].split('@')[0]} Tornou-se um membro comum!`, mentioned, true)
                        client.groupParticipantsUpdate(from, mentioned, 'demote')
                    }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'ban':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (msg.message.extendedTextMessage != undefined || msg.message.extendedTextMessage != null) {
                        num = msg.message.extendedTextMessage.contextInfo.participant
                        if (!isBotGroupAdmins && num.includes(client.user.id)) return reply(mess.only.Badmin)
                        client.sendMessage(from, {text: bye(num.split('@')[0]), mentions: [num]}, {quoted: msg})
                        client.groupParticipantsUpdate(from, [num], 'remove')
                    }
                    else { 
                        reply('Responda a mensagem da pessoa')
                    }
                    break
                case 'kick':
                    try {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Marque a')
                    mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                    if (!isBotGroupAdmins && !mentioned.includes(client.user.id)) return reply(mess.only.Badmin)
                    if (mentioned.length > 1) {
                        teks = 'Pedidos recebidos, emitidos :\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        mentions(teks, mentioned, true)
                        client.groupParticipantsUpdate(from, mentioned, 'remove')
                    } else {
                        mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
                        client.groupParticipantsUpdate(from, mentioned, 'remove')
                    }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'leave':
                    try {
                        if(!isOwner) return reply(mess.only.ownerB)
                        if (!isGroup) return reply(mess.only.group)
                        if (isGroupAdmins || isOwner) {
                            client.groupLeave(from)
                        } else {
                            reply(mess.only.admin)
                        }
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'listadmins':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        teks = `Lista dos caros adms do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                        no = 0
                        for (let admon of groupAdmins) {
                            no += 1
                            teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                        }
                        mentions(teks, groupAdmins, true)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'listbr':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    teks = '🇧🇷 Números brasileiros no grupo: 🇧🇷\n'
                    men = []
                    for(let mem of groupMembers) {
                        if(mem.id.startsWith(55)) {
                            teks += `➤ @${mem.id.split('@')[0]}\n`
                            men.push(mem.id)
                        }
                    }
                    if(teks.indexOf('➤') < 0) return reply('🇧🇷 *Nenhum numero BR foi encontrado* 🇧🇷')
                    client.sendMessage(from, {text: teks, mentions: men})
                break
                case 'listfake':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    teks = '🏳️ Números fakes no grupo: 🏳️\n'
                    men = []
                    for(let mem of groupMembers) {
                        if(!mem.id.startsWith(55)) {
                            teks += `➤ @${mem.id.split('@')[0]}\n`
                            men.push(mem.id)
                        }
                    }
                    if(teks.indexOf('➤') < 0) return reply('*Nenhum numero Gringo foi encontrado*')
                    client.sendMessage(from, {text: teks, mentions: men})
                break
                case 'listddd':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(args.length < 1) return reply('*Fale o código do pais*')
                    if(isNaN(args[0]))return reply('*Fale o código do pais*')
                    teks = `Números com codigo de país +${args[0]} registrados no grupo:\n`
                    men = []
                    for(let mem of groupMembers) {
                        if(mem.id.startsWith(args[0])) {
                            teks += `➤ @${mem.id.split('@')[0]}\n`
                            men.push(mem.id)
                        }
                    }
                    if(teks.indexOf('➤') < 0) return reply(`*Nenhum numero +${args[0]} foi encontrado*`)
                    client.sendMessage(from, {text: teks, mentions: men})
                break
                case 'linkgroup':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        linkgc = await client.groupInviteCode(from)
                        console.log(linkgc)
                        reply('https://chat.whatsapp.com/'+linkgc)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'abrirgp':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        client.groupSettingUpdate(from, 'not_announcement');
                        reply('*✅ Grupo Aberto com sucesso ✅*')
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'mudarnome':
                    try {
                        if(!isGroup) return reply(mess.only.group)
                        teks = body.slice(11)
                        client.groupUpdateSubject(from, teks)
                    } catch (e) {
                        console.log(e)
                        reply(msgerr)
                    }
                    break
                case 'fechargp':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        client.groupSettingUpdate(from, 'announcement');
                        reply('*✅ Grupo fechado com sucesso ✅*')
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'dontback':
                    if (!isGroup) return reply(mess.only.admin)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        var ind = dbids.indexOf(from)
                        if(isDontBack) {
                            dontback[ind].actived = true
                        } else {
                            dontback.push({
                                groupId: from,
                                actived: true,
                                number: []
                            })
                        }
                        fs.writeFileSync('./src/database/antis/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
                        reply(`Ativou com sucesso o recurso de don't back neste grupo✔️`)
                    } else if (Number(args[0]) === 0) {
                        var ind = dbids.indexOf(from)						
                        if(isDontBack) {
                            dontback[ind].actived = false
                        } else {
                            dontback.push({
                                groupId: from,
                                actived: false,
                                number: []
                            })
                        }
                        fs.writeFileSync('./src/database/antis/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
                        reply(`Desativou com sucesso o recurso de don't back neste grupo✔️`)
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                break
                case 'dbackadd':
                    if (!isGroup) return reply(mess.only.admin)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
                    if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
                    var ind = dbids.indexOf(from)
                    if(isDontBack) {
                        var numind = dontback[ind].number.indexOf(args[0])
                        if(numind >= 0) return reply('*Esse Número ja esta incluso*')
                        dontback[ind].number.push(args[0])
                    } else {
                        dontback.push({
                            groupId: from,
                            actived: false,
                            number: [args[0]]
                        })
                    }
                    fs.writeFileSync('./src/database/antis/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
                    reply(`*Número adicionado a lista de don't back*`)

                break
                case 'dbackrm':
                    if (!isGroup) return reply(mess.only.admin)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
                    if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
                    var ind = dbids.indexOf(from)
                    if(!isDontBack) return reply('*Nenhum Número não foi adicionado*')
                    var numind = dontback[ind].number.indexOf(args[0])
                    if(numind < 0) return reply('*Esse número não está incluso*')
                    dontback[ind].number.splice(numind, 1)
                    fs.writeFileSync('./src/database/antis/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
                    reply(`*Número removido a lista de don't back*`)
                break
                case 'dbacklist':
                    if (!isGroup) return reply(mess.only.admin)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    var ind = dbids.indexOf(from)
                    if(!isDontBack) return reply('*Nenhum Número não foi adicionado*')
                    teks = '*Números que vou moer na porrada se voltar 😡:*\n'
                    for(i=0;i<dontback[ind].number.length;++i) {
                        teks += `➤ *${dontback[ind].number[i]}*\n`
                    }
                    teks += '*Esses ai vou descer meu martelo do ban 🥵*'
                    reply(teks)
                break
                case 'antifake':
                    try {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiFake) return reply('Ja esta ativo')
                        antifake.push(from)
                        fs.writeFileSync('./src/database/antis/antifake.json', JSON.stringify(antifake))
                        reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        antifake.splice(from, 1)
                        fs.writeFileSync('./src/database/antis/antifake.json', JSON.stringify(antifake))
                        reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'antiporn':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiPorn) return reply('Ja esta ativo')
                            antiporn.push(from)
                            fs.writeFileSync('./src/database/antis/antiporn.json', JSON.stringify(antiporn))
                            reply('Ativou com sucesso o recurso de antipornô neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiporn.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antiporn.json', JSON.stringify(antiporn))
                            reply('Desativou com sucesso o recurso de antipornô neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antilinkhard':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiLinkHard) return reply('Ja esta ativo')
                            antilinkhard.push(from)
                            fs.writeFileSync('./src/database/antis/antilinkhard.json', JSON.stringify(antilinkhard))
                            reply('Ativou com sucesso o recurso de antilink hardcore neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antilinkhard.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antilinkhard.json', JSON.stringify(antilinkhard))
                            reply('Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'antilink':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiLink) return reply('Ja esta ativo')
                            antilink.push(from)
                            fs.writeFileSync('./src/database/antis/antilink.json', JSON.stringify(antilink))
                            reply('Ativou com sucesso o recurso de antilink neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antilink.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antilink.json', JSON.stringify(antilink))
                            reply('Desativou com sucesso o recurso de antilink neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antipalavra':
                    try {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiPalavra) return reply('Ja esta ativo')
                        antipalavra.push(from)
                        fs.writeFileSync('./src/database/antis/antipalavra.json', JSON.stringify(antipalavra))
                        if(palavrasid.indexOf(from) < 0) {
                            listantipalavra.push({
                                jid: from,
                                palavras: []
                            })
                        }
                        fs.writeFileSync('./src/database/listaantipalavra.json', JSON.stringify(listantipalavra, null, 2) + '\n')
                        reply('Ativou com sucesso o recurso de anti palavras neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        antipalavra.splice(from, 1)
                        fs.writeFileSync('./src/database/antipalavra.json', JSON.stringify(antipalavra))
                        reply('Desativou com sucesso o recurso de anti palavras neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'addpalavra':
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isAntiPalavra) return reply('*Ative o anti palavra no grupo*')
                    if(args.length < 1) return reply('*Cade a palavra animal*')
                    if(isListAntiPalavra(args[0])) return reply('*Já esta incluso essa palavra*')
                    if(palavrasid.indexOf(from) >= 0) {
                        ind = palavrasid.indexOf(from)
                        listantipalavra[ind].palavras.push(args[0])
                        fs.writeFileSync('./src/database/listaantipalavra.json', JSON.stringify(listantipalavra, null, 2) + '\n')
                        reply(`*✔️ Adicionada com sucesso a palavra ${args[0]} na lista de anti palavras ✔️*`)
                    }
                    break
                case 'rmpalavra':
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isAntiPalavra) return reply('*Ative o anti palavra no grupo*')
                    if(args.length < 1) return reply('*Cade a palavra animal*')
                    if(!isListAntiPalavra(args[0])) return reply('*Não esta incluso essa palavra*')
                    if(palavrasid.indexOf(from) >= 0) {
                        ind = palavrasid.indexOf(from)
                        indpal = listantipalavra[ind].palavras.indexOf(args[0])
                        if(indpal >= 0) {
                            listantipalavra[ind].palavras.splice(indpal, 1)
                            fs.writeFileSync('./src/database/listaantipalavra.json', JSON.stringify(listantipalavra, null, 2) + '\n')
                            reply(`*✔️ Removida com sucesso a palavra ${args[0]} na lista de anti palavras ✔️*`)
                        } else return reply('*Esta palavra não está inclusa*')
                    }
                    break
                case 'listpalavra':
                    if(!isAntiPalavra) return reply('*Ative o anti palavra no grupo*')
                    ind = palavrasid.indexOf(from)
                    if(ind < 0) return reply('*Não há palavras proibidas no grupo*')
                    teks = '*🚫 A lista das palavras proibidas no grupo são: 🚫*\n'
                    for(i = 0; i < listantipalavra[ind].palavras.length; i++) {
                        teks += `❧ ${listantipalavra[ind].palavras[i]}\n`
                    }
                    reply(teks)
                    break
                case 'antidoc':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiDoc) return reply('Ja esta ativo')
                            antidoc.push(from)
                            fs.writeFileSync('./src/database/antis/antidoc.json', JSON.stringify(antidoc))
                            reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antidoc.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antidoc.json', JSON.stringify(antidoc))
                            reply('Desativou com sucesso o recurso de anti documento neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antiloc':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiLoc) return reply('Ja esta ativo')
                            antiloc.push(from)
                            fs.writeFileSync('./src/database/antis/antiloc.json', JSON.stringify(antiloc))
                            reply('Ativou com sucesso o recurso de anti localização neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiloc.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antiloc.json', JSON.stringify(antiloc))
                            reply('Desativou com sucesso o recurso de anti localização neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antiimg':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiImg) return reply('Ja esta ativo')
                            antiimg.push(from)
                            fs.writeFileSync('./src/database/antis/antiimg.json', JSON.stringify(antiimg))
                            reply('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiimg.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antiimg.json', JSON.stringify(antiimg))
                            reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antivideo':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiVid) return reply('Ja esta ativo')
                            antivid.push(from)
                            fs.writeFileSync('./src/database/antis/antivid.json', JSON.stringify(antivid))
                            reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antivid.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antivid.json', JSON.stringify(antivid))
                            reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antisticker':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiSticker) return reply('Ja esta ativo')
                            antisticker.push(from)
                            fs.writeFileSync('./src/database/antis/antivid.json', JSON.stringify(antisticker))
                            reply('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antisticker.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antivid.json', JSON.stringify(antisticker))
                            reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antictt':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiCtt) return reply('Ja esta ativo')
                            antictt.push(from)
                            fs.writeFileSync('./src/database/antis/antictt.json', JSON.stringify(antictt))
                            reply('Ativou com sucesso o recurso de anti contato neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antictt.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antictt.json', JSON.stringify(antictt))
                            reply('Desativou com sucesso o recurso de anti contato neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antiaudio':
                    try {
                        if (!isGroup) return reply(mess.only.group)
                        if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiAudio) return reply('Ja esta ativo')
                            antiaudio.push(from)
                            fs.writeFileSync('./src/database/antis/antiaudio.json', JSON.stringify(antiaudio))
                            reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiaudio.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antiaudio.json', JSON.stringify(antiaudio))
                            reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'mylimit':
                    if(!isLimitActive) return reply('*O limitador de comandos não esta ativado*')
                    if(limitsids.indexOf(sender) < 0) return reply('*Você deve ser uns dos proprietários ou e a primeira vez que usa o bot*')
                    var ind = limitsids.indexOf(sender)
                    reply(`*Olá ${pushname} o seu limite é de ${limitedlist[ind].limit} comandos restantes*`)
                    break
                case 'limitcmd':
                    try {
                        if (!isOwner) return reply(mess.only.ownerB)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isLimitActive) return reply('Ja esta ativo')
                            limitactive.push('Ativado')
                            fs.writeFileSync('./src/database/limitactive.json', JSON.stringify(limitactive))
                            reply('Ativou com sucesso o recurso de limite no bot✔️')
                        } else if (Number(args[0]) === 0) {
                            limitactive.splice(0, 1)
                            fs.writeFileSync('./src/database/limitactive.json', JSON.stringify([]))
                            reply('Desativou com sucesso o recurso de limite no bot✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                        } catch {
                            reply(msgerr)
                        }
                    break
                case 'resetlimit':
                    if (!isOwner) return reply(mess.only.ownerB)
                    fs.writeFileSync('./src/database/limitedlist.json', JSON.stringify([]))
                    reply('Limite resetado com sucesso!! ✔️')
                    break
                case 'rmlimituser':
                    if(!isOwner) return reply(mess.only.ownerB)
                    if(limitsids.indexOf(args[0]+'@s.whatsapp.net') < 0) return reply('*Não há dados sobre esse número nos limites*')
                    var ind = limitsids.indexOf(args[0]+'@s.whatsapp.net')
                    limitedlist.splice(ind, 1)
                    fs.writeFileSync('./src/database/limitedlist.json', JSON.stringify(limitedlist, null, 2) + '\n')
                    mentions(`@${args[0]} foi resetado os limites`, [args[0]+'@s.whatsapp.net'], true)
                    break
                case 'level':
                    if(args.length < 1) {
                        const userLevel = getLevelingLevel(sender)
                        const userXp = getLevelingXp(sender)
                        if (userLevel === undefined && userXp === undefined) return reply(`*Você não esta registrado, para se registrar digite ${prefix}registerlevel*`)
                        const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                        resul = `╭━━👾 𝙇𝙀𝙑𝙀𝙇 𝙎𝙏𝘼𝙏𝙐𝙎 👾━━╮\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Wa.me:* wa.me/${sender.split('@')[0]}\n┣⊱ *XP atual/requirido:* ${userXp}/${requiredXp}\n┣⊱ *Level:* ${userLevel}\n╰━━━━━━━━━━━━━━━━━━━╯`
                        try {
                            ppimg = await client.profilePictureUrl(sender)
                        } catch {
                            ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                        }
                        ppbuff = await getBuffer(ppimg)
                        ran = getRandom('.jpg')
                        fs.writeFileSync(ran, ppbuff)
                        try {
                            const upload = await uploadimg('17desetembro', ran, ran)
                            buf = await getBuffer(`https://api.brizaloka-api.tk/photomod/rank?apikey=17desetembro&name=${sender.split('@')[0]}&atualxp=${userXp}&maxxp=${requiredXp}&desc=2021&colorbar=0061FF&colortext=FF2E00&background=https://i.imgur.com/tVKFNFk.png&profileimg=${upload.resultado.link}&rank=${getLevelingPosition(sender)}`)
                            fs.unlinkSync(ran)
                            client.sendMessage(from, {image: buf, caption: result}, {quoted: msg})
                        } catch {
                            reply(resul)
                        }
                    } else if(!isNaN(args[0])) {
                        const num = args[0]+'@s.whatsapp.net'
                        const userLevel = getLevelingLevel(num)
                        const userXp = getLevelingXp(num)
                        if (userLevel === undefined && userXp === undefined) return reply(`*Você não esta registrado, para se registrar digite ${prefix}registerlevel*`)
                        const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                        const pushname = client.contacts[num] != undefined ? client.contacts[num].vname || client.contacts[num].notify : undefined
                        resul = `╭━━👾 𝙇𝙀𝙑𝙀𝙇 𝙎𝙏𝘼𝙏𝙐𝙎 👾━━╮\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Wa.me:* wa.me/${num.split('@')[0]}\n┣⊱ *XP atual/requirido:* ${userXp}/${requiredXp}\n┣⊱ *Level:* ${userLevel}\n╰━━━━━━━━━━━━━━━━━━━╯`
                        try {
                            ppimg = await client.profilePictureUrl(sender)
                        } catch {
                            ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                        }
                        ppbuff = await getBuffer(ppimg)
                        ran = getRandom('.jpg')
                        fs.writeFileSync(ran, ppbuff)
                        const upload = await uploadimg('17desetembro', ran, ran)
                        buf = await getBuffer(`https://api.brizaloka-api.tk/photomod/rank?apikey=17desetembro&name=${sender.split('@')[0]}&atualxp=${userXp}&maxxp=${requiredXp}&desc=2021&colorbar=0061FF&colortext=FF2E00&background=https://i.imgur.com/tVKFNFk.png&profileimg=${upload.resultado.link}&rank=${getLevelingPosition(sender)}`)
                        fs.unlinkSync(ran)
                        client.sendMessage(from, {image: buf, caption: result}, {quoted: msg})
                    } else return reply('*Diga o número sem +, - ou espaço*')
                break 
                case 'mutados':
                    var ind = GroupsMutedActived.indexOf(from)
                    teks = 'Usuários mutados:\n'
                    for (let _ of muted[ind].numbers) {
                        teks += `@${_.split('@')[0]}\n`
                    }
                    teks += 'Se eles dizerem um piu, desço o martelo do ban neles 😡'
                    reply(teks)
                    break
                case 'mute':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(args.length < 1) return reply('*Marque o número que deseja mutar*')
                    if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('*Marque o número que deseja mutar*')
                    mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                    if(isMuted) {
                        var ind = GroupsMutedActived.indexOf(from)
                        teks = 'Usuários mutados:\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                            muted[ind].numbers.push(_)
                        }
                        fs.writeFileSync('./src/database/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks += 'Se eles dizerem um piu, desço o martelo do ban neles 😡'
                        mentions(teks, mentioned, true)
                    } else {
                        const data = {
                            jid: from,
                            numbers: mentioned
                        }
                        muted.push(data)
                        fs.writeFileSync('./src/database/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = 'Usuários mutados:\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        teks += 'Se eles dizerem um piu, desço o martelo do ban neles 😡'
                        mentions(teks, mentioned, true)
                    }
                    break
                case 'desmute':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(args.length < 1) return reply('*Marque o número que deseja desmutar*')
                    if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('*Marque o número que deseja desmutar*')
                    mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                    var ind = GroupsMutedActived.indexOf(from)
                    if(isMuted) {
                        for(let _ of mentioned) {
                            if(muted[ind].numbers.indexOf(_) >= 0) {
                                var rmind = muted[ind].numbers.indexOf(_)
                                muted[ind].numbers.splice(rmind, 1)
                            }
                        }
                        fs.writeFileSync('./src/database/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = 'Usuários desmutados:\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        teks += 'Agr eles podem falar a vontade 😊'
                        mentions(teks, mentioned, true)
                    } else {
                        const data = {
                            jid: from,
                            numbers: []
                        }
                        muted.push(data)
                        fs.writeFileSync('./src/database/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = 'Usuários desmutados:\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        teks += 'Agr eles podem falar a vontade 😊'
                        mentions(teks, mentioned, true)
                    }
                    break
                case 'banativos':
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isBotGroupAdmins) return reply(mess.only.Badmin)
                    if(!isGroup) return reply(mess.only.group)
                    if(groupIdscount.indexOf(from) >= 0) {
                        for(let obj of groupMembers) {
                            if(numbersIds.indexOf(obj.jid) >=0) { 
                                var indnum = numbersIds.indexOf(obj.jid)
                                if(countMessage[ind].numbers[indnum].messages <= args[0]) {
                                    if(groupAdmins.includes(obj.jid)) {
                                        mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
                                    } else {
                                        client.groupParticipantsUpdate(from, [obj.jid], 'remove')
                                    }
                                }
                            } else {
                                if(groupAdmins.includes(obj.jid)) {
                                    mentions(`@${obj.jid} ta liberado da inspeção por ser admin`, [obj.jid], true)
                                } else {
                                    client.groupParticipantsUpdate(from, [obj.jid], 'remove')
                                }
                            }
                        }
                    }
                    break
                case 'filtroativo':
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isGroup) return reply(mess.only.group)
                    teks = `*Membros que só mandaram ${args[0]} mensagens:*\n`
                    mem = []
                    if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
                    for(let obj of groupMembers) {
                        if(args[0] != 0) { 
                            if(numbersIds.indexOf(obj.jid) >=0) { 
                                var indnum = numbersIds.indexOf(obj.jid)
                                if(countMessage[ind].numbers[indnum].messages == args[0]) {
                                    teks+= `*➣ @${obj.jid.split('@')[0]}*\n`
                                    mem.push(obj.jid)
                                }
                            }
                        } else {
                            if(numbersIds.indexOf(obj.jid) < 0) { 
                                teks+= `*➣ @${obj.jid.split('@')[0]}*\n`
                                mem.push(obj.jid)
                            }
                        }
                    }
                    mentions(teks, mem, true)
                    break
                case 'atividade':
                    try{
                        if(!isGroupAdmins) return reply(mess.only.admin)
                        if(isGroup && groupIdscount.indexOf(from) >= 0) {
                            var ind = groupIdscount.indexOf(from)
                            teks = `*Atividade dos membros do grupo:*\n`
                            mem = []
                            for(let obj of groupMembers) {
                                if(numbersIds.indexOf(obj.jid) >=0) {
                                    var indnum = numbersIds.indexOf(obj.jid)
                                    teks += `➣ *@${countMessage[ind].numbers[indnum].jid.split('@')[0]}*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}\n*Comandos: ${countMessage[ind].numbers[indnum].cmd_messages}*\n`
                                } else {
                                    teks += `➣ *@${obj.jid.split('@')[0]}*\n*Mensagens: 0*\n*Comandos: 0*\n`
                                }
                                mem.push(obj.jid)
                            }
                            mentions(teks, mem, true)
                        } else return reply('*Nada foi encontrado*')
                    } catch (e){
                        console.log(e)
                    }
                    break
                case 'rankativo':
                    if (!isGroup) return reply(mess.only.group)
                    if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
                    var ind = groupIdscount.indexOf(from)
                    if(countMessage[ind].numbers.length < 3) return reply('*Necessita do registro de 3 usuarios*')
                    countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
                    mentioned_jid = []
                    boardi = '*🔥Ranking dos membros mais ativos🔥*\n\n'
                    try {
                        for (let i = 0; i < 3; i++) {
                            if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
                            else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
                            else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
                            
                            mentioned_jid.push(countMessage[ind].numbers[i].jid)
                        } 
                        mentions(boardi, mentioned_jid, true)
                    } catch (err) {
                        console.log(err)
                        reply(`*É necessário 3 jogadores para se construir um ranking*`)
                    }
                break
                case 'checkativo':
                    if (!isGroup) return reply(mess.only.group)
                    if(groupIdscount.indexOf(from) < 0) return reply('*O bot não tem ainda dados sobre o grupo*')
                    var ind = groupIdscount.indexOf(from)
                    if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('*Marque o número que deseja puxar a atividade*')
                    mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
                    if(numbersIds.indexOf(mentioned[0]) >= 0) {
                        var indnum = numbersIds.indexOf(mentioned[0])
                        mentions(`*Consulta da atividade de @${mentioned[0].split('@')[0]} no grupo*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}*\n*Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}*`, mentioned, true)
                    }
                    else {
                        mentions(`*Consulta da atividade de @${mentioned[0].split('@')[0]} no grupo*\n*Mensagens: 0*\n*Comandos dados: 0*`, mentioned, true)
                    }
                    break
                case 'welcomehelp':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    reply(`*Bem vindo ao menu de ajuda do sistema de boas vindas de grupos individuais o comando ${prefix}welcomeadd mais um texto cria uma mensagem de boas vindas quando alguém entra no gp`
                    + `e o comando ${prefix}byeadd cria uma mensagem de despedida, caso queira deixar a mensagem mais decorada também tem o sistema de variáveis, segue abaixo as variáveis que pode usar:*\n`
                    + `\n*#data#* - _mostra a data atual_`
                    + `\n*#hora#* - _mostra a hora atual_`
                    + `\n*#botnum#* - _mostra o numero do bot_`
                    + `\n*#user#* - _mostra o nome do usuário que entrar_`
                    + `\n*#numuser#* - _mostra o número do usuário que entrar_`
                    + `\n*#groupname#* - _mostra o nome do grupo_`)
                    break
                case 'welcome':
                    try {
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isWelkom) return reply('Ja esta ativo')
                        welkom.push(from)
                        fs.writeFileSync('./src/database/welkom.json', JSON.stringify(welkom))
                        reply('Ativou com sucesso o recurso de boas-vindas neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        welkom.splice(from, 1)
                        fs.writeFileSync('./src/database/welkom.json', JSON.stringify(welkom))
                        reply('Desativou com sucesso o recurso de boas-vindas neste grupo✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'byeadd':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(args.length < 1) return reply('*Escreva a mensagem de saída*')
                    teks = body.slice(8)
                    if(isByed) {
                        var ind = groupIdBye.indexOf(from)
                        bye_group[ind].msg = teks
                        fs.writeFileSync('./src/database/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
                        reply('*Mensagem de saída alteradas com sucesso!*')
                    } else {
                        var json = {
                            jid: from,
                            msg: teks
                        }
                        bye_group.push(json)
                        fs.writeFileSync('./src/database/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
                        reply('*Mensagem de saída criada com sucesso!*')
                    }
                    break
                case 'welcomeadd':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
                    teks = body.slice(12)
                    if(isWelcomed) {
                        var ind = groupIdWelcomed.indexOf(from)
                        welcome_group[ind].msg = teks
                        fs.writeFileSync('./src/database/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
                        reply('*Mensagem de boas vindas alteradas com sucesso!*')
                    } else {
                        var json = {
                            jid: from,
                            msg: teks
                        }
                        welcome_group.push(json)
                        fs.writeFileSync('./src/database/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
                        reply('*Mensagem de boas vindas criada com sucesso!*')
                    }
                    break
                case 'gpinitvoto':
                case 'gpvotoinit':
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isGroup) return reply(mess.only.group)
                    if(isVotoGroupActived) return reply('*Uma votação de grupo já foi iniciada*')
                    teks = body.slice(12).split('|')
                    if(teks.length <= 2) return reply('*Deve ter pelo menos 2 opções e um tema para iniciar uma votação*')
                    t1 = teks[0]
                    optsdata = []
                    optsteks = ''
                    for(i=1;i<teks.length;++i){
                        optsdata.push({
                            nome: teks[i].trim(),
                            votou: []
                        })
                        if(i == teks.length) optsteks += `*${i}) ${teks[i].trim()}*`
                        else optsteks += `*${i}) ${teks[i].trim()}*\n`
                    }
                    votodata = {
                        group_id: from,
                        tema: t1.trim(),
                        votos: optsdata
                    }
                    gpvoto.push(votodata)
                    fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify(gpvoto, null, 2) + '\n')
                    reply(`*Votação de grupo iniciada*\n*Tema: ${t1.trim()}*\n\n*Opções:*\n${optsteks}`)
                    break
                case 'gpvotoclear':
                case 'gpclearvoto':
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isGroup) return reply(mess.only.group)
                    if(!isVotoGroupActived) return reply('*Uma votação de grupo não foi iniciada*')
                    var ind = votoactivegp.indexOf(from)
                    for(i=0;i< gpvoto[ind].votos.length;++i) gpvoto[ind].votos[i].votou = []
                    fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify(gpvoto, null, 2) + '\n')
                    reply(`*Votação de grupo resetada com o tema ${gpvoto[ind].tema}*`)
                    break
                case 'gpstatusvoto':
                case 'gpvotostatus':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isVotoGroupActived) return reply('*Uma votação de grupo não foi iniciada*')
                    var ind = votoactivegp.indexOf(from)
                    opts = ''
                    for(i=0;i<gpvoto[ind].votos.length;++i) {
                        opts += `*${i+1}) ${gpvoto[ind].votos[i].nome}*\n*Votaram: ${gpvoto[ind].votos[i].votou.length}*\n\n`
                    }
                    reply(`*Status de voto*\n*Tema: ${gpvoto[ind].tema}*\n*Opções:*\n${opts}`)
                    break
                case 'gpvoto':
                    if(!isGroup) return reply(mess.only.group)
                    if(!isVotoGroupActived) return reply('*Nenhuma votação foi iniciada*')
                    var ind = votoactivegp.indexOf(from)
                    votenum = args[0] - 1
                    if(isNaN(votenum)) return reply('*Isso não é uma opção*')
                    allnumvoted = []
                    for(let obj of gpvoto[ind].votos) {
                        for(let nums of obj.votou) {
                            allnumvoted.push(nums)
                        }
                    }
                    if(allnumvoted.indexOf(sender) >= 0) return reply('*Você já votou amigão*')
                    try {
                        gpvoto[ind].votos[votenum].votou.push(sender)
                        fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify(gpvoto, null, 2) + '\n')
                        reply('*Voto registrado com sucesso*')
                    } catch {
                        reply('*Não foi encontrado essa opção*')
                    }
                    break
                case 'gpfinishvoto':
                case 'gpvotofinish':
                    if(!isGroupAdmins) return reply(mess.only.admin)
                    if(!isGroup) return reply(mess.only.group)
                    if(!isVotoGroupActived) return reply('*Nenhuma votação foi iniciada*')
                    var ind = votoactivegp.indexOf(from)
                    teks = `*Opções:*\n`
                    for(i=0;i<gpvoto[ind].votos.length;++i) {
                        teks += `*${i+1}) ${gpvoto[ind].votos[i].nome}*\n*Votos: ${gpvoto[ind].votos[i].votou.length}*\n\n`
                    }
                    reply(`*Votação encerrada*\n\n*Tema: ${gpvoto[ind].tema}*\n\n${teks}`)
                    fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify([], null, 2) + '\n')
                    break
                case 'gpvotohelp':
                    reply(gpvotohelp(prefix))
                    break
                case 'statusvoto':
                case 'votostatus':
                    if(!isVotoInit) return reply('*Nenhuma votação foi iniciada*')
                    opts = ''
                    for(i=0;i<voto[0].votos.length;++i) {
                        opts += `*${i+1}) ${voto[0].votos[i].nome}*\n*Votaram: ${voto[0].votos[i].votou.length}*\n\n`
                    }
                    reply(`*Status de voto*\n*Tema: ${voto[0].tema}*\n*Opções:*\n${opts}`)
                    break
                case 'voto':
                    if(!isVotoInit) return reply('*Nenhuma votação foi iniciada*')
                    votenum = args[0] - 1
                    if(isNaN(votenum)) return reply('*Isso não é uma opção*')
                    allnumvoted = []
                    for(let obj of voto[0].votos) {
                        for(let nums of obj.votou) {
                            allnumvoted.push(nums)
                        }
                    }
                    if(allnumvoted.indexOf(sender) >= 0) return reply('*Você já votou amigão*')
                    try {
                        voto[0].votos[votenum].votou.push(sender)
                        fs.writeFileSync('./src/database/voto.json', JSON.stringify(voto, null, 2) + '\n')
                        reply('*Voto registrado com sucesso*')
                    } catch {
                        reply('*Não foi encontrado essa opção*')
                    }
                    break
                case 'finishvoto':
                case 'votofinish':
                    if(!isOwner) return reply(mess.only.ownerB)
                    if(!isVotoInit) return reply('*Nenhuma votação foi iniciada*')
                    teks = `*Opções:*\n`
                    for(i=0;i<voto[0].votos.length;++i) {
                        teks += `*${i+1}) ${voto[0].votos[i].nome}*\n*Votos: ${voto[0].votos[i].votou.length}*\n\n`
                    }
                    reply(`*Votação encerrada*\n\n*Tema: ${voto[0].tema}*\n\n${teks}`)
                    fs.writeFileSync('./src/database/voto.json', JSON.stringify([], null, 2) + '\n')
                    break
                case 'votohelp':
                    reply(votohelp(prefix))
                    break
                case 'initvoto':
                case 'votoinit':
                    if(!isOwner) return reply(mess.only.ownerB)
                    if(isVotoInit) return reply('*Uma votação já foi iniciada*')
                    teks = body.slice(10).split('|')
                    if(teks.length <= 2) return reply('*Deve ter pelo menos 2 opções e um tema para iniciar uma votação*')
                    t1 = teks[0]
                    optsdata = []
                    optsteks = ''
                    for(i=1;i<teks.length;++i){
                        optsdata.push({
                            nome: teks[i].trim(),
                            votou: []
                        })
                        if(i == teks.length) optsteks += `*${i}) ${teks[i].trim()}*`
                        else optsteks += `*${i}) ${teks[i].trim()}*\n`
                    }
                    votodata = {
                        tema: t1.trim(),
                        votos: optsdata
                    }
                    voto.push(votodata)
                    fs.writeFileSync('./src/database/voto.json', JSON.stringify(voto, null, 2) + '\n')
                    reply(`*Votação geral iniciada*\n*Tema: ${t1.trim()}*\n\n*Opções:*\n${optsteks}`)
                    break
                case 'votoclear':
                case 'clearvoto':
                    if(!isOwner) return reply(mess.only.ownerB)
                    if(!isVotoInit) return reply('*Nenhuma votação foi iniciada*')
                    for(i=0;i< voto[0].votos.length;++i) voto[0].votos[i].votou = []
                    fs.writeFileSync('./src/database/voto.json', JSON.stringify(voto, null, 2))
                    reply(`*Votação geral resetada com o tema ${voto[0].tema}*`)
                    break
                case 'block':
                    try{
                        if(!isOwner) return reply('Somente meu propietário e autorizados podem usar esse comando')
                        if(args.length <1 ) return reply('Cade o número?')
                        num = args[0]
                        if(args[0].startsWith('@')){ num = num.slice(1)}
                        if(isNaN(num)) return reply('Isso não é um numero de telefone')
                        if(num == OriginalOwner) return reply('Não posso bloquear meu propietário')
                        if(blockeds.includes(num+'@s.whatsapp.net')) return reply('Ja está bloqueado')
                        blockeds.push(num+'@s.whatsapp.net')
                        fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
                        client.updateBlockStatus([num+'@s.whatsapp.net'], 'block')
                        reply('*✅ Bloqueado com sucesso ✅*')
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'unblock':
                    try{
                        if(!isOwner) return reply('Somente meu propietário e autorizados podem usar esse comando')
                        if(args.length <1 ) return reply('Cade o número?')
                        num = args[0]
                        if(num.startsWith('@')){ num = num.slice(1)}
                        if(isNaN(num)) return reply('Isso não é um numero de telefone')
                        if(!blockeds.includes(num+'@s.whatsapp.net')) return reply('Ja está desbloqueado')
                        var indice = blockeds.indexOf(num+'@s.whatsapp.net');
                        blockeds.splice(indice, 1);
                        fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
                        client.updateBlockStatus([num+'@s.whatsapp.net'], 'unblock')
                        reply('*✅ Desbloqueado com sucesso ✅*')
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antinewchat':
                    try {
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiNewchat) return reply('Ja esta ativo')
                        antinewchat.push('Ativado')
                        fs.writeFileSync('./src/database/antis/antinewchat.json', JSON.stringify(antinewchat))
                        reply('Ativou com sucesso o recurso de anti chat novo no bot✔️')
                    } else if (Number(args[0]) === 0) {
                        antinewchat.splice(0, 1)
                        fs.writeFileSync('./src/database/antis/antinewchat.json', JSON.stringify([]))
                        reply('Desativou com sucesso o recurso de anti chat novo no bot✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antipv':
                    try {
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiPv) return reply('Ja esta ativo')
                        antipv.push('Ativado')
                        fs.writeFileSync('./src/database/antis/antipv.json', JSON.stringify(antipv))
                        reply('Ativou com sucesso o recurso de antipv no bot✔️')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiPv) return reply('*Já esta desativado*')
                        antipv.splice(0, 1)
                        fs.writeFileSync('./src/database/antis/antipv.json', JSON.stringify([]))
                        reply('Desativou com sucesso o recurso de antipv no bot✔️')
                    } else {
                        reply('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'antispamcmd':
                    try {
                        if (!isOwner) return reply(mess.only.ownerB)
                        if (args.length < 1) return reply('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiSpamcmd) return reply('Ja esta ativo')
                            antispamcmd.push('Ativado')
                            fs.writeFileSync('./src/database/antis/antispamcmd.json', JSON.stringify(antispamcmd))
                            reply('Ativou com sucesso o recurso de anti spam de comando no bot✔️')
                        } else if (Number(args[0]) === 0) {
                            antispamcmd.splice(0, 1)
                            fs.writeFileSync('./src/database/antis/antispamcmd.json', JSON.stringify([]))
                            reply('Desativou com sucesso o recurso de anti spam de comando no bot✔️')
                        } else {
                            reply('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'toimg':
                    try {
                        if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
                        reply(mess.wait)
                        const encmedia = isQuotedSticker ? msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : msg.message.stickerMessage
                        rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                        rano = getRandom('.png')
                        imgbuff = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, imgbuff)
                        exec(`ffmpeg -i ${rane} -vf scale=512:512 ${rano}`, async (err, res) => {
                            if(err) return reply(msgerr)
                            await client.sendMessage(from, {image: fs.readFileSync(rano)})
                            fs.unlinkSync(rane)
                            fs.unlinkSync(rano)
                        })
                    } catch (e) {
                        console.log(e);
                        reply(msgerr)
                    }
                    break
                case 'criador':
                        try {
                            client.sendMessage(from, {contacts: {displayName: 'Meu criador ^-^', contacts: [{vcard}]}})
                            client.sendMessage(from, {text: 'Este é o número do meu proprietário >_<, não envie spam ou bloqueio você'}, { quoted: msg} )
                        } catch {
                            reply(msgerr)
                        }
                    break
                case 'blacklist':
                    try{
                        mem_id = []
                        list = 'Lista das pessoas que não obedeço 🤏😎: \n'
                        for( i = 0; i < blockeds.length; i++) {
                            list += '@'+blockeds[i].split('@')[0]+'\n'
                            mem_id += blockeds[i]
                        }
                        client.sendMessage(from, {text: list, mentions: mem_id}, {quoted: msg})
                    } catch {
                        reply(msgerr)
                    }
                break
                case 'blocklist':
                    json_list = await client.getBlocklist()
                    teks = `🚫 *Números bloqueado pelo bot* 🚫\n\n`
                    for(let obj of json_list.content[0].content) {
                        teks += `➽ @${obj.attrs.jid.split('@')[0]}\n`
                    }
                    reply(teks)
                    break
                case 'ping':
                    try{
                        timest = speed();
                        latensi = speed() - timest
                        reply(`*Velocidade: _${latensi.toFixed(4)}ms_*`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'oficialcriador':
                        const vcardcreator = 'BEGIN:VCARD\n' 
                            + 'VERSION:3.0\n' 
                            + 'FN:Meu criador^~^\n' 
                            + 'ORG:Ian;\n' 
                            + 'TEL;type=CELL;type=VOICE;waid=557187645787:+55 71 8764-5787\n' 
                            + 'END:VCARD'
                        client.sendMessage(from, {contacts: {displayName: "Ian Pablo", contacts: [vcardcreator]}}, {quoted: msg})
                        client.sendMessage(from, {text:`*Esse é o contato do meu criador oficial, o do comando ${prefix}criador é o proprietário do bot*`})
                    break
                case 'info':
                    me = client.user
                    uptime = process.uptime()
                    teks = `*Nome do bot: _${me.name}_*
*Número do Bot: _@${me.id.split('@')[0]}_*
*Prefix: _${prefixs.join(', ')}_*
*O bot esta ativo desde: _${horario(uptime)}_*

*Funções Ativas:*

*Limite de comandos: _${isLimitActive ? '✅' : '❌'}_*
*Anti-privado: _${isAntiPv ? '✅' : '❌'}_*
*Anti-spam de comando: _${isAntiSpamcmd ? '✅' : '❌'}_*
*Anti-chat novo: _${isAntiNewchat ? '✅' : '❌'}_*
*Anti-call: _${isAntiCall ? '✅' : '❌'}_*
*Bloqueio de nível: _${isBlockLevel ? '✅' : '❌'}_*`
                    buffer = await getBuffer(await client.profilePictureUrl(client.user.id))
                    client.sendMessage(from, {image: buffer, caption: teks, mentions: [client.user.id]})
                    break
                case 'listblockcmd':
                    try{
                        teks = '*🚫 A lista de comandos bloqueado são: 🚫*\n'
                        for(i = 0; i < blockcmd.length; i++) {
                            teks += `❧ ${blockcmd[i]}\n`
                        }
                        reply(teks)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'blockcmd':
                    try {
                        if(!isOwner) return reply('Quem é Você?')
                        if (args.length < 1) return reply('*Bloquear com que comando?*')
                        if(isCmdBlocked(args[0])) return reply('*Já esta incluso essa palavra*')
                        cmd = args[0]
                        blockcmd.push(cmd)
                        fs.writeFileSync('./src/database/blockcmd.json', JSON.stringify(blockcmd))
                        reply('*✅ Comando bloqueado com sucesso ✅*')
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'unblockcmd':
                    try {
                        if(!isOwner) return reply(mess.only.ownerB)
                        if(args.length < 1) return reply('*Cade a palavra animal*')
                        if(!isCmdBlocked(args[0])) return reply('*Não esta incluso essa palavra*')
                        ind = blockcmd.indexOf(args[0])
                        blockcmd.splice(ind, 1)
                        fs.writeFileSync('./src/database/blockcmd.json', JSON.stringify(blockcmd))
                        reply(`*✔️ Comando ${args[0]} desbloqueado com sucesso*`)
                    } catch {
                        reply(msgerr)
                    }
                    break
                case 'menulite':
                    client.sendMessage(from, { text: help(prefix, time, pushname, `Wa.me/${sender.split('@')[0]}`)}, {quoted: msg })
                    break
                case 'ajuda':
                case 'help':
                case 'comandos':
                case 'menu':
                    buff = await getBuffer(menuimg)
                    client.sendMessage(from, {image: buff, caption: help(prefix, time, sender.split('@')[0], `Wa.me/${sender.split('@')[0]}`), mentions: [sender]})
                    break
                default:
                    if (isGroup && isSimi && budy != undefined && type === 'conversation' && bidy.toLowerCase().includes('brizas')) {
                        simires = await simih(budy)
                        reply(simires)
                    }
                    if(isCmd) {
                        console.log(color('[ERRO]','red'), `[Comando ${command} que foi dado por ${color(sender.split('@')[0])} não é registrado]`)    
                        reply(notregister)
                    }
            }
        } catch(e) {
            console.log(e);
            console.log('*Houve um erro!*')
        }
    })

    client.ev.on('connection.update', async (update) => {
        const {connection, lastDisconnect, qr} = update
        if(qr) {
            console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escaneie o qr code, mas vc precisa de um celular novo ou wpp web'))
        }
        if(connection === 'close') {
            if(process.argv.indexOf('--no-retry') >= 0) {
                process.exit()
            } else {
                const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
                if(shouldReconnect) {
                    startSocket()
                } else process.exit()
            }
            connected = false
        }
        if(connection === 'open') {
            connected = true    
            success('2', 'Pronto, conectei :)')
            if(panelOn) {
                console.log(chalk.yellow.bold('Iniciando painel do proprietário'))
                startPanel(client)
            }
            
        }
        if(connection === 'connecting') {
            connected = false
            start('2', 'Pera la to conectando...')
        }
        if(update.isNewLogin) {
            success('2', 'Conectado com sucesso! Reinicie o programa para logar no whatsapp web')
        }
    })
        
    client.ev.on ('creds.update', saveCreds)
}

startSocket()