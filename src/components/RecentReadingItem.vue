<template>
  <v-list-item class="recent-reading-item">
    <!-- Slot prepend para o ícone -->
    <template v-slot:prepend>
      <v-list-item-avatar class="item-avatar">
        <v-icon color="primary bold">mdi-book-open</v-icon>
      </v-list-item-avatar>
    </template>

    <!-- Conteúdo: título e subtítulo -->
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
}

.v-list-item {
  padding: 8px 16px;
}

.v-icon {
  font-size: 32px;
}

.item-avatar {
  margin-right: 16px;
}
</style>
