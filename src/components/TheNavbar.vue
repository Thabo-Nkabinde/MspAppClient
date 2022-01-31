<template>
  <div>
    <v-app-bar dense dark fixed color="primary">
      
      
      <v-spacer class="hidden-md-and-up"></v-spacer>
      
      <v-toolbar-title class="text-uppercase">
        <v-img  width="50" src='../../src/assets/moshal.png'></v-img>
        <router-link to="/dashboard" tag="span" style="cursor: pointer" class="text-h5">
          <!-- <span class="grey--text text--lighten-1">Vue</span> -->
          
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }" class="ml-4">
          <div v-on="on" class="d-flex align-center">
            <v-avatar size="30px" color="blue lighten-2" class="ml-2" style="cursor: pointer">
              <span class="white--text">TN</span>
            </v-avatar>
            <div class="hidden-sm-and-down">
              <v-btn text class="pa-1">
                <span class="text-capitalize">Thabo</span>
                <v-icon>expand_more</v-icon>
              </v-btn>
            </div>
          </div>
        </template>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item.text" router dense :to="item.route">
            <v-list-item-icon class="mr-2">
              <v-icon small>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-app-bar
      dense
      class="hidden-sm-and-down secondary-toolbar mt-12"
      :elevate-on-scroll="true"
      fixed
    >
      <v-toolbar-items>
        <v-btn text v-for="item in navItems" :key="item.text" :to="item.route" :ripple="false">
          <span>
            <v-icon small class="blue--text mr-1">{{ item.icon }}</v-icon>
          </span>
          <span class="mt-1 text-subtitle-2 text-capitalize">{{ item.text }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <ProgressBar />
  </div>
</template>

<script>
import ProgressBar from "@/components/TheProgressBar";

export default {
  components: {
    ProgressBar
  },
  data() {
    return {
      sidebar: false,
      navItems: [
        { icon: "dashboard", text: "Finance", route: "/finance" },
      ],
      menuItems: [
        { icon: "perm_identity", text: "Profile", route: "/profile" },
        { icon: "exit_to_app", text: "Sign Out", route: "/login" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
::v-deep .v-toolbar__content {
  max-width: 1185px;
  margin: auto;
}

::v-deep .v-toolbar__items > a.v-btn--active {
  .v-btn__content span {
    font-weight: bold;
  }
}

::v-deep .v-toolbar__items > a.v-btn--active:after {
  content: "";
  position: absolute;
  left: 18px;
  bottom: 0;
  height: 2px;
  width: 75%;
  border-bottom: 2px solid #1e88e5;
}

::v-deep .secondary-toolbar .v-toolbar__content {
  padding: 0;
}

::v-deep .v-btn:before {
  background-color: transparent !important;
}
</style>