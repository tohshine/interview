import {Express} from 'express'
import {HomeRouter} from './routes/home'

const rootRoute = (app:Express)=>{
 app.use(HomeRouter)
}

export {rootRoute};