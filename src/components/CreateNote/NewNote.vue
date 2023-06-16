

<template>
  <div
  class="fundo d-flex justify-center align-center px-4">
    <div class="new-note rounded pa-3 elevation-6">
      <div>

        <div class="d-flex justify-space-between align-center mb-3">
          <h1 class="text-h6 text-white font-weight-bold">Titulo</h1>
          <svg @click="$emit('closeNotes')" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 512 512" xml:space="preserve" class=""><g><path d="M479.8 512a31.988 31.988 0 0 1-22.769-9.432L266.738 312.28a15.184 15.184 0 0 0-21.475 0L54.975 502.568a32.2 32.2 0 0 1-45.543-45.542L199.72 266.737a15.183 15.183 0 0 0 0-21.474L9.432 54.975A32.2 32.2 0 1 1 54.974 9.432L245.263 199.72a15.184 15.184 0 0 0 21.476 0L457.026 9.432a32.2 32.2 0 0 1 45.543 45.543L312.28 245.263a15.185 15.185 0 0 0 0 21.474l190.289 190.288A32.2 32.2 0 0 1 479.8 512z" data-original="#000000" class=""></path></g></svg>
        </div>
        <input
        v-model="title"
        class="pa-2 w-100 text-white rounded"
        type="text"
        placeholder="Titulo">

      </div>
      <div class="mb-2">

        <h1 class="text-h6 text-white font-weight-bold mb-3">Texto</h1>
        <textarea
        placeholder="Digite aqui"
        v-model="text"
        class="w-100 rounded pa-2 text-white"></textarea>
        
      </div>
      <div class="d-flex justify-end">

        <v-btn
        @click="addNewNote(),$emit('closeNotes')"
        class="btn-add w-100 font-weight-bold">Adicionar</v-btn>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

let store = useStore()

let title = ref('')
let text = ref('')

let listNotes = store.state.listNotes

const addNewNote = () => {
  if (title.value != '') {
    const note = {
      title: title.value,
      text: text.value
    }

    listNotes.push(note)
    store.commit('atualizarListNotes',listNotes)

  }else {
    const note = {
      title: 'Sem título',
      text: text.value
    }

    listNotes.push(note)
    store.commit('atualizarListNotes',listNotes)
  }
}

</script>

<style scoped lang="scss">

  .fundo {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.182);
    backdrop-filter: blur(8px);

    .new-note {
      width: 100%;
      max-width: 100%;
      height: 80%;
      background-color: #202223;

      div:nth-of-type(1) {
        height: 17%;
      }

      div:nth-of-type(2) {
        height: 73%;
      }

      div:nth-of-type(3) {
        height: 10%;
      }

      input {
        border: 1px solid #4b4b4b;
        outline: none;
      }

      textarea {
        resize: none;
        border: 1px solid #4b4b4b;
        outline: none;
        height: 85%;
      }

      ::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgb(87, 88, 89);
        border-radius: 10px;
      }

      svg {
        width: 17px;
        height: 17px;
        fill: rgb(144, 144, 144);
        cursor: pointer;
        transition: .3s;
        &:hover {
          fill: rgb(255, 0, 55);
        }
      }

      .btn-add {
        background-color: rgb(0, 183, 255);
      }
    }
  }

</style>
