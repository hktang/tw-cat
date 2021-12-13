---
sidebar_position: 2
sidebar_label: '7.2 关于XML'
---

# 7.2 关于XML

XML[[1]][1]的全称是 eXtensible Markup Language（可扩展标记语言），是用于保存结构化数据的
一种成熟的标记语言。

考虑以下一份菜单：

> **Belgian Waffles** - _$5.95_  
> Two of our famous Belgian Waffles with plenty of real maple syrup  
> (650 calories per serving)
> 
> **Strawberry Belgian Waffles** - _$7.95_  
> Light Belgian waffles covered with strawberries and whipped cream  
> (900 calories per serving)

虽然一些文本格式上的加粗和倾斜处理可以让读者快速定位品名和价格，但对计算机而言，
格式并没有任何语义层面的信息。XML则可以通过标记的形式提供带有语义标注的内容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>

    <food>
        <name>Belgian Waffles</name>
        <price>$5.95</price>
        <description>
            Two of our famous Belgian Waffles with plenty
            of real maple syrup
        </description>
        <calories>650</calories>
    </food>

    <food>
        <name>Strawberry Belgian Waffles</name>
        <price>$7.95</price>
        <description>
            Light Belgian waffles covered with strawberries
            and whipped cream
        </description>
        <calories>900</calories>
    </food>

</breakfast_menu>
```

## XML的优点

XML使得菜单信息拥有明确的、可验证的数据结构，通过关联样式表，可以做到内容与格式分离。

### 可扩展

上述例子体现了XML的可扩展性，即可以自由定义数据结构。除了第一行的文件格式声明
`<?xml version="1.0" encoding="UTF-8"?>`外，从根元素`breakfast_menu`
到其他各级元素都是可以根据数据格式需求自定义的。

比如，学术界的JATS[[2]][2] (Journal Article Tag Suite) 描述了一般学术论文的
结构，从标题、摘要、关键词，到内容、引用、公式等，都规定了相应的标记，已成为学术出版的
标准。

### 可验证

通过单独的DTD或XML Schema，可以准确定义XML的结构，可验证XML文件是否符合定义。

### 内容与格式分离

通过单独的XSL文件进行格式定义，可以输出任意样式。

## 参考资料

1. W3 Schools, T. (2021). *XML tutorial*.
   Retrieved from [www.w3schools.com][1]
2. *Journal Article Tag Suite*. (n.d.). Retrieved from
   [jats.nlm.nih.gov][2]

[1]: https://www.w3schools.com/xml/default.asp
[2]: https://jats.nlm.nih.gov/