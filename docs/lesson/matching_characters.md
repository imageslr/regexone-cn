# 课程 3：匹配特定字符

上节课的点元字符非常强大，但有时**太**强大了。比如我们匹配电话号码时，并不希望将字母"(abc) def-ghij"视作一个有效的号码。

有一种方法可以在正则表达式中**匹配特定字符**，方法是在**方括号 (square brackets)** 中定义它们。比如，模式 **`[abc]`** 将只匹配**单个**字母 a、b 或者 c，其他什么也不匹配。

下面几行字符串中，我们只想匹配前三个而不匹配后三个。请注意，如果使用点元字符，我们就无法避免匹配后三个字符串。必须使用上面的方法来明确声明要匹配的字母。

<Exercise 
  title="练习 3：匹配特定字符"
  :data='[{type: "match", text: "can"}, {type: "match", text: "man"}, {type: "match", text: "fan"}, {type: "skip", text: "dan"}, {type: "skip", text: "ran"}, {type: "skip", text: "pan"}]'
>您可以使用表达式 <SolutionLink text="[cmf]an" /> 来只匹配 'can'、'man' 和 'fan'，而不匹配任何其他行。正如您将在下一课中看到的，您也可以使用逆表达式 (inverse expression) <SolutionLink text="[^drp]an" /> 来匹配任何以 'an' 结尾、但不以 'd'、'r' 或 'p' 开头的三个字母的单词。
</Exercise>