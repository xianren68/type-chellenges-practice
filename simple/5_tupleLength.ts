export {}
type Length<T extends readonly any[]> = T['length']

//test 
type l = Length<[1,2,3]> // 3