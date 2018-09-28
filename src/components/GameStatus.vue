<template>
    <h3>{{ getStatus }}</h3>
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
    }
</script>

<style scoped>
    h3{
        text-align:  center;
        color: #a5a5a5;
    }
</style>