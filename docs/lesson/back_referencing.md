# 课程 A1：反向引用

::: tip 说明
进阶课程是译者针对 [regexone.com](https://regexone.com) 课程中没有涉及的内容所作的补充。
:::

**反向引用 (back referencing)**，或者回溯引用，是指通过 `\0`、`\1`、`\2` 这样的变量形式来引用模式中已经匹配到的部分。`\0` 表示整个模式匹配到的文本，`\1` 表示捕获的第一个组、`\2` 表示捕获的第二个组，以此类推。
> 在模式中，嵌套组按照**从左到右**的*左括号*出现的顺序定义，第一个捕获组是第一个括号里的内容，以此类推。捕获的结果也按照这个顺序排列。见[课程 12：嵌套组](nested_groups.html)

回溯引用在**替换字符串**时十分常用。比如在使用正则表达式搜索文本中的两个数字并交换它们的位置时，可以先使用模式 `(\d+)-(\d+)` 来搜索，再使用 `\2-\1` 来替换。下面是 JavaScript 中的代码示例：

```js
"123-456".replace(
  /(\d+)-(\d+)/, // searchValue
  "$2-$1" // replaceValue, $1、$2 等价于上文的 \1、\2
) 
// Output => "456-123"
```

或者，当我们需要在文本中**匹配两个连续的相同单词**时，也可以使用反向引用。下面是一段 JS 代码示例，用于删除字符串中的连续的重复单词：

```js
"hello hello world world".replace(
  /(\w+) \1/g, // g 表示全局匹配，即匹配整个字符串中满足该模式的所有子串，而不仅是第一个
  "$1"
)
// Output => "hello world"
```

请尝试完成下面的练习：

<Exercise
  title="练习 A1：匹配两个连续的相同单词"
  :data='[
    {type: "capture", text: "hello hello world", captureData: {results: ["hello hello"]}}
  ]'
>

使用模式 <SolutionLink text="((\w+) \2)" />，其中 `\2` 表示从左到右第二个括号 `(\w+)` 捕获到的单词。

</Exercise>