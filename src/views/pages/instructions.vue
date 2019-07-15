<template>
    <v-container class="text-xs-center container-height">
        <div class="subheading">
            Read the below instructions carefully before solving the question Paper.
        </div>

        <v-bottom-nav
            :value="true"
            app
            color="blue"
        >
            <v-btn 
                block
                color="blue"
                class="white--text text-capitalize"
                @click=""
            >
                <div class="white--text subheading">Take Test Now</div>
            </v-btn>
        </v-bottom-nav>     
    </v-container>
</template>

<style>
.container-height {
    height: calc(100vh - 56px - 32px);
}
</style>

