export function CreateTodo(){
    return <div>
        <input style={{
            border:2,
            padding: 2,
            margin : 10
        }} type="text" placeholder="Title" /> <br />
        <input style={{
            border:2,
            padding: 2,
            margin : 10
        }} type="text" placeholder="Description" /> <br />
        <button style={{
            border:2,
            padding: 2,
            margin : 10
        }}
        >Add Todo</button> <br />
    </div>
}