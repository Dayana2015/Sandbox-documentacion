import { Request, Response } from "express";
import { PrismaClient} from "@prisma/client"

class MedicoController{

    private prismaClient:PrismaClient

    constructor(){
        this.prismaClient = new PrismaClient()

    }
    
    async obtenerMedicos(req:Request, res:Response){
        const medicos= await this.prismaClient.medico.findMany()
        res.json(medicos)
    }


    async crearMedico(req: Request, res: Response){
        try {
            const {
                tarjetaProfesional,
                nombre,
                apellido,
                consultorio,
                correo

            } = req.body

           

            const medico = await this.prismaClient.medico.create(
                {
                    data: {
                        tarjetaProfesional,
                        nombre,
                        apellido,
                        consultorio,
                        correo

                    }
                }
            )
            res.json(medico)
        } catch (e:any){
            res.status(400)
            res.json({ error:e.message })
        }
    }
}
export default MedicoController