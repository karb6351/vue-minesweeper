const getCellList = state => state.cellList

const getBombList = state => state.cellList.filter(item => item.text === '💣')

const getMarkList = state => state.cellList.filter(item => item.marked)

const getBomb = state => state.bomb

export default {
    getCellList,
    getBombList,
    getMarkList,
    getBomb
}