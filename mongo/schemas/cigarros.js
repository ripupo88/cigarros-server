const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cigarrosSchema = new Schema({
  marca: String,
  nombre: String,
  img: String,
  pedido: Number,
  stock: Number,
  stockMinimo: Number,
  ventasPorMes: {
    1: Number,
    2: Number,
    4: Number,
    3: Number,
    5: Number,
    6: Number,
    7: Number,
    8: Number,
    9: Number,
    10: Number,
    11: Number,
    12: Number
  },
  mediaDeVentas: Number
});

module.exports = mongoose.model("cigarros", cigarrosSchema);
