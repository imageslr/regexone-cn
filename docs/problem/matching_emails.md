# 问题 3：匹配邮箱

正则表达式在验证 HTML 表单的输入时通常很有用。由于[规范](http://tools.ietf.org/html/rfc2822#section-3.4.1)的复杂性，电子邮件很难正确匹配，因此我建议使用内置语言或框架函数，而不是自己处理。但是，您依然可以使用我们迄今所学的知识，非常轻松地创建一个相当健壮的正则表达式，它能够匹配大量常见的电子邮件。

需要注意的一点是，许多人使用一次性的 [加号地址](https://zh.wikipedia.org/wiki/%E9%9B%BB%E5%AD%90%E9%83%B5%E4%BB%B6%E5%9C%B0%E5%9D%80#%E5%AD%90%E5%9C%B0%E5%9D%80)(plus-addressing)，例如 "name+filter@gmail.com"，邮件还是会发送到 "name@gmail.com"，但是可以作一些过滤操作。此外，有些域名有不止一个部分，例如，您可以在 "hellokitty.hk.com" 注册域名，并使用一个形如 "ilove@hellokitty.hk.com" 的邮箱，因此在匹配电子邮件的域名部分时必须小心。

下面是一些常见的电子邮箱，请尝试捕获电子邮件的名称，不包括筛选器 (+ 字符和之后) 和域 (@ 字符和之后) 部分。

<Exercise
  title="练习 3：匹配邮箱"
  :data='[
    {type: "capture", text: "tom@hogwarts.com", captureData: {results: ["tom"]}},
    {type: "capture", text: "tom.riddle@hogwarts.com", captureData: {results: ["tom.riddle"]}},
    {type: "capture", text: "tom.riddle+regexone@hogwarts.com", captureData: {results: ["tom.riddle"]}},
    {type: "capture", text: "tom@hogwarts.eu.com", captureData: {results: ["tom"]}},
    {type: "capture", text: "potter@hogwarts.com", captureData: {results: ["potter"]}},
    {type: "capture", text: "harry@hogwarts.com", captureData: {results: ["harry"]}},
    {type: "capture", text: "hermione+regexone@hogwarts.com", captureData: {results: ["hermione"]}},
  ]'
>
要提取每封电子邮件的开头，我们可以使用一个简单的表达式 <SolutionLink text="^([\w\.]*)" />，它将匹配以字母数字字符 (包括句点) 开头的电子邮件，直到遇到 "@" 或 "+"。

再次强调，您应该使用一个框架来匹配电子邮件！

</Exercise>