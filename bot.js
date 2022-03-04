    const {Client, RichEmbed, Discord} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;
    const { token } = require('./settings.json');
    const { prefix } = require('./settings.json');
    const { MessageEmbed } = require('discord.js');
  
    client.on('ready',()=>{
        console.log(`${client.user.tag} NEEEEEEEEEEEEEEEEEEEEEEE!!!!!!`) ;
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
 
    if(msg.content.includes('安安')){ //隨機回答 安安
        if(msg.author.bot)
            return;
        var rnd = Radom(10,1) ;
        switch(rnd){
            case 1:msg.channel.send('你好') ;break ;
            case 2:msg.channel.send('おはようございます') ;break ;
            case 3:msg.channel.send('こんにちは') ;break ;
            case 4:msg.channel.send('アンアン') ;break ;
            case 5:msg.channel.send('安安') ;break ;
            case 6:msg.channel.send('早安') ;break ;
            case 7:msg.channel.send('午安') ;break ;
            case 8:msg.channel.send('晚安') ;break ;
            case 9:msg.channel.send('hi') ;break ;
            case 10:msg.channel.send('hi owo') ;break ;
            }
        }
        
       
        


                  //https://www.myanswersbook.com/zh-cn.html
                    
         if (msg.channel.id === '933987950650359848'){ 
                        
         if(msg.content.includes('?')){ //隨機抽籤
                            
          if(msg.author.bot)
             return;
                
           var num = Radom(26,1) ;
        switch(num){
        
            case 1:msg.channel.send('當然') ;break ;
            case 2:msg.channel.send('你不會失望的') ;break ;
            case 3:msg.channel.sendy('及早開始') ;break ;
            case 4:msg.channel.send('走一步算一步') ;break ;
            case 5:msg.channel.send('很可能遭遇不幸') ;break ;
            case 6:msg.channel.send('無論你做什麼 結果將是持久的') ;break ;
            case 7:msg.channel.send('那超出了你的控制範圍') ;break ;
            case 8:msg.channel.send('慷慨大方一點') ;break ;
            case 9:msg.channel.send('絕對不是') ;break ;
            case 10:msg.channel.send('也許') ;break ;
            case 11:msg.channel.send('它將會帶來好運') ;break ;
            case 12:msg.channel.send('你需要考慮其他方法') ;break ;
            case 13:msg.channel.send('這不值得爭取') ;break ;
            case 14:msg.channel.send('你的行為將會改善這件事') ;break ;
            case 15:msg.channel.send('這是毫無疑問的') ;break ;
            case 16:msg.channel.send('你必須現在行動') ;break ;
            case 17:msg.channel.send('絕不') ;break ;
            case 18:msg.channel.send('這不重要') ;break ;
            case 19:msg.channel.sendy('毫無疑問') ;break ;
            case 20:msg.channel.send('不') ;break ;
            case 21:msg.channel.send('你看得太近了') ;break ;
            case 22:msg.channel.send('尋找更多選擇') ;break ;
            case 23:msg.channel.send('船到橋頭自然直') ;break ;
            case 24:msg.channel.send('船到橋頭自然沉') ;break ;
            case 25:msg.channel.send('等待一個更好的時機') ;break ;
            case 26:msg.channel.send('owo') ;break ;

        }}};




 //=====================================================================================================//
 if (msg.channel.id === '933987950650359848'){ 
 if(msg.content.includes('？')){ //隨機抽籤
                            
    if(msg.author.bot)
       return;
          
     var num = Radom(26,1) ;
  switch(num){
  
      case 1:msg.channel.send('當然') ;break ;
      case 2:msg.channel.send('你不會失望的') ;break ;
      case 3:msg.channel.send('及早開始') ;break ;
      case 4:msg.channel.send('走一步算一步') ;break ;
      case 5:msg.channel.send('很可能遭遇不幸') ;break ;
      case 6:msg.channel.send('無論你做什麼 結果將是持久的') ;break ;
      case 7:msg.channel.send('那超出了你的控制範圍') ;break ;
      case 8:msg.channel.send('慷慨大方一點') ;break ;
      case 9:msg.channel.send('絕對不是') ;break ;
      case 10:msg.channel.send('也許') ;break ;
      case 11:msg.channel.send('它將會帶來好運') ;break ;
      case 12:msg.channel.send('你需要考慮其他方法') ;break ;
      case 13:msg.channel.send('這不值得爭取') ;break ;
      case 14:msg.channel.send('你的行為將會改善這件事') ;break ;
      case 15:msg.channel.send('這是毫無疑問的') ;break ;
      case 16:msg.channel.send('你必須現在行動') ;break ;
      case 17:msg.channel.send('絕不') ;break ;
      case 18:msg.channel.send('這不重要') ;break ;
      case 19:msg.channel.send('毫無疑問') ;break ;
      case 20:msg.channel.send('不') ;break ;
      case 21:msg.channel.send('你看得太近了') ;break ;
      case 22:msg.channel.send('尋找更多選擇') ;break ;
      case 23:msg.channel.send('船到橋頭自然直') ;break ;
      case 24:msg.channel.send('船到橋頭自然沉') ;break ;
      case 25:msg.channel.send('等待一個更好的時機') ;break ;
      case 26:msg.channel.send('owo') ;break ;

  }}};






//=======================================================================================================//
        function Radom(max,min) {
                var rnd = Math.floor(Math.random()*max)+min ;
                return rnd ;
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
           
}) ;                 
           
         
        

    client.login(settings.token) ;