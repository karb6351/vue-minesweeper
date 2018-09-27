<template>
    <div class="cell-list" :style="calWidth()">
        <Cell @cellClick="onCellClick($event)" @cellShiftClick="onCellShiftClick($event)" v-for="(cellData, index) in minefield" :key="index" :cell-data="cellData"></Cell>
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
        },
        onCellShiftClick(cell){
            this.$emit('onCellShiftClick', cell)
        },
        calWidth(){
            return {
                width: `400px`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .cell-list{
        position: relative;
        margin: 50px auto 0;
    }
</style>

