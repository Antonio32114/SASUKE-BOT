let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!m.quoted) return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾 𝙸𝙼𝙰𝙶𝙴𝙽 𝙰𝙻 𝙲𝚄𝙰𝙻 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙾 𝚃𝙴𝚇𝚃𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] ANSWER THE STICKER OR IMAGE TO WHICH YOU WANT TO ADD A COMMAND OR TEXT*`, fkontak, m) 
if (!m.quoted.fileSha256) return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝙻𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝚂𝙸𝙶𝙰𝙽𝙰𝚁 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙾 𝚃𝙴𝚇𝚃𝙾𝚂 𝙰 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙴 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] YOU CAN ONLY ASSIGN COMMANDS OR TEXTS TO STICKERS OR IMAGES*`, fkontak, m) 
if (!text) return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁 𝙳𝙴 𝚄𝚂𝙾, 𝚃𝙴𝚇𝚃𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n\n*𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*—◉ ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*—◉ ${usedPrefix + command} <#menu> <responder a sticker o imagen>*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] *USAGE ERROR, MISSING TEXT*\n\nCORRECT USE* OF* *COMMAND*:*\n*—◉ ${usedPrefix + command} *<text> <respond to sticker or image>*\n\n* *EXAMPLE OF USE OF* *COMMAND* :*\n*—◉ ${usedPrefix + command} *</menu> <respond to sticker or image*`, fkontak, m) 
 let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚂𝙾𝙻𝙾 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁 𝙿𝚄𝙴𝙳𝙴 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙻𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]*ONLY THE OWNER CAN MAKE THE MODIFICATION*`, fkontak, m) 
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
conn.reply(m.chat, `*[ ✔ ] 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾/𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂𝙸𝙶𝙽𝙰𝙳𝙾 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁/𝙸𝙼𝙰𝙶𝙴𝙽 𝙵𝚄𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝙰 𝙻𝙰 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴*\n\n\n*[ ✔ ] THE TEXT/COMMAND ASSIGNED TO THE STICKER/IMAGE WAS ADDED TO THE DATABASE CORRECTLY*`, fkontak, m) 
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
