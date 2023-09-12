import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!m.quoted) return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴*`, fkontak, m)
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴*`, fkontak, m)
let img = await m.quoted.download()
if (!img) return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝚄𝙽 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴*`, fkontak, m)
stiker = await addExif(img, packname || global.igfg, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙰𝙻𝙶𝙾 𝙵𝙰𝙻𝙻𝙾.. 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙷𝙰𝚈𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙸𝙳𝙾 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚈 𝙷𝙰𝚈𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*`, fkontak, m)
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^take|robar|wm$/i
export default handler
