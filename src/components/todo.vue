<template>
  <main class="container">
    <article>
      <h3>事件清单</h3>
      <input
        type="text"
        v-model="newtodo"
        placeholder="请输入事件，回车确认"
        aria-invalid="false"
        @keyup.enter="addtodolist()"
        class="animate__animated animate__flipInX"
      />
      <details>
        <summary>待办事项：{{ newtodonb }}项</summary>

        <fieldset>
          <label
            for="terms"
            v-for="item in filterWaiting"
            :key="item.id"
            class="animate__animated animate__zoomIn"
          >
            <input
              type="checkbox"
              :id="'rb' + item.id"
              :name="'rb' + item.id"
              v-model="item.done"
            />
            {{ item.text }}

            <a
              href="#"
              role="button"
              class="deletebtn"
              @click="removeItem(item.id)"
              >x</a
            >
          </label>
        </fieldset>
      </details>

      <details open>
        <summary>已完成事项：{{ donenb }}项</summary>
        <fieldset>
          <label
            for="terms_sharing"
            v-for="item in filterDone"
            :key="item.id"
            class="animate__animated animate__zoomIn"
          >
            <input
              type="checkbox"
              :id="'rb' + item.id"
              :name="'rb' + item.id"
              v-model="item.done"
              disabled
              checked
            />
            {{ item.text }}
            <a
              href="#"
              role="button"
              class="deletebtn"
              @click="removeItem(item.id)"
              >x</a
            >
          </label>
        </fieldset>
      </details>
    </article>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import storeTodo from "../store/todo";

//实现存储
const todoStore = storeTodo();

let { todoItem } = storeToRefs(todoStore);

let id: number = 0;

/*自增id变量*/
// type TodoItem = {
//   id: number;
//   text: string;
//   done: boolean;
// };

/*我的待办列表*/
// todoItem = ref<TodoItem[]>([]); //使用todoStore中的todoItem替换

const newtodo = ref("");
/**新增一个待办事项 */
function addtodolist() {
  console.log(todoItem.value);
  todoItem.value.push({
    id: id++,
    text: newtodo.value,
    done: false,
  });
  newtodo.value = "";
}
/**根据id删除元素 */
function removeItem(id: number) {
  // var lab = document.getElementById("id");
  // lab?.setAttribute("class", "animate__animated animate__lightSpeedOutRight");
  const rs = todoItem.value.filter((item) => item.id !== id); //数组的过滤 过滤掉与传入id相等的item
  todoItem.value = rs; //将通过过滤的结果返回到数组
}

/**这是真正的待完成列表 */
const filterWaiting = computed(() => {
  const rs = todoItem.value.filter((item) => !item.done);
  return rs;
});

/**这是真正的已经完成列表 */
const filterDone = computed(() => {
  const rs = todoItem.value.filter((item) => item.done);
  return rs;
});

const newtodonb = computed(() => {
  const rs = todoItem.value.filter((item) => !item.done).length;
  return rs;
});

const donenb = computed(() => {
  const rs = todoItem.value.filter((item) => item.done).length;
  return rs;
});
</script>

<style scoped>
.deletebtn {
  padding: 0px 5px;
  margin-left: 3em;
  font-size: 0.5em;
}
</style>
