<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
  }>(),
  {
    title: "Booking",
    subtitle: "Interactive booking flow placeholder.",
  },
);
</script>

<template>
  <section class="card">
    <h3 class="h3">{{ props.title }}</h3>
    <p class="mt-2 copy">{{ props.subtitle }}</p>
  </section>
</template>
