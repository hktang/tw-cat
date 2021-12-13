---
sidebar_position: 5
sidebar_label: '7.5 Markdown 简介'
---

# 7.5 Markdown 简介

Markdown[[1]][1] 是一种轻量级标记语言，在互联网行业尤为流行。Markdown的设计理念使得
纯文本的源文件在未经转换前也易于阅读。其简洁的语法，让作者可以重新将重点放在写作，
而非技术之上。

## Markdown 基本语法

```md
# 一级标题

## 二级标题

### 三级标题

段落之间需有空行。*倾斜*，**加粗** 可以分别用单个和两个星号 (*) 或下划线 (_) 包围。
两行文字如之间如无空行，则视为同一段。

> 引用文字首行以右尖括号开始。

- 无序列表项目1。[链接文字1](https://www.example.com)
- 无序列表项目2。[链接文字2][1]

1. 有序列表项目1
2. 有序列表项目2

    代码段落（code block）每行开头需空四格。
    def my_function(parameter1, parameter 2):
        return

<!-- 可以加入任意HTML元素 -->

[1]: https://www.example2.com

```

关于完整的 Markdown 语法，可查询
[daringfireball.net](https://daringfireball.net/projects/markdown/)。
可以利用 [commonmark.org](https://commonmark.org/help/tutorial/) 提供的互动教程
进行学习。

## 参考资料

1. Gruber, J. (2004). *Markdown*.
   Retrieved from: [daringfireball.net][1]

[1]: https://daringfireball.net/projects/markdown/
