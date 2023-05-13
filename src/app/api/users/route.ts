import bcrypt from "bcrypt";
import {  user } from "@/models/User";
import { NextResponse } from "next/server";
export const GET = async()  => {
    const count = await user.countDocuments();
    const usuarios = await user.find();
    return NextResponse.json({
        ok: true,
        count,
        usuarios,
    });
}

export const POST = async(req:Request) =>{
    const data = await req.json();
    const usuario = new user(data);
    const salt = bcrypt.genSaltSync();
   usuario.password =  bcrypt.hashSync(data.password,salt);
    await usuario.save();

    return NextResponse.json({ok:true,msg: "Usuario Creado Exitosamente",usuario});  
}