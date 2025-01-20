const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~vV4GgC6I#U5Ii5atPcss8feE2Jxus2hZs5tuqwe00JRMvw2M5TX8",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Jᴜsᴛ Nᴏᴡ Sᴛᴀᴛᴜs Sᴇᴇɴ Bʏ ᯽𝐇𝐚𝐜𝐤𝐞𝐫-𝐓𝐅-𝐌𝐃᯽*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐇𝐚𝐜𝐤𝐞𝐫-𝐓𝐅-𝐌𝐃",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝐇𝐚𝐜𝐤𝐞𝐫-𝐓𝐅-𝐌𝐃",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💘,💞,💕,❣️,💔,❤️‍🔥,💐,🌸,💮,🪷,🏵️,🌹,🌺,🌻,🌼,🌷,🎉,🪀,🧸,🎉,",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923321709972",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐇𝐚𝐜𝐤𝐞𝐫-𝐓𝐅-𝐌𝐃",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐇𝐚𝐜𝐤𝐞𝐫-𝐓𝐅-𝐌𝐃*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/95a128d2-7351-4146-a5ee-69df973b8615",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *𝐇𝐚𝐜𝐤𝐞𝐫-𝐓𝐅-𝐌𝐃*🤠",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
