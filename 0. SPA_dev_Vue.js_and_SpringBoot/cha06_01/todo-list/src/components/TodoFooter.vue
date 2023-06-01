<template>
    <div>
        <button v-on:click="clearTodo">모두삭제</button>
    </div>
</template>

<script>
    export default {
        methods: {
            clearTodo() {
                this.$emit('removeAll')
            }
        }
    }
</script>

<style scoped>

    div {
        background-color: #00FFFF;
    }

</style>
