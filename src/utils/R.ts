// 统一请求返回的数据

export interface RType<T> {
  data: T,
  code: number
}
export default {
  success<T = any>(data: T, code?: number): RType<T> {
    return {
      data,
      code: code ?? 0,
    };
  },
  error<T = any>(data: T, code?: number): RType<T> {
    return {
      data,
      code: code ?? -1,
    };
  },
};
