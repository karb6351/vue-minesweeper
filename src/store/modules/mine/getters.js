const getCellList = state => state.cellList;

const getBombList = state => state.cellList.filter(item => item.text === "💣");

const getMarkList = state => state.cellList.filter(item => item.marked);

const getBomb = state => state.bomb;

const isFoundAllTheBomb = state => {
  let isFinished = true
  state.cellList.forEach(item => {
    if (item.text === "" && !item.isRevealed){
      isFinished = false
    }
  })
  return isFinished
}

export default {
  getCellList,
  getBombList,
  getMarkList,
  getBomb,
  isFoundAllTheBomb
};
