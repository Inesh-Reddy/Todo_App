const zod = require("zod");
// validate the things user is sending me 

    /* body {
        title: String
        description: String
    }*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
})


const updateTodo = zod.object({
    id: zod.string(),
})


module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo,
}