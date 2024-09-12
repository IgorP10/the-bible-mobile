<template>
  <v-btn
    class="quick-access-button"
    color="customColor"
    :icon="true"
    @click="handleClick"
  >
    <v-icon color="primary">{{ icon }}</v-icon>
    <span>{{ label }}</span>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "QuickAccessButton",
  props: {
    icon: {
      type: String as PropType<string>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: true,
    },
  },
  methods: {
    handleClick() {
      // Aqui você pode adicionar lógica para lidar com o clique, se necessário
      console.log(`Clicked on ${this.label}`);
    },
  },
});
</script>

<style scoped>
.quick-access-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Garante que o botão ocupe a largura total disponível */
  min-height: 80px; /* Ajuste o tamanho mínimo conforme necessário */
  border-radius: 5px;
}

.quick-access-button v-icon {
  font-size: 36px; /* Ajuste o tamanho do ícone */
}

.quick-access-button span {
  font-size: 14px; /* Ajuste o tamanho da fonte do rótulo */
  margin-top: 4px; /* Espaçamento entre o ícone e o rótulo */
}
</style>
