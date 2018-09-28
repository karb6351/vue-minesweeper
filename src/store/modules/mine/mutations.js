import _ from 'lodash'

const setCellList = (state, cellList) => state.cellList = cellList

const initCellList = (state, size = 10) => {
    let tempCellList = []
    // initial all field
    for(let i = 0; i < size*size; i++){
        tempCellList.push({
            x: i%size,
            y: Math.floor(i/size),
            isRevealed: false,
            text: '',
            marked: false,
            lastClick: false
        })
    }
    state.cellList = tempCellList
}

const assignBomb = (state, cell, bombQuantity = 15) => {
    const shuffledArray = _.shuffle(state.cellList)
    let count = 0
    let currentIndex = 0
    while(count < bombQuantity && currentIndex < shuffledArray.length){
        // first clicked cell should not be assigned bomb
        if (shuffledArray[currentIndex].x !== cell.x && shuffledArray[currentIndex].y !== cell.y){
            state.cellList[state.cellList.indexOf(shuffledArray[currentIndex])].text = state.bomb
            count++
        }
        currentIndex++
    }
}

const calculateNum = state => {
    state.cellList.forEach(targetCell => {
        if(targetCell.text !== state.bomb){
            let count = 0
            state.adjacentPositions.forEach(pos => {
                const neighborCell = state.cellList.find(item => (item.x === (targetCell.x + pos.x) && item.y === (targetCell.y + pos.y)))
                if (neighborCell && neighborCell.text !== undefined &&neighborCell.text === state.bomb)
                    count++
            })
            if (count !== 0) 
                targetCell.text = count
        }
    })
}

const revealRelatedCell = (state, cell) => {
    // find the target cell and revealed it
    const index = state.cellList.findIndex(item => item.x === cell.x && item.y === cell.y)
    if (state.cellList[index].marked)
        return
    state.cellList[index].isRevealed = true
    revealCell(state, cell)
}

const revealCell = (state, cell) => {
    if (cell.text === state.bomb){
        return
    }

    const index = state.cellList.findIndex(item => item.x === cell.x && item.y === cell.y)

    if (!state.cellList[index].marked)
        state.cellList[index].isRevealed = true

    if (cell.text !== ""){
        return 
    }

    state.adjacentFourPositions.forEach(pos => {
        const neighborCell = state.cellList.find(item => (item.x === (cell.x + pos.x) && item.y === (cell.y + pos.y)))
        if (neighborCell && neighborCell !== undefined && !neighborCell.isRevealed){ 
            revealCell(state, neighborCell)
        }
    })
}

const revealAllCell = state => state.cellList.forEach(item => item.isRevealed = true)

const setLastClick = (state, cell) => {
    const index = state.cellList.findIndex(item => item.x === cell.x && item.y === cell.y)
    state.cellList[index].lastClick = true
}

const showLastClickCell = state => state.cellList.find(item => item.lastClick)

const markCell = (state, cell) => {
    const index = state.cellList.findIndex(item => item.x === cell.x && item.y === cell.y)
    if (state.cellList[index].isRevealed)
        return
    state.cellList[index].marked = !state.cellList[index].marked
} 

export default {
    setCellList,
    initCellList,
    revealRelatedCell,
    assignBomb,
    calculateNum,
    revealAllCell,
    showLastClickCell,
    setLastClick,
    markCell
}