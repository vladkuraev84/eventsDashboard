export const state = () => ({
  mobile: false
})

export const mutations = {
  setMobile(state, payload) {
    state.mobile = payload
  }
}

export const actions = {

}

export const getters = {
  mobile: s => s.mobile
}
