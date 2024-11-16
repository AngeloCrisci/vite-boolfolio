<script>
    import axios from "axios";


    export default {
        name: "Appmain",
        data(){
            return{
                projectsList : [],
            }
        },
        methods: {
            getProjects(){
                axios.get('http://127.0.0.1:8000/api/projects')
                .then(response) => {
                    // handle success
                    console.log(response.data.results);

                    this.projectsList = response.data.results;
                }
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
        }
        computed:{

        },
    },
    
</script>

<template>
    <h1 class="text-center">
        MY PROJECTS
    </h1>
    <main>
        <div class="container">
            <div class="row">
                <div class="card col-3" v-for="project in projectsList" :key="project.id" style="width: 18rem;">     
                <div class="card-body">
                    <h5 class="card-title">
                        {{ project.name }}
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
                    <a :href="{{ description.link }}" class="btn btn-primary">
                        Link
                    </a>
                </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>
