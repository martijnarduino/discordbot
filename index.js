const discord = require("discord.js");
const botdash = require("botdash.pro");
const botConfig = require("./botconfig.json");
const fetch = require(`node-fetch`);

var dashboard = "";
const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);


    client.user.setActivity("Martijn#0155", {
        type: "LISTENING",
        //url: "https://www.twitch.tv/monstercat"
      });
    

      dashboard = new botdash.APIclient(botConfig.botdash);

      

});


client.on("message", async message =>{

    if(message.author.bot) return;
    if(message.channel.type == "dm") return;


    //var prefix = botConfig.prefix;
    var prefix = await dashboard.getVal(message.guild.id, "botprefix");
    //var letopprefix = botConfig.letopprefix; 
    var letopprefix = await dashboard.getVal(message.guild.id, "letopprefix");
    //var freeprefix = botConfig.freeprefix;
    var freeprefix = await dashboard.getVal(message.guild.id, "freeprefix");
    //var noperm = botConfig.noperm;
    var noperm = await dashboard.getVal(message.guild.id, "noperm");
    //var staffrol = botConfig.staffrol;
    var staffrol = await dashboard.getVal(message.guild.id, "staffrol");
    //var ticketrol = botConfig.ticketrol;
    var ticketrol = await dashboard.getVal(message.guild.id, "ticketrol");
    var test = botConfig.tester;
    //var role = "<@" + botConfig.role + ">";
    var role = "<@" + await dashboard.getVal(message.guild.id, "role"); + ">";

    var regel1 = await dashboard.getVal(message.guild.id, "Regel1");
    var regel2 = await dashboard.getVal(message.guild.id, "Regel2");
    var regel3 = await dashboard.getVal(message.guild.id, "Regel3");
    var regel4 = await dashboard.getVal(message.guild.id, "Regel4");


    var ticketbhr = `<@&${ticketrol}>`;
    var memereddit = botConfig.memereddit;
    
    //var ruleschan = botConfig.ruleschannel;
    var ruleschan = await dashboard.getVal(message.guild.id, "ruleschan");
    var messageArray = message.content.split(" ");

    var command = messageArray[0];




    //FREE ----------------------------------------------------------------------------------------------------------=============================================================
if(command === `${freeprefix}help`){
    var botEmbed = new discord.MessageEmbed()
            .setTitle("Gratis commando's")
            .setDescription(".")
            .setColor("#9900ff")
            .addFields(
                {name: "Gratis commando 1", value: "love, LOVE, lotsoflove, LOTSOFLOVE"},
                {name: "Gratis commando 2", value: "gratis.hallo"},
                {name: "Gratis commando 3", value: "gratis.info"},
                {name: "Gratis commando 4", value: "gratis.info1"},
                {name: "Gratis commando 5", value: "letop.regels"},
                {name: "Gratis commando 6", value: "gratis.meme"},
                {name: "Gratis commando 7", value: "gratis.avatar @gebruiker"},
                {name: ".", value: "."})
            .addField("Gratis commandos herhaald door: ", "<@"+ message.author.id + ">");
        return message.channel.send(botEmbed);
    }
if (command === `${freeprefix}avatar`){
    var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]) ||
        client.users.cache.find(user => user.username.toLowerCase() == args.join(" ").toLowerCase()) ||
        client.users.cache.find(user => user.tag.toLowerCase() == args.join(" ").toLowerCase()));
        if (!member) member = message.member;

        var embed = new discord.MessageEmbed()
            .setTitle(`Avatar ${member.user.username}`)
            .setColor(`RANDOM`)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096}));
        message.channel.send(embed);
}
    if (command === `${freeprefix}meme`){
        fetch(memereddit).then(resp => resp.json()).then(respOmgevorm => {
            var permaLink = respOmgevorm[0].data.children[0].data.permaLink;
            var memeUrl = `https://www.reddit.com${permaLink}`;
            var memeFoto = respOmgevorm[0].data.children[0].data.url;
            var memeTitle = respOmgevorm[0].data.children[0].data.title;

            var embed = new discord.MessageEmbed()
            .setTitle(`${memeTitle}`)
            .setURL(`${memeUrl}`)
            .setImage(`${memeFoto}`)
            .setColor(`RANDOM`);

            message.channel.send(embed);
        })
        
    }
    if(command === `${freeprefix}hallo`){
        
           
           return message.channel.send("Hallo!"); 
    }

    if(command === `lotsoflove`||command === `love`||command === `LOVE`||command === `LOTSOFLOVE`){
            message.react('❤️');
            message.react('🧡'); 
            message.react('💛');
            message.react('💚');
            message.react('💙');
            message.react('💜');
            message.react('🖤');
            message.react('🤍');
            message.react('🤎');
            message.react('💗');
            message.react('💖');
            message.react('💘');
            message.react('💝');
            message.react('💟');
            message.react('♥️');
    }
    if(command === `${freeprefix}info`){
        var botEmbed = new discord.MessageEmbed()
        .setTitle("Info")
        .setDescription("Zet de beschrijving")
        .setColor("#kleur")
        .addField("Bot naam", client.user.username)
        .addField("Je bent deze server gejoind op", message.member.joinedAt)
        .addField("Totaal members", message.guild.memberCount);
        return message.channel.send(botEmbed);
    }

    if(command === `${freeprefix}info1`){
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Info")
            .setDescription("Zet de beschrijving")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username)

            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
        return message.channel.send(botEmbed);
    }




    //LET OP ----------------------------------------------------------------------------------------------------------=============================================================            
  //  if(command === `${letopprefix}regels`){
    //    var typer = "<@"+ message.author.id + ">"
      //  var chanr = message.guild.channels.cache.get(ruleschan).toString();
        //var botEmbed = new discord.MessageEmbed()
        
          //  .setTitle("Staff commando's")
            //.setDescription("iemand was de regels vergeten of gewoon een herhaling")
