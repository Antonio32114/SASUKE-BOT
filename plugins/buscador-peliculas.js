import fetch from 'node-fetch'
import axios from 'axios'
import { load } from 'cheerio'
let handler = async (m, {text, usedPrefix, command, conn}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (!text) return conn.reply(m.chat, `*[❗]ɪɴɢʀᴇsᴀ ᴇʟ ɴᴏᴍʙʀᴇ  de pelis ǫᴜᴇ ǫᴜɪᴇʀᴇs*`, fkontak, m)
 await conn.reply(m.chat, `⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱`, fkontak, m)   
let aaaa
let img
try {   
aaaa = await searchC(text)
img = 'https://cinefilosoficial.com/wp-content/uploads/2021/07/cuevana.jpg'    
} catch {
aaaa = await searchP(text)    
img = 'https://elcomercio.pe/resizer/RJM30xnujgfmaODGytH1rRVOrAA=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/BJ2L67XNRRGHTFPKPDOEQ2AH5Y.jpg'    
}    
if (aaaa == '') throw '*[❗] 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙽𝙸𝙽𝙶𝚄𝙽𝙰 𝙿𝙴𝙻𝙸𝙲𝚄𝙻𝙰*' 
let res = await aaaa.map((v) => `*🎬 • Nombre:* ${v.title}\n*🍿 • Url:* ${v.link}`).join`\n\n───────────────\n\n`
let ads = '*💫 • Bloqueador de anuncios recomendado:* Block This\n*⛨ • Link:* https://block-this.com/block-this-latest.apk\n\n≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣≣\n\n'
conn.sendMessage(m.chat, { image: { url: img }, caption: ads + res }, {quoted: m})
}
handler.command = ['cuevana', 'pelisplus']
export default handler

const safeLoad = async(url, options = {}) => {
try {
const { data: pageData } = await axios.get(url, options)
const $ = load(pageData) 
return $
} catch (err) {
if (err.response)
throw new Error(err.response.statusText)
throw err }}

async function searchC(query, numberPage = 1) {
const $ = await safeLoad(`https://cuevana3.mu/page/${numberPage}/`, {
params: { s: query }})
const resultSearch = []
$(".results-post > article").each((_, e) => {
const element = $(e)
const title = element.find("header > h2").text()
const link = element.find(".lnk-blk").attr("href")
resultSearch.push({ title: title, link: link })})
return resultSearch }

async function searchP(query, numberPage = 1) { 
const $ = await safeLoad(`https://pelisplushd.cx/search/`, {
params: { s: query, page: numberPage }})
const resultSearch = []
$("a[class^='Posters']").each((_, e) => {
const element = $(e)
const title = element.find(".listing-content > p").text()
const link = element.attr("href")
resultSearch.push({ title: title,  link: link })})
return resultSearch }