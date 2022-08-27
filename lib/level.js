const fs = require('fs')
const _level = JSON.parse(fs.readFileSync('./src/database/level.json'))

const getLevelingXp = (userid) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === userid) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingPosition = (userid) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === userid) {
			position = i
		}
	})
	if (position !== false) {
		return position
	}
}
const getLevelingLevel = (userid) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === userid) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (userid) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === userid) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingId = (userid) => {
	const obj = {id: userid, xp: 1, level: 1}
	_level.push(obj)
	fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
}

const addLevelingLevel = (userid, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === userid) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
	}
}

const rmLevelingId = (userid) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level.splice(position, 1)
        fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
		return true
    } else {
		return false
	}
}

const rmLevelingLevel = (userid, amount) => {
    let position = false
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userid) {
            position = i
        }
    })
    if (position !== false) {
        _level[position].level -= amount
        fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
    }
}

const rmLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp = _level[position].xp - amount
		fs.writeFileSync('./src/database/level.json', JSON.stringify(_level, null, 2) + '\n')
	}
}

module.exports = {rmLevelingXp, rmLevelingLevel, rmLevelingId, addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingPosition, getLevelingXp}