<script>
    import axios from "axios";
    import ProjectList from "./ProjectList.vue";

    export default {
        name: "Appmain",
        components: [
            ProjectList,
        ] ,
        data(){
            return{
                projectsList : [],
                technologyList : [],
            }
        },
        methods: {

        },

        computed:{

        },
    };
    
</script>

<template>
    <AppHeader/>
    <ProjectList/>
    <AppFooter/>
</template>

<style scoped>

</style>
