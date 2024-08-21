const express=require('express');
const path=require('path');

const app=express();

const PORT=3000;

const Path=path.join(__dirname,'views');

app.set('view engine','ejs');
app.set('views',Path);

app.use(express.static('views'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
    // res.send('Hello World');
});

app.get('/about',(req,res)=>{
    res.render('about.ejs');
});

app.listen(PORT,()=>console.log('Server is running on http://localhost:'+PORT));
