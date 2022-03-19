const Query = require("minecraft-query")

const query = new Query({host: "play.magicskyblock.tk",port: 25300})
module.exports = {
    name: `ready`,
    once: false,
    execute(client){
        setInterval(() => {
            query.basicStat().then(query => {
                client.user.setActivity(query.online_players + " player are playing on MagicGames",{
                    type: "LISTENING"
                })
            }).catch(error => {
                    client.user.setActivity("Server is offline", {
                        type: "LISTENING"
                    })
                }
            )
        },1000)
    }
}