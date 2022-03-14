import {Client} from "discord.js"

const client = new Client({
    intents: 98303
})

client.on("ready", () => {
    console.log("Connection Succesffuly Established.")
})

client.login("OTUyOTU1Mjg1NzUwODI1MDcx.Yi9ixQ.I3_TZgDzem_0fIPHRq_xTuFGcbw").then(() => console.log("Client created"))
