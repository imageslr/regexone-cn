# 问题 6：修剪掉行首和行尾的空白

有时，您会发现自己的日志文件的**空格格式错误**，导致某些行缩进太多或者不够。解决这个问题的一种方法是使用编辑器的搜索功能，通过正则表达式来提取行中不包含额外空格的内容。

我们之前已经看到了如何分别使用帽子符号 (hat) **`^`** 和美元符号 **`$`** 匹配一整行文本。当这两个符号与空格 **`\s`** 一起使用时，可以轻松跳过所有前面和后面的空格。

写一个简单的正则表达式来捕获每一行的内容，不包含额外的空格。

<Exercise
  title="练习 6：匹配行"
  :data='[
    {type: "capture", text: "			The quick brown fox...", captureData: {results: ["The quick brown fox..."]}},
    {type: "capture", text: "   jumps over the lazy dog.", captureData: {results: ["jumps over the lazy dog."]}}
  ]'
>可以使用表达式 <SolutionLink text="^\s*(.*)\s*$" /> 跳过所有开始和结束的空格，只捕获内容。</Exercise>