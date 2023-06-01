<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="index"> {{todoItem}}
                <button v-on:click="removeTodo(todoItem, index)">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [
            'todoItems'
        ],
        methods: {
            removeTodo(todoItem, index) {
                this.$emit('removeTodo', todoItem, index)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: #FFFF00;
    }
</style>