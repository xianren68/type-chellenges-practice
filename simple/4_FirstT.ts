export {}
type First<T extends Array<any>> = T extends [] ? never : T[0]

// 对上面代码的测试用例

const t1 = ['a','b','c']
type e = First<typeof t1> // expected to be 'a'
