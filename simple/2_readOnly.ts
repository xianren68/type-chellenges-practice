export {}
// 实现Readonly
type MyReadonly<T> = {
   readonly [P in keyof T]: T[P]
}

// test
type example = {
    name:string,
    age:number
}
type test = MyReadonly<example>
const e:test = {
    name:'wang',
    age:22,
}
type test2 = Readonly<example>
const e1:test2 = e