import { reactive } from 'vue';

let id = 0

export const store = {
    debug: true,
    state: reactive({
        todos: [
            {
            id: id++,
            title: 'Primero',
            done: true
        },
        {
            id: id++,
            title: 'Segundo',
            done: false
        },
        {
            id: id++,
            title: 'Tercero',
            done: false
        },
        {
            id: id++,
            title: 'Cuarto',
            done: false
        },
        ]
    }),
    addTodo(newTitle){
        if (newTitle) {
            let newObject = {
                id: id++,
                title: newTitle,
                done: false 
            }
            this.state.todos.push(newObject)
        }
    },
    removeTodo(item){
        if (confirm('Se va a borrar ' + item.title)) {

            this.state.todos.splice((this.state.todos.findIndex(todo => todo.id == item.id)), 1)
        }
    },
    delTodos() {
        if (confirm('Vas a borarlos todos')) {
            this.state.todos.splice(0, this.state.todos.length)
        }
    },
    setChecked(item) {
        let elem = this.state.todos.find(todo => todo.id == item.id)
        elem.done = !elem.done
    }
  }