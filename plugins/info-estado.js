let handler = async (m, { conn }) => {
try {
let pp = imagen5
let img =  './lib/img/Menu.jpg'
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `*ESTADO*

• *𝗛ᴏʟᴀ,➟${taguser}*
• 🤖 *ʙᴏᴛ ᴅᴇ ᴜsᴏ ᴘᴜʙʟɪᴄᴏ*
• ⏰ *ᴛɪᴇᴍᴘᴏ➟ᴀᴄᴛɪᴠᴏ:* ${uptime}
• 🔗 *ᴄᴜᴇɴᴛᴀs ᴏғᴄ:* *https://atom.bio/killuabot649*`.trim() 
if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://atom.bio/killuabot649`, "sourceUrl": `https://atom.bio/killuabot649`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://atom.bio/killuabot649`, "sourceUrl": `https://atom.bio/killuabot649`}}}, {quoted: fkontak2});
    }
  } catch {
  }
};
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(infobot|estado|status|estate|state|stado|stats|runtime|uptime)$/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n• ` + d, ' Día(s)* ', `\n• ` + h, ' Hora(s)* ', `\n• ` + m, ' Minuto(s)* ', `\n• ` + s, ' Segundo(s)* '].map(v => v.toString().padStart(2, 0)).join('')}