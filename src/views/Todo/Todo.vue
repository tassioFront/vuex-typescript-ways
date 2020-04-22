<template>
  <div class="todo">
    <h1>Todo brabo</h1>
    <input
      class="new-todo"
      autofocus
      placeholder="Adiciona ae pae"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <button @click="setAllDone(!allDone)" v-text="allDoneText" />
    <!-- <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDone" /> -->
    <ul>
      <!-- Mover para um arquivo separado -->
      <li v-for="(todo, index) in todos" :key="index">
        <span style="display:inline-flex">
          <!-- como fazer o onclick de check na li -->
          <input type="checkbox" v-model="todo.completed" />
          <div>{{todo.title}}</div>
          <button @click.stop="removeTodo(todo)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Todo extends Vue {
  newTodo = "";
  allDone = false;
  todos = [
    {
      title: "react melhor q vue",
      completed: false
    }
  ];

  get remaining() {
    return this.todos.length;
  }

  get allDoneText() {
    return this.allDone ? "Desmarcar todos" : "Marcar todos";
  }

  // get allDone() {
  //   return this.remaining === 0;
  // }
  // set allDone(value) {
  //   console.log(value);
  //   this.todos.forEach(todo => {
  //     todo.completed = value;
  //   });
  // }

  setAllDone(value: boolean) {
    this.allDone = value;
    this.todos.forEach(todo => {
      todo.completed = value;
    });
  }

  addTodo() {
    const value = this.newTodo && this.newTodo.trim();
    if (!value) {
      return;
    }
    this.todos.push({
      title: value,
      completed: false
    });
    this.newTodo = "";
  }

  removeTodo(todo: { title: string; completed: boolean }) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
</script>

<style lang="stylus"></style>
