import translate from '@vitalets/google-translate-api'
import fetch from "node-fetch"
let handler = async (m, { text, command, args, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  if (!text) return conn.reply(m.chat, `*[❗]ɪɴɢʀᴇsᴀ ᴇʟ ɴᴏᴍʙʀᴇ ǫᴜᴇ ǫᴜɪᴇʀᴇs usar von el bot Ejemplo:/bot hola*`, fkontak, m)
  try {
  let api = await fetch("https://api.simsimi.net/v2/?text=" + text + "&lc=es")
  let resSimi = await api.json()
  m.reply(resSimi.success)      
  } catch {
  try {
  if (text.includes('Hola')) text = text.replace('Hola', 'Hello')
  if (text.includes('hola')) text = text.replace('hola', 'Hello')
  if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO')    
  let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + text)
  let resu = await reis.json()  
  let nama = m.pushName || '1'
  let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
  let res = await api.json()
  let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + res.cnt)
  let resu2 = await reis2.json()
  m.reply(resu2[0][0][0])      
  } catch {  
  let reisss = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=" + text)
  let resuuu = await reisss.json()      
  let res222 = await fetch(`https://violetics.pw/api/utility/simsimi?apikey=beta&text=${resuuu[0][0][0]}`)  
  let json222 = await res222.json()
  let resulttt = json222.result
  let lolll = await translate(`${resulttt}`, { to: 'es', autoCorrect: true })
  m.reply(lolll.text)      
  }}
}
handler.help = ['simi', 'bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i
export default handler
