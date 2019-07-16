<template>
    <v-container>
        <fieldset class="profile-fieldset">
          <legend>
            <img 
              src="../../assets/144085-OTC1O9-888 (1).jpg" 
              class="profile-image d-block" >
          </legend>

          <div class="title text-xs-center">
            Natasha
          </div>
          <div class="text-xs-center">
            natasha@gmail.com
          </div>

          <v-container 
            grid-list-md 
            text-xs-center 
            class="league-details-height mt-1 white--text"
          >
            <v-layout 
              row 
              wrap 
              align-center 
              justify-center 
              fill-height
            >
              <v-flex xs12>
                <strong>LEAGUE DETAILS</strong>
              </v-flex>
            </v-layout>
          </v-container>


          <v-container 
            grid-list-md 
            text-xs-left 
            class="mt-1"
          >
            <v-layout>
              <v-flex 
                xs6 
                class="rollno-grade-block pl-3"
              >
                  Roll No:<br>
                  131
              </v-flex>
              <v-flex 
                xs6 
                class="rollno-grade-block pl-3"
              >
                  Grade:<br>
                  third
              </v-flex>

            </v-layout>
            <v-layout>
              <v-flex 
                xs12 
                class="school-city-block pl-3"
              >
                School: <br>
                hkhkhhk kjhkh
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex 
                xs12 
                class="school-city-block pl-3"
              >
                City: <br>
                hkhkhhk kjhkh
              </v-flex>
            </v-layout>
          </v-container> 
        </fieldset>

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
          >
            <img src="../../assets/profile_icon.png" class="icon-style icon-size icon-color-pink" />
          </v-btn>

          <v-btn
           
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
            studentData: [],
        }
    },
    methods: {
      goToDashboard () {
        this.$router.push( { name: 'dashboard'} )
      }
    }
}
</script>

<style>
.profile-image {
  width: 25%;
  height: 25%;
  border-radius: 50%;
  border: 2px solid white;
  margin: 0 auto;
}

.backgroundcolor {
  background: rgb(206,76,124);
}

.profile-fieldset {
  background: rgb(246,246,246);
  border-radius: 10px;
  border: 0px;
}

.league-details-height {
  height: 100px;
  background: rgb(1,139,150);
}

.rollno-grade-block {
  border: 1px solid grey;
  height: 80px;
  display: flex;
  align-items: center;
  background: white;
}

.school-city-block {
  border: 1px solid grey;
  height: 80px;
  display: flex;
  align-items: center;
}

.icon-size {
  width: 45px;
}

.icon-color-pink {
    background: rgb(206, 76, 124)!important;
    color: white;
}
</style>
