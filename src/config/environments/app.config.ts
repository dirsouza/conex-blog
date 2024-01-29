import { registerAs } from '@nestjs/config'
import * as env from 'env-var'

export interface AppEnv {
  nodeEnv: string
  port: number
}

export const appConfig = registerAs(
  'app',
  (): AppEnv => ({
    nodeEnv: env.get('NODE_ENV').default('development').asString(),
    port: env.get('PORT').default(3000).asPortNumber(),
  }),
)
