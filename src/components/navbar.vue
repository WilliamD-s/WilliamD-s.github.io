<template>
  <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
        <router-Link to="/" class="navbar-brand">WilliamD-S</router-Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <slot></slot>
            </div>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {}
</script>
<style>
    @import './navbar.scss';
</style>