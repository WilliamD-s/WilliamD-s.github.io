<template>
  <div id="main-app">
    <Navbar>
      <router-Link to="/" class="nav-link">Home</router-Link>
      <router-Link to="/about" class="nav-link">Sobre</router-Link>
      <router-Link to="/projects" class="nav-link">Projetos</router-Link>
    </Navbar>
    <main id="routeView" class="mt-3">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
  import Navbar from './components/navbar.vue';
  import Footer from './components/footer.vue';
  export default {
    components:{
      Navbar,
      Footer
    }
  }
</script>
<style>
  @import 'bootstrap/dist/css/bootstrap.css';
  @import 'App.scss';
</style>