//            .setColor("#9900ff")
  //          .addFields(
    //            {name: "regel 1", value: "Gebruik geen andere talen dan Nederlands."},
      //          {name: "regel 2", value: "NSFW of aanstootgevende inhoud van welke aard dan ook is ten strengste verboden.  Als u niet zeker weet of het NSFW is, moet u deze niet plaatsen."},
        //        {name: "regel 3", value: "Bijnamen moeten vermeld kunnen worden."},
          //      {name: "regel 4", value: "Ondersteun volwassen gesprekken en respecteer elkaar;  buitensporige godslastering, aanzetten tot haat of enige vorm van intimidatie worden niet getolereerd."},
            //    {name: "regel 5", value: "Spamming, toxiciteit of agressief gedrag wordt niet getolereerd."},
              //  {name: "regel 6", value: "Elke vorm van reclame is verboden.  Dit omvat serveradvertenties, linkjes naar een bepaalde website wat hoogstwaarschijnlijk gelinkt is aan een andere server."},
                //{name: "regel 7", value: "Elke vorm van handel is verboden.  Dit geldt voor alle diensten en ook voor bedelen."},
//                {name: "regel 8", value: "Alternatieve accounts zijn verboden.  Bij ban / dempingsontduiking worden alle accounts permanent verbannen."},
  //              {name: "regel 9", value: "Houd rekening met kanalen en hun gebruik;  lees de kanaalbeschrijvingen en let op."},
    //            {name: "regel 10", value: "Noem @🔰| Staffteam  leden niet, tenzij er een noodsituatie is die onmiddellijke actie vereist. (Het is ook niet toegestaan door het alsnog uit te voeren en vervolgens sorry te zeggen terwijl het geen noodzaak is)"},
      //          {name: "regel 11", value: "Stuur geen DM berichten aan andere leden, tenzij onderling overeengekomen."},
        //        {name: "regel 12", value: "Nabootsing van andere gebruikers, bots of publieke figuren is verboden."},
          //      {name: "regel 13", value: "Vraag @🏡| Burger  niet om OOC te betreden. Dit is een taak voor het @🔰| Moderator als hij/zij jou wilt spreken."},
            //    {name: "regel 14", value: "Staande houding voer jij met die agent onverzoenlijk uit."},
              //  {name: "regel 15", value: "Schieten doe je pas vanaf 3 agenten in de stad."},
                //{name: "regel 16", value: "Politie mag gang members niet zomaar fouilleren zonder enige reden."},
