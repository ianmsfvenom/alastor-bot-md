const { Database } = require('sqlite')

const getLevelingXp = async (userid, botdb = new Database()) => {
	const levelArray = await botdb.all(`SELECT * FROM level WHERE id = "${userid}"`)
	if(levelArray.length >= 1) {
		const userLevelJson = levelArray[0]
		return userLevelJson.xp
	}
}

const getLevelingPosition = async (userid, botdb = new Database()) => {
	const levelArray = await botdb.all(`SELECT * FROM level`)
	const levelArraRanked = levelArray.sort((a, b) => b.xp - a.xp)
	let position = false
	Object.keys(levelArraRanked).forEach((i) => {
		if (levelArraRanked[i].id === userid) {
			position = i
		}
	})
	if (position !== false) {
		return position
	}
}
const getLevelingLevel = async (userid, botdb = new Database()) => {
	const levelArray = await botdb.all(`SELECT * FROM level WHERE id = "${userid}"`)
	if(levelArray.length >= 1) {
		const userLevelJson = levelArray[0]
		return userLevelJson.level
	}
}

const getLevelingId = async (userid, botdb = new Database()) => {
	const levelArray = await botdb.all(`SELECT * FROM level WHERE id = "${userid}"`)
	if(levelArray.length >= 1) {
		const userLevelJson = levelArray[0]
		return userLevelJson.id
	}
}

const addLevelingId = async (userid, botdb = new Database()) => {
	await botdb.exec(`INSERT INTO level VALUES("${userid}", 1, 1)`)
}

const addLevelingLevel = async (userid, amount, botdb = new Database()) => {
	const levelArray = await botdb.all(`SELECT * FROM level WHERE id = "${userid}"`)
	if(levelArray.length >= 1) {
		const userLevelJson = levelArray[0]
		userLevelJson.level += amount
		await botdb.exec(`UPDATE level SET level = ${userLevelJson.level} WHERE id = "${userid}"`)
	}
}

const addLevelingXp = async (userid, amount, botdb = new Database()) => {
	const levelArray = await botdb.all(`SELECT * FROM level WHERE id = "${userid}"`)
	if(levelArray.length >= 1) {
		const userLevelJson = levelArray[0]
		userLevelJson.xp += amount
		await botdb.exec(`UPDATE level SET xp = ${userLevelJson.xp} WHERE id = "${userid}"`)
	}
}

const rmLevelingId = async (userid, botdb = new Database()) => {
    await botdb.exec(`DELETE FROM level WHERE id = "${userid}"`)
}

const rmLevelingLevel = async (userid, amount, botdb = new Database()) => {
	const levelArray = await botdb.all(`SELECT * FROM level WHERE id = "${userid}"`)
	if(levelArray.length >= 1) {
		const userLevelJson = levelArray[0]
		userLevelJson.level -= amount
		await botdb.exec(`UPDATE level SET level = ${userLevelJson.level} WHERE id = "${userid}"`)
	}
}

const rmLevelingXp = async (userid, amount, botdb = new Database()) => {
	const levelArray = await botdb.all(`SELECT * FROM level WHERE id = "${userid}"`)
	if(levelArray.length >= 1) {
		const userLevelJson = levelArray[0]
		userLevelJson.xp -= amount
		await botdb.exec(`UPDATE level SET xp = ${userLevelJson.xp} WHERE id = "${userid}"`)
	}
}

module.exports = {rmLevelingXp, rmLevelingLevel, rmLevelingId, addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingPosition, getLevelingXp}