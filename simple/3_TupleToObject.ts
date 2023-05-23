export {}
type TupleToObject<T extends readonly (string | symbol | number)[]> = {
    [P in T[number]]: P
  }


// test
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple>