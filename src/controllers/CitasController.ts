import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client"

class CitaController{

    private prismaClient:PrismaClient

    constructor(){
        this.prismaClient = new PrismaClient()

    }
    
    async obtenerCitas(req:Request, res:Response){
        const citas= await this.prismaClient.cita.findMany()
        res.json(citas)
    }


    async crearCita(req: Request, res: Response){
        try {
            const {
                idCita,
                fechaCita,
                cedulaPaciente,
                tarjetaProfesional,

            } = req.body
            const fecha= new Date(fechaCita)

           

            const cita = await this.prismaClient.cita.create(
                {
                    data: {
                        idCita,
                        fecha,
                        cedulaPaciente,
                        tarjetaProfesional

                    }
                }
            )
            res.json(cita)
        
        } catch (e:any){
            res.status(400)
            res.json({ error:e.message })
        }
    }
}
export default CitaController
