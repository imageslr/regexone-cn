<template>
  <div class="exercise">
    <div
      class="title"
      v-text="title"
    />
    <table class="tasks_table">
      <tbody>
        <tr class="problem_header">
          <td class="task">Task</td>
          <td class="text">Text</td>
          <td>Result</td>
        </tr>
        <tr
          class="problem"
          v-for="(item, index) in problems"
          :key="index"
        >
          <td
            class="task"
            v-text="item.task"
          />
          <td
            class="text"
            v-text="item.text"
          />
          <td
            class="result"
            v-text="item.result"
          />
        </tr>
      </tbody>
    </table>
    <div class="input_and_continue">
      <input
        class="exercise_input_field"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        spellcheck="false"
        placeholder="Type your pattern"
      >
      <button
        class="continue"
        :class="{ disabled }"
        :disabled="disabled"
      >Continue ›</button>
    </div>
    <div
      class="solution"
      v-show="showAnswer"
    >
      <span class="title">答案：</span>
      <span>{{ solutionText }} <a
          class="editor_val"
        >{{ editorVal}}</a>。</span>
    </div>
    <div class="solution_hint">
      解决上述任务以继续下一个问题，或者查看<a
        class="show_solution_button"
        @click="showAnswer = !showAnswer"
      >答案</a>。
    </div>
  </div>
</template>

<script>
export default {
  props: {
    problems: Array,
    title: String,
    solutionText: String,
    editorVal: String
  },
  data() {
    return {
      showAnswer: false,
    };
  },
  computed: {
    disabled() {
      return true;
    },
  },
};
</script>

<style lang="scss">
.exercise {
  margin: 0.75em auto 0 auto;
  padding: 1em 26px;
  font-size: 1.125em;
  overflow-x: auto;
  border: 1px solid #eaecef;
  border-radius: 0.15em 0.15em 0.15em 0.15em;
}

.title {
  padding-bottom: 0.5em;
  font-size: 0.9em;
  text-transform: capitalize;
  color: #757575;
}

.tasks_table {
  width: 100%;
  display: table;

  .problem_header {
    border: none;

    td {
      padding: 0.25em 0;
      font: bold 0.9em "Ruda", "Segoe UI", "Calibri", "Trebuchet MS", Helvetica,
        Verdana, sans-serif;
      color: #444;
      border: none;
      border-bottom: 1px solid #dcdcdc;

      &.task {
        padding-right: 1.5em;
        text-align: center;
      }
    }
  }

  tr {
    background-color: transparent;
    border: none;
  }

  .problem {
    td {
      border: none;
      padding: 0.5em 0 0 0;

      &.task {
        width: 1em;
        padding-right: 1.5em;
        vertical-align: top;
        text-align: center;
        text-transform: capitalize;
        font-size: 0.9375em;
      }

      &.text {
        font-size: 0.9375em;
        padding-right: 0.5em;
        white-space: pre;
        vertical-align: top;
        color: black;

        .match_succeeded {
          color: #5ac420;
        }

        .match_failed {
          color: #f53b27;
        }
      }

      &.result {
        width: 1em;
        vertical-align: top;
        text-align: center;
        opacity: 0;
        transition: opacity 225ms;

        &.failed {
          opacity: 1;
          transition: opacity 225ms;
        }
      }
    }
  }
}

.input_and_continue {
  border: 1px solid #e6e5dc;
  border-radius: 0.15em 0.15em 0.15em 0.15em;

  &::before,
  &::after {
    display: block;
    content: " ";
    clear: both;
  }

  .exercise_input_field {
    float: left;
    width: 75%;
    height: 2em;
    font-size: 1.125em;
    font-family: monospace;
    padding: 0 15px;
    border: 0;
    box-sizing: border-box;
  }

  .continue {
    float: left;
    width: 25%;
    height: 2em;
    padding: 0;
    text-align: center;
    font-size: 1.125em;
    border: 0;
    background: #5ac420;
    color: #fff;
    transition: background-color 225ms;
    box-sizing: border-box;
    cursor: pointer;

    &.disabled {
      background: #c9c9c9;
      color: #f9f9f9;
      transition: background-color 225ms;
    }
  }
}

.solution {
  margin: 1em 0 0 0;
  padding: 0.75em;
  font-size: 0.925em;
  border-radius: 0.25em 0.25em 0.25em 0.25em;
  background-color: #f5f5f5;
}

.solution_hint {
  padding-top: 0.75em;
  font-size: 0.875em;
  font-style: italic;
  color: #888;

  .show_solution_button {
    cursor: pointer;
  }
}
</style>