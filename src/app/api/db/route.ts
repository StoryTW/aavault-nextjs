import dbConnect from "@/app/lib/dbConnection";
import Email from "@/app/models/Email";
import { NextApiRequest, NextApiResponse } from "next";


export async function POST(req: NextApiRequest, res: NextApiResponse) {    
    dbConnect();

    const email = await Email.create(req.body);
    res.status(200).json(email);
}