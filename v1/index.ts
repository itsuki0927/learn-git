// 获取Promise的类型
type PromiseType<T> = T extends Promise<infer P> ? P : never

type StringPromise = PromiseType<Promise<string>>