//                {name: "alle regels zijn ook te vinden in ", value: chanr})
  //          .addField("regels herhaald door: ", typer);
            
            
    //    return message.channel.send(botEmbed);
    //}

        if(command === `${letopprefix}regels`){
        var typer = "<@"+ message.author.id + ">"
        var chanr = message.guild.channels.cache.get(ruleschan).toString();
        var botEmbed = new discord.MessageEmbed()
        
            .setTitle("Staff commando's")
            .setDescription("iemand was de regels vergeten of gewoon een herhaling")
            .setColor("#9900ff")
            .addFields(
                {name: "regel 1", value: regel1},
                {name: "regel 2", value: regel2},
                {name: "regel 3", value: regel3},
                {name: "regel 4", value: regel4},
                {name: "regel 5", value: "Spamming, toxiciteit of agressief gedrag wordt niet getolereerd."},
                {name: "regel 6", value: "Elke vorm van reclame is verboden.  Dit omvat serveradvertenties, linkjes naar een bepaalde website wat hoogstwaarschijnlijk gelinkt is aan een andere server."},
                {name: "regel 7", value: "Elke vorm van handel is verboden.  Dit geldt voor alle diensten en ook voor bedelen."},
                {name: "regel 8", value: "Alternatieve accounts zijn verboden.  Bij ban / dempingsontduiking worden alle accounts permanent verbannen."},
                {name: "regel 9", value: "Houd rekening met kanalen en hun gebruik;  lees de kanaalbeschrijvingen en let op."},
                {name: "regel 10", value: "Noem @🔰| Staffteam  leden niet, tenzij er een noodsituatie is die onmiddellijke actie vereist. (Het is ook niet toegestaan door het alsnog uit te voeren en vervolgens sorry te zeggen terwijl het geen noodzaak is)"},
                {name: "regel 11", value: "Stuur geen DM berichten aan andere leden, tenzij onderling overeengekomen."},
                {name: "regel 12", value: "Nabootsing van andere gebruikers, bots of publieke figuren is verboden."},
                {name: "regel 13", value: "Vraag @🏡| Burger  niet om OOC te betreden. Dit is een taak voor het @🔰| Moderator als hij/zij jou wilt spreken."},
                {name: "regel 14", value: "Staande houding voer jij met die agent onverzoenlijk uit."},
                {name: "regel 15", value: "Schieten doe je pas vanaf 3 agenten in de stad."},
                {name: "regel 16", value: "Politie mag gang members niet zomaar fouilleren zonder enige reden."},
                {name: "alle regels zijn ook te vinden in ", value: chanr})
            .addField("regels herhaald door: ", typer);
            
            
        return message.channel.send(botEmbed);
    }
    



    //STAFF ----------------------------------------------------------------------------------------------------------=============================================================
    if(command === `${prefix}help`){
        if (!message.member.roles.cache.some(role => role.id === `${staffrol}`)) {
            return message.channel.send(noperm);
        }
        var botEmbed = new discord.MessageEmbed()
            .setTitle("Staff commando's")
            .setDescription(".")
            .setColor("#9900ff")
            .addFields(
                {name: "Staff commando 1", value: "staff.claim"},
                {name: "Staff commando 2", value: "staff.backup"},
                {name: "Staff commando 3", value: "staff.dashboard"},
                {name: "Staff commando 4", value: "."},
                {name: ".", value: "."})
            .addField("Staff commandos herhaald door: ", "<@"+ message.author.id + ">");
        return message.channel.send(botEmbed);
    }
    if(command === `${prefix}dashboard`){
        //command.delete({timeout: 1000})
        if (!message.member.roles.cache.some(role => role.id === `${staffrol}`)) {
            return message.channel.send(noperm);
        }message.channel.send("deze ticket is al geclaimed").then(message => {message.delete({timeout: 1000})})
        var typer = "<@"+ message.author.id + ">"
        var botEmbed = new discord.MessageEmbed()
            .setTitle("LET OP DASHBOARD")
            .setDescription("https://lewedorpbot.botdash.pro/")
            .setColor("#9900ff")
            .addFields(
                {name: ".", value:"."}
            )
            .addField(",", ".");
            
        return message.channel.send(botEmbed);
    }

    if(command === `${prefix}claim`){
        //command.delete({timeout: 1000})
        if (!message.member.roles.cache.some(role => role.id === `${staffrol}`)) {
            return message.channel.send(noperm);
        }message.channel.send("deze ticket is al geclaimed").then(message => {message.delete({timeout: 1000})})
        var typer = "<@"+ message.author.id + ">"
        var botEmbed = new discord.MessageEmbed()
            .setTitle("LET OP")
            .setDescription("Deze ticket is geclaimed Niemand mag zich met deze ticket bemoeen")
            .setColor("#9900ff")
            .addFields(
                {name: "hallo wat kan ik voor u doen", value:"?"}
            )
            .addField("Head of this ticket: ", typer);
            
        return message.channel.send(botEmbed);
    }

    if(command === `${prefix}backup`){
        if (!message.member.roles.cache.some(role => role.id === `${staffrol}`)) {
            return message.channel.send(noperm);
        }message.channel.send("deze ticket is al geclaimed maar heeft hulp nodig" + ticketbhr).then(message => {message.delete({timeout: 1000})})
        var typer = "<@"+ message.author.id + ">"                        
        var botEmbed = new discord.MessageEmbed()
            .setTitle("LET OP")
            .setDescription("Deze ticket is geclaimed maar heeft hulp nodig")
            .setColor("#9900ff")
            .addFields(
                {name: "hallo wat kunnen we voor u doen", value:"?"},
                {name: "Support-Team:", value: ticketbhr}
            )
            .addField("Head of this ticket: ", typer);
        return message.channel.send(botEmbed);
    }
    


//TEST ----------------------------------------------------------------------------------------------------------=============================================================

if(command === `${test}hallo`){
        
           
    return message.channel.send("Hallo!"); 
}
}); 