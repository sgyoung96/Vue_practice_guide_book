// 뮤테이션 타입 상수 임포트
import {
    ADD_TODO,
    REMOVE_TODO,
    CLEAR_ALL,
    RESTORE,
    EDIT_TODO
} from './mutation-types'

export default { 
    save({state}) {
        const data = {
            todoItems: state.todoItems
        }
        localStorage.setItem('todo-app-data', JSON.stringify(data))
    },
    addTodo({commit}, payload) {
        commit(ADD_TODO, payload)
    },
    removeTodo({commit}, payload) {
        commit(REMOVE_TODO, payload)
    },
    clearAll({commit}) {
        commit(CLEAR_ALL)
    },
    restore({commit}) {
        const data = localStorage.getItem('todo-app_data')
        if(data) {
            commit(RESTORE, JSON.parse(data))
        }
    },
    editTodo({commit}, payload) {
        commit(EDIT_TODO, payload)
    }
}