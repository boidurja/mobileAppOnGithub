<template>
    <v-container text-xs-center>
        <v-layout wrap>
          <v-flex 
            xs12 
            class="dashboard-height"
          >
            <router-link to="/dailypractice">
              <h2 class="text-sm-center">
                Daily Practice
              </h2>
              <img 
                src="../../assets/daily_practice_icon@3x.png.png" 
                class="dashboard-image" 
              />
            </router-link>
          </v-flex>

          <hr class="divider">

          <v-flex 
            xs12 
            class="dashboard-height mt-4"
          >
            <router-link to="/monthlytest">
              <h2 class="text-sm-center">Monthly Tests</h2>
              <img 
                src="../../assets/monthly_test_icon@3x.png.png" 
                class="dashboard-image" 
              />
            </router-link>  
          </v-flex>

        </v-layout>
    </v-container>
</template>

<style>

.dashboard-height {
  height: calc(50vh - 100px);
}
.dashboard-image {
  height: 20vh;
}

.divider {
  width: 100%;
  height: 1px;
  background: grey;
}
</style>
