// import { PrismaService } from "@/prisma/prisma.service"
// import { PrismaService } from "@/prisma/prisma.service"
import { Module } from "@nestjs/common"
import { UsersResolver } from "./user.resolver"
import { UserService } from "./user.service"

@Module({
  // imports: [PrismaService],
  providers: [UserService, UsersResolver],
})
export class UserModule {}
