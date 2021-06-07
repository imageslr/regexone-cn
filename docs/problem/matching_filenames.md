# 问题 5：匹配特定文件名

如果您经常使用 Linux 或命令行，往往会需要处理文件列表。大多数文件都由一个文件名和一个扩展名组成，但在 Linux 中，隐藏的文件没有文件名也是很常见的。

在下面这个简单的示例中，请提取出图像文件的文件名和扩展名 （不包括当前正在编辑的图像的临时文件 `.tmp`）。图像文件定义为 **.jpg**、**.png** 和 **.gif**。

<Exercise
  title="练习 5：捕获文件名"
  :data='[
    {type: "skip", text: ".bash_profile"},
    {type: "skip", text: "workspace.doc"},
    {type: "capture", text: "img0912.jpg", captureData: {results: ["img0912", "jpg"]}},
    {type: "capture", text: "updated_img0912.png", captureData: {results: ["updated_img0912", "png"]}},
    {type: "skip", text: "documentation.html"},
    {type: "capture", text: "favicon.gif", captureData: {results: ["favicon", "gif"]}},
    {type: "skip", text: "img0912.jpg.tmp"},
    {type: "skip", text: "access.lock"},
  ]'
>我们只查找以 "jpg"、"png" 和 "gif" 扩展名结尾的图像文件，因此可以使用表达式 <SolutionLink text="(\w+)\.(jpg|png|gif)$" /> 捕获所有此类文件名。</Exercise>