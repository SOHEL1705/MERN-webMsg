import dbConnect from "@/app/lib/dbConnect";
import Outlets from "@/app/models/outlet";

export async function POST(request) {
  await dbConnect();

  try {
    const { outletArea, outletName, address, status } = await request.json();
    console.log("asdasdasd", { outletArea, outletName, address, status, });

    const outlet = await Outlets.create({
      outletArea,
      outletName,
      address,
      status:false,
    });

    console.log("Created ", outlet);

    return Response.json(
      {
        message: "Outlet created successfully",
        outlet,
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Something went wrong on outlet route",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

//**************[GET all OUTLETS]    */

export async function GET(request) {
  await dbConnect();
  try {
    const outlets = await Outlets.find()
    if(outlets.length == 0){
      return Response.json({
        message: "No outlets found",
      });
    }
    return Response.json({ outlets }, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        message: "Something went wrong on outlet route",
        error: error.message,
      },
      { status: 500 }
    );
  }
}