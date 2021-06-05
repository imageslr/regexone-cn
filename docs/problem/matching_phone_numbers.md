# 问题 2：匹配电话号码

验证电话号码是另一项棘手的任务。有的电话号码需要**区号**，有的国际号码还需要**前缀**，这都增加了正则表达式的复杂性。此外，人们输入电话号码时的偏好也不同 (例如，有些人会输入**破折号**或**空格**，而有些人不输入)。

下面是一些真实场景下可能遇到的电话号码，请编写一个与号码匹配的正则表达式，并捕获正确的区号。

<Exercise
  title="练习 2：匹配电话号码"
  :data='[{
    type: "capture", text: "415-555-1234", captureData: {results: ["415"]}},{
    type: "capture", text: "650-555-2345", captureData: {results: ["650"]}},{
    type: "capture", text: "(416)555-3456", captureData: {results: ["416"]}},{
    type: "capture", text: "202 555 4567", captureData: {results: ["202"]}},{
    type: "capture", text: "4035555678", captureData: {results: ["403"]}},{
    type: "capture", text: "1 416 555 9292", captureData: {results: ["416"]}
  }]'
>

观察可以发现，电话号码由 3、3、4 位数字组成，每部分之间可以用空格或破折号连接，前三位数字是区号。因此，为了获取电话号码的区号，最简单的方法是使用表达式 <SolutionLink text="(\d{3})" /> 捕获前三位数字。

为了同时匹配到整个电话号码，我们可以使用表达式 <SolutionLink text="1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}" />。解释如下：
1. 匹配可能存在的国家号：<SolutionLink text="1?[\s-]?" />
2. 匹配可能被括号包住的区号：<SolutionLink text="\(?(\d{3})\)?" />，注意这里外层的括号是转义后的字符，内层的括号表示捕获组
3. 匹配后续的 3 位、4 位号码：<SolutionLink text="[\s-]?\d{3}[\s-]?\d{4}" />
4. <SolutionLink text="[\s-]?" /> 表示可能通过破折号或空格连接，也可能没有连接符

</Exercise>