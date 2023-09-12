import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let sremovebg = global.API(`https://api.lolhuman.xyz/api/removebg?apikey=${lolkeysapi}&img=${url}`) 
let stickerr = await sticker(false, sremovebg, global.igfg, global.author)
conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝚁𝙽𝚃𝙰𝚁𝙻𝙾, 𝙽𝙾 𝙾𝙻𝚅𝙸𝙳𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙻𝙰 𝙲𝚄𝙰𝙻 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁𝙰 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚂𝙸𝙽 𝙵𝙾𝙽𝙳𝙾*\n\n\n*[❗𝐈𝐍𝐅𝐎❗]SORRY, AN ERROR OCCURRED, TRY AGAIN DO NOT FORGET TO RESPOND TO AN IMAGE OF WHICH IT WILL BECOME A STICKER WITHOUT BACKGROUND*`, fkontak, m)
}} 
handler.command = /^sremovebg|removebg$/i
handler.register = true
handler.limit = 1
export default handler
