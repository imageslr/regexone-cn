# 课程 14：条件

正如我们前面提到的，更准确总是好的，这适用于编码、对话、以及正则表达式。例如，您不会写一份购物清单让别人**买更多的 .\*** (Buy more .\*)，因为您不知道您能得到什么。相反，您可以写**买更多的牛奶** (Buy more milk) 或**买更多的面包** (Buy more bread)。在正则表达式中，我们可以明确地定义这些条件 (conditionals)。

我们可以使用 **`|` (逻辑或 locigal OR，也就是管道 pipe)** 来表示**可能的不同的字符集**，尤其是在使用组的时候。在上面的示例中，我们可以编写模式 `Buy more (milk|bread|juice)` 来匹配字符串 Buy more milk、Buy more bread 或 Buy more juice。

与正常的组一样，您可以在条件 (condition) 中使用任何字符或元字符序列，例如，`([cb]ats*|[dh]ogs?)` 将要么匹配 cats 或 bats，要么匹配 dogs 或 hogs。编写具有许多条件的模式可能很难阅读，因此如果它们太复杂，您应该考虑将它们拆分为单独的模式。

继续尝试写一个条件模式 (conditional pattern)，只匹配下面包含小动物的行。

<Exercise
  title="练习 14：匹配条件文本"
  :data='[{type: "match", text: "I love cats"}, {type: "match", text: "I love dogs"}, {type: "skip", text: "I love logs"}, {type: "skip", text: "I love cogs"}]'
>通过使用逻辑或，我们可以使用表达式 <SolutionLink text="I love (cats|dogs)" /> 来匹配前两行。</Exercise>