# 课程 1½：数字 123s

字符包括普通的字母，也包括数字。事实上，数字 0-9 也是字符，如果您查看 [ASCII表](https://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters)，会发现它们是按顺序列出的。

在整个课程中，我们将会学习正则表达式中的一系列特殊元字符 (metacharacter)，这些元字符可用于匹配特定类型的字符。比如，字符 `\d` 可以用来代替**从 0 到 9 的任意数字**。前面的斜杠与简单的 `d` 区分，表示它是元字符。

下面是另外几行包含数字的文本。尝试编写模式来匹配下面字符串中的所有数字，并注意您的模式是如何匹配**字符串中的任意位置**的，而不仅仅是从第一个字符开始。我们将在后续的课程中学习如何控制它。

<Exercise 
  title="练习 1½：匹配数字"
  :data='[{type: "match", text: "abc123xyz"}, {type: "match", text: "define \"123\""}, {type: "match", text: "var g = 123;"}]'
>输入所有行共有的数字 <SolutionLink text="123" />。</Exercise>