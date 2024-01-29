import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const logger = new Logger('bootstrap')

  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  await app.listen(configService.get('app.port'))
  logger.log(`App started in ${await app.getUrl()}`)
}
bootstrap()
