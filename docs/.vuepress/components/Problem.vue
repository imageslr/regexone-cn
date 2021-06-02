<template>
  <tr class="problem">
    <td
      class="task"
      v-text="type"
    />
    <td
      class="text"
      v-html="textHtml"
    />
    <td
      class="result"
      :class="{ succeed: status, failed: !status }"
      v-text="result"
    />
  </tr>
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
  },
  data() {
    return {
      result: "",
      textHtml: this.text,
      status: false, // succeed or failed
    };
  },
  methods: {
    clearResult() {
      this.textHtml = this.text;
      this.clearNonTextResult();
    },
    clearNonTextResult() {
      this.result = "";
    },
    verifyInput(input, pattern) {
      try {
        if (0 == input.length) return this.clearResult(), false;
        var res1 = null,
          res2 = null;

        try {
          res1 = this.text.match(RegExp(input, ""));
        } catch (_) {}
        try {
          res2 = this.text.match(new RegExp(pattern, ""));
        } catch (_) {}

        if ("match" == this.type || "capture" == this.type) {
          if (null != res2) {
            var html =
              this.escapeHtml(this.text.substring(0, res2.index)) +
              "<span class='match_succeeded'>" +
              this.escapeHtml(res2[0]) +
              "</span>" +
              this.escapeHtml(
                this.text.substring(
                  res2.index + res2[0].length,
                  this.text.length
                )
              );
            this.textHtml = html;
          }
          if (null != res1) {
            return this.markSucceeded();
          }
          null != res2 ? this.clearNonTextResult() : this.clearResult();
          return this.markFailed();
        }
        if ("skip" == this.type) {
          if (null == res1) return this.clearResult(), false;
          var html =
            this.escapeHtml(this.text.substring(0, res1.index)) +
            "<span class='match_failed'>" +
            this.escapeHtml(res1[0]) +
            "</span>" +
            this.escapeHtml(
              this.text.substring(res1.index + res1[0].length, this.text.length)
            );
          this.textHtml = html;
          return this.markFailed();
        }
        alert("Invalid type");
      } catch (_) {}
      return false;
    },
    markSucceeded() {
      this.result = "Success";
      this.status = true;
      return true;
    },
    markFailed() {
      this.result = "Failed";
      this.status = false;
      return false;
    },
    escapeHtml(s) {
      return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    },
  },
};
</script>

<style lang="scss">
.problem {
  td {
    border: none;
    padding: 0.5em 0 0 0;
    font-size: 0.9375em;

    &.task {
      width: 1em;
      padding-right: 1.5em;
      vertical-align: top;
      text-align: center;
      text-transform: capitalize;
    }

    &.text {
      padding-right: 0.5em;
      white-space: pre;
      vertical-align: top;
      color: black;

      .match_succeeded {
        color: #42b983;
      }

      .match_failed {
        color: #f66;
      }
    }

    &.result {
      width: 2em;
      vertical-align: top;
      text-align: center;
      opacity: 0;
      transition: opacity 225ms;

      &.succeed {
        color: #42b983;
        opacity: 1;
        transition: opacity 225ms;
      }

      &.failed {
        color: #f66;
        opacity: 1;
        transition: opacity 225ms;
      }
    }
  }
}
</style>
