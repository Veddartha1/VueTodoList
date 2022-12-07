<script>
import ShowList from './components/ShowList.vue';
import AddTodo from './components/AddTodo.vue';
import DelAllTodos from './components/DelAllTodos.vue';
import AppTitle from './components/AppTitle.vue';

export default ({
  components: {
    AppTitle,
    ShowList,
    AddTodo,
    DelAllTodos
  }
})
</script>

<template>
  <app-title title="Cosas a hacer"></app-title>
  <show-list></show-list>
  <add-todo></add-todo>
  <del-all-todos></del-all-todos>
</template>