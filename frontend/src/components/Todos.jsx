// export function Todos({todos}){
//     if (!todos || !Array.isArray(todos)) {
//         return <div>No todos to display</div>;
//     }

//     return <div>
//         {todos.map(function(todo){
//             return <div key={todo.id}>
//                 <h1>{todo.title}</h1>
//                 <h1>{todo.description}</h1>
//                 <button> {todo.completed == true ? "completed" : "mark as completed"} </button>
//             </div>
//         })}
//     </div>
// }

export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
                {todo.title}
                {todo.description}
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}