// api 폴더내에 모든 graphql을 검색하여 app.ts에 전달하는 역할

import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes: GraphQLSchema[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql") // 현재 폴더내 api 폴더 아래에 **(모든 폴더)아래에 qraphql 확장자 파일을 조인
  );
  
  const allResolvers: any = fileLoader(
    path.join(__dirname, "./api/**/*.resolvers.*")
  );
  
  const mergedTypes = mergeTypes(allTypes);
  const mergedResolvers: any = mergeResolvers(allResolvers);
  
  const schema = makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
  });
  
  export default schema;