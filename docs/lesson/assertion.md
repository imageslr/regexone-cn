# 课程 A2：零宽断言

零宽断言用于指定要匹配的内容的**前缀或后缀应该满足的约束条件**，匹配到的内容并**不包含**这些前缀 / 后缀。“零宽”的含义是没有宽度、只匹配位置、不匹配内容；“断言”用来声明一个应该为真的事实，只有断言为真时正则表达式才会匹配。

下面是正则表达式中的四种零宽断言：

| 语法 | 作用 | 名称 |
|-----|-----|-----|
| `(?=exp)` | 指定后缀 | 零宽度正预测先行断言 <br/> zero-width positive lookahead assertion |
| `(?<=exp)` | 指定前缀 | 零宽度正回顾后发断言<br/> zero-width positive lookbehind assertion |
| `(?!exp)` | 指定后缀*不能是* | 零宽度负预测先行断言<br/>zero-width negative lookahead assertion |
| `(?<!exp)` | 指定前缀*不能是* | 零宽度负回顾后发断言<br/>zero-width negative lookbehind assertion |

例如，模式 `\w+(?=ing)` 会匹配所有以 `ing` 结尾的单词，模式 `(?<=un)\w+` 会匹配所有以 `un` 开头的单词。注意：**断言左右两侧的括号是必须的**。

上面这四个语法可以这样理解：
* `=` 表示“是”、`!` 表示“不是”
* `<` 是一个向左的箭头，表示表达式的左面，也就是前缀

我们不需要记住每个语法的具体名称，只要知道怎么用就可以。请尝试完成下面的练习。

<Exercise
  title='练习 A2-1：匹配后缀是 "ly" 的单词'
  :data='[
    {type: "skip", text: "sad"},
    {type: "match", text: "slightly"},
    {type: "match", text: "hardly"},
    {type: "match", text: "perfectly"},
    {type: "match", text: "suddenly"}
  ]'
  :noNext="true"
>

最简单的方法是使用模式 <SolutionLink text="\w+ly" />来匹配所有以 `ly` 结尾的单词。我们也可以使用 <SolutionLink text="\w+(?=ly)" />，这个模式匹配的内容并不包含 `ly`。请注意对比这两个模式的匹配结果的区别。

</Exercise>

<Exercise
  title='练习 A2-2：匹配前缀是 "un" 的单词'
  :data='[
    {type: "skip", text: "happy"},
    {type: "match", text: "unfinished"},
    {type: "match", text: "undoubted"},
    {type: "match", text: "unused"},
    {type: "match", text: "unhappy"}
  ]'
  :noNext="true"
>

可以使用模式 <SolutionLink text="un\w+" /> 或 <SolutionLink text="(?<=un)\w+" /> 来匹配所有以 `un` 开头的单词。请注意对比这两个模式的匹配结果的区别。

</Exercise>

<Exercise
  title='练习 A2-3：只匹配前两行的 "re"'
  :data='[
    {type: "match", text: "represents"},
    {type: "match", text: "reclaim"},
    {type: "skip", text: "regex"},
    {type: "skip", text: "regular"},
  ]'
  :noNext="true"
>

可以使用模式 <SolutionLink text="re(?!g)" />，该模式限定了 `re` 右边不能是字符 `g`。

</Exercise>

<Exercise
  title='练习 A2-4：只匹配第一行的 "happy"'
  :data='[
    {type: "match", text: "happy"},
    {type: "skip", text: "unhappy"},
  ]'
>

可以使用模式 <SolutionLink text="(?<!un)happy" />，该模式限定了 `happy` 左边不能是前缀 `un`。

</Exercise>


