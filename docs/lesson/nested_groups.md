# 课程 12：嵌套组

在处理复杂数据时，您经常会发现自己必须提取多层次的信息，这时就需要使用嵌套组 (nested groups)。通常，结果中的捕获组是按照它们被定义的顺序 (按开括号的顺序) 排列的。

以上一课中 "捕获所有图像文件的文件名" 为例。如果每个图像文件的文件名中都有一个连续的图片编号，我们可以通过编写 **`^(IMG(\d+))\.png$`** 之类的表达式 (使用嵌套的括号来捕获数字)，使用同一个模式同时提取文件名和图片编号。

在模式中，嵌套组按照从左到右的*左括号*出现的顺序定义，第一个捕获组是第一个括号里的内容，以此类推。捕获的结果也按照这个顺序排列。

对于以下字符串，编写一个表达式，该表达式匹配**并捕获**完整日期和日期年份。

<Exercise
  title="练习 12：匹配嵌套组"
  :data='[{type: "capture", text: "Jan 1987", captureData: {results: ["Jan 1987", "1987"]}}, {type: "capture", text: "May 1969", captureData: {results: ["May 1969", "1969"]}}, {type: "capture", text: "Aug 2011", captureData: {results: ["Aug 2011", "2011"]}}]'
>
这个表达式需要捕获两部分数据，即年份和整个日期。这需要使用嵌套的捕获组，如表达式 <SolutionLink text="(\w+ (\d+))" /> 所示。

我们也可以使用 \s+ 来代替空格，以捕获月份和年份之间任意数量的空格。

</Exercise>