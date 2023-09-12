import fetch from 'node-fetch'
let handler = async (m, { conn, usedprefix, usedprefix: _p, __dirname, text, isPrems }) => {
if (usedprefix == 'a' || usedprefix == 'A') return    
try {
let pp = imagen5
let img =  './media/Menu.jpg'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╔━━━⊱ 「 *${no}* 」━━━✕
┊ *𝗛ola, ${taguser}*
┊ *Owner:* ANTONIO
┊ *Numero:* wa.me/50763596565*
┊ *Bot ofc:* wa.me/50760407691
┊ *Fecha:* ${date}*
┊ *Tiempo activo:* ${uptime}*
┊ *Usuarios:* ${rtotalreg}*
┗━━━━━━━━━━━━━━✕
┊
╔━━⊱*「 𝐒𝐄𝐑𝐁𝐎𝐓 」*━━✕
┃  .serbot
┃  .stop
┃  .jadibot 
┃  .qr
┃  .bots
┗━━━━━━━━━━━━━━✕
┊
╔━━⊱*「 𝐀𝐃𝐌𝐈𝐍𝐒 」*━━✕
┃  .add
┃  .revoke
┃  .admins
┃  .delete
┃  .demote
┃  .fantasmas
┃  .hidetag
┃  .infogrup
┃  .kick
┃  .kick2
┃  .link
┃  .listanum
┃  .promote
┃  .resetlink
┃  .setbye
┃  .setname
┃  .Setdesc
┃  .setpp
┃  .setwelcome
┃  .tagall
┗━━━━━━━━━━━━━━✕
┊
╔━━⊱*「 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 」*━━✕
┃  .stiker2
┃  .stiker
┃  .wm
┃  .sermoverbg
┃  .slap
┃  .scircle
┃  .pat
┃  .emojimix ☺&😈
┃  .dados
┗━━━━━━━━━━━━━━✕
┊
╔━━⊱*「𝐄𝐍𝐀𝐁𝐋𝐄𝐒」*━━✕
┃  .enable welcome
┃  .disable welcome
┃  .enable antiprivado
┃  .disable antiprivado
┃  .enable public
┃  .disable public
┃  .enable restrict
┃  .disable restrict
┃  .enable pconly
┃  .disable pconly
┃  .enable anticall
┃  .disable anticall
┃  .enable simsimi
┃  .disable simsimi
┃  .enable antilink
┃  .disable antilink
┃  .enable antilink2
┃  .disable antilink2
┃  .enable detect
┃  .disable detect
┃  .enable detect2
┃  .disable detect2
┃  .enable autosticker
┃  .disable autosticker
┃  .enable antiviewonce
┃  .disable antiviewonce
┃  .enable antitoxic
┃  .disable antitoxic
┃  .enable antitraba
┃  .disable antitraba
┃  .enable antiarabes
┃  .disable antiarabes
┃  .enable modoadmin
┃  .disable modoadmin
┗━━━━━━━━━━━━━━✕
┊
╔━━⊱*「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 」*━━✕
┃  .wikipedia
┃  .animeinfo
┃  .apk
┃  .play
┃  .play2
┃  .audio
┃  .video 
┃  .play3 
┃  .play4 
┃  .Spotify 
┃  .Spotify2 
┃  .ytmp3
┃  .ytmp4
┃  .ytmp3doc
┃  .ytmp4doc
┃  .facebook
┃  .tiktok
┃  .mediafire
┃  .twitter
┃  .ig 
┃  .google
┃  .ytbuscar
┃  .gdrive
┃  .whatmusic
┗━━━━━━━━━━━✕
┊
╔━━⊱*「 𝐂𝐇𝐀𝐓𝐆𝐏𝐓 」*━━✕
┃  .chatgpt 
┃  .bot
┗━━━━━━━━━━━✕
┊
╔━━⊱*「 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎 」*━━✕
┃  .addmsg
┃  .autoadmin
┃  .banchat
┃  .unbanchat 
┃  .banlist
┃  .banuser
┃  .unbanuser 
┃  .bcgc 
┃  .bcgc2
┃  .dsowner 
┃  .join 
┃  .saveplugin
┃  .getplugin
┃  .update 
┗━━━━━━━━━━━✕
┊
╔━⊱*「 𝐂𝐑𝐄́𝐃𝐈𝐓𝐎𝐒 」*━━✕
┃𝐂𝐑𝐄́𝐃𝐈𝐓𝐎𝐒  𝐁𝐘  𝐀𝐍𝐓𝐎𝐍𝐈𝐎 ϟ
┗━━━━━━━━━━━━✕`.trim()
if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://atom.bio/killuabot649`, "sourceUrl": `https://atom.bio/killuabot649`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://atom.bio/killuabot649`, "sourceUrl": `https://atom.bio/killuabot649`}}}, {quoted: fkontak2});
    }
  } catch {
  }
}; 
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
