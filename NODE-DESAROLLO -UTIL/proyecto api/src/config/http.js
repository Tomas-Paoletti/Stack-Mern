import { createServer} from 'http'
import App from './express.js'

const httpServer = createServer(App)

export default httpServer;
