import { createStore } from 'vuex'

export default createStore({
  state: {
    listNotes: JSON.parse(localStorage.getItem('listNotes')) ? 
    JSON.parse(localStorage.getItem('listNotes')) : [],
    tempListNote: JSON.parse(localStorage.getItem('tempListNote')) ? 
    JSON.parse(localStorage.getItem('tempListNote')) : {}
  },
  mutations: {
    atualizarListNotes(state,data) {
      state.listNotes = data
      localStorage.setItem('listNotes',JSON.stringify(data))
    },

    atualizarTempListNote(state,data) {
      state.tempListNote = data
      localStorage.setItem('tempListNote',JSON.stringify(data))
    }
  },
})
