/**
 * Se adjuntan rutas HTTP para los controladores
 * esta clase proporciona una instancia de Router
 */

import { Router } from "express";

class routerClass{
    router:Router
    constructor(){
        this.router= Router()
    }
}
export default routerClass