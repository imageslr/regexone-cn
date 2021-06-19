# 课程 A3：非捕获组

在[课程 11：捕获组](capturing_groups.html)与[课程 A1：反向引用](back_referencing.html)中，我们已经学习到：一对括号内的任何子模式都将被捕获为一个组，每个组按照从左到右的左括号出现的顺序，编号从 `1` 开始递增。

但是某些情况下，我们并不需要使用捕获组的内容，这个时候可以使用**非捕获组** (non-capturing groups)。非捕获组的语法是在捕获组的基础上，在左括号的右侧加上 `?:`，即 `(?:exp)`。使用非捕获组可以节省内存、提升效率。

在下面这段 JavaScript 代码中，我们使用了非捕获组，反向引用 `$1` / `$2` 并没有与之对应的捕获组，在这里相当于**纯字符串**。

```js
"123-456".replace(
  /(?:\d+)-(?:\d+)/, // searchValue
  "$2-$1" // replaceValue, $1、$2 等价于反向引用 \1、\2
) 
// Output => "$2-$1"
```

请完成下面的练习，要求使用[条件语法](conditionals.html)匹配前两行的动物，但不能生成捕获组。

<Exercise
  title="练习 A3：非捕获组"
  :data='[
    {type: "match", text: "I love cats", captureData: {results: ["cats"], nonCapture: true}}, 
    {type: "match", text: "I love dogs", captureData: {results: ["dogs"], nonCapture: true}}, 
    {type: "skip", text: "I love logs"}, 
    {type: "skip", text: "I love cogs"}
  ]'
>

如果使用模式 <SolutionLink text="I love (cats|dogs)" />，会同时捕获到 "cats"、"dogs"。改为 <SolutionLink text="I love (?:cats|dogs)" /> 就可以避免生成捕获组。

</Exercise>