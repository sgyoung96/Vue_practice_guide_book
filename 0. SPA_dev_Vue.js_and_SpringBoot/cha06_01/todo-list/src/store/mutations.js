import {
    ADD_TODO,
    REMOVE_TODO,
    CLEAR_ALL,
    RESTORE,
    EDIT_TODO
} from './mutation-types'

export default {
    [ADD_TODO](state, todoItem) {
        state.todoItems.push(todoItem)
    },
    [REMOVE_TODO](state, index) {
        state.todoItems.splice(index, 1)
    },
    [CLEAR_ALL](state) {
        state.todoItems = []
    },
    [RESTORE](state, {todoItems}) {
        state.todoItems = todoItems
    },
    [EDIT_TODO](state, payload) {
        const {index, content} = payload
        const isEditing = false
        state.todoItems.splice(index, 1, {isEditing, content})
    }
}