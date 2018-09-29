<template>
    <div>
        <h3>{{ getStatus }}</h3>
        <button @click="resetGame">Reset</button>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        name: 'GameStatus',
        data() {
            return {}
        },
        computed: {
            ...mapGetters('status', [
                'getStatus'
            ])
        },
        methods: {
            resetGame() {
                this.$emit('resetGame')
            }
        },
    }
</script>

<style scoped>
    h3{
        text-align:  center;
        color: #a5a5a5;
    }
    button{
        padding: 5px 10px;
        outline: none;
        border: 1px solid #a5a5a5;
        border-radius: 8px;
        margin: 10px auto;
        width: fit-content;
        text-align: center;
        display: block;
    }
    button:hover{
        cursor: pointer;
        
    }
</style>