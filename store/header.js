export const state = () => ({
  data: {},
  load: false
})

export const mutations = {
  setHeader(state, data) {
    state.load = true
    state.data = data
    state.load = false
  },
  clearStore(state) {
    state.data = {};
    state.load = false;
  },
}

export const actions = {

}

export const getters = {
  data: s => s.data
}
