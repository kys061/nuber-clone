export const typeDefs = ["type SayByeResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayBye(name: String!): SayByeResponse!\n  sayHello(name: String!): SayHelloResponse!\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: SayByeResponse;
  sayHello: SayHelloResponse;
}

export interface SayByeQueryArgs {
  name: string;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayByeResponse {
  text: string;
  error: boolean;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}
