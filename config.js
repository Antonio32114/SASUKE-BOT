import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['50763596565', '𝐀𝐍𝐓𝐎𝐍𝐈𝐎 ', true],
  ['5212414147874', '𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈 ', true],
];
global.suittag =['50763596565'];
global.mods = []
global.prems = ['50763596565'];
global.reportes_solicitudes = ['50763596565'];

global.openai_key = 'sk-0';

global.openai_org_id = 'org-3';

global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['BrunoSobrino_2']; // ['GataDios']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};
global.packname = '𝐒𝐀𝐒𝐔𝐊𝐄  𝐁𝐎𝐓'
global.igfg = '𝐒𝐀𝐒𝐔𝐊𝐄  𝐁𝐎𝐓\n+507 6359 - 6565\nVERSION DEL BOT '
global.author = '\n𝐀𝐍𝐓𝐎𝐍𝐈𝐎\n1.10.9'
global.vs = '1.10.90'
global.version = vs
global.gt = '𝐀𝐍𝐓𝐎𝐍𝐈𝐎'
global.hadesbot = gt
global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt
global.md = 'https://github.com/Antonio32114/SASUKE-BOT.git'
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/BaE0DLmcwqzLFauSfsYbbw'
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/BaE0DLmcwqzLFauSfsYbbw'
global.nnngrupo = nnn
global.rg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*'
global.resultado = rg
global.antonio = 'aqui el numero de Antonio\n• Wa.me/50763596565 (CREADOR-NO-BOT)'
global.yovanigrupo = nnn
global.ag = '*⚠️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ⚠️*\n*No se perimite contenido pornograficos❌*'
global.advertencia = ag
global.une = '*│✔️│🌴𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝 𝚏𝚞𝚎 𝚍𝚎𝚜 𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚎𝚡𝚒𝚝𝚘𝚜𝚊𝚖𝚎𝚗𝚝𝚎🌴*'
global.unegrupo = une
global.ban = '*│‼️│ 🗝️𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝 𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚎𝚡𝚒𝚝𝚘𝚜𝚊𝚖𝚎𝚗𝚝𝚎🗝️*'
global.bangrupo = ban
global.iig = '*📌ɪɴғᴏʀᴍᴀᴄɪᴏɴ*✨'
global.informacion = iig
global.fg = '*❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌*'
global.fallo = fg
global.mine ='➟ Hola bienvenidos al servidor de minecraft\n➟ Java\n➟ mc.fenixcraft.org\n━━━━━━━━━\n➟ Bedrock\n➟ mc.fenixcraft.org\nPuerto: 19132\n━━━━━━━━━\n➟ Recomendada: 1.19.2\n➟ Usable: 1.8 hasta 1.20.X\n➟ Bedrock: 1.20 +'
global.minegrupo = mine
global.mg = '*❗ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʟᴏ ʜᴀ ᴜsᴀᴅᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*'
global.mal = mg
global.eeg = '*📩ˢᵁ ᴿᴱᴾᴼᴿᵀᴱ ᴴᴬ ˢᴵᴰᴼ ᴱᴺⱽᴵᴬᴰᴼ📩*'
global.envio = eeg
global.eg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*'
global.exito = eg
global.miku = '*hola bienvenido a la información de instalación del bot por favor puedes mirar el video de tutorial y hacer el mismo procedimiento si tienes alguna duda puedes comunicarmelo en el número fijado Espero que tengas suerte en la instalación*\n⬒ ─⟢⟨ *APK-TERMUX* ⟩⟣─ ⬒\n➟ https://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98\n⬒ ─⟢⟨ *OWNER* ⟩⟣─ ⬒\n➟ *Número para ayuda*\n➟ Wa.me/5212412377467\n⬒ ─⟢⟨ *TUTORIAL* ⟩⟣─ ⬒\n➟ https://youtu.be/LqXJpxICLtE\n⬒ ─⟢⟨ *COMANDOS* ⟩⟣─ ⬒\n➟ opción 1 estos comandos son para los que no pudieron hacer con los comandos normales estos comandos lo van a instalar solito \n➟ termux-setup-storage\n➟ pkg update -y && pkg upgrade -y && pkg install -y bash && pkg install -y wget && pkg install yarn\n➟ wget -O - https://raw.githubusercontent.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA/master/install.sh | bash\n⬒ ─⟢⟨ *COMANDOS* ⟩⟣─ ⬒\n➟ *opción 2 de instalación\n➟ cd && termux-setup-storage\n➟ apt-get update -y && apt-get upgrade -y\n➟ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn \n➟ git clone https://github.com/OFC-YOVANI/HATSUNE-MIKU-ULTRA.git && cd HATSUNE-MIKU-ULTRA\n➟ yarn \n➟ npm install\n➟ npm update\n➟ npm start\n⬒ ─⟢⟨ *ACTIVAR* ⟩⟣─ ⬒\n➟ cd HATSUNE-MIKU-ULTRA\n➟ npm start\n⬒ ─⟢⟨ *CÓDIGO* ⟩⟣─ ⬒\n➟ *pide otro código*\n➟ cd HATSUNE-MIKU-ULTRA\n➟ rm -rf Session-activa\n➟ npm start'
global.mikugrupo = miku
global.ne = '𝐀𝐍𝐓𝐎𝐍𝐈𝐎'
global.negrupo = ne
global.no = '𝐒𝐀𝐒𝐔𝐊𝐄  𝐁𝐎𝐓'
global.nogrupo = no
global.nno = '⟥⟝⟢⟨ *List Options* ⟩⟣⟞⟤\n• */enable welcome*\n• */disable welcome*\n• */enable antiprivado*\n• */disable antiprivado*\n• */enable public*\n• */disable public*\n• */enable restrict*\n• */disable restrict*\n• */enable pconly*\n• */disable pconly*\n• */enable anticall*\n• */disable anticall*\n• */enable simsimi*\n• */disable simsimi*\n• */enable antilink*\n• */disable antilink*\n• */enable antilink2*\n• */disable antilink2*\n• */enable detect*\n• */disable detect*\n• */enable detect2*\n• */disable detect2*\n• */enable autosticker*\n• */disable autosticker*\n• */enable antiviewonce*\n• */disable antiviewonce*\n• */enable antitoxic*\n• */disable antitoxic*\n• */enable antitraba*\n• */disable antitraba*\n• */enable antiarabes*\n• */disable antiarabes*\n• */enable modoadmin*\n• */disable modoadmin*\n𝐒𝐀𝐒𝐔𝐊𝐄  𝐁𝐎𝐓'
global.nnogrupo = nno
global.nnno = '➟ *ᴄᴜᴇɴᴛᴀs ᴏғᴄ:* *https://atom.bio/ofc_yovani_hades*\n⬒ ─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─ ⬒\n\n⬒ ─⟢⟨ *REDES SOCIALES* ⟩⟣─ ⬒\n➟ *𝚙á𝚐𝚒𝚗𝚊 𝚍𝚎 𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔*\n➟ https://www.facebook.com/groups/987464505464904/?ref=share\n➟️ *𝚌𝚊𝚗𝚊𝚕 𝚍𝚎 𝚈𝚘𝚞𝚃𝚞𝚋𝚎*\n➟ https://youtube.com/@hades_bot2391\n➟ *INSTAGRAM*\n➟️ https://instagram.com/ofc.yovani.bot?igshid=ZDc4ODBmNjlmNQ==\n➟ *KIKTOK*\n➟ https://vm.tiktok.com/ZM2rbFWnr/'
global.nnnogrupo = nnno
global.yono = '➟ *ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ*\n➟ *Hola Bienvenid@ a la lista de grupos del bot ofc miku/hades espero que puedas entra a nuestra comunidad de bots gracias por tu atencion*\n➟ *ᴄᴜᴇɴᴛᴀs ᴏғᴄ:* *https://atom.bio/ofc_yovani_hades*\n⬒ ─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─ ⬒\n\n⬒ ─⟢⟨ *GRUPO* ⟩⟣─ ⬒\n➟ *.welcome @tag*\n➟ *.welcome @tag*\n➟ *bye @tag*\n➟ *.promote @tag*\n➟ *.demote @tag*\n➟ *.infogp <info del grupo>*\n➟ *.infobot <estado del bot>*\n➟ *.hidetag*\n➟ *.del elimina mensajes del bot*\n➟ *.join*\n➟ *.link link de tu grupo*'
global.yonogrupo = yono
global.nnx = '➟ *ᴄᴜᴇɴᴛᴀs ᴏғᴄ:* *https://atom.bio/ofc_yovani_hades*⬒ ─⟢⟨©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏✍⟩⟣─ ⬒\n\n⬒ ─⟢⟨ *GRUPOS* ⟩⟣─ ⬒\n➟ *𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰*\n➟ https://chat.whatsapp.com/BuloWd29LSnDZHXtUJDybF\n➟ *𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰2*\n➟ https://chat.whatsapp.com/CJqwaDfrXP02oWl2WAf8rK\n➟ *𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰*\n➟ https://chat.whatsapp.com/BgyxmpSY2VYE3MT0UbLAgf\n➟ *𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰2*\n➟ https://chat.whatsapp.com/DpRVuXpKRF43iMOEtg85wz\n➟ *𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰3*\n➟ https://chat.whatsapp.com/LLCdXUAUjtVA8And8clsWu\n➟ *𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰4*\n➟ https://chat.whatsapp.com/DSb14IPCAaU0ZovBwA2ts0'
global.nnxgrupo = nnx
global.wm = '𝐀𝐍𝐓𝐎𝐍𝐈𝐎\n𝐍𝐄𝐗𝐔𝐒 𝐁𝐎𝐓'
global.wait = '⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱'

global.imagen1 = fs.readFileSync('./media/descargas.jpg')
global.imagen2 = fs.readFileSync('./media/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./media/bot.jpg')
global.imagen4 = fs.readFileSync('./media/grupo.jpg')
global.imagen5 = fs.readFileSync('./media/Menu.jpg')
global.imagen6 = fs.readFileSync('./media/ifo.jpg')
global.imagen7 = fs.readFileSync('./media/minecraft.jpg')
global.mods = [] 

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/Menu.jpg')
                               }
                              }
                             };

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🏆',
      limit: '💎',
      exp: '🕹️'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
