const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'../public/');

let app = express();

app.get('/a',(req,res) => {
	res.send('im on');
})

app.use(express.static(publicPath));

app.listen(3000,() => {
	console.log('server is running on port 3000');
})