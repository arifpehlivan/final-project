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
              prepend-icon="mdi-account">
              </v-text-field>
              <v-text-field
              label="Email"
              prepend-icon="mdi-email">
              </v-text-field>
              <v-text-field
              label="Password"
              prepend-icon="mdi-lock"
              type="password">
              </v-text-field>
            </v-form>
            <v-radio-group row>
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
    
  }
</script>
