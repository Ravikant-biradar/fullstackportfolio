import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  mes: {
    type: String,
    required: true,
  },
});

const Messagemdel = mongoose.model("message", messageSchema);
export default Messagemdel;
