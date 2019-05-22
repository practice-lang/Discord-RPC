
const RPC = require("discord-rpc")
const clientId = '';
RPC.register(clientId);

const client = new RPC.Client({transport: 'ipc'});
  client.on('ready', async () => {
      console.log("RPC 구동확인")
      try {
          client.setActivity({
           state: '',
           details: '',
           startTimestamp: new Date(),
           largeImageKey: '',
           largeImageText: ''
          });
      } catch (e) {
          console.log(e);
      }
  });
client.login({ clientId });