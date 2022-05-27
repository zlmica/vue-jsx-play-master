<!--
 * @Author: zl
 * @Date: 2022-02-14 10:02:27
 * @LastEditTime: 2022-02-14 10:47:14
 * @LastEditors: zl
 * @Description: 
 * @FilePath: /vue-jsx-play/src/views/HomeView.vue
-->
<script setup>
import Todo from "@/components/Todo.jsx";
import TodoTemplateVue from "../components/TodoTemplate.vue";
</script>

<template>
  <main>
    <Todo title="待办清单 jsx" />
    <hr style="margin: 50px 0">
    <TodoTemplateVue title="待办清单 template" />
  </main>
</template>
