<template>
  <v-app>
    <router-view name="header"></router-view>
    <router-view name="sidebar"></router-view>
    <v-content class="style-of-v-content">
      <router-view class="style-of-router-view"></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style>

.style-of-v-content {

}

.style-of-router-view {

}
</style>
