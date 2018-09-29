const setFirstClick = (state, isFirstClick = false) => (state.isFirstClick = isFirstClick)

const setGameLose = state => (state.lose = true)

const setGameWin = state => (state.win = true)

export default {
    setFirstClick,
    setGameLose,
    setGameWin
}
