const express = require('express');
;

const taskController = require('../controllers/taskController');
const router = express.Router();

router.get('/tasks', taskController.task_index )

router.post('/tasks',taskController.task_create )

router.get('/tasks/:id',taskController.task_get_id)

router.delete('/tasks/:id',taskController.task_delete )


router.get('/all-tasks', taskController.task_all)

router.get('/create-tasks', taskController.task_new)


module.exports = router;