/*
 * @Author: zl
 * @Date: 2022-02-14 10:42:35
 * @LastEditTime: 2022-02-14 11:20:20
 * @LastEditors: zl
 * @Description:
 * @FilePath: /vue-jsx-play/src/components/Todo.jsx
 */
import { defineComponent, onMounted, reactive, ref, watch } from "vue";

export default defineComponent({
  name: "Todo",
  props: {
    title: {
      type: String,
      default: "待办清单"",
    },
  },
  setup(props) {
    const count = ref(0);
    const list = reactive([]);
    const textChange = (e) => {
      if (!e.target.value) return;
      list.push({
        text: e.target.value,
        done: false,
      });
      e.target.value = "";
      count.value++;
    };
    onMounted(() => {
      const hisList = JSON.parse(localStorage.getItem("todo")) || [];
      list.push(...hisList);
      count.value = list.length;
    });
    watch(list, (list, prevList) => {
      const hisList = Array.from(prevList);
      localStorage.setItem("todo", JSON.stringify(hisList));
    });
    return () => (
      <>
        <h3>{props.title}</h3>
        <input type="text" onChange={textChange} />
        <ul>
          {list.map((item) => (
            <li>
              <span
                style={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                {item.text}
              </span>
              <button onClick={() => (item.done = !item.done)}>
                {item.done ? "重启" : "完成"}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ float: "right" }}>共{count.value}条任务</div>
      </>
    );
  },
});
