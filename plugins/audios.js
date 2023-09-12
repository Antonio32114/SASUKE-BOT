const handler = (m) => m;
handler.all = async function(m, {conn}) {
const chat = global.db.data.chats[m.chat];

if (/^hola|Hola|Holis|ola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './lib/audios/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true}, {quoted: m});
  }   

if (!chat.isBanned && chat.audios && m.text.match(/(descargas|Descargas|DESCARGAS)/gi)) {
let vn = './lib/audios/miku.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true}, {quoted: m});
  }
    
if (!chat.isBanned && chat.audios && m.text.match(/(Miku canta2|miku canta2)/gi)) {    
let vn = './lib/audios/canta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true}, {quoted: m});
  }
    
if (!chat.isBanned && chat.audios && m.text.match(/(Miku canta|miku canta)/gi)) {    
let vn = './lib/audios/canta.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true}, {quoted: m});
  }    

return !0 };
export default handler;