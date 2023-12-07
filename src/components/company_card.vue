<template>
    <div class="col-lg-2 col-md-2 col-sm-3 col-sx-2 pb-4">
        <div class="card text-bg-dark">
            <div class="card-body light text-center tech-card">
                <img :src="logo" :alt="titulo" class="img-fluid">
            </div>
        </div>
    </div>
</template>
<style>
    .tech-card img{
        aspect-ratio: 3/2;
        object-fit: contain;
    }
</style>
<script>
    export default {
        props: {
            titulo: {
                type: String,
                default: ''
            },
            logo: {
                type: String,
                default: ''
            }
        }
    }
</script>