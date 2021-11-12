// 统一请求返回的数据

import { Repository } from "typeorm";


export interface RType<T = any> {
  data: T
  code: number
}
export interface ParamsType {
  params: string;
  page?: number;
  limit?: number;
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
  async list<T = any>(repo: Repository<T>, query: ParamsType, code?: number): Promise<RType> {
    const total = await repo.createQueryBuilder().getCount();
    const { page, limit, params } = query;
    const data = await repo.createQueryBuilder().where(params).limit(limit).skip(page ?? 1 - 1).getMany()
    return {
      data: {
        data,
        total,
        page: Number(query?.page) ?? 1,
        limit: Number(query?.limit) ?? 1,
      },
      code: 0,
    }
  }
};

