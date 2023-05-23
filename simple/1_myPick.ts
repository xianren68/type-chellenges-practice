export {}
// 实现Pick
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}


// test
type User = {
    name: string,
    age:number,
    sex:string,
}
type t = 'name'|'age'

type a = MyPick<User, t>

const example:a = {
    name: '123',
    age:12,
}
type b = Pick<User, t>

const example2:b = example
