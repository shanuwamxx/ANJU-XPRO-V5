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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkR4TUpJQjg3d002NXF1UnJwVVR3azV1dTBBMWhPNFBBaVF1bFNtd2xrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejVTOUdwMEJUWFdTblFxakRBcnFYOUVUdW5URGFNemJHeWNiVHZtRFRrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQUsvVk50ZXFQVnlUT3oyWjlJVWc4TXVqZEo5aTVHK283OVZEeHROSlZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnV2JsaW1pVWtYRk5wcGx2aDdCV01RbGdieTFlSHo2TGZyS0lHUWtxNEdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFdGtaZzBZcmhqeFFOcWhYNnBzNmNqcmN1bmZUeVRaRkVqVlg5UVhsVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpFeUE3TTNFZG12NmJ2VldEZ0YxNDNBdllkclhOVUt4Y2VlZ0RFbTFTRGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENUMCt6WFRFQmJRSzh0SEI0Q1o4MkZyYm15aXFCbWNyWG8yQ0duTUlWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmpGeTUxZmcwbnQ0c0kxMVdPWDhmTG5XQVU4V0xwUVhySVdHMGVSd3hGVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhyQU53Z3VEYXNQU2JnZTBOeitaYnVNYTJmUGxXUDJIU0dGYjlhOVdHUVdzR2hya2pZQ09vVEZLa3lYU0xROGdHVXphMTU1RThHdmNXVU5URm8wWENRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTczLCJhZHZTZWNyZXRLZXkiOiJLK2p1WHd4WktBcVVGdjJRbDEyR2VzMktsRXNZUDY5ZDF5T2lWS3QwRi9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDekZuZGU0UlJRV0dwWmcxdG5lTmV3IiwicGhvbmVJZCI6IjQ1ZjkxNmUyLTZlNTgtNDM1YS04MjM4LTY0ZWZiOTdlZGY5MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRZEgybTVqZVhyT1J1bWx5VGQrREZCa0tDSjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkEzUU5aUStFU0l6eGMzRUtMZVF3R3FLcmtRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlDWUFTQjZQIiwibWUiOnsiaWQiOiI5NDc4OTk5NDc5ODoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIhcblxuXG5cbvCdkJMnXG5cblxu8J2QmVxuXG5cblxuIPCdkIxcblxu8J2QhCBcblxuXG5cbvCdkJFcblxu8J2QhFxuXG7wnZCAXG5cblxu8J2Qi1xuXG5cblxuIPCdkIpcblxuXG7wnZCIXG5cblxu8J2QjVxuXG5cbvCdkIZcblxuXG5cbvCdkJJcblxuXG7wnZCHXG5cblxu8J2QgFxuXG5cbvCdkI1cblxuXG7wnZCUIiwibGlkIjoiMTk1MzM1NTY1NjMxNTg1OjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcXJqTTBERUo3bHVjTUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLZFRyYXI0NFF0dGRuWFRubUUrYXpJRnJYMzJjUkNEVEJOUUVkbFRKb2tJPSIsImFjY291bnRTaWduYXR1cmUiOiJhd1ZmekdZM25GV2FOL0l3alpKQUIyNmNLQTB0TEZDUFBpTVZOR0dySWM5RHFYKzJJZGMvZVJXazhOVmZ5dHZOZEh0WGdFTlEwZE1vREdTdUh6UG5CQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicDlwcjFtZ1dDSEdjR24wV3ovTThBQzVROVpGRC94QUNLSFc5RFZIcDRLek9uWlRJejgzVnFybkthdGVYYy94aTFwOXFud0VBVEtzMXR4UWJRcFMxQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4OTk5NDc5ODoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNuVTYycStPRUxiWFoxMDU1aFBtc3lCYTE5OW5FUWcwd1RVQkhaVXlhSkMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjA2ODc3OSwibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
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
