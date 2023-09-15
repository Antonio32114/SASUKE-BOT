let handler = async (m, { conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
conn.reply(m.chat, `
*< 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 / 𝚃𝙴𝚇𝚃𝙾𝚂 𝙰𝚂𝙸𝙶𝙰𝙽𝙳𝙾𝚂 />*

${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.-*\n*𝙲𝙾𝙳𝙸𝙶𝙾:* ${value.locked ? `*(𝚋𝚕𝚘𝚚𝚞𝚎𝚊𝚍𝚘)* ${key}` : key}\n*𝙲𝙾𝙼𝙰𝙽𝙳𝙾/𝚃𝙴𝚇𝚃𝙾* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])})
}
handler.command = ['listcmd', 'cmdlist']
handler.rowner = true
export default handler
