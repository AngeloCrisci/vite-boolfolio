<script>
  import { RouterView } from "vue-router";
  import AppHeader from "./components/partials/AppHeader.vue";
  import AppFooter from "./components/partials/AppFooter.vue";

  export default {
    data(){
      return{

      }
    },
    components:{
      RouterView,
      AppHeader,
      AppFooter
    }
  }
</script>

<template>
  <AppHeader/>
  <RouterView/>
  <AppFooter/>
</template>

<style lang="scss">
  @use "bootstrap/scss/bootstrap.scss" as *;
  @use "./styles/general.scss" as *;
</style>
