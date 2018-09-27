<template>
  <div id="app">
    <cell-list :minefield='getCellList' @onCellClick="handleCellClick($event)" @onCellShiftClick="handelCellShiftClick($event)"></cell-list>
  </div>
</template>

<script>
import CellList from './components/CellList'
import Store from './store/store'
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'app',
  Store,
  components: {
    CellList
  },
  data(){
    return {}
  },
  computed:{
    ...mapGetters('mine',[
      'getCellList',
      'getBombList',
      'getBomb',
      'getMarkList'
    ]),
    ...mapGetters([
      'getBorderSize',
      'getIsFirstClick'
    ])
  },
  methods:{
    ...mapMutations('mine',[
      'setCellList',
      'initCellList',
      'revealRelatedCell',
      'assignBomb',
      'calculateNum',
      'revealAllCell',
      'showLastClickCell',
      'setLastClick',
      'markCell'
    ]),
    ...mapMutations([
      'setFirstClick',
      'setGameLose'
    ]),
    handleCellClick(cell){
      // if it is first click, we should assign the bomb to field(Start the game)
      if (this.getIsFirstClick){
        this.setFirstClick()
        this.assignBomb(cell, this.getBombQuantity)
        this.calculateNum()
      }

      //log the last click cell
      this.setLastClick(cell)

      // reveal field
      this.revealRelatedCell(cell)

      //check the cell is containing bomb
      if (cell.text === this.getBomb){
        this.setGameLose()
        this.revealAllCell()
        this.showLastClickCell()
        console.log('You lose')
      }
      
      // 
    },
    handelCellShiftClick(cell){
      console.log(cell.x, cell.y)
      this.markCell(cell)
    }
  },
  beforeMount(){
    this.initCellList(this.getBorderSize)
  }
}
</script>

<style>
  html, body{
    margin: 0;
  }
  #app{
    width: 100%;
    height: 100%;
  }
</style>


