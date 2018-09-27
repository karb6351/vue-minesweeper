<template>
    <div class="cell-container" 
    :style="getPosition()" 
    @click="cellClick($event)"
    >
        <div class="cell-content"
        :class="{'revealed-content' : this.cellData.isRevealed, 'marked': this.cellData.marked}" 
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
        cellClick(e){
            // if it is shift left click, then emit shift click event, else emit click event
            if (!e.shiftKey)
                this.$emit('cellClick', this.cellData)
            else
                this.$emit('cellShiftClick', this.cellData)
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
            position: relative;
            background-color: #f5f5f5;
            &:after{
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                z-index: 1;
                content: '';
                background-color: #dadada;
            }
            &.revealed-content:after{
                display: none;      
            }
            &.revealed-content{
                cursor: auto;
            
            }
            &:before{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                content: '🚩';
                display: none;
                z-index: 100;
                text-align: center;
            }
            &.marked:before{
                display: block;
            }
        }
        
    }
</style>
