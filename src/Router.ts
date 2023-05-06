import express, { Application, Request, Response } from "express"
import { json } from "stream/consumers"


class App {
    //Atributos

    public app: any
    private server: any

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.routes()

    }

    private routes(): void {
        this.app.get(
            "/",

            (req: Request, res: Response) => {
                res.send("Bienvenidos a typescript")
            }
        )

    }
    public start(): void {

        this.server = this.app.listen(
            3000,
            () => { console.log(" el servidor esta escuchando enel puerto 3000") }
        )

    }

    public close(): void {
        this.server.close()
    }
}

export default App