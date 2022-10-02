const readline = require('readline')
const fs = require('fs-extra')
const extract = require('extract-zip')
const chalk = require('chalk')
const axios = require('axios')


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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.clear()
rl.question(chalk.yellow.bold('Escolha de que forma deseja atualizar:\n1- Manter o banco de dados\n2- Limpar dados\n3- Sair\n\n'), async (answer) => {
    if(isNaN(answer)) return console.log(chalk.red.bold('Mensagem inválida'))
    if(answer == 3) process.exit()
    if(answer == 2) {
        var buffer = await getBuffer(`https://github.com/ianmsfvenom/Alastor-bot-md/archive/refs/heads/main.zip`)
        fs.writeFileSync('./AlastorBot.zip', buffer)
        await extract('AlastorBot.zip', {dir: __dirname})
        const files = await fs.readdirSync('./Alastor-bot-md-main')
        files.forEach(async (value, index) => {
            fs.moveSync(`./Alastor-bot-md-main/${value}`, `./${value}`, {overwrite: true})
        })
        fs.rmdirSync('./Alastor-bot-md-main', {recursive: true})
        fs.unlinkSync('./AlastorBot.zip')
        console.log(chalk.green.bold('Alastor bot atualizado com sucesso!'))
        process.exit()
    } else if(answer == 1) {
        var buffer = await getBuffer(`https://github.com/ianmsfvenom/Alastor-bot-md/archive/refs/heads/main.zip`)
        fs.writeFileSync('./AlastorBot.zip', buffer)
        await extract('AlastorBot.zip', {dir: __dirname})
        if(!fs.existsSync('./backup')) fs.mkdirSync('./backup')
        if(fs.existsSync('./src')) await fs.copySync('./src', './backup/src', {overwrite: true})
        const files = await fs.readdirSync('./Alastor-bot-md-main')
        await files.forEach(async (value, index) => {
            fs.copySync(`./Alastor-bot-md-main/${value}`, `./${value}`, {overwrite: true})
        })
        fs.copySync('./backup/src/' , './src', {overwrite: true})
        fs.rmdirSync('./Alastor-bot-md-main', {recursive: true})
        fs.unlinkSync('./AlastorBot.zip')
        console.log(chalk.green.bold('Alastor bot atualizado com sucesso!'))
        process.exit()
    } else {
        console.log(chalk.red.bold(`Escolha uma opção válida`))
        process.exit()
    }
})