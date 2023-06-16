<template>
  <div class="background d-flex justify-center align-center px-4">
    <div class="open-note elevation-7 pa-3 rounded">
      <div class="title mb-4 d-flex align-center justify-center">
        <input
        v-model="titleNote"
        class="text-white text-h5 font-weight-bold"
        type="text">
        <div class="close-window">
          <svg @click="$emit('closeWindowNote')" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 512 512" xml:space="preserve" class=""><g><path d="M479.8 512a31.988 31.988 0 0 1-22.769-9.432L266.738 312.28a15.184 15.184 0 0 0-21.475 0L54.975 502.568a32.2 32.2 0 0 1-45.543-45.542L199.72 266.737a15.183 15.183 0 0 0 0-21.474L9.432 54.975A32.2 32.2 0 1 1 54.974 9.432L245.263 199.72a15.184 15.184 0 0 0 21.476 0L457.026 9.432a32.2 32.2 0 0 1 45.543 45.543L312.28 245.263a15.185 15.185 0 0 0 0 21.474l190.289 190.288A32.2 32.2 0 0 1 479.8 512z" data-original="#000000" class=""></path></g></svg>
        </div>
      </div>
      <div class="desc">
        <textarea
        v-model="descNote"
        class="text-white">
        </textarea>
      </div>
      <div class="container-buttons d-flex align-end">
        <v-btn
        @click="saveNote(),$emit('closeWindowNote')"
        class="btn-salvar w-75">Salvar</v-btn>
        <div
        @click="deleteNote(),$emit('closeWindowNote')"
        class="btn-delete-note py-2 rounded ms-2 w-25 d-flex justify-center align-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 273.585 273.585" xml:space="preserve" class=""><g><path d="M231.985 36.146h-43.794V18.5c0-10.201-8.299-18.5-18.5-18.5h-65.797c-10.201 0-18.5 8.299-18.5 18.5v17.646H41.6c-6.893 0-12.5 5.607-12.5 12.5v22.909c0 6.893 5.607 12.5 12.5 12.5h7.26v172.029c0 9.65 7.851 17.5 17.5 17.5h140.864c9.649 0 17.5-7.85 17.5-17.5V84.056h7.261c6.893 0 12.5-5.607 12.5-12.5v-22.91c0-6.892-5.608-12.5-12.5-12.5zM100.394 18.5c0-1.897 1.603-3.5 3.5-3.5h65.797c1.897 0 3.5 1.603 3.5 3.5v17.646h-72.797V18.5zm109.33 237.585c0 1.355-1.145 2.5-2.5 2.5H66.36c-1.355 0-2.5-1.145-2.5-2.5V84.056h145.864v172.029zm19.761-187.029H44.1v-17.91h185.385v17.91z" data-original="#000002" class=""></path><path d="M92.894 237.38a7.5 7.5 0 0 0 7.5-7.5V115.47a7.5 7.5 0 0 0-15 0v114.41a7.5 7.5 0 0 0 7.5 7.5zM136.793 237.38a7.5 7.5 0 0 0 7.5-7.5V115.47a7.5 7.5 0 0 0-7.5-7.5 7.5 7.5 0 0 0-7.5 7.5v114.41a7.5 7.5 0 0 0 7.5 7.5zM180.691 237.38a7.5 7.5 0 0 0 7.5-7.5V115.47a7.5 7.5 0 0 0-7.5-7.5 7.5 7.5 0 0 0-7.5 7.5v114.41a7.5 7.5 0 0 0 7.5 7.5z" style="" data-original="#000002" class=""></path></g></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore()
let tempListNote = ref(store.state.tempListNote)
let listNotes = ref(store.state.listNotes)

let descNote = ref('')
let titleNote = ref('')

// Aparece os dados da nota que foi clicada
descNote.value = tempListNote.value.text
titleNote.value = tempListNote.value.title

// Delete note

let index = ref(listNotes.value.findIndex(item => item == tempListNote.value))

const deleteNote = () => {
  // Remove pelo index
  listNotes.value.splice(index, 1)
  store.commit('atualizarListNotes',listNotes.value)

  // Apaga a lista temporaria
  store.commit('atualizarTempListNote',{})
}

// Salvar nota

const saveNote = () => {
  const indexNote = listNotes.value.find(item => item == tempListNote.value)

  if(indexNote != undefined) {

    indexNote.title = titleNote.value
    indexNote.text = descNote.value

    store.commit('atualizarListNotes',listNotes.value)
  }
}

</script>

<style lang="scss" scoped>

.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(9px);
  background-color: rgba(0, 0, 0, 0.274);
}

.open-note {
  width: 100%;
  max-width: 600px;
  height: 80%;
  background-color: rgb(26, 27, 28);

  .close-window {width: 17px;height: 17px;}

  svg {
    width: 17px;
    height: 17px;
    fill: rgb(102, 102, 102);
    cursor: pointer;
    transition: .3s;
    &:hover {
      fill: rgb(255, 0, 55);
    }
  }
}

.title {
  height: 6%;

  input {
    outline: none;
    border: none;
    width: 100%;
  }
}

.desc {
  height: 82%;
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    outline: none;
  }
}

.container-buttons {
  height: 8%;

  .btn-salvar {
    background-color: #179d65;
    color: white;
    transition: .3s;

    &:hover {
      background-color: #19c07a;
    }
  }

  .btn-delete-note {
    background-color: rgb(255, 0, 68);
    cursor: pointer;

    svg {

      fill: white;
      width: 20px;
      height: 20px;
    }
  }
}

::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(87, 88, 89);
  border-radius: 10px;
}

</style>