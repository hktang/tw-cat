---
sidebar_position: 3
sidebar_label: '7.3 DITA'
---

# 7.3 DITA

在基于XML的技术出版领域，DITA（Darwin Information Typing Architecture）
是最常用的XML标准。DITA由IBM技术出版部开发，2004年捐赠给
结构化资讯标准促进组织 (OASIS)。[[1]][1]

## 模块化写作

DITA标准强调以“主题”为单位的模块化写作（topic-based authoring)，
不同的模块可以自由组合或复用，每个模块均独立于其他模块，提供一段完整的信息。

### 信息类型

DITA标准将主题 (topic) 分为“概念”、“任务”、“参考”三种核心类型，
此外还定义了“术语表”和“故障排查”等类型。[[2]][2]

以下是一份简单的概念型主题。

```xml
<concept id="concept">
 <title>Drum</title>

<shortdesc>
  The drum is a member of the percussion group of musical instruments.
</shortdesc>

<conbody>
  <p>
    Drums consist of at least one membrane, called a drumhead or drum skin,
    that is stretched over a shell and struck, either directly with
    the player's hands, or with a percussion mallet, to produce sound.
  </p>
  <example>
   <p>Below are examples of drums.</p>
   <ul>
     <li>Djembe</li>
     <li>Taiko</li>
   </ul>
  </example>
 </conbody>
</concept>
```

### Dita Map

通过Map文件编辑和组织Dita topic，可以根据输出文档的不同类型进行章节划分。

### 多种导出格式

开源的 DITA Open Toolkit 支持导出 PDF、XHTML、HTML Help等多种格式。

## 常用工具

- [Arbortext](https://www.ptc.com/en/products/arbortext)
- [Oxygen XML Editor](https://www.oxygenxml.com/)
- [FrameMaker](https://www.adobe.com/products/framemaker.html)

## 参考资料

1. *The history of DITA*. (n.d.). Retrieved from [www.oxygenxml.com][1].
2. OASIS Open. (2015). *Technical content: Document types*. Retrieved from
   [http://docs.oasis-open.org][2].
3. *DITA Open Toolkit*. (n.d.). Retrieved from [https://www.dita-ot.org/][3].

[1]: https://www.oxygenxml.com/dita/styleguide/webhelp-feedback/Artefact/Authoring_Concepts/c_The_History_of_DITA.html
[2]: http://docs.oasis-open.org/dita/dita/v1.3/os/part3-all-inclusive/archSpec/technicalContent/dita-technicalContent-InformationTypes.html#dita_technicalContent_InformationTypes
[3]: https://www.dita-ot.org/
