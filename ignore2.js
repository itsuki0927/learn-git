// 我是被忽略的?

const get = key => target => target[key]

const get2 = (key, target) => target[key]

const get3 = target => key => target[key]
