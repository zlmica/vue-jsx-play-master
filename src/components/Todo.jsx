/*
 * @Author: zl
 * @Date: 2022-02-14 10:42:35
 * @LastEditTime: 2022-02-14 13:50:41
 * @LastEditors: zl
 * @Description:
 * @FilePath: /vue-jsx-play/src/components/Todo.jsx
 */
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Todo",
  props: {
    title: String,
  },
  setup(props) {
    const list = reactive([]);

    const textChange = (e) => {
      if (!e.target.value) return;
      list.push({
        text: e.target.value,
        done: false,
      });
      e.target.value = "";
    };

    const statusChange = (idx) => {
      list[idx].done = !list[idx].done;
    };

    return () => (
      <>
        <h3>{props.title}</h3>
        <input type="text" onChange={textChange} />
        <ul>
          {list.map((item, i) => (
            <li>
              <span
                style={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                {item.text}
              </span>
              <button onClick={() => statusChange(i)}>
                {item.done ? "重启" : "完成"}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ float: "right" }}>共{list.length}条任务</div>
      </>
    );
  },
});
