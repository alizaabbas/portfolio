var pg = require('pg');
var express = require('express');
var app = express();

var bodyParser =  require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine' , 'ejs');
app.set('views' , './views');
var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/portfolio';
// loads portfolio page
app.get('/portfolio' , function(req, res){
	res.render('portfolio');
})

// inserts blog into the blog database
app.post('/portfolio/blogs' , function(req,res){
	pg.connect(connectionString , function(err , client ,done){
   client.query(`insert into blog(title,message) values ('${req.body.title}' , '${req.body.message}')`, function(err, result){
    res.redirect('/portfolio/blogs');
    done();
    pg.end();
  })
 })
})
// getting all bloggers
app.get('/portfolio/blogs' , function(req , res){
	pg.connect(connectionString , function(err,client,done){
		client.query('select * from blog' , function(err , result){
			res.render('blog', { data: result.rows});
     done();
     pg.end();
   })
	})
})

app.get('/portfolio/delete/blog/:id' , function(req,res){
  pg.connect(connectionString, function(err, client, done){
    var user_id = req.params.id;
    client.query(`delete from blog where id = ${user_id}`, function(err,result){
      res.redirect('/portfolio/blogs');
      //console.log(result.rows)
      done();
      pg.end();
    })
  })
})


app.listen(3000, function() {
  console.log("listening to port 3000...");
})