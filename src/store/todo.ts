import { defineStore } from "pinia";

//用来存储TODO事件的代码

// interface TodoState<TodoItem> {}

// type TodoItem = {
//   id: number;
//   text: string;
//   done: boolean;
// };

const storeTodo = defineStore("todo", {
  state: () => {
    return {
      todoItem: [
        {
          id: 0,
          text: "", //如果初始化text存在内容，todolist上一开始就会显示一条内容
          done: false,
        },
      ],
    };
  },

  getters: {},
  actions: {},
});

export default storeTodo;
