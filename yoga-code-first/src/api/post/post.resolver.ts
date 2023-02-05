// import { PubSub } from "graphql-subscriptions"
// import { NotFoundException } from "@nestjs/common"
import { PrismaService } from "@/prisma/prisma.service"
import { Inject } from "@nestjs/common"
import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
  //  Subscription
} from "@nestjs/graphql"
import { User } from "../user/models/user.model"
// import { NewPostInput } from "./dto/new-recipe.input"
import { PostArgs } from "./dto/recipes.args"
import { Post } from "./models/post.model"
import { PostService } from "./post.service"

// const pubSub = new PubSub()

@Resolver((_of: unknown) => Post)
export class PostsResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @ResolveField()
  author(@Root() post: Post): Promise<User | null> {
    return this.prismaService.post
      .findUnique({
        where: {
          id: post.id,
        },
      })
      .author()
  }

  @Query(_returns => Post)
  async post(@Args("id") id: string) {
    return this.prismaService.post.findUniqueOrThrow({
      where: {
        id,
      },
    })
  }

  @Query(_returns => [Post])
  posts(@Args() postsArgs: PostArgs) {
    return this.prismaService.post.findMany({ ...postsArgs })
  }

  // @Mutation(_returns => Post)
  // async addPost(@Args("newRecipeData") newRecipeData: NewPostInput) {
  //   // const recipe = await this.recipesService.create(newRecipeData)
  //   // pubSub.publish("recipeAdded", { recipeAdded: recipe })
  //   return {} as Post
  // }

  // @Mutation(_returns => Boolean)
  // async removeRecipe(@Args("id") id: string) {
  //   return this.recipesService.remove(id)
  // }

  // @Subscription(_returns => Post)
  // recipeAdded() {
  //   return pubSub.asyncIterator("recipeAdded")
  // }
}
