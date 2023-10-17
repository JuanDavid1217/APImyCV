const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by CrazyDave');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/work-experience', (req, res, next)=>{
	res.sendfile("assets/work-experience.json")
})

app.get('/Skills&Competencies', (req, res, next)=>{
	res.sendfile("assets/Skills&Competencies.json")
})

app.get('/Achievements&Certificates', (req, res, next)=>{
	res.sendfile("assets/achievements&certificates.json")
})

app.get('/Interests', (req, res, next)=>{
	res.sendfile("assets/interests.json")
})

app.get('/proxy-size', (req, res, next)=>{
	res.sendfile("assets/a1_proxy_size.json")
})

app.get('/dev-hours', (req, res, next)=>{
	res.sendfile("assets/a1_dev_hours.json")
})

app.get('/3a-test1', (req, res, next)=>{
	res.sendfile("assets/3a_test1.json")
})

app.get('/3a-test2', (req, res, next)=>{
	res.sendfile("assets/3a_test2.json")
})

app.get('/3a-test3', (req, res, next)=>{
	res.sendfile("assets/3a_test3.json")
})

app.listen(port,  () => 
	console.log('listening on port ' + port
));


