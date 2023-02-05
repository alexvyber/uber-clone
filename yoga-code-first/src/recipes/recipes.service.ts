import { Injectable } from "@nestjs/common"
import { NewRecipeInput } from "./dto/new-recipe.input"
import { RecipesArgs } from "./dto/recipes.args"
import { Recipe } from "./models/recipe.model"

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput) {
    return {} as Recipe
  }

  async findOneById(id: string) {
    return {} as Recipe
  }

  async findAll(recipesArgs: RecipesArgs) {
    return [{ id: "someId", title: "asdfaf" }] as Recipe[]
  }

  async remove(id: string) {
    return true
  }
}
