const express = require('express');
const { json } = require('express');
const server=express();

server.use(express.json())

const listTasks = [ {id:"1", title:"Code Challenge", task:["win"]}]


function checkTaskExists(req,res,next) {
  const {id}=req.params
  if (listTasks.filter(task => task.id==id)!==[]){
      return res.status(400).json({error: 'task not found'})
  }
  return next();
}


//retornar todas as task
server.get('/tasks',(req,res) => {
  return res.json(listTasks) 
})

//retornar todas as tasks por id
server.get('/tasks/:id', checkTaskExists,(req,res) => {
  

    const {id}=req.params
    

    const taskID=listTasks.filter(task => task.id==id)
   

    return res.json(taskID)
})

//criando task nova
server.post('/tasks', (req,res) => {
    const {id,title,task} = req.body 
    const Task = {
        id,
        title,
        task
      };
      listTasks.push(Task)
    return  res.json(listTasks)
})

//alterando title da task com base no id do parâmetro
server.put('/tasks/:id', (req,res) => {
    const {id}=req.params
    const {title}=req.body

    const task = listTasks.find(task => task.id==id)

    task.title=title

    return res.json(task)
})

//deletando task com base no id 

server.delete('/tasks/:id', (req,res) => {
  const {id}= req.params
  const task = listTasks.findIndex(task => task.id=id)
  listTasks.splice(task,1)
  return res.json(listTasks)
})

server.post('/tasks/:id/task', (req,res) => {
  const {id} = req.params 
  const {title} = req.body
  const taskSelected = listTasks.find(task =>task.id=id)
  taskSelected.task.push(title)
    
  return  res.json(taskSelected)
})





server.listen(3033)