    const {Client, RichEmbed, Discord} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;
    
    client.on('ready',()=>{
        console.log(`${client.user.tag} NEEEEEEEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!!!!!!！`) ;
    }) ;

    client.on('message',msg=>{
        
        if(msg.content.startsWith(settings.prefix+'test')){
            msg.channel.send('測試') ;
        }

        if(msg.content.includes('owo')){ //回答owo
            if(msg.author.bot)
                return;
            msg.channel.send('owo?') ;
            }
 
    if(msg.content.includes('@小助理 安安')){ //隨機回答 安安
        if(msg.author.bot)
            return;
        var rnd = Radom(10,1) ;
        switch(rnd){
            case 1:msg.reply('你好') ;break ;
            case 2:msg.reply('おはようございます') ;break ;
            case 3:msg.reply('こんにちは') ;break ;
            case 4:msg.reply('アンアン') ;break ;
            case 5:msg.reply('安安') ;break ;
            case 6:msg.reply('早安') ;break ;
            case 7:msg.reply('午安') ;break ;
            case 8:msg.reply('晚安') ;break ;
            case 9:msg.reply('hi') ;break ;
            case 10:msg.reply('hi owo') ;break ;
            }
        }
        
        if (msg.content.includes("訊息複誦 ")) {  //訊息後 複誦訊息
            msg.channel.bulkDelete(1).then(() => {
                 let sentence = msg.content.split(" ");
                 sentence.shift();
                 sentence = sentence.join(" ");
                 msg.channel.send(sentence);
            });}
        
            if (msg.content.includes("訊息刪除 ")) {  //訊息後 複誦功能
            msg.channel.bulkDelete(1).then(() => {
                });}
           
           
       client.on('message',msg=>{

                  //https://www.myanswersbook.com/zh-cn.html
                    
         if (msg.channel.id === '933987950650359848'){ 
                        
         if(msg.content.includes('?')){ //隨機抽籤
                            
          if(msg.author.bot)
             return;
                
           var num = Radom(30,1) ;
        switch(num){
        
            case 1:msg.reply('當然') ;break ;
            case 2:msg.reply('你不會失望的') ;break ;
            case 3:msg.reply('及早開始') ;break ;
            case 4:msg.reply('走一步算一步') ;break ;
            case 5:msg.reply('很可能遭遇不幸') ;break ;
            case 6:msg.reply('無論你做什麼 結果將是持久的') ;break ;
            case 7:msg.reply('那超出了你的控制範圍') ;break ;
            case 8:msg.reply('慷慨大方一點') ;break ;
            case 9:msg.reply('絕對不是') ;break ;
            case 10:msg.reply('也許') ;break ;
            case 11:msg.reply('它將會帶來好運') ;break ;
            case 12:msg.reply('你需要考慮其他方法') ;break ;
            case 13:msg.reply('這不值得爭取') ;break ;
            case 14:msg.reply('你的行為將會改善這件事') ;break ;
            case 15:msg.reply('這是毫無疑問的') ;break ;
            case 16:msg.reply('你必須現在行動') ;break ;
            case 17:msg.reply('絕不') ;break ;
            case 18:msg.reply('這不重要') ;break ;
            case 19:msg.reply('毫無疑問') ;break ;
            case 20:msg.reply('不') ;break ;
            case 21:msg.reply('你看得太近了') ;break ;
            case 22:msg.reply('尋找更多選擇') ;break ;
            case 23:msg.reply('你不是真心在意') ;break ;
            case 24:msg.reply('這具有重大意義') ;break ;
            case 25:msg.reply('信你的直覺') ;break ;
            case 26:msg.reply('船到橋頭自然直') ;break ;
            case 27:msg.reply('船到橋頭自然沉') ;break ;
            case 28:msg.reply('等待一個更好的時機') ;break ;
            case 29:msg.reply('等待一個更好的時機') ;break ;
            case 30:msg.reply('owo') ;break ;

        }}
        function Radom(max,min) {
                var rnd = Math.floor(Math.random()*max)+min ;
                return rnd ;
        }
    }}) ;                 
           
            }) ;
        

    client.login(settings.token) ;