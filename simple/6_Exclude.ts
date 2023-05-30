export {}
type myExclude<T, U> = T extends U ? never : T

type x = Exclude<'a' | 'b' | 'c', 'a'>

// test
let b:myExclude<'a' | 'b' | 'c', 'a'>
let c:x = 'b'
b = c
