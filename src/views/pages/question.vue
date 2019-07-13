<template>
    <v-container class="mt-4">

      {{ questionData }}

        <!--span v-html="questionData[i].body"></span-->

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
          flat 
          color="blue"
        >

          <v-btn 
            flat 
            class="button-answer" 
            @click="optionselected='a'"
            value="a"
          >
            <span class="white--text">A</span>
          </v-btn>

          <v-btn 
            flat 
            class="button-answer" 
            @click="optionselected='b'"
            value="b"
          >
            <span class="white--text">B</span>
          </v-btn>

          <v-btn 
            flat 
            class="button-answer" 
            @click="optionselected='c'"
            value="c"
          >
            <span class="white--text">C</span>
          </v-btn>

          <v-btn 
            flat 
            class="button-answer" 
            @click="optionselected='d'"
            value="d"
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
              v-model="dialog" 
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
                          @click="dialog = false; next()"
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

/*import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)*/

export default {
  data () {
    return {
      questionData: [],
      optionsData: [],
      optionselected: '',
      correctoption: '',
      buttonvalue: '',
      dialog: false,
      text: "",
      iscorrect: false,
      i: 1
    }
  },
  mounted () {
   /* Vue.axios.get('http://api.iqube.org.in/questions')

            .then(response => {
            this.questionData = response.data

                Vue.axios.get('http://api.iqube.org.in/questions/' + this.questionData[this.i].id + '/choices')

                .then(response => {
                
                this.optionsData = response.data

                if (this.optionsData[0].is_correct) {
                  this.correctoption = 'a'
                }
                if (this.optionsData[1].is_correct) {
                  this.correctoption = 'b'
                }
                if (this.optionsData[2].is_correct) {
                  this.correctoption = 'c'
                }
                if (this.optionsData[3].is_correct) {
                  this.correctoption = 'd'
                }
                
                })
                .catch(e => {
                })
            })
            .catch(e => {
            })
      */
      this.$http.get('/questions').then(response => {

        this.questionData = response.body;
        console.log('response = ' + response.body)
      }, error => {
           console.error(error);
      });

    /*this.$http.get('http://api.iqube.org.in/questions').then(function(data) {
      this.questionData = data.body;
      console.log("function = data.body")
    })*/

  },

  methods: {
    submit () {
      if (this.optionselected == this.correctoption) {
        this.iscorrect = true
        this.dialog = true
        this.text = "WHOO! THAT'S CORRECT"
      }
      if (this.optionselected != this.correctoption) {
        this.iscorrect = false
        this.dialog = true
        this.text = "OOPS! THAT'S INCORRECT"
      }
    },

    next () {
      this.i++
      
      /*Vue.axios.get('http://api.iqube.org.in/questions/' + this.questionData[this.i].id + '/choices')

                .then(response => {
                this.optionsData = response.data

                if (this.optionsData[0].is_correct) {
                  this.correctoption = 'a'
                }
                if (this.optionsData[1].is_correct) {
                  this.correctoption = 'b'
                }
                if (this.optionsData[2].is_correct) {
                  this.correctoption = 'c'
                }
                if (this.optionsData[3].is_correct) {
                  this.correctoption = 'd'
                }
                })
                .catch(e => {
                })
                */
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
