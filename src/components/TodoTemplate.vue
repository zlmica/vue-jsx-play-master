/*
 * @Author: zl
 * @Date: 2022-05-27 17:42:35
 * @LastEditTime:  2022-05-27 17:42:35
 * @LastEditors: zl
 * @Description:
 * @FilePath: /vue-jsx-play/src/components/TodoTemplate.vue
 */
<template>
    <h3>{{ title }}</h3>
    <input type="text" @change="textChange" />
    <ul>
        <li v-for="(item, i) in list" :key="item.text">
            <span :style="item.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }">
                {{ item.text }}
            </span>
            <button @click="statusChange(i)">
                {{ item.done ? "重启" : "完成" }}
            </button>
        </li>
    </ul>
    <div style="float:right">共{{ list.length }}条任务</div>
</template>
<script setup>
import { reactive } from "vue";
defineProps({
    title: String
});
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
</script>
