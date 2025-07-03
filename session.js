//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUprSENGN0ZMWThhY2N6SEk2ZlJCcXlSbk5MYmtJcXM4N0JFakkzK3RGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnd5RndmZWxNUUtRVVJWNFV2czJUdkswNWZGVy9lSit2N0g4K1kwSVAzdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRHhFbUs3QjR0alhvRDZ4cExULzN2c1BpSHM1VjNPa0JwZFJGayt2a0VFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwWmhVaVZjakNjeXpmdFE1eWdJbm1JNEtPNWs4QjFJK1hleGRaOG9CL0djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLelR6bys2NjBMS1I1OHNuN3RmYzliUmpmdmFRR3U2R2RqbHJ5MjZ6RjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVPc2VLckNTL25UbTlVRWwwb1EzQjh1NXpHUDN5NXc0L3lQUWFaWEdmUU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFRRldidFl0aXdHdCtDNHVucEh5d0pINFUwTmxuclhTYXljb2Q5dmNGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmNyZjA5bWFWWjY5UERlTmRnM3VnNUxsYUNRdGcvenBrdXpvb0E5OEZ3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IncwQ3I5UDNpZzBZN0tyUzUxVW1jVUFscmQ1YXp5K0NGdjM3M0phRWVaNm9XeXJUY2tXeUs4aGx5MGhabk5RTElzMFBOYjIyYWp1V0JPUk11aE9BeWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6IkxKWGZReEJZSitWRFljczdkMXdZcEcyelRFMDJpUzJ1bEsrdGZHTjlWaTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImRUVjdySThyVEh5VDlVOFF1OUxlaVEiLCJwaG9uZUlkIjoiMTI1MzJiOGYtZWQ4My00MTQxLTk3ZGEtYTE4NjBiYzMxYjhiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZUVmFGN2M2aGhvNk11VVp6WWZvcHFTaHZNOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4M2YyL0ZvR0hQRzF5QnNqeTZpVUhTVTNobXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMlJBQkZGRDIiLCJtZSI6eyJpZCI6Ijk0Nzg5OTk0Nzk4Ojk3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIhcblxuXG5cbvCdkJMnXG5cblxu8J2QmVxuXG5cblxuIPCdkIxcblxu8J2QhCBcblxuXG5cbvCdkJFcblxu8J2QhFxuXG7wnZCAXG5cblxu8J2Qi1xuXG5cblxuIPCdkIpcblxuXG7wnZCIXG5cblxu8J2QjVxuXG5cbvCdkIZcblxuXG5cbvCdkJJcblxuXG7wnZCHXG5cblxu8J2QgFxuXG5cbvCdkI1cblxuXG7wnZCUIiwibGlkIjoiMTk1MzM1NTY1NjMxNTg1Ojk3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3Fyak0wREVJU1ptc01HR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiS2RUcmFyNDRRdHRkblhUbm1FK2F6SUZyWDMyY1JDRFRCTlFFZGxUSm9rST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWkhIVWNVU0ZzN0U4TWxEdndHY1lkWHI4SG5vNVV4TVdQUENGRHZaVFhmaVd4OFFpUWtWZTFlWlYreHdEWWkwYm05SnRTdUVtWS9RVCtjOTdNd1RXREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNCTjQwd083eWkvMnBKZ0tHVXNuRm1RYXF0ejZWTHdYTStwcnVCM1ZtN1FUdFpobVpmWEpNWGFXd0ZJRlZndVZpYXVnWCs4cGZqSXh3ZjlvaTBGU2p3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODk5OTQ3OTg6OTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU25VNjJxK09FTGJYWjEwNTVoUG1zeUJhMTk5bkVRZzB3VFVCSFpVeWFKQyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxNTUxMTIyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUptaCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
