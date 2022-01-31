<template>
   <v-parallax dark src="src\assets\moshal.png">
    <div>
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form ref="loginForm">
                           <v-text-field
                           v-model="loginForm.email"
                              prepend-icon="person"
                              name="login"
                              label="Login"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                           v-model="loginForm.password"
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Password"
                              :type="showPassword ? 'text' : 'password'"
                              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="showPassword = !showPassword"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" to="/"
                         small
                  outlined
                  class="primary--text">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
    </div>
    </v-parallax>
</template>

<script>
export default {
   name: 'Login',
   props: {
      source: String,
   },
   data() {
    return {
      loginForm: {
        email: "test@demo.com",
        password: "123456"
      },
      showPassword: false,
    };
  },
};
</script>

<style></style>