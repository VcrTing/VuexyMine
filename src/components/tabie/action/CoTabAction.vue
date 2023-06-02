<script lang="ts" setup>
defineEmits(['trash', 'view'])
</script>

<template>
  <div>
    <IconBtn @click="$emit('trash')">
      <VIcon icon="tabler-trash" />
    </IconBtn>

    <IconBtn>
      <VIcon icon="tabler-edit" />
    </IconBtn>

    <VBtn
      icon
      variant="text"
      size="small"
      color="medium-emphasis"
    >
      <VIcon
        size="24"
        icon="tabler-dots-vertical"
      />

      <VMenu activator="parent">
        <VList>
          <VListItem @click="$emit('view')">
            <template #prepend>
              <VIcon icon="tabler-eye" />
            </template>

            <VListItemTitle>View</VListItemTitle>
          </VListItem>

          <VListItem link>
            <template #prepend>
              <VIcon icon="tabler-pencil" />
            </template>
            <VListItemTitle>Edit</VListItemTitle>
          </VListItem>

          <VListItem @click="$emit('trash')">
            <template #prepend>
              <VIcon icon="tabler-trash" />
            </template>
            <VListItemTitle>Delete</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </VBtn>
  </div>
</template>
