# 问题 8：从 URL 中解析和提取数据

在网络上处理文件和资源时，我们经常会遇到可以直接解析和使用的 URIs 和 URLs。大多数标准库都提供了用来解析和构造这类标识符的类，但是如果您需要在日志文件或更大的文本语料库中匹配它们，那么使用正则表达式可以很容易地从它们的结构化形式中提取信息。

URIs (统一资源标识符，Uniform Resource Identifiers)，是资源的一种表示方法，通常包括 <span style="color: #45aa2a;">scheme</span> ([方案名](https://zh.wikipedia.org/wiki/%E7%B5%B1%E4%B8%80%E8%B3%87%E6%BA%90%E6%A8%99%E8%AA%8C%E7%AC%A6%E6%96%B9%E6%A1%88))，<span style="color: #0073e6;">host</span> (主机名)，<span style="color: #bf00ff;">port</span> (端口，可选的) 和 <span style="color: #ff5000;">resource path</span> (资源路径)，如下所示：

<span style="color: #45aa2a;">http</span>://<span style="color: #0073e6;">regexone.com</span><span style="color: #bf00ff;">:80</span>/<span style="color: #ff5000;">page</span>

Scheme 描述了用于通信的协议 (protocol)，host 和 port 描述了资源的来源，path 描述了资源所在的位置。

在下面的练习中，尝试提取出的所有资源的协议、主机和端口。

<Exercise
  title="练习 8：从 URL 中提取数据"
  :data='[
    {type: "capture", text: "ftp://file_server.com:21/top_secret/life_changing_plans.pdf", captureData: {results: ["ftp", "file_server.com", "21"]}},
    {type: "capture", text: "https://regexone.com/lesson/introduction#section", captureData: {results: ["https", "regexone.com"]}},
    {type: "capture", text: "file://localhost:4040/zip_file", captureData: {results: ["file", "localhost", "4040"]}},
    {type: "capture", text: "https://s3cur3-server.com:9999/", captureData: {results: ["https", "s3cur3-server.com", "9999"]}},
    {type: "capture", text: "market://search/angry%20birds", captureData: {results: ["market", "search"]}},
  ]'
>

我们必须分别匹配这三个部分：

* 列表中的协议都是字母组成的，所以可以使用 <SolutionLink text="(\w+)://" /> 匹配
* 主机名可以包含非字母数字字符，如破折号或句点，因此可以使用 <SolutionLink text="://([\w\-\.]+)" /> 匹配；也可以使用 <SolutionLink text="://([^/:]+)" /> 匹配 
* 端口是 URI 的可选部分，前面有冒号，可以使用 <SolutionLink text="(:(\d+))" /> 匹配

最终的完整表达式为：<SolutionLink text="(\w+)://([\w\-\.]+)(:(\d+))?" />，或者 <SolutionLink text="(\w+)://([^/:]+)(:(\d+))?" />。

</Exercise>