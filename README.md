## 轻松学习js
--
之所以会有这个课程，主要是想把以前所学的做一个回顾，也加深下印象。首先讲js的基本知识，6大基本数据类型及常用操作；再js的运行机制，单线程，事件轮询，最后讲es6的新增操作。  
#### 一、基本数据类型
- 简单数据类型  number，boolean，string，undefined，null,关于简单数据类型的运算，会在例子里详细讲解。这里只说下基本的逻辑运算。简单数据类型是可以用==和===来比较的。
```
    // 数值和字符串
    onst numbA = 10
        , strA = '10'
        , empty = ''
        , zero = 0
    numbA == strA  // true
    numbA === stringA // false 值相等类型也要相等
    empty == zero // true 两者都可转化为false

    // 空和未定义
    var undefA
        , undefB
        , nilA = null;
    undefA === undefB //true = undefined
    undefA == nilA // true 都是空，undefined 派生之null
    undefA === nilA // false 类型不一致

    // 字符串，数值和布尔
    const numbA = 0
        , numbB = 1
        , strA = ''
        , strB = '1'
        , boolA = false
        , boolB = true;

    numbA == boolA //true  0可转化为false
    strA == boolA // true 空串也可转化为false
    numbB == boolB // true 非0数可转化为true
    strB == boolB // true 非空串也可转化为true

```
- 复杂数据类型 object