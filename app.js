const express = require('express');
const { render } = require('express/lib/response');
const mongoose = require('mongoose');


const taskRoutes = require('./routes/taskRoutes');

const app = express();

const dbURI = "mongodb+srv://ravindu0504:test123@tasks.wt1pj.mongodb.net/tasks?retryWrites=true&w=majority"

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedtopology:true})
  .then((result)=> {
    app.listen(3000);
    console.log('db connected');
  })
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));


app.get('/', (req, res) => {
  res.redirect('/tasks')
  // res.render('index', {tasks : tasks});
});

//task-routes
app.use(taskRoutes);