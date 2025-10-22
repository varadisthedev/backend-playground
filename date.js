import fs from 'fs'
fs.appendFileSync("./date.txt", new Date().getDate().toLocaleString())
fs.appendFileSync("./date.txt","\nhello there, you just used append")
// why we did this?
// to log ip, time , and everything from users. used for backend monitoration. really imp thing