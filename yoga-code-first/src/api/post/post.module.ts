// import { DateScalar } from "@/common/scalars/date.scalar"
import { Module } from "@nestjs/common"
import { PostsResolver } from "./post.resolver"
import { PostService } from "./post.service"

@Module({
  providers: [PostService, PostsResolver],
})
export class PostModule {}
