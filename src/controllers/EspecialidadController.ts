import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client"

class EspecialidadController{

    private prismaClient:PrismaClient

    constructor(){
        this.prismaClient = new PrismaClient()

    }
    
    async obtenerEspecialidad(req:Request, res:Response){
        const especialidad= await this.prismaClient.especialidad.findMany()
        res.json(especialidad)
    }


    async crearEspecialidad(req: Request, res: Response){
        try {
            const {
                idEspecialidad,
                nombre

            } = req.body

           

            const especialidad = await this.prismaClient.especialidad.create(
                {
                    data: {
                        idEspecialidad,
                        nombre

                    }
                }
            )
            res.json(especialidad)
        } catch (e:any){
            res.status(400)
            res.json({ error:e.message })
        }
    }
}
export default EspecialidadController