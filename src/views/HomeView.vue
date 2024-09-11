<template>
  <v-container color="background">
    <!-- Chamada do Header -->
    <AppHeader @toggleMenu="toggleMenu" />

    <!-- Menu -->
    <v-navigation-drawer
      v-model="isMenuOpen"
      location="right"
      color="background"
    >
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item" @click="() => {}">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="pt-0">
      <v-container>
        <!-- Slide Versículos -->
        <v-card class="mb-6 verse-card">
          <v-card-title class="text-h5 text-primary">
            Verse of the Day
          </v-card-title>
          <v-card-text>
            <p>{{ slides[currentSlide].verse }}</p>
            <p class="text-body-2 text-accent">
              {{ slides[currentSlide].reference }}
            </p>
          </v-card-text>
        </v-card>

        <!-- Acesso Rápido -->
        <v-row class="mb-6" dense>
          <v-col cols="6" sm="3">
            <QuickAccessButton icon="mdi-book" label="Read" />
          </v-col>
          <v-col cols="6" sm="3">
            <QuickAccessButton icon="mdi-bookmark" label="Bookmarks" />
          </v-col>
        </v-row>

        <!-- Leituras Recentes -->
        <v-card class="pa-4 recent-card">
          <v-card-title class="text-h5 text-primary">
            Recent Readings
          </v-card-title>
          <RecentReadingItem title="Genesis 1" subtitle="The Beginning" />
          <RecentReadingItem
            title="Psalm 23"
            subtitle="The Lord is my Shepherd"
          />
          <RecentReadingItem title="Matthew 5" subtitle="The Beatitudes" />
        </v-card>
      </v-container>
    </v-main>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import QuickAccessButton from "@/components/QuickAccessButton.vue";
import RecentReadingItem from "@/components/RecentReadingItem.vue";
import AppHeader from "@/components/AppHeader.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    QuickAccessButton,
    RecentReadingItem,
    AppHeader,
  },
  setup() {
    const isMenuOpen = ref(false);
    const currentSlide = ref(0);

    const slides = [
      {
        id: 1,
        verse:
          "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16",
      },
    ];

    const menuItems = ["Home", "Bible", "Bookmarks", "Settings"];

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      currentSlide,
      slides,
      toggleMenu,
      menuItems,
    };
  },
});
</script>

<style scoped>
.verse-card {
  background-color: #2c3a4e;
}

.recent-card {
  background-color: #2c3a4e;
}
</style>
