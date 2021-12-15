<template>
  <v-container class="text-center">
    <h1 class="font-weight-light">Factory List</h1>
    <v-row justify="center">
      <v-col md="9" sm="12">
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-center">ID</th>
              <th class="text-center">Name</th>
              <th class="text-center">Membership Date</th>
              <th class="text-center">Membership Expiration Date</th>
              <th class="text-center">Worker Count</th>
              <th class="text-center">Special Member</th>
              <th class="text-center">Update</th>
              <th class="text-center">Delete</th>
            </tr>
          </thead>
          <tbody v-for="factory in factoryList" :key="factory">
            <tr>
              <td>{{ factory.id_f }}</td>
              <td>{{ factory.f_name }}</td>
              <td>{{ factory.m_date }}</td>
              <td>{{ factory.f_date }}</td>
              <td>{{ factory.w_count }}</td>
              <td>{{ factory.s_member }}</td>
              <td>
                <v-btn class="info"><v-icon>mdi-pencil</v-icon></v-btn>
              </td>
              <td>
                <v-btn class="red"><v-icon>mdi-delete</v-icon></v-btn>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-dialog   max-width="400" v-model="add">
            <v-card>
                <v-card-title>Add New Factory</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="name"
                :rules="[(v) => !!value || 'Name is required']"
              >
              </v-text-field>
              <v-text-field
                label="membership date"
                :rules="[(v) => !!value || 'Membership date is required']"
              >
              </v-text-field>
              <v-text-field
                label="worker count"
                :rules="[(v) => !!value || 'Worker count is required']"
              >
              </v-text-field>
                Special Member
              <v-radio-group row :rules="[(v) => !!v || 'Please choose one']">
                <v-radio label="True" value="true"></v-radio>
                <v-radio label="False" value="false"></v-radio>
              </v-radio-group>
              <v-btn color="red" block>Add</v-btn>
            </v-form>
          </v-card-text>
            </v-card>
          
        </v-dialog>
        <v-btn @click="addLine()" color="red" large>Add New Factory</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    admin: {},
    factoryList: [],
    addFactory: {},
    add: false,
  }),
  methods: {
    async addLine() {
      this.add = true;
    },
  },
  created: async function () {
    this.admin = JSON.parse(sessionStorage.getItem("session"));
    if (this.admin == null) {
      this.$router.push("/");
    } else if (this.admin.role != "admin") {
      this.$router.push("/profile");
    } else {
      try {
        const res = await this.axios.post("/admin/factories", this.admin);
        this.factoryList = res.data;
      } catch (error) {}
    }
  },
};
</script>

<style></style>
