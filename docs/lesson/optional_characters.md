# 课程 8：可选字符

正如您在上一课中看到的，Kleene star 和 plus 允许我们匹配一行中的重复字符。

另一个在匹配和提取文本时非常常见的量词 (quantifier) 是 **`?`** (问号) 元字符，表示**可选性**。这个元字符允许您匹配前面的零个或一个字符或组。例如，模式 **`ab?c`** 将匹配字符串 "abc" 或 "ac"，因为 b 被认为是可选的。

与点元字符类似，问号是一个特殊字符，您必须使用斜杠 **`\?`** 匹配字符串中的普通问号字符。

在下面的字符串中，请注意找到的文件数是如何决定单词 "file" 的复数形式的。尝试编写一个模式，使用元字符 `?` 来匹配找到一个或多个文件的行。

<Exercise
  title="练习 8：匹配可选字符"
  :data='[{type: "match", text: "1 file found?"},{type: "match", text: "2 files found?"},{type: "match", text: "24 files found?"},{type: "skip", text: "No files found."},]'
>我们可以使用元字符 '\d' 来匹配文件的数量，并使用表达式 <SolutionLink text="\d+ files? found\?" /> 来匹配找到文件的所有行。<br>请注意，第一个问号用于前面的 "s" 字符 (表示复数)，最后的问号必须转义以匹配文本。</Exercise>