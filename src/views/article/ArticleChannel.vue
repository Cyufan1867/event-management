<script setup>
import { ref } from 'vue'
import { artGetChannelsService } from '@/api/article'
import { Edit, Delete } from '@element-plus/icons-vue'

const channelList = ref([])
const loading = ref(false)

const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}
getChannelList()
const onEditChannel = (row) => {
  console.log(row)
}
const onDelChannel = (row) => {
  console.log(row)
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button type="primary"> 添加分类 </el-button>
    </template>

    <el-table :data="channelList" style="width: 100%" v-loading="loading">
      <el-table-column label="序号" width="100" type="index"></el-table-column>
      <el-table-column label="分类名称" prop="cate_name"></el-table-column>
      <el-table-column label="分类别名" prop="cate_alias"></el-table-column>
      <el-table-column label="操作" width="100">
        <template #default="{ row }">
          <el-button
            type="primary"
            :icon="Edit"
            circle
            plain
            @click="onEditChannel(row)"
          ></el-button>
          <el-button
            type="danger"
            :icon="Delete"
            circle
            plain
            @click="onDelChannel(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </page-container>
</template>
