//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "e2af6758-17c0-4f75-9f3d-15ca5db2d85d";
global.allowJids = process.env.ALLOW_JID || "22394918758@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/69b00403876d5d712cd7f.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "22394918758";
global.owner = process.env.OWNER_NUMBER || "22394918758";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVnNFQ0TUJTRDRBM2N3S2ROOXdFdEhWREtrdUFtWjEvM2tSanBjWHJIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1lIaE1pbGZCSkd1NElMOHhFSHpXYzRIY1RtRlE5Vy9wYUdUNDU5K2x5bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QnYyRDl6T3FRYlYwVFJTYzRxdndsSElWR1BEbEJNWnh5dFM1Y0hJQVdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrK2t1Y3N3eC92NWNBbC9DOERNbFhKWmVKQzM3Yk5qbGZxM2V5Q0prVVJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNGeTJPK2REQ2lxWVNjc3BuVDhNbGI5Q3k0YXZSaStVRHA0eTVpMzJ4Mzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1DaCswK0xMZi8rMVAvczVlZWxQVXlQa1Y3MHZVd0p1NUxmckZXdlZTWGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkphai9XWkd6Nk5JTDBEbTNUZEVSWllEbVdFUmMwRXh3SklaL3hvNEcyQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FjNHg4VWZyUWwvTnhPTE1WWElJazFLVFY5NUQrSi9qMUswRE84b0xUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBqVTRSbCtzQm1FaFBaU3RxZFpQTjhTUGtwdGFleDhUdS9vOTByS0JIODlnRTZ6Tk9FdUUxekNFYTZFVThyYWlJQzJnaXJKdG9FSDIxcnJ4RVNTQWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTgsImFkdlNlY3JldEtleSI6ImpmT3VJZHh5YXlmOUVhK2lEOHkrUDJHd3MweEkxVjVlaDdLSVM4Q2VsczA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVjMUEyVTFpUXEyeTVWRE92Z0xFWXciLCJwaG9uZUlkIjoiOWZhMzQzODktN2UyYy00M2JkLWIyNjktOWVlMWJkNWEyYjM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhWVmtNVjJINGxDYVhtcG1YaGVZc2VWTisvYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRCtnRjUyeWVTZlJEQlh5cWMzbzN6V1pDMGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiR0I2Q0RSWEsiLCJtZSI6eyJpZCI6IjIyMzk0OTE4NzU4Ojk0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfh7Lwn4ex4pis4oOi4oOfIPCdl57wnZel8J2ek/CdmY/wnZ6X8J2ZjvCTiokifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ltbjRhTUNFTW1tdTdRR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InluTktqQmZDOHNTYjlZb3prQWNDdG5WRU5OYjBwUHlsUExjN3NDSUxPazQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im82SkhNUHBZRlc3VTlZSlZwT3JaUjZLR2VoS0JQbGlIQ0FJbGdDYzdCNFM0Q1JVSU5NQ3dsdHFXdXhDcHdKYW9SK0tzUUhoQ0FUK2U4QzZ5ZkNaK0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0a2dkY3c4NFFBTnVuY2VaZ1pueTJKL3B1NmlrY2RrRnVQdjRwVTR1Uk9DUlpwSng4cHFGeEh1Q2N6SUphQ3d1eGJRRUtiM0lHMnA0TWcrQ3k2OWFqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMzk0OTE4NzU4Ojk0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNwelNvd1h3dkxFbS9XS001QUhBcloxUkRUVzlLVDhwVHkzTzdBaUN6cE8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA2MzYyNDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ1VkIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-KRATOS-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "OT-𝐌𝐃-KRATOS",
  ownername: process.env.OWNER_NAME || "🇲🇱☬⃢⃟ 𝗞𝗥𝞓𝙏𝞗𝙎𓊉",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "VFo7zxYpfHREwHf3nmydPXEv",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "059a58cb42127f7ac9897e9b8b696f13",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
