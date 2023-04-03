<template>
  <div>
    <div class="form-container">
      <el-input
        placeholder="Please input your todo"
        type="text"
        v-model="value"
      />
    </div>
    <el-button type="primary" class="ml-2" @click="handeAdd">Add</el-button>
    <el-table :data="todos" style="width: 100%">
      <el-table-column prop="item" label="Date">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            {{ scope.row }}
          </div>
        </template>
      </el-table-column>
      <el-table-column width="180" label="">
        <template #default="scope">
          <el-button @click="handleDelete(scope.row.index)" type="danger"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import useTodo from "@/composition/todo";
export default {
  setup() {
    const { value, handeAdd, handleDelete, todos } = useTodo();
    return {
      value,
      handeAdd,
      handleDelete,
      todos,
    };
  },
};
</script>
<style scoped>
.form-container {
  display: inline-block;
  width: 200px;
}
.ml-2 {
  margin-left: 0.5rem;
}
</style>
