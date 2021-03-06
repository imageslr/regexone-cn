# 课程 10：开始与结束

到目前为止，我们编写的正则表达式会在所有文本中匹配部分片段。有时这是不符合预期的，例如，我们想要在日志文件中匹配单词 "success"。我们当然不希望该模式与 "Error: unsuccessful operation!" 匹配。这就是为什么**最好的做法是编写尽可能特定的正则表达式**，以确保在与真实文本匹配时不会出现误报。

使模式更严格的一种方法是使用特殊的元字符 **`^` (hat)** 和 **`$` (美元符号)** 来描述一行的开始和结束。在上面的例子中，我们可以使用模式 **`^success`** 来**只**匹配以单词 "success" 开头的行，而不匹配 "Error: unsuccessful operation"。如果我们把 `^` 和 `$` 结合起来，就能实现一个匹配从开头到结尾一整行的模式。

请注意，**`^`** 和方括号 **`[^...]`** 中用于排除字符的 hat 不同，这在读取正则表达式时容易混淆。

尝试使用这些新的特殊字符来匹配下面的第一个字符串。

<Exercise
  title="练习 10：匹配行"
  :data='[{type: "match", text: "Mission: successful"}, {type: "skip", text: "Last Mission: unsuccessful"}, {type: "skip", text: "Next Mission: successful upon capture of target"}]'
>表达式 "Mission:successful" 会匹配文本中的任何位置，因此我们需要在表达式 <SolutionLink text="^Mission: successful$" /> 中使用开始和结束锚点，以便只匹配以 "Mission" 开头并以 "successful" 结尾的完整字符串。</Exercise>