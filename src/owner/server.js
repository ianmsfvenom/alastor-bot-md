const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const chalk = require('chalk');
const { port, websocket_port, login, password } = require('./config.json');
const { join } = require('path');
const ip = require('ip')
const http = require('http');
const { ownerNumber } = require('../../config');
const server = http.createServer(app);
process.env.BASE_URL = (!process.env.BASE_URL) ? `http://${ip.address()}:${port}` : process.env.BASE_URL;
const io = require('socket.io')(server, {
    cors: {
    origin: [`http://localhost:${websocket_port}`, `http://localhost:${port}`, `http://${ip.address()}:${port}`, `http://${ip.address()}:${websocket_port}`],
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const isLogged = (ip) => {
    const logins = JSON.parse(fs.readFileSync(join(__dirname, '/logins.json')))
    if (logins.includes(ip)) return true
    else return false
}

async function startPanel(client = require('@adiwajshing/baileys').default({}) ) {
    await app.use(express.static(join(__dirname + '/public')))
    app.get('/get_url_ws', (req, res) => {
        var ipAdress = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ipAdress)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        res.status(200).json({
            url: `http://${ip.address()}:${websocket_port}`}
        )
    })
    app.get('/', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.redirect('/login')
        return res.redirect('/home')
        
    })
    app.get('/login', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(isLogged(ip)) return res.redirect('/home')
        const html = fs.readFileSync(join(__dirname + '/public/html/login.html'), {encoding: 'utf-8'})
        res.status(200).send(html)
    })
    app.post('/login', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        if(isLogged(ip)) return res.redirect('/home')
        if(!req.body.login || !req.body.password) return res.status(400).json({status: 400, message: 'Bad Request'})
        if(req.body?.login == login && req.body?.password == password) {
            const logins = JSON.parse(fs.readFileSync(join(__dirname, '/logins.json')))
            logins.push(ip)
            fs.writeFileSync(join(__dirname, '/logins.json'), JSON.stringify(logins))
            res.status(200).json({status: 200, message: 'Logged'})
        } else {
            res.status(401).json({status: 401, message: 'Unauthorized'})
        }
    })

    app.get('/home', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
        if(!isLogged(ip)) return res.redirect('/login')
        const html = fs.readFileSync(join(__dirname, '/public/html/index.html'), {encoding: 'utf-8'})
        const html_sidebar = fs.readFileSync(join(__dirname, '/public/html/sidebar.html'), {encoding: 'utf-8'})
        res.status(200).send(html.replace('sidebar-menu', html_sidebar))
    })
    app.get('/logs', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.redirect('/login')
        const html = fs.readFileSync(join(__dirname, '/public/html/messages.html'), {encoding: 'utf-8'})
        const html_sidebar = fs.readFileSync(join(__dirname, '/public/html/sidebar.html'), {encoding: 'utf-8'})
        res.status(200).send(html.replace('sidebar-menu', html_sidebar))
    })
    app.get('/tools', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.redirect('/login')
        const html = fs.readFileSync(join(__dirname, '/public/html/tools.html'), {encoding: 'utf-8'})
        const html_sidebar = fs.readFileSync(join(__dirname, '/public/html/sidebar.html'), {encoding: 'utf-8'})
        res.status(200).send(html.replace('sidebar-menu', html_sidebar))
    })
    app.post('/api/accept_group', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        if(!req.body.invite) return res.status(400).json({msg: 'Link do grupo não encontrado'})
        try {
            await client.groupAcceptInvite(req.body.invite.trim().split('/')[3])
            res.json({msg: 'success!'})
        } catch (e) {
            res.status(503).json({msg: 'Falha no servidor'})
        }
    })
    app.post('/api/sendmess', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        if(!req.body.json) return res.status(400).json({msg: 'Objeto não encontrado'})
        try {
            let json = JSON.parse(req.body.json)
            if(!json.msg) return res.status(400).json({msg: 'Mensagem não encontrada'})
            if(!json.jid) return res.status(400).json({msg: 'Número não encontrado'})
            await client.sendMessage(json.jid+'@s.whatsapp.net', {text: json.msg})
        } catch {
            res.status(503).json({msg: 'Falha no servidor'})
        }
    })
    app.post('/api/leave', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        if(!req.body.jid) return res.status(400).json({msg: 'Objeto não encontrado'})
        try {
            if( req.body.jid.endsWith('@g.us') && (await client.onWhatsApp([req.body.jid]))) {
                await client.groupLeave(req.body.jid)
                res.json({msg: 'Sucess!'})
            }
        } catch {
            res.status(503).send({msg: 'Falha no servidor!'})
        }
    })
    app.post('/api/blockcmd', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        if(!req.body.cmd) return res.status(400).json({msg: 'Objeto não encontrado'})
        if(req.body.cmd.length < 1) return res.status(400).json({msg: 'Comando não existe'})
        var cmd = req.body.cmd
        const blockcmd = JSON.parse(fs.readFileSync('./src/database/blockcmd.json'))
        if(blockcmd.indexOf(cmd) >= 0 ) return res.status(403).json({msg: 'Este comando já está bloqueado'})
        blockcmd.push(cmd)
        fs.writeFileSync('./src/database/blockcmd.json', JSON.stringify(blockcmd))
        res.status(200).json({msg: 'Success!', stts: 200})
    })
    app.post('/api/unblockcmd', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        if(!req.body.cmd) return res.status(400).json({msg: 'Objeto não encontrado'})
        if(req.body.cmd.length < 1) return res.status(400).json({msg: 'Comando não existe'})
        var cmd = req.body.cmd 
        const blockcmd = JSON.parse(fs.readFileSync('./src/database/blockcmd.json'))
        var pos = blockcmd.indexOf(cmd)
        if(pos < 0) return res.status(400).json({msg: 'Esse número não está registrado'})
        blockcmd.splice(pos, 1)
        fs.writeFileSync('./src/database/blockcmd.json', JSON.stringify(blockcmd))
        res.status(200).json({msg: 'Success!', stts: 200})
    })
    app.post('/api/block', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        if(!req.body.number) return res.status(400).json({msg: 'Número inválido'})
        if(req.body.number.length < 1) return res.status(400).json({msg: 'Número não existe'})
        var number = req.body.number
        try {
            const blockeds = JSON.parse(fs.readFileSync('./src/database/blocklist.json'))
            if(blockeds.indexOf(number) >= 0 ) return res.status(403).json({msg: 'Este número já está bloqueado'})
            blockeds.push(number)
            fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
            res.status(200).json({msg: 'Success!', stts: 200})
        } catch {
            res.status(503).json({msg: 'Erro no servidor!', stts: 503})
        }
    })
    app.post('/api/unblock', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        if(!req.body.number) return res.status(400).json({msg: 'Número inválido'})	
        if(req.body.number.length < 1) return res.status(400).json({msg: 'Número não existe'})
        var number = req.body.number 
        const blockeds = JSON.parse(fs.readFileSync('./src/database/blocklist.json'))
        var pos = blockeds.indexOf(number)
        if(pos < 0) return res.status(400).json({msg: 'Esse número não está registrado'})
        blockeds.splice(pos, 1)
        fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
        res.status(200).json({msg: 'Success!', stts: 200})
    })
    app.post('/api/post-tools', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        if(!req.body.tools) return res.status(400).json({msg: 'Objeto não encontrado'})
        const blocklevel = JSON.parse(fs.readFileSync('./src/database/level_block.json'))
        const antispamcmd = JSON.parse(fs.readFileSync('./src/database/antis/antispamcmd.json'))
        const antinewchat = JSON.parse(fs.readFileSync('./src/database/antis/antinewchat.json'))
        const antipv = JSON.parse(fs.readFileSync('./src/database/antis/antipv.json'))
        const antiligar = JSON.parse(fs.readFileSync('./src/database/antis/anticall.json'))
        const limitcmd = JSON.parse(fs.readFileSync('./src/database/limitactive.json'))
        var data = JSON.parse(req.body.tools)
        for(let obj of data) {
            if(obj.tag == 'limitcmd') {
                if(obj.active && !limitcmd.includes('Ativado')) limitcmd.push('Ativado')
                else if(!obj.active) limitcmd.splice(0, 1)
                fs.writeFileSync('./src/database/limitactive.json', JSON.stringify(limitcmd))
            }
            if(obj.tag == 'blocklevel') {
                blocklevel.level_blocked = obj.active
                fs.writeFileSync('./src/database/level_block.json', JSON.stringify(blocklevel))
            }
            if(obj.tag == 'antispamcmd') {
                if(obj.active && antispamcmd.length < 1) antispamcmd.push('Ativado')
                else if(!obj.active) antispamcmd.splice(0, 1)
                fs.writeFileSync('./src/database/antis/antispamcmd.json', JSON.stringify(antispamcmd))
            }
            if(obj.tag == 'antinewchat') {
                if(obj.active && antinewchat.length < 1) antinewchat.push('Ativado')
                else if(!obj.active) antinewchat.splice(0, 1)
                fs.writeFileSync('./src/database/antis/antinewchat.json', JSON.stringify(antinewchat))
            }
            if(obj.tag == 'antipv') {
                if(obj.active && antipv.length < 1) antipv.push('Ativado')
                else if(!obj.active) antipv.splice(0, 1)
                fs.writeFileSync('./src/database/antis/antipv.json', JSON.stringify(antipv))
            }
            if(obj.tag == 'antiligar') {
                if(obj.active && antiligar.length < 1) antiligar.push('Ativado')
                else if(!obj.active) antiligar.splice(0, 1)
                fs.writeFileSync('./src/database/antis/anticall.json', JSON.stringify(antiligar))
            }
        }
        res.json({
            msg: 'success'
        })
    })
    app.get('/api/get-tools', async(req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        const blocklevel = JSON.parse(fs.readFileSync('./src/database/level_block.json'))
        const antispamcmd = JSON.parse(fs.readFileSync('./src/database/antis/antispamcmd.json'))
        const antinewchat = JSON.parse(fs.readFileSync('./src/database/antis/antinewchat.json'))
        const antipv = JSON.parse(fs.readFileSync('./src/database/antis/antipv.json'))
        const antiligar = JSON.parse(fs.readFileSync('./src/database/antis/anticall.json'))
        const limitcmd = JSON.parse(fs.readFileSync('./src/database/limitactive.json'))
        res.json([{
            name: 'Limite de comandos',
            tag: 'limitcmd',
            active: limitcmd.includes('Ativado') 
        }, {
            name: 'Bloquear Sistema de Níveis',
            tag: 'blocklevel',
            active: blocklevel.level_blocked 
        }, {
            name: 'Anti Spam de Comandos',
            tag: 'antispamcmd',
            active: antispamcmd.includes('Ativado')
        }, {
            name: 'Anti Novo Chat',
            tag: 'antinewchat',
            active: antinewchat.includes('Ativado')
        }, {
            name: 'Anti Privado',
            tag: 'antipv',
            active: antipv.includes('Ativado')
        }, {
            name: 'Anti Ligação', 
            tag: 'antiligar',
            active: antiligar.includes('Ativado')
        }])
    })
    app.get('/api/info-groups', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        const chatsJid = JSON.parse(fs.readFileSync('./src/database/chatsjid.json'))
        const groupArray = []
        res.header("Content-Type",'application/json');
        for(let obj of chatsJid) {
            if(obj.endsWith('@g.us')) {
                try {
                    var gp_info = await client.groupMetadata(obj)
                    try {gp_pp = await client.profilePictureUrl(obj)}
                    catch { gp_pp = 'https://i.ibb.co/vvmbqzs/i.png'}
                    if(gp_info) {
                        try {owner_pp = await client.profilePictureUrl(gp_info.owner)}
                        catch {owner_pp = 'https://i.ibb.co/vvmbqzs/i.png'}
                        groupArray.push({
                            id: obj,
                            profile_picture: gp_pp,
                            subject: gp_info.subject,
                            owner: gp_info.owner,
                            owner_pp,
                            participantsCounts: gp_info.participants.length,
                        })
                    }
                } catch {

                }
            }
        }
        res.send(JSON.stringify(groupArray, null, 2))
    })
    app.get('/api/info-bot', async (req, res) => {
        var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
        if(!isLogged(ip)) return res.status(401).json({status: 401, message: 'Unauthorized'})
        const chatsJid = JSON.parse(fs.readFileSync('./src/database/chatsjid.json'))
        var number = (client.user.id.includes(':')) ? client.user.id.split('@')[0].split(':')[0] : client.user.id.split('@')[0]
        var profile_picture = (client.user.imgUrl) ? client.user.imgUrl : 'https://i.ibb.co/vvmbqzs/i.png'
        var groupCount = 0
        for(let obj of chatsJid) {
            if(obj.endsWith('@g.us')) {
                try {
                    if((await client.groupMetadata(obj))) {
                        groupCount += 1
                    }
                } catch {}
            }
        }
        res.json({
            profile_picture,
            name: client.user.name,
            number,
            moderators: ownerNumber.length,
            chats: chatsJid.length,
            groupCount
        })
    })
    app.listen(port, async () => {
        console.log(chalk.green.bold(`Painel do proprietário iniciado com sucesso! Link: http://localhost:${port}/home`))
    })
    io.on('connection', async (client) => {
        console.log(chalk.green.bold(`Um usuário foi conectado ao websocket!`));
        client.on('sendMessage', data => {
            client.broadcast.emit('receivedMessage', data)
        })
    })
    server.listen(websocket_port, async () => {
        console.log(chalk.green.bold(`Websocket aberto com sucesso!`))
    })
}

module.exports = startPanel