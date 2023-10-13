const Turn = require('node-turn');

const server = new Turn({
  // Listening IP and port for the TURN server
  listeningIps: ['0.0.0.0'], // Listen on all available interfaces
  listeningPort: 80,

  // Your server's public IP (for NAT)
  // Replace this with your actual server's public IP
  // If your server has a public IP, you can use it directly
  // If your server is behind a NAT, use the public IP of the NAT
  // You can also use a domain name here
  publicAddress: '54.242.16.164',

  // TURN server credentials
  // You should generate your own username and password
  authMech: 'long-term',
  credentials: {
    username: 'mundorevalida',
    password: 'mundorevalida2023',
  },
});

server.start(() => {
  console.log('TURN server is running on port 80');
});
