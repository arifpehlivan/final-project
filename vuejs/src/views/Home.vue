<template>
  <v-container>
    <v-row justify="center">
      <v-col class="text-center" md="2" sm="2">
        <v-btn class="primary">sign up</v-btn>
      </v-col>
      <v-col class="text-center"  md="2" sm="2">
        <v-btn class="success">sign in</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="6" sm="6">
        <v-card>
          <v-card-title>Sign Up</v-card-title>
          <v-card-text>
            <v-form class="ma-3">
              <v-text-field
              label="Name"
              prepend-icon="mdi-account"
              :rules="nameRules">
              </v-text-field>
              <v-text-field
              label="Email"
              prepend-icon="mdi-email"
              :rules="emailRules">
              </v-text-field>
              <v-text-field
              label="Password"
              prepend-icon="mdi-lock"
              type="password"
              :rules="passwordRules">
              </v-text-field>
            </v-form>
            <v-radio-group row :rules="[(v) => !!v || 'Please choose one']">
              <v-radio label="Admin" value="admin"></v-radio>
              <v-radio label="Editor" value="edit"></v-radio>
            </v-radio-group>
            <v-btn block class="primary mt-3" type="submit">Sign Up</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container> 
</template>

<script>
  

  export default {
    data: () => ({
      nameRules: [
        value => !!value || 'Name is required',
        value => (value && value.length >= 8 || 'Name must be more than 8 characters'),
        
        ],
        emailRules: [
          value => !!value || 'Email is required',
          value => /.+@.+\..+/.test(value) || "E-mail must be valid"
        ],
        passwordRules: [
          value => !!value || 'Password is required',
          value => (value && value.length >= 8 || 'Password must be more than 8 charecters')
        ]
         
      
    })
  }
</script>
