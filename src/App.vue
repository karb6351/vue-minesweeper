<template>
  <div id="app">
    <game-status></game-status>
    <cell-list :minefield='getCellList' @onCellClick="handleCellClick($event)" @onCellShiftClick="handelCellShiftClick($event)"></cell-list>
  </div>
</template>

<script>
import CellList from './components/CellList'
import GameStatus from './components/GameStatus'
import Store from './store/store'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'app',
  Store,
  components: {
    CellList,
    GameStatus
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
    ...mapMutations('status', [
      'setStatus'
    ]),
    handleCellClick(cell){
      // if it is first click, we should assign the bomb to field(Start the game)
      if (this.getIsFirstClick){
        this.setFirstClick()
        this.assignBomb(cell, this.getBombQuantity)
        this.calculateNum()
        this.setStatus('Game start')
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
        this.setStatus('You lose')
      
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
    this.setStatus('Click the cell to start game')
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


