const app = require('./app');
const http = require('http');

// // Get port from environment and store in Express.
const { PORT } = require('./config/env');
app.set('port', PORT);

// // Create HTTP server.
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
