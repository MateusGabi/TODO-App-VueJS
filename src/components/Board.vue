<template>
  <div>
    <Navbar />

    <div class="jumbotron col-md-6 col-md-offset-3">
      <div class="container">

        <h3 class="text-center">TODO List</h3>

        <form class="form-horizontal" v-on:submit="addTodo">
          <input class="form-control" type="text" placeholder="What you shall to do?" v-model="newTodo.name">
        </form>

        <ul v-if="todos.length > 0">
          <li v-for="todo in todos">
            <div class="row">
              <div class="col-lg-12">
                <div class="input-group">
                  <span class="input-group-addon">
                    <input type="checkbox" v-on:click="removeTodo(todo)">
                  </span>
                  <input type="text" class="form-control" v-bind:value="todo.name">
                </div><!-- /input-group -->
              </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->
          </li>
        </ul>

        <div v-if="todos.length == 0" class="alert alert-warning" role="alert">
          <strong>Awesome!</strong> There's nothing to do!
        </div>

      </div>

      <footer>
        <p class="text-center"><small>&copy; Developed by <a href="https://github.com/MateusGabi" target="_blank">Mateus Gabi</a> using <a href="https://vuejs.org/" target="_blank">VueJS</a></small></p>
      </footer>
    </div>

  </div>
</template>

<script>
import TODOService from '@/services/TODOService.vue'
import Navbar from '@/components/Navbar.vue'

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

  components: {
    TODOService,
    Navbar
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 10px 0;
}
li {
  list-style: none;
  padding: 5px 0;
}
</style>