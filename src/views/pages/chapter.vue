<template>
    <v-container class="text-xs-center">
        <div>
            {{ chapterName }}
        </div>

        <v-divider class="mt-3"></v-divider>

        <div class="mt-5 headline">
            Daily Practice
        </div>

        <div class="body-1 mt-3">
            This is a practice test.
        </div>

        <v-btn 
            class="text-capitalize" 
            block
            @click="taketest"
        >  
            Take Practice test now
        </v-btn>
        
    </v-container>
</template>


<script>
export default {
    data () {
        return {
            chapterName: 'Classification'
        }
    },
    methods: {
        taketest () {
            this.$router.push( { name: 'question' } )
        }
    }
}
</script>