import getters from './getters'
import mutations from './mutations'

const state = {
    status: ''
}

export default {
    namespaced: true,
    getters,
    mutations,
    state
}
