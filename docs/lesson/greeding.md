# 课程 A4：贪婪 vs 懒惰

当正则表达式中包含 `*`、`+`、`?` 等表示重复的元字符时，默认会匹配**尽可能多**的字符，这被称为**贪婪匹配**。例如给定字符串 `abcab`，模式 `a.*b` 会匹配最长的以 `a` 开始、以 `b` 结束的字符串，也就是匹配到整个字符串而不是 `ab`。

与贪婪匹配相反的是**非贪婪匹配**，或者称为**懒惰匹配**，也就是匹配**尽可能少**的字符。语法是在上述元字符后面加上一个**问号 `?`**。在上面的例子中，模式 `a.*?b` 将匹配到 `ab`。

所有表示重复的元字符都可以转化为懒惰匹配模式：
* `*?`：重复任意次，但尽可能少重复
* `+?`：重复 1 次或更多次，但尽可能少重复
* `??`：重复 0 次或 1 次，但尽可能少重复
* `{n,m}?`：重复 n 到 m 次，但尽可能少重复
* `{n,}?`：重复 n 次或更多次，但尽可能少重复

在下面的练习中，请尝试修改模式 `(\d+)0*$`，使其捕获不包含 `0` 的数字前缀。

<Exercise
  title="练习 A4：懒惰匹配"
  :data='[
    {type: "capture", text: "123000", captureData: {results: ["123"]}},
    {type: "capture", text: "1010", captureData: {results: ["101"]}},
    {type: "capture", text: "789", captureData: {results: ["789"]}},
  ]'
>

默认情况下，正则表达式是贪婪匹配，所以 <SolutionLink text="\d+" /> 总是尽可能多地向后匹配，将后面的 `0` 也包含进来。将模式改为非贪婪匹配：<SolutionLink text="(\d+?)0*$" />，就可以让 `\d+` 尽可能少匹配，让 `0*` 尽可能多匹配。

</Exercise>