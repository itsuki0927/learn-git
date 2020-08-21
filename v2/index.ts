// 获取函数返回值类型
type TReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type ReturnString = TReturnType<() => string>
