// import { PubSub } from "graphql-subscriptions"
// import { NotFoundException } from "@nestjs/common"
import { PrismaService } from "@/prisma/prisma.service"
import { Inject } from "@nestjs/common"
import {
  Args,
  Context,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
  //  Subscription
} from "@nestjs/graphql"
import { Post } from "../post/models/post.model"
import { User } from "./models/user.model"
// import { NewPostInput } from "./dto/new-recipe.input"
// import { PostArgs } from "./dto/recipes.args"
// import { Post } from "./models/post.model"
// import { PostService } from "./post.service"

// const pubSub = new PubSub()

@Resolver((_of: unknown) => User)
export class UsersResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @ResolveField()
  async posts(
    @Root() user: User,
    //  @Context() ctx
  ): Promise<Post[]> {
    return this.prismaService.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .posts()
  }

  @Query(_returns => User)
  async user(@Args("id") id: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    })

    return user
  }

  @Query(_returns => [User], { nullable: true })
  async allUsers(@Context() ctx) {
    return this.prismaService.user.findMany()
  }
}
