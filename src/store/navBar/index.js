export default {
    namespaced: true,
    state: () => ({
        selected: '0'
    }),
    mutations: {
        changeSelected(state, value) {
            state.selected = value
        }
    }
}