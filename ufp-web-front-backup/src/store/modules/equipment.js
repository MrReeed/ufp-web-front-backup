import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: [],
    types: [],
    selectedId: 0
  },
  getters: {},
  mutations: {
    settype(state, types) {
      state.types = types
    },
    setId(state, Id) {
      state.selectedId = Id
    },
    setItems(state, equipments) {
      state.items = equipments
    }
  },
  actions: {
    fetchAlltypes({ commit }) {
      axios.get('http://192.168.123.178:8000/apparatus/apparatustype/').then(
        resp => {
          commit('settype', resp.data.apparatustypelist)
        }
      )
    },
    chooseType({ state, commit, rootState }, Id) {
      if (rootState.company.selectedId !== 0) {
        if (Id > 0) {
          commit('setId', Id)
          axios.get(
            'http://192.168.123.178:8000/apparatus/apparatus/',
            {
              params: {
                companyid: rootState.company.selectedId,
                apparatustypeid: state.selectedId
              }
            }
          ).then(
            resp => {
              commit('setItems', resp.data.apparatuslist)
            }
          )
        }
      }
    }
  }
}
