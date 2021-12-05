---
sidebar_position: 4
sidebar_label: '7.4 Markdown'
---

# 7.4 Markdown

DITA 作为技术写作的工业标准，有开源、便于版本控制、专业软件支持、便于索引等诸多优势。
但随着信息技术的发展，DITA的一些劣势也纷纷显露。[[1]][1]

- 不兼容现有Web框架和JavaScript技术
- 简化的信息类型尚存争议
- XML编写相对困难
- 不兼容非DITA内容
- 不易兼容现代搜索技术

## Markdown

Markdown[[2]][2] 是一种轻量级标记语言，在互联网行业尤为流行。Markdown的设计理念使得
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

1. Johnson, T. (2015). *Ten reasons for moving away from DITA*.
   Retrieved from: [idratherbewriting.com][1]

[1]: https://idratherbewriting.com/2015/01/28/10-reasons-for-moving-away-from-dita/
[2]: https://daringfireball.net/projects/markdown/
