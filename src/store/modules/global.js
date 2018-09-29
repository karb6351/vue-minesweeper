import mutations from './mutations'
import getters from './getters'

const state = {
    isFirstClick: true,
    borderSize: 10,
    bombQuantity: 20,
    lose: false,
    win: false,
    // 0 mean stopping, 1 mean playing
    gameStatus: 0
}

export default {
    state,
    mutations,
    getters
}
