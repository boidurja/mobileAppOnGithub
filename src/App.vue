<template>
  <v-app>
    <router-view name="header"></router-view>
    <router-view name="sidebar"></router-view>
    <v-content>
      <router-view></router-view>
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
