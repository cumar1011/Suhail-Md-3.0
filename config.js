const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,252682219373";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,252682219373";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "252682219373,252682219373";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_51_05_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTExLFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVVZSODhKSVNGYjgwc0VZampOM3l5VVQ1NFVQTFptSVF0RWUyemNUK1d2ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTI2MTg0MTgxMDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA0QkM1N0Y0ODUwNzYzQUU4NjgzN0Y0MEM3MjIwMzBEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0NjQ0OTQ2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDYmFqWXhDSFFhdWhCckV6dU9RTzJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4N2QwOTM1LTk2NTUtNDk1NC1iYjA3LWQxZDJhZTExZjRiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxNzQsXG4gICAgICAxNjAsXG4gICAgICAxMDYsXG4gICAgICAyNTUsXG4gICAgICAxNTYsXG4gICAgICA1MCxcbiAgICAgIDExNCxcbiAgICAgIDEyMyxcbiAgICAgIDE5MCxcbiAgICAgIDE4NCxcbiAgICAgIDM4LFxuICAgICAgMjAsXG4gICAgICAxMzQsXG4gICAgICAxNzIsXG4gICAgICAxNzYsXG4gICAgICA4NixcbiAgICAgIDE3LFxuICAgICAgMjQzLFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDU2LFxuICAgICAgMTksXG4gICAgICAyMDAsXG4gICAgICAyMyxcbiAgICAgIDc3LFxuICAgICAgMTA3LFxuICAgICAgMTkyLFxuICAgICAgMTQsXG4gICAgICAxNDksXG4gICAgICAyNTQsXG4gICAgICAxMDgsXG4gICAgICAxNzEsXG4gICAgICAyMCxcbiAgICAgIDIwMyxcbiAgICAgIDk0LFxuICAgICAgMjQ0LFxuICAgICAgMzksXG4gICAgICAyMzMsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1A0SFk1OFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjYxODQxODEwMzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0Njk3MDIxNTM1MDI5MjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tlcW84MEdFSy9vNHNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQjJaL2toakhoWDI5ZW1oTGdOQ0ZraE1CaGhuQklhdGJBZzlUUldQNUt5dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVMy91L2c1SXJHNTBFMUZhVWQ5bC9Ua1BYUFpOd0Rsa1hoSjJoUEM5NEdyL0NQSml0QkUrSDUyaklDa2ozWUVWenBSVG96WUZqZm96Sk9GSmFGRjlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2UlZLM0FGYzZHdjdMRlVBcnA0S2xyUFM4eENOT1RwaXFQQ3pPdk9WWTR5MC9CNkZYMHlrbkpWcy9hblBMLzNDUjlaU3ZJTkNZSWZmTEEvblh1WXJodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTI2MTg0MTgxMDM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjQ0OTQ1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUUvdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRS90Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
