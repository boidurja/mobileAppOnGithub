<template>

    <v-container>
      <img src="../../assets/header cropped.png" class="image-width my-3">

      <div class="pb-2">
        <div class="login-text-color mt-1 mb-3 title text-xs-center">Login</div>
        <v-divider></v-divider>
        <form>

          <v-text-field 
            required="required" 
            v-model="email" 
            :error-messages="emailErrors" 
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()" 
            placeholder="Email" 
            type="email" 
            height="10" 
            outline 
            single-line 
            class="mx-4 mt-4"
          >
          </v-text-field>

          <v-text-field 
            required="required" 
            v-model="password" 
            :error-messages="passwordErrors" 
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()" 
            placeholder="Passsword" 
            type="password" 
            outline 
            single-line 
            class="mx-4"  
          >
          </v-text-field>
          <v-btn type="submit" 
            @click="login()" 
            :disabled="$v.$invalid" 
            class="login-button text-xs-center d-block mx-auto"
            block
            large
            color="primary"
          >
            Login
          </v-btn>

          <br>
          <div class="flex1 mt-2 mx-4">
            <div>
              <input type="checkbox" id="one">
              <label for="one">Remember Me</label>
            </div>

            <span>Forgot password?</span>
          </div>
        </form>
      </div>

      <div class="mt-4 text-xs-center text--black">
        Don't have an account<br>
        <span @click="registernow()">Register Now</span>
      </div>
    </v-container>

</template>

<script>

import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'


export default {

  data () {
    return {
      email: '',
      password: ''
    }
  },

  mixins: [validationMixin],

  validations: {
    email: {required, email},
    password: { required }
  },

  computed: {
    emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    passwordErrors () {
      const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required')
        return errors
    }
  },

  methods: {
    login() {
      this.$v.$touch()
      this.$router.push( { name: 'profile' } )
    }
  }

}

</script>


<style scoped>

.background1 {
  background: rgb(35,31,32);
}

.image-width {
  width: 100%;
}

.formbackground {
  background: rgb(246,246,246);
  border-radius: 10px;
}

.login-text-color {
  color: rgb(74,144,226);
}

.input1 {
  background: white;
}

.login-button {
  width: 86%;
  color: white;
  text-transform: capitalize;
}

.flex1 {
  display: flex;
  justify-content: space-between;
}

.bottom-text-color {
  color: black;
}
</style>
