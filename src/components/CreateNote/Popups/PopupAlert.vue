<template>
  <div class="background d-flex justify-center align-center px-4">
    <div class="popup rounded pa-3">
      <div class="w-100 h-75 d-flex justify-center align-center">
        <span class="text-h5 text-white font-weight-bold">Salvar?</span>
      </div>
      <div class="d-flex justify-space-between w-100 h-25">
        <v-btn class="btn-popup btn-save elevation-0">Salvar</v-btn>
        <v-btn
        @click="cancel()"
        class="btn-popup btn-cancel elevation-0">Cancelar</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>

const cancel = () => {

}


</script>

<style scoped lang="scss">

.background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.246);
  backdrop-filter: blur(8px);
  //animation: back .3s linear;

  .popup {
    width: 100%;
    max-width: 340px;
    height: 180px;
    background-color: rgb(65, 70, 75);

    .btn-popup {
      width: 48%;
      color: white;
    }

    .btn-save {
      background-color: #21b762;
    }

    .btn-cancel {
      background-color: #dc1515;
    }
  }
}

@keyframes back {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

</style>