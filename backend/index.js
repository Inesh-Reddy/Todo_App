// write express boilerplate 
// with express.json() middle ware


const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());
app.use(cors());


app.post("/todo", async function(req, res){
    const createPayload =req.body;
    const parsedPaylaod = createTodo.safeParse(createPayload);
    if(!parsedPaylaod.success){
        res.status(411).json({
            message: "You sent the wrong inputs"
        })
        return
    }
    //put it in mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    res.send("Todo Created!!");
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.send(todos);
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPaylaod = updateTodo.safeParse(updatePayload);
    if(!parsedPaylaod.success){
        res.status(411).json({
            message: "You sent the wrong inputs"
        })
        return
    }
    await todo.findOneAndUpdate({
        _id: req.body.id
    },{
        completed: true,
    })
    res.send("Updated!");
})


app.listen(3000, function(){
    console.log("Your server is listening on port : 3000");
})