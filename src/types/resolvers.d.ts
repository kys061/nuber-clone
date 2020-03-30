export type Resolver = (parent: any, args: any, context: any, info: any) => any;

export interface Resolvers { // Resolvers 인터페이스
  [key: string]: { // 해당 템플릿은 sting 타입만 가능
    [key: string]: Resolver; // 해당 템플릿은 Resolver 타입의 함수를 사용
  };
}