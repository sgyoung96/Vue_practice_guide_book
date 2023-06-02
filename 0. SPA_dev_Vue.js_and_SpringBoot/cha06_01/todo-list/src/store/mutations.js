import {
    ADD_TODO,
    REMOVE_TODO,
    CLEAR_ALL,
    RESTORE
} from './mutation-types'

export default {
    [ADD_TODO](state, todoItem) {
        state.todoItems.push(todoItem)
    },
    [REMOVE_TODO](state, index) {
        state.todoItems.splice(index, 1)
    },
    [CLEAR_ALL](state) {
        state.todoITes = []
    },
    [RESTORE](state, {todoItems}) {
        state.todoItems = todoItems
    }
}