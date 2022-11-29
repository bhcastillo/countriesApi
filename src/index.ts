import { App }from './app'


export const init = async() =>{
  try {
    const app = await new App()
    console.log("server started in port")
    return app.listen()
  } catch (error) {
    console.log('error initializing server', error)
  }
}

init()