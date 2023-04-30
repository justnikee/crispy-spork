import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";



export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, content } = req.body
    if (req.method === 'POST') {
         try {
        prisma.note.create({
            data: {
                title,
                content
            }
        })
        res.status(200).json({message: 'Note Created'})
    } catch (error) {
        console.log("failure");
    }
    }
   
}