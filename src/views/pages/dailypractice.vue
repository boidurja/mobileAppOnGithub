<template>
    <v-container>
        <div class="text-xs-center headline">
            Chapters
        </div>

        <ul v-for="c in chapterData" :key="c.id">
            <li>{{ c.name }}</li>
        </ul>

    </v-container>
</template>

<script>

export default {
    data () {
        return {
            chapterData: [],
        }
    }
}
</script>
