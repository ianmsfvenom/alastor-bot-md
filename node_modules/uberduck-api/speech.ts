import { resolve } from "path/posix"

const request = require('request')
const fetch = require('node-fetch')

function wait() {
    return new Promise(resolve => resolve(20))
}
function getAudioUrl(
    key: string,
    secretKey: string,
    carachter: string,
    text: string
) {
    if (carachter === undefined) throw new Error('Define the carachter voice.')
    if (key === undefined) throw new Error('Define the key you got from uberduck')
    if (carachter === undefined) throw new Error('Define the secret key u got from uberduck.')

    return new Promise(async (resolve, reject) => {
    await request({
        url: 'https://api.uberduck.ai/speak',
        method: 'POST',
        body: `{"speech": "${text}","voice": "${carachter}"}`,
        auth: {
            'user': key,
            'pass': secretKey
        }
    }, async (erro, response, body) => {
        if (erro) throw new Error('Error when making request, verify if yours params (key, secretKey, carachter) are correct.')
        const audioResponse: string = 'https://api.uberduck.ai/speak-status?uuid=' + JSON.parse(body).uuid
        let jsonResponse: any = false
        async function getJson(url) {
            let jsonResult: any = undefined
            await fetch(url)
                .then(res => res.json())
                .then(json => {
                    jsonResult = json
                })
            return jsonResult
        }
        
        jsonResponse = await getJson(audioResponse)
        while (jsonResponse.path === null) jsonResponse = await getJson(audioResponse)

        resolve(jsonResponse.path)
    })
 })
}

export {
    getAudioUrl
}