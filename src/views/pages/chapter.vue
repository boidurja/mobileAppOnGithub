<template>
    <v-container>
        <div>
            Chapters
        </div>

        <ul v-for="c in chapterData">
            <li>{{ c.name }}</li>
        </ul>
    </v-container>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
    data () {
        return {
            chapterData: [],
        }
    },
    mounted () {
        Vue.axios.get('http://api.iqube.org.in/api/questioncategories')

            .then(response => {
            this.chapterData = response.data
            alert('length = ' + chapterData.length)
            })
            .catch(e => {
            })
    }
}
</script>
