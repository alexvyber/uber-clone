import {
  //  Directive,
  Field,
  // FieldOptions,
  ID,
  ObjectType,
} from "@nestjs/graphql"

@ObjectType({ description: "some description" })
export class Recipe {
  @Field(type => ID)
  id: string

  // @Directive("@upper")
  @Field(type => String, { description: "title description" })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field()
  creationDate: Date

  @Field(type => [String])
  ingredients: string[]
}
