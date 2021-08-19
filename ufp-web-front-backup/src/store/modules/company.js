import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: [],
    selectedId: 0,
    searchItems: []
  },
  getters: {
    getSelectedItem(state) {
      return state.items.filter(item => item.id === state.selectedId)
    },
    getSearchOrAll(state) {
      return state.searchItems.length > 0 ? state.searchItems : state.items
    }
  },
  mutations: {
    setCompany(state, companies) {
      state.items = companies
    },
    setId(state, Id) {
      state.selectedId = Id
    },
    addSearchCompanies(state, companies) {
      state.searchItems = companies
    }
  },
  actions: {
    fetchAllCompany({ commit }) {
      axios.get('http://192.168.123.178:8000/company/onlinecompany/').then(
        resp => {
          commit('setCompany', resp.data.onlinecompanylist)
        }
      )
    },
    chooseCompany({ state, commit }, Id) {
      if (Id > 0) {
        commit('setId', Id)
      }
    },
    companyFilterByChar({ state, commit }, condition) {
      let compies = []
      state.items.filter(item => {
        let index = -1
        if (item.name !== null) {
          for (var i = 0, arr = condition.split(''); i < arr.length; i++) {
            if (item.name.indexOf(arr[i]) < 0) {
              break
            } else {
              let match = item.name.matchAll(arr[i])
              let next = match.next()
              while (!next.done) {
                if (next.value.index > index) {
                  index = next.value.index
                  if (i === arr.length - 1) {
                    compies.push(item)
                  }
                  break
                }
                next = match.next()
              }
            }
          }
        }
      })
      commit('addSearchCompanies', compies)
    }
  }
}
