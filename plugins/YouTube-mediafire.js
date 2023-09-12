import { mediafiredl } from '@bochilteam/scraper'
import axios from 'axios'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾 𝙳𝙴 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} https://www.mediafire.com/file/h9x1bgb79vmllkn/OFC-HADES-BOT.zip/file*`
try {
await m.reply(`*⏳ 𝙴𝚂𝙿𝙴𝚁𝙴 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙴𝙽𝚅𝙸𝙾 𝚂𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾. . . .* `)
await m.reply(`⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱`)
let json = await mediafireDl2(args[0])
let caption = `⟥⟝⟢⟨ *MEDIAFIRE* ⟩⟣⟞⟤
•🍀 *𝙽𝙾𝙼𝙱𝚁𝙴:*  ${json[0].nama.replace('+', ' ')}
• 💎 *𝙿𝙴𝚂𝙾:* ${json[0].size}
• 🌴 *𝚃𝙸𝙿𝙾:* ${json[0].mime.toUpperCase()}
⬒─⟢⟨©𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰✍⟩⟣─⬒`.trim()   
conn.sendMessage(m.chat, { text: caption, footer: wm }, { quoted: m })
conn.sendMessage(m.chat, { document : { url: json[0].link }, fileName : json[0].nama.replace('+', ' '), mimetype: json[0].mime.toUpperCase() }, { quoted: m })
} catch {  
try {  
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = await res
let caption = `⟥⟝⟢⟨ *MEDIAFIRE* ⟩⟣⟞⟤
• 🍀 *𝙽𝙾𝙼𝙱𝚁𝙴:* ${filename}
• 💎 *𝙿𝙴𝚂𝙾:* ${filesizeH}
• 🌴 *𝚃𝙸𝙿𝙾:* ${ext}
⬒─⟢⟨©𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰✍⟩⟣─⬒`.trim()
let msg = m.reply(caption)
if (!msg || msg == '') return m.reply(global.wait)
let res2 = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkeysapi}&url=${args[0]}`)
let res3 = await res2.json()
let res4 = await res3.result.link  
if (!url || url == '') url = res4
await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch {  
await m.reply('*❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌*')
}}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
async function mediafireDl2(url) {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '')
const seplit = link.split('/')
const nama = seplit[5]
let mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil }     