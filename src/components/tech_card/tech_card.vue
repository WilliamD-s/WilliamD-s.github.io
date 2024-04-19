<template>
    <div class="col-lg-2 col-md-2 col-sm-3 col-sx-2 pb-4">
        <div class="card text-bg-dark">
            <div class="card-body light text-center tech-card">
                <img 
                    :src="logo"
                    :alt="titulo"
                    class="img-fluid"
                    data-bs-toggle="tooltip" data-bs-placement="top" :title="descricao"
                >
            </div>
        </div>
    </div>
</template>
<style>
    @import './tech_card.scss';
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
            },
            descricao: {
                type: String,
                defualt: ''
            }
        }
    }
</script>