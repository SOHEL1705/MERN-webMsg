import mongoose from "mongoose";

const outletSchema = new mongoose.Schema({
  outletArea: {
    type: String,
    required: [true, "Please Provide an Area Name"]
  },
 outletName: {
    type: String,
    required: [true, "Please Provide an Outlet Name"],
 },
 address: {
    type: String,
 },
  assignedSalesman: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Salesman'  
  },
  status: {
    type: Boolean,
    default: false
   
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }

});

const Outlets = mongoose.models.Outlets || mongoose.model("Outlets", outletSchema);
export default Outlets