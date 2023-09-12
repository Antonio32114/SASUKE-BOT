import fetch from 'node-fetch';
import Spotify from 'spotifydl-x';
import fs from 'fs';
const handler = async (m, {conn, text}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`;
  try {
    const resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`);
    const jsonDL = await resDL.json();
    const linkDL = jsonDL.result[0].link;
    const spty = await spotifydl(linkDL);
    const getRandom = (ext) => {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    };
    const randomName = getRandom('.mp3');
    const filePath = `./tmp/${randomName}`;
    fs.writeFileSync(filePath, spty.audio);
    const spotifyi = `📌*𝚃𝙸𝚃𝚄𝙻𝙾:* ${spty.data.name}\n🖇️*𝙰𝚁𝚃𝙸𝚂𝚃𝙰:* ${spty.data.artists}\n🌐 *𝚄𝚁𝙻*: ${linkDL}`;
    await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', spotifyi, m);
    await conn.sendMessage(m.chat, {audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
  } catch {
    throw '*❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌*';
  }
};
handler.command = /^(Spotify)$/i;
export default handler;

const credentials = {clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'};
const spotify = new Spotify.default(credentials);
async function spotifydl(url) {
  const res = await spotify.getTrack(url).catch(() => {
    return {error: 'Fallo la descarga'};
  });
  return {data: res, audio: await spotify.downloadTrack(url)};
}
