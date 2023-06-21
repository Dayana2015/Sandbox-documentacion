
import {Router , Request, Response} from "express"
import CitasController from "../controllers/CitasController"
class CitasRouter{

    router:Router
    citasController: CitasController

    constructor(){
        this.router=Router()
        this.citasController=new CitasController()
        this.routes()

    }
    private routes():void{
        this.router.get("/citas",
        (req:Request, res:Response)=>{
            this.citasController.obtenerCitas(req, res)
        })
    }
    
    
}
export default new CitasRouter ().router
