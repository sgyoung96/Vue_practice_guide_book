<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="index"> 
                <span v-if="!todoItem.isEditing"
                    v-on:dblclick="handleDblClick(index)">
                    {{todoItem.content}}
                </span>
                <input v-else type="text" ref="content"
                    v-bind:value="todoItem.content"
                    v-on:blur="handleBlur(index)"
                    v-on:keydown.enter="updateTodo(index, $event)" />
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
            handleDblClick(index) {
              this.todoItems[index].isEditing = true 
              
              console.log('handleDblClick this $refs : ', this.$refs)
              console.log('handleDblClick this $refs.content :', this.$refs.content)

              this.$nextTick( () => {
                  console.log('handleDblClick this.$refs.content[0] : ', this.$refs.content[0])
                  this.$refs.content[0].focus()
              })
            },
            handleBlur(index) {
                this.todoItems[index].isEditing = false;
            },
            updateTodo(index, e) {
                console.log('updateTodo e :', e)

                const content = e.target.value.trim()
                if(content.length <= 0) {
                    return false;
                }
                this.$emit('updateTodo', content, index)
                this.$refs.content[0].blur()
            },
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