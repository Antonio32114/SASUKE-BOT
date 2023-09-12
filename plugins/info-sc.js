let handler = async (m, { conn }) => {
try {
let pp = imagen3
let img =  './lib/img/bot.jpg'
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `⟥⟝⟢⟨ *owner* ⟩⟣⟞⟤
• *𝗛ᴏʟᴀ,➟${taguser}* ${yovani2}`.trim() 
if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://atom.bio/ofc_yovani_hades`, "sourceUrl": `https://atom.bio/ofc_yovani_hades`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.packname, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://atom.bio/ofc_yovani_hades`, "sourceUrl": `https://atom.bio/ofc_yovani_hades`}}}, {quoted: fkontak2});
    }
  } catch {
  }
};
handler.command = /^(sc|pagina)$/i
export default handler
