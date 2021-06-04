# 课程 5：字符范围

我们刚刚学习了如何创建一个匹配或排除特定字符的模式——但是如果我们想匹配一个连续范围内的字符呢？我们只能把它们全部列出来吗？

幸运的是，在使用方括号表示法时，有一种速记方法，可以通过使用**破折号**来表示字符范围，从而匹配到**连续范围**内的字符。例如，模式 **`[0-6]`** 将只匹配从 0 到 6 的任意单个数字字符。同样的，**`[^n-p]`** 将只匹配字母 n 到 p **以外**的任何单个字符。

同一组方括号中还可以使用多个字符范围，以及单个字符。例如字母数字 (alphanumeric) 元字符 `\w`，它相当于字符范围 **`[A-Za-z0-9_]`**，通常用于匹配英文文本中的字符。

在下面的练习中，请注意所有匹配行和跳过行共有的模式，并使用方括号表示法来匹配或跳过每行中的每个字符。请注意，模式是**区分大小写**的，并且 **`a-z`** 与 **`A-Z`** 在匹配的字符方面是**不同**的（小写 vs 大写）。

<Exercise
  title="练习 5：匹配字符范围"
  :data='[{type: "match", text: "Ana"}, {type: "match", text: "Bob"}, {type: "match", text: "Cpc"}, {type: "skip", text: "aax"}, {type: "skip", text: "bby"}, {type: "skip", text: "ccz"}]'
>从上到下，每个位置的字符都是连续的，因此可以使用 <SolutionLink text="[A-C][n-p][a-c]" /> 中的不同范围来只匹配前三行。</Exercise>