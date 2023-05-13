const ownerNumber = ["557187645787@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net


var prefixs = ['!', '.', '#', '$', '&', '/', '>', '?']
// prefixos
const chatGptKey = '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'
// Apikey do chatgpt

const OriginalOwner = '557187645787' 
// mude para seu numero

const menuimg = 'https://i.imgur.com/2KJfprY.jpg'
// Link da foto do menu

const registeruser = false
// Se é obrigatório o usuário se registrar para usar os comandos

const panelOn = true
// Liga o modo painel do proprietário no bot

const antinewchatmsg = 'O anti chat novo está ativado e você não é meu proprietário, logo será bloqueado'
//mensagem do antinewchat

const antipvmsg = '*🚫 PV BLOQUEADO 🚫*'
//mensagem do antipv

const limitqnt = 9999

const delayantispamcmd = 3
//tempo de delay do antispamcmd (medido por segundos)

//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const titlemenumsgimg = 'BEM-VINDO'
//Título no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundwelcomeimg = `https://images.squarespace-cdn.com/content/v1/5da7a0592a4fea6a5c51d653/1571356610593-WTGPUKXI2WJS8T4Q200Q/banner.jpeg?format=1000w`
//Link direto da imagem de fundo da boas-vindas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const backgroundbyeimg = `https://i.imgur.com/2TCj9ri.jpg`
//Link direto da imagem de fundo das despedidas TAMANHO RECOMENDADO: 1280x720
//Obs: não coloque o texto longo para a imagem não sumir

const blockedmsg = '🚫 *Caro senhor, você foi bloqueado pelo meu chefe, Não mande mais comando para mim se não quer ter uma visita* 🚫'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫 Esse comando não está disponível no momento meu amigo 🚫*'
// mensagem quando alguem solicita um comando bloqueado 

const banmsgtype = '*Ora ora ora, parece que alguém mandou uma mensagem proibida, hora da punição*'
// mensagem de ban no anti tipos de mensagem

const ativohelp = `Veja bem meu caro amigo, a contagem de mensagens é por grupo e consiste em rankear, listar, remover pessoas de acordo
com a frequência de mensagens no grupo, veja abaixo os comandos para administrar as mensagens do grupo:

checkativo (marcar) - lista a frequência de mensagens do membro marcado
rankativo - rankea as pessoas mais ativas do grupo
banativos (num) - remove membros com uma certa qnt de numeros de msg pra baixo
filtroativo (num) - lista membros com uma certa qnt de numeros de msg pra baixo]
atividade - lista a atividade de todos membros do grupo

Obs: O número de mensagens pode estar impreciso devido a contagem ser pelo bot.`

const adminmsgtype = '*Olá caro adm, parece que você mandou uma mensagem proibida, vou fingir que não vi isso*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = '*Atos depravados não serão tolerados aqui, te vejo no inferno...*'
// mensagem de ban no antiporn

const adminmsgporn = '*Olá caro adm, você enviou coisas libidonas neste grupo, vou apenas fingir que não vi nada*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = '*Links não serão tolerados aqui, até nunca escória...*'
// mensagem de ban no antilink

const adminmsglink = '*Olá senhor adm, você mandou um link neste grupo, porém vou fingir que não vi nada*'
// mensagem de quando adm manda link

const msgerr = 'Desculpe-me meu jovem não consegui atender seu desejo'
// mensagem de erro

const notregister = `*Este comando não está registrado senhor, solicito para que veja o menu*`
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: 'Um momento meu jovem... ⌛',
    error: {
        stick: 'Desculpe-me senhor, mas houve falha ao converter para sticker ❌',
    },
    only: {
        group: 'Infelizmente este comando está disponível somente para grupos meu caro! 🚫',
        ownerB: 'Este comando somente meu chefe pode usar! 🚫',
        ownerG: 'Este comando somente o grupo do meu chefe pode usar! 🚫',
        admin: 'Se ponha no seu lugar membro comum 🚫',
        Badmin: 'Não sou administrador desse grupo, não posso fazer nada 🚫',
    }
}

// CONTATO DO CRIADOR
const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Converse com meu chefe\n' 
+ 'ORG:Proprietário do alastor bot;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557187645787:+55 71 8764-5787\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde

const gpvotohelp = (prefix) => {
    return `O sistema de voto gp consiste no sistema normal de voto, porém feito somente para grupos
veja abaixo os comandos e suas funções a seguir:

${prefix}gpinitvoto
${prefix}gpvotoinit - Inicia a votação em grupo
Ex: ${prefix}gpvotoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}gpclearvoto
${prefix}gpvotoclear - Limpa todos os votos

${prefix}gpvotostatus
${prefix}gpstatusvoto - Vê o status atual do voto

${prefix}gpvoto - Vota em uma opção
Ex: ${prefix}gpvoto opção1

${prefix}gpvotofinish
${prefix}gpfinishvoto - Encerra a votação

${prefix}gpbroadvoto
${prefix}gpvotobroad - Faz uma transmissão da votação para todos membros do grupo`
}

const votohelp = (prefix) => {
    return `O sistema de voto consistem em todos os usuários do bot poderem votar e para ter uma boa
experiência, há comandos para administrar essa votação. Veja abaixo os comandos e suas funções a seguir:

${prefix}initvoto
${prefix}votoinit - Inicia a votação geral
Ex: ${prefix}votoinit tema | opção 1 | opção 2
Obs: pode acrescentar quantas opções quiser

${prefix}clearvoto
${prefix}votoclear - Limpa todos os votos

${prefix}votostatus
${prefix}statusvoto - Vê o status atual do voto

${prefix}voto - Vota em uma opção
Ex: ${prefix}voto opção1

${prefix}votofinish
${prefix}finishvoto - Encerra a votação

${prefix}broadvoto
${prefix}votobroad - Faz uma transmissão da votação para todos que usam o bot`
}

// a quantidade de comandos necessários para aparecer uma propaganda
const adsShowCount = 8

// Lista de propagandas a ser aparecidas
const adsArray = [
    `🛜🔊 Sabia que é possível baixar músicas, álbuns e playlists do spotify pelo alastor bot? Digite o comando ${prefixs[0]}spotify mais o link do álbum, música ou playlist 🔊🛜`,
    '*Você quer ter o alastor bot no seu grupo do whatsapp? Agora é possível! Negocie com meu proprietário clicando no link https://wa.me/557187645787*\n\n*Obs: O bot somente é adicionado caso você seja administrador do grupo*',
    `*Sabia que dá para jogar o jogo friday night funkin e disputar seu recorde contra outros jogadores do bot? Basta da o comando ${prefixs[0]}fnf para saber mais*`,
    `*Baixe playlist e mixes do youtube com o comando ${prefixs[0]}playlist _link da playlist_*`,
    `*Administre seu grupo da melhor forma, entretenha seus membros. Alugue o bot no seu grupo*\n*Negocie com meu proprietário https://wa.me/557187645787*\n\n*Obs: O bot somente é adicionado caso você seja administrador do grupo*`
]

module.exports = { OriginalOwner, panelOn, menuimg, ownerNumber, ownerNumber,
vcard, prefixs, mess, msgerr, banmsgtype, banmsgporn, banmsglink, 
adminmsglink, adminmsgporn, adminmsgtype, blockedmsg, blockedcmdmsg,
notregister, titlemenumsgimg, backgroundwelcomeimg, backgroundbyeimg, 
antipvmsg, antinewchatmsg, delayantispamcmd, limitqnt, ativohelp, 
votohelp, gpvotohelp, registeruser, adsArray, adsShowCount, chatGptKey}