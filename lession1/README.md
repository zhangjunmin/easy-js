- 数值类型，数值类型是我们运用最广的类型之一。常用主要包括整数、浮点数、NaN也是数值型、 类型间转化，字符串和数值类型转化 
  - 整型，包括十进制，二进制，八进制，16进制  
    - 十进制 如果不是以0开头的，就默认为十进制 如：10 
    - 二进制 以0b开头  如：0b10  
    - 八进制 以0开头   如：077 或者0O77 
    - 十六进制 以0x开头 如：0xea  
    进制之间的转化其实是数值型和字符串之间的转化, parseInt(num, radix),toString(radix)
  -  浮点型，也就是小数，如3.13,对于小数后比较长的通常用科学计数法。如0.000000034就可表示为3.4e-8,这种也适合整数比较大的时候。
    浮点运算，这个大概是让很多人头疼的一件事，也是很多人想不到出bug的问题。如0.1+0.2 居然不等0.3，这是因为js中，数字会被转化为二进制数在内存中存储，而0.1在转化过程中，是无法算尽的，只能取个近似值，这样就导致了以上的问题，采取的策略就是把小数化为整数进行运算。
  - 特殊数值：NaN(不是一个数值)，Infinity（无穷大），-Infinity（无穷小），NaN很特殊，类型是number，且NaN != NaN,判断其用isNaN()
  - 常用函数：  
  parseInt(string, radix) 通常把字符串（也可以是数值）转换为整数，如果第一个不是数值，则返回NaN，如果是，就返回，直到遇到不为数字型字符的或者是.。
  ```
    parseInt('ww') // 输出NaN
    parseInt('322ww') //输出322
    parseInt('3.22ww') //输出3
    parseInt('0x10') //输出16
  ```  
    parseFloat(string) 把字符串转换为浮点数 过程和上面相似，但只解析十进制数'0x10'，会被解析为0  
  ` parseFloat(string) // 输出0 `  
  Number(string) 和parseFloat很像，但会转换其他进制，另外字符串中不允许出现非数字字符，出现就返回NaN，还有其特殊的地方，true会返回1，false会返回0
  ```
   Number('123w') // NaN
   Number('12.3') // 12.3
   Number('0b11')  // 3 二进制
   Number('010')  // 10 //按10进制算
   Number('0O10')  // 8 //按8进制算
   Number('0x10')  // 16 //按16进制算
  ```
  - number.prototype 原型方法 返回值皆为字符串
    toPrecision(c) // 返回有效整数的精度的数值
    toFiexed(c) // 返回小数点后几位 不指定返回整数部分，会进行四舍五入运算
    toExponential(d) // 以指数形式返回
    valueOf()  表示Number对象的原始值的数字，主要用于new 出来的对象
    ```
    const n = 123.45678;
    n.toPrecision() // 返回本身
    n.toPrecision(2) // 1.2e+2
    n.toPrecision(5) // 123.46

    n.toFiexed() // 123
    n.toFiexed(2) //123.46

    n.toExponential() // 1.2345678e+2
    n.toExponential(2) // 1.23e+2
    n.toExponential(4) // 1.2346e+2

    const d1 = new Number(10);
    d1.valueOf() // 10
    ```
  - Math内置方法  
  Math.random() 获取0-1之间的一个随机数，包括0，不包含1  
  Math.ceil(f)  向上取整 可用于分页 //天花板  
  Math.floor(f) 获取整数部分      // 地板 可用于记忆  
  Math.round()  获取四舍五入的整数  
  Math.max(n1,n2) // 获取 之中最大的  
  Math.min(n1,n2) // 获取之中的最小的。  
  Math.pow(base, exponent) // 函数返回基数（base）的指数（exponent）次幂
  备注：上面是最常用的一些运算，其实还有其他一些三角函数和其他科学运算，但在程序中不太常用



