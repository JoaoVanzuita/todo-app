import { app } from './app'
import { AppDataSource } from './data-source'

const port = process.env.PORT

AppDataSource.initialize().then(() => {
  return app.listen(port, () => console.log(`server online - running on port ${port}`))
})
