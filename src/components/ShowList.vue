<script>
import { store } from '../store/todos.js'

import TodoItem from './TodoItem.vue';

export default {
    components : {
        TodoItem
    },
    data() {
        return {
            todos: store.state.todos
        }
    }
}
</script>
<template>
    <p>Cosas a hacer {{ todos.filter(item => !item.done).length }}</p>
    <ul>
    <todo-item
        v-for="item in todos"
        :key="item.id"
        v-bind:item="item"
        >
        </todo-item>
    </ul>
</template>