//task_index , task_details, task_create, task_delete. task_get_id
const Task = require('../models/task');

const task_index = (req, res) =>{
  Task.find()
    .then((result) => {
      res.render('index', {tasks: result});
    })
    .catch((err) => {console.log(err)});
}

const task_create = (req, res) => {
  const task = new Task(req.body);
  task.save()
    .then((result)=>{
      console.log('saved');
      res.redirect('/tasks');
    })
    .catch(err => console.log(err));
}

const task_get_id = (req, res) => {
  const id = req.params.id;

  Task.findById(id)
    .then((result) => {
      res.render('details', {task: result, title: "task details"});
    })
    .catch(err => console.log(err));
}

const task_delete = (req, res) => {
  const id = req.params.id

  Task.findByIdAndDelete(id)
    .then(result => {
      console.log('done');
      res.json({redirect: '/tasks'})
    })
    .catch(err => console.log(err));
}

const task_all = (req, res) => {
  res.redirect('/tasks');
}

const task_new = (req, res) => {
  res.render('newTasks');
}

module.exports = {
  task_index,
  task_create,
  task_get_id,
  task_delete,
  task_all,
  task_new
}