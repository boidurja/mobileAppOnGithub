<template>
    <v-container class="mt-4">
      
        <span v-html="questionData[i].body"></span>

        
        <!--v-layout class="mt-5">
          <v-flex xs3>
            (a) &nbsp; {{optionsData[0].body}}
          </v-flex>
          <v-flex xs3>
            (b) &nbsp; {{optionsData[1].body}}
          </v-flex>
          <v-flex xs3>
            (c) &nbsp; {{optionsData[2].body}}
          </v-flex>
          <v-flex xs3>
            (d) &nbsp; {{optionsData[3].body}}
          </v-flex>
        </v-layout-->


        <v-bottom-nav 
          :value="true" 
          app 
          color="blue"
        >

          <v-btn 
            
            class="button-answer" 
            @click="optionselected='a'; changeBackgroundColorOfButtonA = true;
                    changeBackgroundColorOfButtonB = false;
                    changeBackgroundColorOfButtonC = false;
                    changeBackgroundColorOfButtonD = false;
                  "
            value="a"
            :style="{
                       backgroundColor : changeBackgroundColorOfButtonA ? '#0D47A1 !important' : ''
                    }"
          >
            <span class="white--text">A</span>
          </v-btn>

          <v-btn 
            flat 
            class="button-answer" 
            @click="optionselected='b'; changeBackgroundColorOfButtonB = true;
                    changeBackgroundColorOfButtonA = false;
                    changeBackgroundColorOfButtonC = false;
                    changeBackgroundColorOfButtonD = false;
                  "
            value="b"
            :style="{
                       backgroundColor : changeBackgroundColorOfButtonB ? '#0D47A1 !important' : ''
                    }"
          >
            <span class="white--text">B</span>
          </v-btn>

          <v-btn 
            flat 
            class="button-answer" 
            @click="optionselected='c'; changeBackgroundColorOfButtonC = true;
                    changeBackgroundColorOfButtonA = false;
                    changeBackgroundColorOfButtonB = false;
                    changeBackgroundColorOfButtonD = false;
                  "
            value="c"
            :style="{
                       backgroundColor : changeBackgroundColorOfButtonC ? '#0D47A1 !important' : ''
                    }"
          >
            <span class="white--text">C</span>
          </v-btn>

          <v-btn 
            flat 
            class="button-answer" 
            @click="optionselected='d'; changeBackgroundColorOfButtonD = true;
                    changeBackgroundColorOfButtonA = false;
                    changeBackgroundColorOfButtonB = false;
                    changeBackgroundColorOfButtonC = false;
                  "
            value="d"
            :style="{
                       backgroundColor : changeBackgroundColorOfButtonD ? '#0D47A1 !important' : ''
                    }"
          >
            <span class="white--text">D</span>
          </v-btn>

          <v-btn
            flat 
            class="button-answer button-submit" 
            @click="submit"
          >
            <span class="white--text">Submit</span>
          </v-btn>

        </v-bottom-nav>

        <div class="text-xs-center">
            <v-dialog 
              v-model="dialogShowCorrectIncorrect" 
              width="400"
            >
                <v-card>
                    <v-card-title 
                      class="headline lighten-2 text-xs-center" 
                      :class="iscorrect ? 'font-green' : 'font-orange'" 
                      primary-title
                    >
                        <strong>{{ text }}</strong>
                    </v-card-title>

                    <v-card-actions 
                      v-show="iscorrect" 
                      class="text-xs-center"
                    >
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="primary" 
                          flat 
                          @click="dialogShowCorrectIncorrect = false; next()"
                        >
                            Next Question
                        </v-btn>
                    </v-card-actions>
                    <v-card-actions 
                      v-show="!iscorrect" 
                      class="text-xs-center"
                    >
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="primary" 
                          flat 
                          @click="dialogShowCorrectIncorrect = false"
                        >
                          Try Again
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog 
              v-model="dialogShowExplanation" 
              width="400"
            >
                <v-card>
                    <v-card-title 
                      class="headline lighten-2 text-xs-center" 
                      :class="iscorrect ? 'font-green' : 'font-orange'" 
                      primary-title
                    >
                        <strong>{{ text }}</strong>
                    </v-card-title>
                    <v-card-text>
                      Well, you need to read the explanation
                    </v-card-text>
                    <v-card-actions 
                      v-show="dialogShowExplanation" 
                      class="text-xs-center"
                    >
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="primary" 
                          flat 
                          @click="showExplanation=true; dialogShowExplanation=false; dialogExplanation=true"
                        >
                            Show Explanation
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog 
              v-model="dialogExplanation" 
              width="400"
            >
                <v-card>
                    <v-card-text v-if="showExplanation">
                      <div v-if="questionData[i].explanation.length == 8">
                        <span>No Explanation Available</span>
                      </div>
                      <div else>
                        <span v-html="questionData[i].explanation"></span>
                      </div>
                    </v-card-text>
                    <v-card-actions 
                      v-show="dialogExplanation" 
                      class="text-xs-center"
                    >
                        <v-spacer></v-spacer>
                        <v-btn 
                          color="primary" 
                          flat 
                          @click="next()"
                        >
                            Next Question
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </v-container>
</template>

<script>


export default {
  data () {
    return {
      questionData: [],
      optionsData: [],
      optionselected: '',
      correctoption: 'a',
      dialogShowCorrectIncorrect: false,
      dialogShowExplanation: false,
      dialogExplanation: false,
      text: "",
      iscorrect: false,
      ifIncorrectThreeTimes: 0,
      changeBackgroundColorOfButtonA: false,
      changeBackgroundColorOfButtonB: false,
      changeBackgroundColorOfButtonC: false,
      changeBackgroundColorOfButtonD: false,
      showExplanation: false,
      i: 1
    }
  },
  mounted () {
            
          this.$http.get('http://api.iqube.org.in/questions').then(response => {
            
            this.questionData = response.body;
            
            }, response => {

          });
  },

  methods: {
    submit () {
      if (this.optionselected == this.correctoption) {
        this.iscorrect = true
        this.dialogShowCorrectIncorrect = true
        this.text = "WHOO! THAT'S CORRECT"
      }
      if (this.optionselected != this.correctoption) {
        this.iscorrect = false
        this.dialogShowCorrectIncorrect = true
        this.text = "OOPS! THAT'S INCORRECT"
        this.ifIncorrectThreeTimes++
        if (this.ifIncorrectThreeTimes >= 3) {
          this.dialogShowCorrectIncorrect = false
          this.dialogShowExplanation = true
        }
      }
    },

    next () {
      this.i++
      this.showExplanation = false
      this.ifIncorrectThreeTimes = 0
      this.changeBackgroundColorOfButtonA = false
      this.changeBackgroundColorOfButtonB = false
      this.changeBackgroundColorOfButtonC = false
      this.changeBackgroundColorOfButtonD = false
      this.dialogExplanation = false

    }
  }
}
</script>

<style>

.button-answer {
  border-left: 1px solid white;
}

.button-submit {
  width: 150%!important;
}

.font-orange {
  color: #df715e;
  font-weight: bold;
}

.font-green {
  color: #4ec09b;
  font-weight: bold;
}

</style>
