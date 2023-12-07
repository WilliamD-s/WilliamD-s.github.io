<template>
    <div class="container">
        <div class="row">
            <div class="card bg-secondary text-light">
                <div class="card-header">
                    Resumo
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 justify-content-center align-items-center">
                            <img class="rounded img-fluid align-self-center" src="../images/pooh_social.jpg" alt="" srcset="">
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-12">
                            <div class="row my-1">
                                <div class="col-lg-6 col-md-8 col-sm-9">
                                    <h3>William de Souza</h3>
                                </div>
                                <div class="col-lg-6 col-md-4 col-sm-3">
                                    <span class="badge text-bg-success">Dev Fullstack e mobile</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <p>Programador, gamer e fã de jogos de estratégia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="card bg-secondary text-light">
                <div class="card-header text-center">
                    Tecnologias
                </div>
                <div class="card-body">
                    <div class="row">
                        <span v-for="item in cardsTech" 
                        class="badge col">
                            <img :src="item.logo" :alt="item.titulo" 
                            style="width:50px;height:50px;">
                        </span>
                        <!-- <TechCard v-for="item in cardsTech" 
                            :titulo="item.titulo" 
                            :logo="item.logo">
                        </TechCard> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="card bg-secondary text-light">
                <div class="card-header text-center">
                    Experiências
                </div>
                <div class="card-body">
                    <div class="row">
                        <TechCard v-for="item in cardsTech" 
                            :titulo="item.titulo" 
                            :logo="item.logo">
                        </TechCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import TechCard from '../components/tech_card.vue';

    import logoPhp from '@/images/php-logo.png';
    import logoCsharp from '@/images/csharp-logo.png';
    import logoPython from '@/images/python-logo.png';
    import logoNodejs from '@/images/nodejs-logo.png';
    import logoFlutter from '@/images/flutter-logo.png';

    export default {
        components:{
            TechCard,
            logoPhp
        },
        data(){
            return {
                cardsTech: [
                    { 'titulo' : 'PHP', 'logo' : logoPhp},
                    { 'titulo' : 'C#', 'logo' : logoCsharp},
                    { 'titulo' : 'Python', 'logo' : logoPython},
                    { 'titulo' : 'Nodejs', 'logo' : logoNodejs},
                    { 'titulo' : 'Flutter', 'logo' : logoFlutter},
                ]
            };
        }
    }
</script>