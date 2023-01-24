const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

const loadDatabase = async (fileName) => {
    const db = await sqlite.open({
        filename: fileName,
        driver: sqlite3.Database
    })
    return db
}
module.exports = { 
    loadDatabase
}