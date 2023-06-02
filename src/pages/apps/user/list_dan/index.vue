<script lang="ts" setup>
import customerStore from '@/dan/cake/store/customerStore'

// import { reactive } from 'vue'
// defineProps<{ }>()
const headers = [
  { title: 'ID', key: 'id' },
  { title: '用户名称', key: 'username' },
  { title: '电邮地址', key: 'email' },
  { title: '电话号码', key: 'phone_no' },
  { title: '', key: 'actions', sortable: false },
]

const aii = reactive({ ioading: true })

const users = ref<MANY>([])

const meta = ref<PAGEMETA>({
  page: 1,
  pageCount: 503,
  pageSize: 10,
  total: 5030,
})

const fetchUsers = () => {
  aii.ioading = true
  customerStore().fetching({})
    .then((res: ONE) => {
      console.log('CUSTOMER FECTHING RES =', res)
      users.value = res.data
      meta.value = res.page
      aii.ioading = false
    })
    .catch((err: ONE) => {
      console.error(err)
      aii.ioading = false
    })
}

watchEffect(fetchUsers)

const funn = {
  view: (id: number | string) => {
    console.log('查看一个 =', id)
  },
  trash: (id: number | string) => {
    console.log('删除一个 =', id)
  },
  updateEv: (opt: any) => {
    /*

    */
    meta.value.page = opt.page
    meta.value.pageSize = opt.itemsPerPage
    console.log('OPT =', opt, meta.value)
  },
}
</script>

<template>
  <section>
    <VRow>
      <VCol>
        <VCard title="用户列表">
          <DanTabie :headers="headers">
            <tr
              v-for="(v, i) in users"
              :key="i"
            >
              <td>
                {{ v.id }}
              </td>
              <td>
                {{ v.username }}
              </td>
              <td>
                {{ v.email }}
              </td>
              <td>
                {{ v.phone_no }}
              </td>
              <td class="">
                <CoTabAction />
              </td>
            </tr>
          </DanTabie>
          <!--
            <VDataTableServer
            v-model:items-per-page="meta.pageSize"
            v-model:page="meta.page"
            :items="users"

            :loading="aii.ioading"

            :items-length="meta.total"
            :headers="headers"
            @update:options="funn.updateEv($event)"
            >
            <template #item.id="{ item }">
            <div class="">
            {{ item.raw.id }}
            </div>
            </template>
            <template #item.username="{ item }">
            <div class="">
            {{ item.raw.username }}
            </div>
            </template>
            <template #item.email="{ item }">
            <div class="">
            {{ item.raw.email }}
            </div>
            </template>
            <template #item.phone_no="{ item }">
            <div class="">
            {{ item.raw.phone_no }}
            </div>
            </template>
            <template #item.actions="{ item }">
            <CoTabAction
            class="text-center"
            @view="funn.view(item.raw.id)"
            @trash="funn.trash(item.raw.id)"
            />
            </template>

            </VDataTableServer>
          -->
        </VCard>
      </VCol>
    </VRow>
  </section>
</template>
