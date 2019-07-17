<template>
    <v-container text-xs-center>
      <v-container class="leaderboard-height">
        <v-layout wrap align-center justify-center fill-height>
          <v-flex xs12>
            <router-link to="/dailypracticeresults">
              <h2 class="text-sm-center mb-3">
                Daily Practice Results
              </h2>
              <img 
                src="../../assets/daily-practice-results.gif" 
                class="leaderboard-image-height" 
              />
            </router-link>
          </v-flex>
        </v-layout>
      </v-container>

      <v-divider></v-divider>

      <v-container class="leaderboard-height">
        <v-layout wrap align-center justify-center fill-height>
          <v-flex xs12>
            <router-link to="/monthlytestsresults">
              <h2 class="text-sm-center">Monthly Tests Results</h2>
              <img 
                src="../../assets/monthly_test_icon@3x.png.png" 
                class="leaderboard-image-height" 
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
            @click="goToDashboard()"
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
           flat
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
    goToDashboard () {
      this.$router.push( { name: 'dashboard'} )
    },
    goToProfile () {
        this.$router.push( { name: 'profile'} )
    }
  }
}
</script>


<style>

.leaderboard-height {
  height: calc( (100vh - 116px)/2 );
}
.leaderboard-image-height {
  height: 20vh;
}

</style>
