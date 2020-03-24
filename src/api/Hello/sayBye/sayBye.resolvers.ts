import { SayByeResponse, SayByeQueryArgs } from "../../../types/graph";

const resolvers = {
    Query: {
      // 모든 resolvers는 3가지 파라미터를 받게 되어있다
      // sayBye(parent, args, context)
      sayBye: (_: any, args: SayByeQueryArgs): SayByeResponse => {
        return{
          error: false,
          text: `Bye, ${args.name}`
        }
        
      }
    }
  };
  
  export default resolvers;