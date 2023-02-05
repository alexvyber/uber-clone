// import { DirectiveLocation, GraphQLDirective } from "graphql"
// import { YogaServer, PubSub } from "graphql-yoga"
// import logger from "morgan"
// import cors from "cors"
// import helmet from "helmet"
// import { upperDirectiveTransformer } from "@/common/directives/upper-case.directive"
// import { PrismaModule } from "./prisma/prisma.module"
import { YogaDriver, YogaDriverConfig } from "@graphql-yoga/nestjs"
import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { RecipesModule } from "@/recipes/recipes.module"
import { PrismaService } from "@/prisma/prisma.service"
import { PostService } from "./api/post/post.service"
// import { PostModule } from "./api/post/post.module"
import { UserModule } from "./api/user/user.module"
import { UserService } from "./api/user/user.service"
import { UsersResolver } from "./api/user/user.resolver"
import { PostsResolver } from "./api/post/post.resolver"
import { PostModule } from "./api/post/post.module"

@Module({
  imports: [
    // PostModule,
    // UserModule,
    RecipesModule,

    // PrismaModule,
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      autoSchemaFile: "schema.gql",
      installSubscriptionHandlers: true,
      // transformSchema: schema => upperDirectiveTransformer(schema, "upper"),
      // buildSchemaOptions: {
      //   directives: [
      //     new GraphQLDirective({
      //       name: "upper",
      //       locations: [DirectiveLocation.FIELD_DEFINITION],
      //     }),
      //   ],
      // },
    }),
  ],
  providers: [
    PrismaService,
    PostsResolver,
    UsersResolver,
    PostService,
    // UserService,
  ],
})
export class AppModule {
  // public app: YogaServer
  // public pubSub: PubSub
  // private middlewares = (): void => {
  //   this.app.express.use(cors())
  //   this.app.express.use(logger("dev"))
  //   this.app.express.use(helmet())
  //   // this.app.express.use(this.jwt)
  // }
}
