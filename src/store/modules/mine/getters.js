const getCellList = state => state.cellList

const getBombList = state => state.cellList.filter(item => item.text === '💣')

const getMarkList = state => state.cellList.filter(item => item.marked)

export default {
    getCellList,
    getBombList,
    getMarkList
}