import mongoose from "mongoose";

const salesmanSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Please Provide a Name "],
  },
  phone: {
    type: String,
    required: [true, "Please Provide a Phone "],
  },
  email : {
    type: String,
  },
  assignedArea: { type: mongoose.Schema.Types.ObjectId, ref: 'outlet' },
  isWorking: {
    type: Boolean,
    default: false
  }


}
)

const Salesman = mongoose.models.Salesman || mongoose.model("Salesman", salesmanSchema);

export default Salesman;