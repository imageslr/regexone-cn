# 问题 7：从日志文件中提取信息

在本例中，我们的目标是使用目前所学的任何正则表达式技术，从 Android adb 调试会话的实际输出日志中**提取文件名、方法名、堆栈跟踪行的行号**。它们在日志中的格式为：
```
at package.class.methodname(filename:linenumber)
```

<Exercise
  title="练习 7：从日志条目中提取数据"
  :data='[
    {type: "skip", text: "W/dalvikvm( 1553): threadid=1: uncaught exception"},
    {type: "skip", text: "E/( 1553): FATAL EXCEPTION: main"},
    {type: "skip", text: "E/( 1553): java.lang.StringIndexOutOfBoundsException"},
    {type: "capture", text: "E/( 1553):   at widget.List.makeView(ListView.java:1727)", captureData: {results: ["makeView", "ListView.java", "1727"]}},
    {type: "capture", text: "E/( 1553):   at widget.List.fillDown(ListView.java:652)", captureData: {results: ["fillDown","ListView.java", "652"]}},
    {type: "capture", text: "E/( 1553):   at widget.List.fillFrom(ListView.java:709)", captureData: {results: ["fillFrom", "ListView.java", "709"]}},
  ]'
>我们只想捕获方法名、文件名和行号，这可以使用表达式 <SolutionLink text="(\w+)\(([\w\.]+):(\d+)\)" /> 来实现，其中第一个捕获组是方法名，之后是转义的括号、文件名、冒号，最后是行号。

译者注：试试 <SolutionLink text="at \w*\.\w*\.([\w\.]+)" />、<SolutionLink text="\(([\w\.]+)" />、<SolutionLink text=":(\d+)" />

</Exercise>