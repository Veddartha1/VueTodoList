<script>
import { store } from '../store/todos.js'

export default {
    props: {
        item: Object,
    },
    methods: {
        removeTodo(){
            store.removeTodo(this.item)
        },
        setChecked() {
            store.setChecked(this.item)
        }
    }
}
</script>
<template>
    <li>
        <input type="checkbox" :checked="item.done" @dblclick="removeTodo" @click="setChecked">
        <del v-if="item.done" >
            {{ item.title }}
        </del>
        <span v-else>
            {{ item.title }}
        </span>
    </li>
</template>
