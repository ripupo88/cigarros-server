var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cigarros", { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
});

const Cigarros = require("./schemas/cigarros");

let getCigar = () => {
  return new Promise((resolve, reject) => {
    Cigarros.find({ stock: { $gt: 0 } }, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};

// let objeto_cigarro = {
//   marca: "Lucky",
//   nombre: "Lucky Verde",
//   img: "https://i.imgur.com/A32IuWL.jpg",
//   pedido: 0,
//   stock: 0,
//   stockMinimo: 0,
//   ventasPorMes: {
//     1: 0,
//     2: 0,
//     4: 0,
//     3: 0,
//     5: 0,
//     6: 0,
//     7: 0,
//     8: 0,
//     9: 0,
//     10: 0,
//     11: 0,
//     12: 0
//   },
//   mediaDeVentas: 0
// };

let nuevoCigarro = objeto_cigarro => {
  return new Promise((resolve, reject) => {
    let cigarros = new Cigarros(objeto_cigarro);

    cigarros.save((err, res) => {
      if (err) {
        console.log(err);
        reject("Error con la base de datos, posibles datos duplicados");
      }
      resolve(res);
    });
  });
};

//nuevoCigarro(objeto_cigarro);

// let updateRegistro = objeto_registro => {
//   return new Promise((resolve, reject) => {
//     Registro.findByIdAndUpdate(
//       objeto_registro.id,
//       {
//         cobrado: objeto_registro.cobrado
//       },
//       (err, res) => {
//         if (err) reject(err);
//         resolve({
//           res
//         });
//       }
//     );
//   });
// };

module.exports = { getCigar };
