<template>
    <div class="col">
        <div class="card text-bg-dark">
            <div class="card-body light">
                <h3 class="card-title text-light" v-text="titulo"></h3>
                <p v-text="descricao"></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            titulo: {
                type: String,
                default: ''
            },
            descricao: {
                type: String,
                default: ''
            }
        }
    }
</script>