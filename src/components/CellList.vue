<template>
    <div class="cell-list">
        <Cell @cellClick="onCellClick($event)" v-for="(cellData, index) in minefield" :key="index" :cell-data="cellData"></Cell>
    </div>
</template>

<script>
import Cell from './Cell'
export default {
    name: "CellList",
    components:{
        Cell        
    },
    props:{
        minefield: Array
    },
    data(){
        return {}
    },
    methods:{
        onCellClick(cell){
            this.$emit('onCellClick', cell)
        }
    }
}
</script>

<style lang="scss" scoped>
    .cell-list{
        position: relative;
        width: fit-content;
        margin: 50px auto 0;
    }
</style>

