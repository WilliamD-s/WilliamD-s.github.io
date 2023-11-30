<template>
  <div class="bg-dark">
    <Navbar>
      <router-Link to="/" class="nav-link">Home</router-Link>
      <router-Link to="/about" class="nav-link">Sobre</router-Link>
      <router-Link to="/teste" class="nav-link">Ferramentas</router-Link>
    </Navbar>
    <main class="mt-3">
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
  @import'bootstrap/dist/css/bootstrap.css';
</style>