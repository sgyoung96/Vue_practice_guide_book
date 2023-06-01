<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo">
        <button v-on:click="addTodo">추가</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newTodoItem: ''
            }
        },
        methods: {
            addTodo() {
                if(this.newTodoItem !== "") {
                    var value = this.newTodoItem && this.newTodoItem.trim()
                    this.$emit('addTodo', value)
                    this.clearInput()
                }
            },
            clearInput() {
                this.newTodoItem = ''
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: #FF00FF;
    }
</style>