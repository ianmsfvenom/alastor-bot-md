const fetch = require('node-fetch').default

async function lol(username) {
    return new Promise(async (resolve, reject) => {
        fetch(`https://www.op.gg/summoners/br/${username}`).then(async (res) => {
            if(!res.ok) return reject({error: true})
            const resHtml = await res.text()
            const resJsonString = resHtml.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]
            const resJson = JSON.parse(resJsonString)
            const playerInfo = resJson.props?.pageProps?.data
            const playerId = playerInfo?.summoner_id
            const playerName = playerInfo?.name
            const internalName = playerInfo?.internal_name
            const imageUrl = playerInfo?.profile_image_url
            const playerLevel = playerInfo?.level
            const lastUpdate = playerInfo?.updated_at
            const mostChampJson = playerInfo?.most_champions?.champion_stats && playerInfo?.most_champions?.champion_stats.length > 0 ? playerInfo?.most_champions?.champion_stats[0] : null
            const champions = playerInfo?.champions
            var mostChampName;
            if(mostChampJson) {
                var indexChamp = champions.findIndex(e => e.id == mostChampJson.id)
                mostChampName = champions[indexChamp].key
            }
            fetch(`https://op.gg/api/v1.0/internal/bypass/games/br/summoners/${playerId}?&limit=3&hl=pt_BR&game_type=total`).then(async res => {
                try {
                    if(!res.ok) return reject({error: true})
                    const resJson = await res.json()
                    const matchesInfo = resJson.data
                    const matchesInfoFormat = []
                    for(let obj of matchesInfo) {
                        const kda = `${obj.myData.stats.kill}/${obj.myData.stats.death}/${obj.myData.stats.assist}`
                        const isWin = obj.myData.stats.result == 'WIN' ? true : false 
                        const champPosition = obj.myData.position
                        const champLevel = obj.myData.stats.champion_level
                        const minionKill = obj.myData.stats.minion_kill
                        const goldEarned = obj.myData.stats.gold_earned
                        const tierInfo = obj.myData.tier_info.tier ? `${obj.myData.tier_info.tier} ${obj.myData.tier_info.division}` : null
                        const champUsedId = obj.myData.champion_id
                        const champUsedName = champions[champions.findIndex(e => e.id == champUsedId)].key
                        matchesInfoFormat.push({
                            kda,
                            isWin,
                            champPosition,
                            champLevel,
                            minionKill,
                            goldEarned,
                            tierInfo,
                            champUsedId,
                            champUsedName,
                        })
                    }
                    const jsonResolve = {
                        playerName,
                        internalName,
                        imageUrl,
                        playerLevel,
                        lastUpdate,
                        mostChampName,
                        matchesInfoFormat
                    }
                    resolve(jsonResolve)
                } catch (error) {
                    reject({error: true})
                }
            }).catch(err => {
                reject({error: true})
            })
        }).catch(err => {
            reject({error: true})
        })
    })
}

module.exports = {lol}