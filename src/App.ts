

import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./swagger.conf"
import express, { Application, Request, Response } from "express"

import PacienteRouter from "./routes/PacienteRoutes"
import MedicoRouter from "./routes/MedicoRoutes"

/**
 * clase principal de la API define las rutas de la API
 * @author Dayana Sanchez Moreno
 * 
 */

class App {
    //Atributos

    public app: any
    private server: any
    

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(
            "/api.docs",
            swaggerUi.serve,
            swaggerUi.setup(swaggerSpec)
        )
       
        this.routes()

        /**
         * definir y agregar las rutas de la API con express
         */

    }

    private routes(): void {
        
        this.app.use("/", PacienteRouter)
        this.app.use("/", MedicoRouter)

            
        

    }
    public start(): void {

        this.server = this.app.listen(
            3000,
            () => { console.log(" el servidor esta escuchando en el puerto 3000") }
        )

    }

    public close(): void {
        this.server.close()
    }
}

export default App