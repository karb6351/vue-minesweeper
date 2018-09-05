<template>
  <div id="app">
    <cell-list :minefield='getCellList' @onCellClick="handleCellClick($event)"></cell-list>
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
    return {
      borderSize: 10,
    }
  },
  computed:{
    ...mapGetters('mine',[
      'getCellList'
    ])
  },
  methods:{
    ...mapMutations('mine',[
      'setCellList',
      'initCellList',
      'revealCell'
    ]),
    handleCellClick(cell){
      this.revealCell(cell)
    }
  },
  beforeMount(){
    this.initCellList(this.borderSize)
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


