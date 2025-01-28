const app = require('express')();

process.on('SIGINT', () => process.exit(0));

app.get('/', (req, res) => res.send('success!'));
app.get('/hi', (req, res) => res.send('hi!'));

app.listen(3000, () => console.log('server is up'));
