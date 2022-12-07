<script>
import { store } from '../store/todos.js'

export default {
    data(){
        return {
            newTitle: '',
        }
    },
    methods: {
        addTodo(){
            if (this.newTitle) {
                store.addTodo(this.newTitle)
                this.newTitle = ''
            }
        },
    }
}
</script>
<template>
    <form @submit.prevent="addTodo">
        <input v-model.trim="newTitle">
        <button>Add Todo</button>    
    </form>
</template>
