<script lang="ts" setup>
defineProps<{ headers: MANY }>()
</script>

<template>
  <VTable density="compact">
    <thead>
      <tr>
        <th
          v-for="(v, i) in headers"
          :key="i"
          class=""
        >
          {{ v.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </VTable>
</template>
