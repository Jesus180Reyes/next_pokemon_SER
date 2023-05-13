import { NextResponse } from "next/server";
export const GET =  async(request:any)=>  {
    const hello = "Hola mundo";
    return new Response(JSON.stringify({ok: true,msg: hello}));
} 
export const POST =  async(request:Request)=>  {
    try {
    const hello  = "Hola mundo"
    const data = await request.json();
    return NextResponse.json({data,hello});
    } catch (error:any) {
        console.log(error);
        return  NextResponse.json({ok:false,msg:`Hable con el administrador:: ${error}`}, {status:500})
    }
} 



