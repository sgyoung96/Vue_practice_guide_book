import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 스토어에서 관리하고 있는 상태를 나타냄
    todoItems: []
  },
  getters: {
  },
  mutations: { // 스토어의 상태를 변경할 수 있는 방법
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
  actions: { // 비동기 처리를 포함할 수 있는 메서드 (데이터 가공 혹은 동기/비동기 처리 -> 결과를 뮤테이션에 전달 -> 뮤테이션이 커밋)
    addTodo(context, payload) {
      context.commit("ADD_TODO", payload)
    },
    removeTodo(context, payload) {
      context.commit("REMOVE_TODO", payload)
    },
    clearAll(context) {
      context.commit("CLEAR_ALL")
    }
  },
  modules: {
  }
})
/*
컴포넌트에서 스토어의 상태에 접근해서 상태값을 가져올 때는 computed 내에 작성
스토어의 상태값이 변경되면 컴포넌트의 computed 도 자동으로 갱신되어 관련된 DOM 의 업데이트가 발생
*/
