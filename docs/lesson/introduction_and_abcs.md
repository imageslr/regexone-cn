# 课程 1：简介和字母 ABCs

**正则表达式 (regular expressions)** 是一个非常有用的工具，可以从诸如代码、日志文件、电子表格或文档等文本中提取信息。虽然规范的语言背后有许多理论，但后续的课程和例子将探索正则表达式的更实际的用法，以便您能够尽快使用这个工具。

在使用正则表达式时要认识到的第一件事是：**所有东西本质上都是字符**，我们正在编写模式 (pattern) 来匹配特定的字符序列(也称为字符串)。大多数模式使用普通的 ASCII 字符，包括字母、数字、标点符号和键盘上的其他符号，如 %#$@!，但是也可以使用 unicode 字符来匹配任何类型的国际文本。

下面是几行文本，当您在输入框中输入模式时，请注意每行的匹配字符是如何变化的。要继续下一课，您需要使用每个课程中介绍的新的语法 (syntax) 和概念，写出能够匹配给定的每行文本的模式。

请尝试写一个能够匹配下面三行的模式，**它可能就像每行上的常见字母一样简单。**

<Exercise 
  title="练习 1：匹配 字母"
  :data='[{type: "match", text: "abcdefg"}, {type: "match", text: "abcde"}, {type: "match", text: "abc"}]'
  solution="输入前三个字符 {abc}。"
  nextUrl="/lesson/letters_and_digits.html"
/>