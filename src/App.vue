<template>
  <div class="note">
    <v-container>
      <header>
        <h1 class="text-white text-h5 font-weight-bold mb-5">Notes</h1>
        <div class="line-header elevation-5"></div>
      </header>
      <div class="container-menu justify-center mb-2">
        <div class="menu pa-2 rounded-lg elevation-6">
          <div
          @click="addNewNote()"
          class="add-note rounded pa-2 d-flex justify-center align-center">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 512 512" xml:space="preserve" class=""><g><path d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z" data-original="#000000" class=""></path></g></svg>
          </div>
        </div>
      </div>
      <div class="container-notes d-flex flex-wrap">
        <div
        @click="openNote(list)"
        v-for="list in store.state.listNotes"
        :key="list"
        class="note-item rounded ma-3 pa-2 elevation-5 d-flex justify-center align-center text-white font-weight-bold text-h6 text-center"
        >
          {{ list.title }}
        </div>
      </div>
    </v-container>
  </div>
  <NewNote
  @closeNotes="closeNewNote()" v-if="stateNotes" />

  <OpenNote
  @closeWindowNote="closeEditNote()"
  v-if="stateEditNote"
  />

</template>
  
<script setup>
import NewNote from '@/components/CreateNote/NewNote.vue'
import OpenNote from '@/components/EditNote/OpenNote.vue'
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

// Popup

const stateNotes = ref(false)

const addNewNote = () => {
  stateNotes.value = true
}

const closeNewNote = () => {
  stateNotes.value = false
}

// Edit note

const stateEditNote = ref(false)

const closeEditNote = () => {
  stateEditNote.value = false
  store.commit('atualizarTempListNote',{})
}

const openNote = (note) => {
  stateEditNote.value = true
  store.commit('atualizarTempListNote',note)
}

</script>
  
<style lang="scss">
  
.note {
  width: 100%;
  height: 100vh;
  background-color: #17191c;

  header {
    height: 12vh;
    .line-header {
      width: 100%;
      height: 2px;
      background-color: #26292d;
    }
  }

  .container-menu {
    height: 9vh;
  }

  .menu {
    background-color: #292c30;
    width: 100%;

    .add-note {
      width: 35px;
      height: 35px;
      border: 2px solid #ccc;
      cursor: pointer;
      transition: .3s;
      user-select: none;

      &:hover {
        background-color: #ffffff;
        border: 2px solid #ffffff;
      }

      &:hover svg {
        fill: rgb(0, 0, 0);
      }

      svg {
        fill: white;
        width: 25px;
        height: 25px;
        transition: .3s;
      }
    }
  }

  .container-notes {
    overflow-y: auto;
    height: 72vh;

    .note-item {
      width: 150px;
      height: 150px;
      background-color: #25272c;
      cursor: pointer;
      user-select: none;
      transition: .3s;

      &:hover {
        background-color: #303339;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .container-notes {
    justify-content: center;
  }
}

::-webkit-scrollbar {
  display: none;
}
  
</style>