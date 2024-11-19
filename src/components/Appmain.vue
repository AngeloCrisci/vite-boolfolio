<script>
    import axios from "axios";
    import AppHeader from "./partials/AppHeader.vue";
    import AppFooter from "./partials/AppFooter.vue";
    import ProjectList from "./ProjectList.vue";

    export default {
        name: "Appmain",
        components: [
            AppHeader,
            AppFooter,
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
