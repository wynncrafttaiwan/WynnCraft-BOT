const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {
        const playerName = args.join("");
        const urlMain = `https://api.wynncraft.com/v2/player/${playerName}/stats`
        if(playerName == ""){
            message.channel.send("你並未輸入玩家名稱...")
        }else{
            request(urlMain, function(err, response, player) {
                if(err) {
                    console.log(err);
                    return message.channel.send('在查詢時出了點問題:P');
                }
                player = JSON.parse(player);
                const xp0 = [
                  player.data[0].classes[0].professions.combat,
                  player.data[0].classes[0].professions.woodcutting,
                  player.data[0].classes[0].professions.mining,
                  player.data[0].classes[0].professions.fishing,
                  player.data[0].classes[0].professions.farming,
                  player.data[0].classes[0].professions.alchemism,
                  player.data[0].classes[0].professions.armouring,
                  player.data[0].classes[0].professions.cooking,
                  player.data[0].classes[0].professions.jeweling,
                  player.data[0].classes[0].professions.scribing,
                  player.data[0].classes[0].professions.tailoring,
                  player.data[0].classes[0].professions.weaponsmithing,
                  player.data[0].classes[0].professions.woodworking,
                  player.data[0].classes[0].professions.profession,
                  player.data[0].classes[0].professions.overall
                ]
                const text = [
                  `\`\`\`css\n戰鬥 / Combat | [${xp0[1].level} - ${xp0[1].xp}]`
                ]  
                let playerInfo = new Discord.RichEmbed()
                  .addField(`${player.data[0].classes[0].name} 的等級資訊`,text,true)
                message.channel.send(playerInfo)
            })
        }
    }


module.exports.help = {
  name: 'player',
};