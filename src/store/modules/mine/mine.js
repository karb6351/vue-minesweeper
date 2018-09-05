import getters from './getters'
import mutations from './mutations'

const state = {
    cellList: [],
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}