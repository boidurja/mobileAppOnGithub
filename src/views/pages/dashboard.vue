<template>
    <v-container text-xs-center>
      <v-container class="dashboard-height">
        <v-layout wrap align-center justify-center fill-height>
          <v-flex xs12>
            <router-link to="/dailypractice">
              <h2 class="text-sm-center">
                Daily Practice
              </h2>
              <img 
                src="../../assets/daily_practice_icon@3x.png.png" 
                class="dashboard-image-height" 
              />
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>

      <v-divider></v-divider>

      <v-container class="dashboard-height">
        <v-layout wrap align-center justify-center fill-height>
          <v-flex xs12>
            <router-link to="/monthlytest">
              <h2 class="text-sm-center">Monthly Tests</h2>
              <img 
                src="../../assets/monthly-test-results.gif" 
                class="dashboard-image-height" 
              />
            </router-link>  
          </v-flex>
        </v-layout>
      </v-container>

      <v-bottom-nav
          :value="true"
          absolute
        >
          <v-btn
            flat
            value="dashboard"
          >
            <img src="../../assets/dashboard_icon.png" class="icon-style icon-size icon-color-pink" />
          </v-btn>

          <v-btn
            flat
            value="profile"
            @click="goToProfile()"
          >
            <img src="../../assets/profile_icon.png" class="icon-style icon-size icon-color-pink" />
          </v-btn>

          <v-btn
            @click="goToLeaderboard"
            value="leaderboard"
          >
            <img src="../../assets/leaderboard_icon.png" class="icon-style icon-size icon-color-pink" />
          </v-btn>
        </v-bottom-nav>
    </v-container>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goToLeaderboard () {
      this.$router.push( { name: 'leaderboard' } )
    },
    goToProfile () {
        this.$router.push( { name: 'profile'} )
    }
  }
}
</script>


<style>

.dashboard-height {
  height: calc( (100vh - 116px)/2 );
}
.dashboard-image-height {
  height: 20vh;
}

</style>
