import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoItems: []
  },
  actions : {
    addTodo(context, payload) {
      context.commit('ADD_TODO', payload)
    },
    removeTodo(context, payload) {
      context.commit('REMOVE_TODO', payload)
    },
    clearAll(context) {
      context.commit('CLEAR_ALL')
    }
  },
  mutations: {
    ADD_TODO(state, todoItem) {
      state.todoItems.push(todoItem)
    },
    REMOVE_TODO(state, index) {
      state.todoItems.splice(index, 1)
    },
    CLEAR_ALL(state) {
      state.todoItems = []
    }
  },
  getters
})