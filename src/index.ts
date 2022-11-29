import { App } from './app'

export const init = async (): Promise<void> => {
  try {
    const app = await new App()
    return app.listen()
  } catch (error) {
    console.log('error initializing server', error)
  }
}

init()
