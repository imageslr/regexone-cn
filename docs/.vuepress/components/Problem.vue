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
      v-if="hasGroup"
      class="groups"
    >
      <span
        v-for="(item, i) in captureData && captureData.results"
        :key="item"
        class="group"
        :class="{succeeded: groupSucceed[i], error: groupError[i]}"
        v-text="item"
      />
    </td>
    <td
      class="result"
      :class="{ succeed: status, failed: !status }"
      v-text="result"
    />
  </tr>
</template>

<script>
import _ from "lodash";
export default {
  props: {
    data: Object,
    hasGroup: Boolean,
  },
  data() {
    return {
      result: "",
      textHtml: this.escapeHtml(this.data.text),
      groupSucceed: [],
      groupError: [],
      status: false, // succeed or failed
    };
  },
  computed: {
    type() {
      return this.data.type;
    },
    text() {
      return this.data.text;
    },
    captureData() {
      return this.data.captureData;
    },
    isNonCaptureGroup() {
      return this.data.captureData && this.data.captureData.nonCapture;
    },
  },
  methods: {
    clearResult() {
      this.textHtml = this.escapeHtml(this.data.text);
      this.clearNonTextResult();
    },
    clearNonTextResult() {
      this.result = "";
      this.groupSucceed = [];
      this.groupError = [];
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
            if (this.captureData) {
              var matched = res1.slice(1, res1.length),
                inter = _.intersection(matched, this.captureData.results),
                diff = _.difference(this.captureData.results, inter);
              this.captureData.results.forEach((c, i) => {
                -1 != _.indexOf(inter, c)
                  ? this.markGroupMatched(i)
                  : -1 != _.indexOf(diff, c) && this.markGroupMissed(i);
              });
              if (this.isNonCaptureGroup) {
                return 0 == inter.length
                  ? this.markSucceeded()
                  : this.markFailed();
              } else {
                return 0 == diff.length
                  ? this.markSucceeded()
                  : this.markFailed();
              }
            }
            return this.markSucceeded();
          }
          null != res2 ? this.clearNonTextResult() : this.clearResult();
          return this.markFailed();
        }
        if ("skip" == this.type) {
          if (null == res1) return this.clearResult(), true;
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
      } catch (_) {
        console.log(_);
      }
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
    markGroupMatched(i) {
      if (this.isNonCaptureGroup) {
        this.$set(this.groupError, i, true);
      } else {
        this.$set(this.groupSucceed, i, true);
      }
    },
    markGroupMissed(i) {
      if (this.isNonCaptureGroup) {
        this.$set(this.groupError, i, false);
      } else {
        this.$set(this.groupSucceed, i, false);
      }
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

    &.groups {
      width: 10em;
      font-size: 0.825em;
      padding-right: 0.5em;

      .group {
        display: inline-block;
        padding: 0.25em 0.5em;
        background: #f5f5f5;
        border-radius: 0.25em 0.25em 0.25em 0.25em;
        transition: background-color 225ms, color 225ms;
        white-space: nowrap;
        margin-top: 0.25em;
        margin-right: 0.25em;

        &.succeeded {
          background: #42b983;
          color: white;
          transition: background-color 225ms, color 225ms;
        }

        &.error {
          background: #f66;
          color: white;
          transition: background-color 225ms, color 225ms;
        }
      }
    }

    &.result {
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
