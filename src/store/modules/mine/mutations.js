import _ from 'lodash'

const setCellList = (state, cellList) => state.cellList = cellList

const initCellList = (state, size) => {
    let tempCellList = []
    // initial all field
    for(let i = 0; i < size*size; i++){
        tempCellList.push({
            x: i%size,
            y: Math.floor(i/size),
            isRevealed: false,
            text: '',
            marked: false
        })
    }
    state.cellList = tempCellList
}

const revealCell = (state, cell) => {
    const index = state.cellList.findIndex(item => item.x === cell.x && item.y === cell.y)
    console.log('Target cell index: ' + index)
    console.log(`Click: { ${cell.x} , ${cell.y} }`)
    state.cellList[index].isRevealed = true
    
}

export default {
    setCellList,
    initCellList,
    revealCell
}