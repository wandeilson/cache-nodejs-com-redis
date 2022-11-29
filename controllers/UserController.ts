import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express'; 

const prisma = new PrismaClient();

class UserController {
    static async find (req: Request, res: Response){
        try{
            console.time("Find users");
            
            const users = await prisma.user.findMany();

            console.timeEnd("Find users")
            return res.json(users);
        } catch( e ){
            console.log(e);
            return res.json({
                error: e
            })
            
        }
    }
}

export default UserController