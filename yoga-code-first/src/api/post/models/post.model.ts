import {
  //  Directive,
  Field,
  // FieldOptions,
  ID,
  ObjectType,
} from "@nestjs/graphql"
import { User } from "../../user/models/user.model"

@ObjectType({ description: "some description" })
export class Post {
  @Field(type => ID)
  id: string

  // @Directive("@upper")
  @Field(type => String, { description: "title description" })
  title: string

  @Field({ nullable: true })
  content?: string

  // @Field()
  // creationDate: Date

  @Field()
  published: boolean

  // @Field(type => [String])
  // ingredients: string[]

  @Field()
  viewCount: number

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field(type => User, { nullable: true })
  author?: User | null
}

// model Post {
//   id        String   @id @default(uuid())
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   title     String
//   content   String?
//   published Boolean  @default(false)
//   viewCount Int      @default(0)
//   author    User?    @relation(fields: [authorId], references: [id])
//   authorId  String?
// }
