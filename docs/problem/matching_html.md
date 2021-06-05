# 问题 4：匹配 HTML

如果您正在寻找一种健壮的方法来解析 HTML，正则表达式通常不是好的解决方案，因为现在互联网上的 HTML 页面非常脆弱 —— 常见的错误如缺少结束标签、标签不匹配、属性引号没有关闭等，都会使一个非常好的正则表达式无法使用。相反，您可以使用像 [Beautiful Soup](http://www.crummy.com/software/BeautifulSoup/)、[html5lib](http://code.google.com/p/html5lib/) (都是 Python) 或 [phpQuery](http://code.google.com/p/phpquery/) (PHP) 这样的库，它们不仅可以解析 HTML，还可以让您快速、轻松地访问 DOM。

尽管如此，您可能经常需要在编辑器中快速匹配标签和标签的内容。如果您可以保证输入规范，正则表达式就是一个很好的工具。

继续为下面的示例编写正则表达式来捕获外层标签，请注意属性中的转义引号和嵌套的标签。

<Exercise
  title="练习 4：匹配 HTML 标签"
  :data="[
    {type: 'capture', text:'<a>This is a link</a>',captureData:{results:['a']}},{type: 'capture', text:`<a href='https://regexone.com'>Link</a>`,captureData:{results:['a']}},{type: 'capture', text:`<div class='test_style'>Test</div>`,captureData:{results:['div']}},{type: 'capture', text:`<div>Hello <span>world</span></div>`,captureData:{results:['div']}}]">

最佳做法是使用合适的库来解析 html，但如果只是查找简单地标签名，可以使用表达式 <SolutionLink text="<(\w+)" />。

还可以使用表达式 <SolutionLink text=">([\w\s]*)<" /> 捕获标签内容，甚至可以捕获属性值 <SolutionLink text="='([\w://.]*)" />。

</Exercise>