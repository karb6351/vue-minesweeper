<template>
    <div class="cell-container" 
    :style="getPosition()" 
    @click="cellClick"
    >
        <div class="cell-content"
        :class="this.cellData.isRevealed ? 'revealed-content' : 'hidden-cell' " 
        >
            {{ cellData.text }}
        </div>
    </div>    
</template>

<script>
export default {
    name: 'Cell',
    props:{
        cellData: Object
    },
    data(){
        return{
            cellWidth: 40,
            cellHeight: 40,
        }
    },
    methods: {
        getPosition(){
            return { 
                top: `${this.cellData.y * this.cellWidth}px`,
                left: `${this.cellData.x * this.cellHeight}px`
            }
        },
        cellClick(){
            this.$emit('cellClick', this.cellData)
        }
    }
}
</script>

<style lang="scss" scoped>
    .cell-container{
        box-sizing: border-box;
        border: 2px solid #c5c5c5;
        width: 40px;
        height: 40px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eaeaea;
        cursor: pointer;
        &:hover{
            opacity: 0.7;
        }
        .cell-content{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
            &.revealed-content{
                background-color: #f5f5f5;
            }
            &.hidden-cell{
                background-color: #dadada;
            }
        }
        
    }
</style>
