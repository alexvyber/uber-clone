import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import helmet from "helmet"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ["log", "error", "warn", "debug"],
  })

  app.use(helmet())
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(4000)

  // eslint-disable-next-line no-console
  console.log(`Application is runconsolening on: ${await app.getUrl()}`)
}
bootstrap()
