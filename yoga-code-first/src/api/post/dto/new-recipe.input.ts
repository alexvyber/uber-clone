import { IsOptional, Length, MaxLength } from "class-validator"
import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class NewPostInput {
  @Field()
  @MaxLength(30)
  title: string

  @Field({ nullable: true })
  @IsOptional()
  @Length(30, 255)
  description?: string

  @Field(type => [String])
  ingredients: string[]
}
