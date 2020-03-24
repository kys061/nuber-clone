import { SayHelloResponse, SayHelloQueryArgs } from "../../../types/graph";

const resolvers = {
    Query: {
      sayHello: (_: any, args: SayHelloQueryArgs): SayHelloResponse => {
        return {
          error: false,
          text: `Hello, ${args.name}`
        }
      }
    }
  };
  
  export default resolvers;