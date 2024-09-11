<template>
  <v-app-bar flat class="app-bar-header">
    <v-container fluid>
      <v-row align="center" no-gutters>
        <!-- Logo e Título -->
        <v-col cols="auto" class="d-flex align-center">
          <v-icon color="primary" size="30">mdi-book-open-page-variant</v-icon>
          <h1 class="text-h6 ml-2 app-title">The Bible App</h1>
        </v-col>

        <!-- Ícones de Ações (sempre na mesma linha) -->
        <v-spacer></v-spacer>
        <v-col cols="auto" class="d-flex align-center">
          <v-btn icon @click="search">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon @click="settings">
            <v-icon>mdi-cog</v-icon>
          </v-btn>
          <v-btn icon @click="toggleMenu">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader",
  emits: ["toggleMenu"],
  methods: {
    search() {
      console.log("Search clicked");
    },
    settings() {
      console.log("Settings clicked");
    },
    toggleMenu() {
      this.$emit("toggleMenu");
    },
  },
});
</script>

<style scoped>
.app-bar-header {
  background-color: #293647;
}

.app-title {
  white-space: nowrap; /* Impede quebra de linha no título */
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px; /* Define um limite para o título */
}
</style>
