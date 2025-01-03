import dbConnect from "@/app/lib/dbConnect";
import Salesman from "@/app/models/salesman";
export async function POST(request, response) {
  await dbConnect();
  try {

    const {name,email,phone, isWorking} = await request.json();

    const salesman = await Salesman.create({
      name,
      email,
      phone,
      isWorking:true
    });
    const sendData = {
      name,
      email,
      phone,
    }
    // console.log(sendData)
    return Response.json({
      message: "Salesman created successfully",
      salesman
    })
    
    
  } catch (error) {
    return Response.json({
      message: "Something went wrong on salesman route",
    })
  }

}


//************[get all salesman] */

export async function GET(request, response) {
  await dbConnect();
  try {
    const salesman = await Salesman.find();
    
    if (salesman.length == 0) {
      return Response.json({
        message: "No salesman found",
      });
    }

    
    const as = salesman.map((item) => {
      return {
        name: item.name,
        email: item.email,
        phone: item.phone,
      };
    })
    return Response.json({ salesman }, { status: 200 });
  } catch (error) {
    return Response.json({
      message: "Something went wrong on getting salesman route",
    });
  }
}


//*****get salesman by id  */


