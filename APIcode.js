const express = require('express');
const { json } = require('express');
const server=express();

server.use(express.json())

const listTasks = [ {id:"1", title:"Code Challenge", task: "win"}]



//retornar todas as task
server.get('/tasks',(req,res) => {
  return res.json(listTasks) 
})

//retornar todas as tasks por id
server.get('/tasks/:id', (req,res) => {
    const {id}=req.params

    const taskID=listTasks.filter(task => task.id==id)
   

    return res.json(taskID)
})

//criando task nova
server.post('/tasks', (req,res) => {
    const {id,title} = req.body 
    const task = {
        id,
        title,
        tasks: []
      };
      listTasks.push(task)
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





server.listen(3033)