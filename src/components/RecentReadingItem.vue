<template>
  <v-list-item class="recent-reading-item">
    <v-list-item-avatar>
      <v-icon color="primary">mdi-book-open</v-icon>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="font-weight-bold">
        {{ title }}
      </v-list-item-title>
      <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "RecentReadingItem",
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    subtitle: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped>
.recent-reading-item {
  margin-bottom: 8px;
  /* Ajuste para dispositivos móveis */
}

.v-list-item {
  padding: 8px 16px;
  /* Ajuste o padding para melhor visualização */
}

.v-list-item-content {
  overflow: hidden;
  /* Garante que o conteúdo não passe os limites */
}
</style>
