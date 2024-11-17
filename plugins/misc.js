const {
  Sparky,
  
  isPublic
} = require("../lib/plugins.js");
const { performance } = require('perf_hooks')
const font = require("@viper-x/fancytext");

Sparky(
  {
      name: "jid",
      fromMe: isPublic,
  },
  async ({
      m, client, args
  }) => {
m.reply(`${m.jid}`)
  })

Sparky(
  {
      name: "runtime",
      fromMe: isPublic,
      category: "misc",
      desc: "To check bot runtime"
  },
  async ({
      m, client 
  }) => {
      return m.reply(`_Runtime : ${await m.runtime()}_`)
  });


Sparky(
  {
      name: "ping",
      fromMe: isPublic,
      category: "misc",
      desc: "To check ping"
  },
  async ({
      m, client 
  }) => {
      
      const start = new Date().getTime();
  
let pong = await client.sendMessage(m.jid , { text : "_Checking X-BOT Pinggging..._" } , { quoted : m })
const end = new Date().getTime();

await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end - start} ms_` , edit : pong.key })
  /*
    const start = new Date().getTime();
  
let pong = await client.sendMessage(m.jid , { text : "_Checking Ping..._" } , { quoted : m })
const end = new Date().getTime();
      */
      const start1 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end - start} ms_` , edit : pong.key })
  
      const end1 = new Date().getTime();
     const start2 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end1 - start1} ms_` , edit : pong.key })
      const end2 = new Date().getTime();
      const start3 = new Date().getTime();

await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end2 - start2} ms_` , edit : pong.key })
      const end3 = new Date().getTime();
      const start4 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end3 - start3} ms_` , edit : pong.key })
      const end4 = new Date().getTime();
      const start5 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end4 - start4} ms_` , edit : pong.key })
      const end5 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end5 - start5} ms_` , edit : pong.key })
/*
      const start6 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end6 - start6} ms_` , edit : pong.key })
      const end6 = new Date().getTime();

      const start7 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end7 - start7} ms_` , edit : pong.key })
      const end7 = new Date().getTime();

  const start8 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end8 - start8} ms_` , edit : pong.key })
      const end8 = new Date().getTime();

      const start9 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end9 - start9} ms_` , edit : pong.key })
      const end9 = new Date().getTime();

      const start10 = new Date().getTime();
await client.sendMessage(m.jid, { text : `_ 𝚾-𝚩𝚯𝚻 𝐒𝚸𝚵𝚵𝐃📍 : ${end10 - start10} ms_` , edit : pong.key })
      const end10 = new Date().getTime();
  */
  });


Sparky(
  {
      name: "wame",
      fromMe: true,
      desc: "Converts an image to sticker",
      category: "converter",
  },
  async ({
      m, client, args
  }) => {
let data = m.quoted.sender.split("@")[0]
return m.reply(`https://wa.me/${data}?text=${args}`)
  }
  );
