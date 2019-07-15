<template>
    <v-container class="text-xs-center">
        <div class="headline">
            {{ chapterName }}
        </div>

        <v-divider class="mt-3"></v-divider>

        <div class="mt-5 subheading">
            Daily Practice
        </div>

        <div class="body-1 mt-3">
            This is a practice test.
        </div>

        <v-bottom-nav
          :value="true" 
          app
          color="blue"
        >
            <v-btn 
                class="text-capitalize" 
                block
                @click="taketest"
            >  
                <div class="white--text subheading">Take Practice test Now</div>
            </v-btn>
        </v-bottom-nav>
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