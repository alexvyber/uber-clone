import "reflect-metadata"
import { ObjectType, Field, ID } from "@nestjs/graphql"
import { IsEmail } from "class-validator"
import { Post } from "../../post/models/post.model"

@ObjectType()
export class User {
  @Field(_type => ID)
  id: string

  @Field()
  @IsEmail()
  email: string

  @Field(_type => String, { nullable: true })
  name?: string | null

  @Field(_type => [Post], { nullable: true })
  posts?: [Post] | null
}
