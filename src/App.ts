/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */


import swaggerUi from "swagger-ui-express"
import {swaggerSpec} from "./swagger.conf"
import express, { Application, Request, Response } from "express"
import {PrismaClient} from "@prisma/client"
import PacienteRoutes from "./routes/PacienteRoutes"
import MedicoRoutes from "./routes/MedicoRoutes"
import FormularioRoutes from "./routes/FormularioRoutes"
import cors from "cors"






/**
 * clase principal de la API define las rutas de la API
 * @author Dayana Sanchez Moreno
 * 
 */

class App {
    //Atributos

    public app: any
    private server: any
    private prismaClient= new PrismaClient
    


    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(
            "/api.docs",
            swaggerUi.serve,
            swaggerUi.setup(swaggerSpec)
        )
        this.app.use.cors()
        this.routes()
        this.prismaClient= new PrismaClient()

    }

        /**
         * definir y agregar las rutas de la API con express
         */


    

    private routes(): void {
        this.app.use(`/`, PacienteRoutes)
        this.app.use(`/`, MedicoRoutes)
        this.app.use(`/`, FormularioRoutes)
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