import Vue from 'vue'
import Component from 'vue-class-component'

const consoleHelper = <T>(text: string, style = "color: green", data: T | string = "") => {
  console.log(
    `%c ${text}`,
    `${style}; font-family: Helvetica; font-size: 15px;`,
    data
  );
}

@Component
export class ConsoleLog extends Vue {
  consoleHelper = consoleHelper
}

export { consoleHelper }
