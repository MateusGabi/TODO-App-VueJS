<template>
  <div>
    <h1>TODO App</h1>

    <h2>TODO List</h2>

    <form>
      <input type="text" placeholder="name" v-model="newTodo.name">
      <input type="submit" value="Save" v-on:click="addTodo">
    </form>

    <ul>
      <li v-for="todo in todos" v-on:click="removeTodo(todo)"> {{ todo.name }}</li>
    </ul>
  </div>
</template>

<script>
import TODOService from '@/services/TODOService.vue'

let todosRef = TODOService.getRef()

export default {
  firebase: {
    todos: todosRef
  },
  data () {
    return {
      newTodo: {
        name: '',
        state: 'new'
      }
    }
  },
  methods: {
    addTodo: function () {
      todosRef.push(this.newTodo)
      this.newTodo.name = ''
      this.newTodo.state = 'new'
    },
    removeTodo: function (todo) {
      todosRef.child(todo['.key']).remove()
    }
  },

  components: { TODOService }
}
</script>