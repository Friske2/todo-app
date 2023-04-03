import { ref, reactive } from "vue";
const useTodo = function () {
  const value = ref(null);
  const todos = reactive([]);
  const handeAdd = function () {
    todos.push(value.value);
  };
  const handleDelete = function (index) {
    const isConfirm = window.confirm("Are you sure?");
    if (!isConfirm) return;
    todos.splice(index, 1);
  };
  return {
    value,
    handeAdd,
    handleDelete,
    todos,
  };
};
export default useTodo;
