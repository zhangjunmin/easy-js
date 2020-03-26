// /'use strict';

var should = chai.should();
var expect = chai.expect;

// 进制转化并比较
function parseAndCompare(num, radix) {
    const res = parseInt(num.toString(radix), radix);
    expect(num).to.eql(res)
}

describe('数值类型间运算', () => {
    const d1 = 0b10 // 二进制
    const d2 = 010 //八进制 // 严格模式下八进制是不可被定义的
    const d3 = 0x10 // 十六进制
    const d4 = 10 //十进制
    it('二进制和字符串间的转化', () => {
        parseAndCompare(d1, 2)
    })
    it('八进制和字符串间的转化', () => {
        parseAndCompare(d2, 8)
    })
    it('二进制和字符串间的转化', () => {
        parseAndCompare(d3, 16)
    })
    it('二进制和字符串间的转化', () => {
        parseAndCompare(d4)
    })

})

// 如果接受的是一个参数，那就直接返回，接受两个参数，就是用10，
// 2个以上，最后一个是 要转化的位数
function getSumWithFloatNumnber() {
    const args = arguments;
    let length = args.length;
    switch (length) {
        case 0:
            break;
        case 1:
            return args[0]
            break;
        default:
            let exponent = 1;
            if (length > 2) {
                exponent = args[length - 1];
                length = length - 1;
            }
            let sum = 0,
                step = Math.pow(10, exponent);
                console.log(step,args)
            for (let index = 0; index < length; index++) {
                sum += args[index] * step
            }
            console.log(sum)
            return sum / step;
            break;
    }

}

describe('浮点运算解决精度问题,转化为整数运算', () => {
    it('浮点数运算相加, 传入一个参数返回本身', ()=> {
        const d = 0.1;
        const sum = getSumWithFloatNumnber(d);
        expect(sum).to.eql(d);
    })

    it('浮点数运算相加, 传入二个参数, 使用默认指数1', ()=> {
        const sum = getSumWithFloatNumnber(0.1, 0.2);
        expect(sum).to.eql(0.3);
    })

    it('浮点数运算相加, 三个参数返回本身，最后一个为自定义指数', ()=> {
        const sum = getSumWithFloatNumnber(0.1, 0.6, 2);
        expect(sum).to.eql(0.7);
    })
})

describe("parseInt，parseFloat，Number转换中的异同", () => {
    it('parseInt 转换不是数值型字符串返回NaN', () => {
        const res = parseInt('iam');
        expect(isNaN(res)).to.eql(true);
    })

    it('parseInt 转换以数值字符开头的', () => {
        const res = parseInt('2wsw');
        expect(res).to.eql(2);
    })

    it('parseInt 转换浮点数返回其整数部分', () => {
        const f = 3.66;
        const res = parseInt(f);
        expect(res).to.eql(Math.floor(f));
    })

    it('parseInt转换八进制，必须制定radix', () => {
        const res = parseInt('010', 8);
        expect(res).to.eql(8);
    })

    it('parseFloat转换都按10进制算', () => {
        const res = parseInt('010');
        expect(res).to.eql(10);
    })

    it('parseFloat转换16进制写法返回0', () => {
        const res = parseFloat('0x10');
        expect(res).to.eql(0);
    })
    it('Number 转换空字符串返回0', () => {
        const res = Number('');
        expect(res).to.eql(0)
    })

    it('Number 转换含不是数字字符串返回NaN', () => {
        const res = Number('12www');
        expect(isNaN(res)).to.eql(true)
    })

    it('Number 转换布尔值true为1', () => {
        const res = Number(true);
        expect(res).to.eql(1)
    })

    it('Number 转换布尔值false为0', () => {
        const res = Number(false);
        expect(res).to.eql(0)
    })
})

describe('Number 的原型方法', ()=> {
    const n = 123.45678;
    it('toPrecison() 返回指定有效数字的数值 不指定有效', ()=> {
        const res = n.toPrecision();
        expect(res).to.eql(n.toString())
    })
    it('toPrecison() 返回指定有效数字的数值 指定1', ()=> {
        const res = n.toPrecision(1);
        expect(res).to.eql('1e+2')
    })

    it('toPrecison() 返回指定有效数字的数值 指定2', ()=> {
        const res = n.toPrecision(2);
        expect(res).to.eql('1.2e+2')
    })

    it('toFixed() 返回指定小数点后几位的数值 不指定返回整数部分', ()=> {
        const res = n.toFixed();
        expect(res).to.eql('123')
    })
    it('toFixed() 返回指定小数点后几位的数值 2', ()=> {
        const res = n.toFixed(2);
        expect(res).to.eql('123.46')
    })

    it('toExPonential() 以指数形式返回，参数，小数点后有效位数, 不传参全部返回', ()=> {
        const res = n.toExponential()
        expect(res).to.eql('1.2345678e+2')
    })
    it('toExPonential() 以指数形式返回，参数，小数点后有效位数, 1', ()=> {
        const res = n.toExponential(1)
        expect(res).to.eql('1.2e+2')
    })
    it('toExPonential() 以指数形式返回，参数，小数点后有效位数, 4', ()=> {
        const res = n.toExponential(4)
        expect(res).to.eql('1.2346e+2')
    })
})