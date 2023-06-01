<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:todoItems="todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    "TodoHeader": TodoHeader,
    "TodoInput": TodoInput,
    "TodoList": TodoList,
    "TodoFooter": TodoFooter
  },
  computed: {
    todoItems() {
      //return store.state.todoItems
      return this.$store.state.todoItems
    }
  },
  methods: {
    clearAll() {
      //this.todoITems=[]
      //store.dispatch('clearAll')
      this.$store.dispatch('clearAll')
    },
    addTodo(todoItem) {
      //this.todoItems.push(todoItem)
      //store.dispatch('addTodo', todoItem)
      this.$store.dispatch('addTodo', todoItem)
    },
    removeTodo(todoItem, index) {
      //this.todoItems.splice(index, 1)
      //store.dispatch('removeTodo', index)
      this.$store.dispatch('removeTodo', index)
    }
  }
}

/*
컴포넌트에서 스토어의 상태에 접근해서 상태값을 가져올 때는 computed 내에 작성
스토어의 상태값이 변경되면 컴포넌트의 computed 도 자동으로 갱신되어 관련된 DOM 의 업데이트가 발생
*/

</script>

<style>
body {
  text-align: center;
  background-color: #0000FF;
}
</style>
