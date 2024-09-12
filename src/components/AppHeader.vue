<template>
  <v-app-bar flat color="headerBackground">
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

          <!-- Botão de menu de configurações -->
          <v-menu offset-y :close-on-content-click="false" class="menu-conf">
            <template v-slot:activator="{ props }">
              <v-btn icon v-bind="props">
                <v-icon>mdi-cog</v-icon>
              </v-btn>
            </template>
            <v-list
              :style="{
                backgroundColor:
                  $vuetify.theme.global.current.colors.background,
              }"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">
                    Dark Mode
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-switch v-model="isDarkMode"></v-switch>
                </v-list-item-action>
              </v-list-item>
              <!-- Você pode adicionar mais itens de configuração aqui -->
            </v-list>
          </v-menu>

          <!-- Botão de menu -->
          <v-btn icon @click="toggleMenu">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useTheme } from "../plugins/vuetify";

export default defineComponent({
  name: "AppHeader",
  setup(_, { emit }) {
    const theme = useTheme();

    const search = () => {
      console.log("Search clicked");
    };

    const toggleMenu = () => {
      emit("toggleMenu");
    };

    const isDark = computed({
      get: () => theme.global.current.value.dark,
      set: (value) => {
        theme.global.name.value = value ? "dark" : "light";
      },
    });

    return {
      search,
      toggleMenu,
      isDarkMode: isDark,
    };
  },
});
</script>

<style scoped>
.app-title {
  white-space: nowrap;
  /* Impede quebra de linha no título */
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
  /* Define um limite para o título */
}

.v-list-item-content {
  padding-right: 16px; /* Espaçamento para a área de conteúdo */
}

.v-list-item-action {
  padding-left: 16px; /* Espaçamento para o switch ficar bem posicionado */
}
</style>
