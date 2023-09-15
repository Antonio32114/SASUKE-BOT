import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (!text) return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] INGRESE EL NOMBRE DE ALGUN ANIME A BUSCAR*`, fkontak, m) 
 await conn.reply(m.chat, `⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱`, fkontak, m)   
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'es', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'es', autoCorrect: true })   
let AnimeInfo = `*ANIME*
🎀 • *Título:* ${result.title}
🎋 • *Formato:* ${result.type}
📈 • *Estado:* ${result.status.toUpperCase().replace(/\_/g, " ")}
🍥 • *Episodios totales:* ${result.episodes}
🎈 • *Duración: ${result.duration}*
✨ • *Basado en:* ${result.source.toUpperCase()}
💫 • *Estrenado:* ${result.aired.from}
🎗 • *Finalizado:* ${result.aired.to}
🎐 • *Popularidad:* ${result.popularity}
🎏 • *Favoritos:* ${result.favorites}
🎇 • *Clasificación:* ${result.rating}
🏅 • *Rango:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${resultes.text}
❄ • *Ringkasan:* ${resultes2.text}

𝐒𝐀𝐒𝐔𝐊𝐄  𝐁𝐎𝐓`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
} catch {
throw `${fg}`  
}}
handler.command = /^(anime|animeinfo)$/i
export default handler 