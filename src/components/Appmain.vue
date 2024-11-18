<script>
    import axios from "axios";
    import AppHeader from "./AppHeader.vue";
    import AppFooter from "./AppFooter.vue";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";


    export default {
        name: "Appmain",
        components: [
            AppHeader,
            AppFooter
        ] ,
        data(){
            return{
                projectsList : [],
                technologyList : [],
            }
        },
        methods: {
            getProjects(){
                axios.get('http://127.0.0.1:8000/api/projects')
                .then((response) => {
                    // handle success
                    console.log(response.data.results);

                    this.projectsList = response.data.results;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                } );
            },
            getTechnology(){
                axios.get('http://127.0.0.1:8000/api/technology')
                .then((response) => {
                    // handle success
                    console.log(response.data.results);

                    this.technologyList= response.data.results;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                } );
            }
        },
        created(){
            this.getProjects();
            this.getTechnology();
        },

        computed:{

        },
    };
    
</script>

<template>
    <AppHeader/>
    <main>
        <div class="container">
            <div class="row">
                <div class="card col-3" v-for="project in projectsList" :key="project.id" style="width: 18rem;">     
                <div class="card-body">
                    <h3 class="card-title">
                        {{ project.name }}
                    </h3>
                    <h5 class="card-text" v-for="technology in technologyList" :key="technology.id" >
                        {{ technology.name }}
                    </h5>
                    <p class="card-text">
                         {{ project.date }}
                    </p>
                    <p class="card-text">
                         {{ project.description }}
                    </p>
                    <p class="card-text">
                         {{ project.date }}
                    </p>
                    <a :href= project.link  class="btn btn-primary">
                        Link
                    </a>
                </div>
                </div>
            </div>
        </div>
    </main>
    <AppFooter/>
</template>

<style scoped>

</style>
