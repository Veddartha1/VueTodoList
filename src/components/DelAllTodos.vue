<script>
import { store } from '../store/todos.js'

export default {
    methods: {
        delTodos() {
            store.delTodos()
        }
    }
}
</script>
<template>
    <button @click="delTodos">Borrar lista</button>
</template>