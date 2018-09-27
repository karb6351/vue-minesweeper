import getters from './getters'
import mutations from './mutations'

const state = {
    cellList: [],
    bomb: '💣',
    adjacentPositions: [
        { x: -1, y: 1 }, 
        { x: 0, y: 1 }, 
        { x: 1, y: 1 }, 
        { x: 1, y: 0 }, 
        { x: 1, y: -1 }, 
        { x: 0, y: -1 }, 
        { x: -1, y: -1 }, 
        { x: -1, y: 0 }
    ],
    adjacentFourPositions: [
        { x: 0, y: -1 }, 
        { x: 1, y: 0 }, 
        { x: 0, y: 1 }, 
        { x: -1, y: 0 }
    ]
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}