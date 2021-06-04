# 课程 11：捕获组

正则表达式不仅允许我们匹配文本，还允许我们提取信息以便进一步处理。这是通过定义**字符组 (groups of characters)** 并使用特殊的圆括号 **(** 和 **)** 元字符捕获它们来实现的。一对括号内的任何子模式 (subpattern) 都将被**捕获** (capture) 为一个组 (group)。实际上，它可以用来从各种数据中提取诸如电话号码或电子邮件之类的信息。

例如，假设您有一个命令行工具来列出云中的所有图像文件，您可以使用 **`^(IMG\d+\.png)$`** 等模式来捕获和提取完整的文件名。但如果只想捕获不带扩展名的文件名，您可以使用模式 **`^(IMG\d+)\.png$`**，该模式只捕获句点之前的部分。

尝试使用圆括号来编写一个正则表达式，匹配下面 PDF 文件的文件名 (不包括扩展名)。

<Exercise
  title="练习 11：捕获组"
  :data='[
    {type: "capture", text: "file_record_transcript.pdf", captureData: {results: ["file_record_transcript"]}}, 
    {type: "capture", text: "file_07241999.pdf", captureData: {results: ["file_07241999"]}}, 
    {type: "skip", text: "testfile_fake.pdf.tmp"}]'
>我们只想捕获以 "file" 开始并具有文件扩展名 ".pdf" 的行，因此我们可以编写一个简单的模式来捕获从开头的 "file" 到扩展名之间的所有内容，比如 <SolutionLink text="^(file.+)\.pdf$" />。</Exercise>