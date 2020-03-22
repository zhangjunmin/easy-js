'use strict';

// 简单类型比较 相等
function eql(arg1, arg2) {
    return arg1 == arg2;
}

// 简单类型比较 全等
function ceql(arg1, arg2) {
    return arg1 === arg2;
}

var should = chai.should();
var expect = chai.expect;

describe('数值和字符串比较', () => {
    const numbA = 10
        , strA = '10'
        , empty = ''
        , zero = 0
    it('\'10\'和10相等', () => {
        const res = eql(numbA, strA);
        expect(res).to.eql(true)
    });

    it('\'10\'和10不全等,全等意味着类型也要相同', () => {
        const res = ceql(numbA, strA);
        expect(res).to.eql(false)
    })

    it('数字0和空串相等', () => {
        const res = eql(empty, zero);
        expect(res).to.eql(true)
    })
})

describe('空和未定义比较', () => {
    var undefA
        , undefB
        , nilA = null;
    it('未定义A和未定义B全等', () => {
        const res = ceql(undefA, undefB);
        expect(res).to.eql(true)
    });
    it('未定义A和空A相等', () => {
        const res = eql(undefA, nilA);
        expect(res).to.eql(true)
    });

    it('未定义A和空A不全等', () => {
        const res = ceql(undefA, nilA);
        expect(res).to.eql(false)
    });

})

describe('字符串，数值和布尔值比较', () => {
    const numbA = 0
        , numbB = 1
        , strA = ''
        , strB = '1'
        , boolA = false
        , boolB = true;

    it('数值0和 false', () => {
        const res = eql(numbA, boolA);
        expect(res).to.eql(true)
    });

    it('数值1和 true', () => {
        const res = eql(numbB, boolB);
        expect(res).to.eql(true)
    });

    it('空串和false相等', () => {
        const res = eql(strA, boolA);
        expect(res).to.eql(true)
    });
    it('非空串和true相等', () => {
        const res = eql(strB, boolB);
        expect(res).to.eql(true)
    });
})

