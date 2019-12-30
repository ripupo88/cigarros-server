const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");
moment.locale("es");

const resolvers = {
  Query: {
    PedirCigarros: async (parent, { termino, objetivo }, ctx, info) => {
      let respu = await ctx.getCigar();
      console.log(respu);
      return respu;
    }
  }
  // Mutation: {
  // registro: (
  //   parent,
  //   {
  //     id,
  //     nombre,
  //     nif,
  //     matricula,
  //     importe,
  //     motivo,
  //     fecha,
  //     cobrado,
  //     trabajador
  //   },
  //   ctx
  // ) => {
  //   let newFecha = moment.unix(fecha / 1000).format("D-MMM-YYYY");
  //   let obj_regis = {
  //     id,
  //     nombre,
  //     nif,
  //     matricula,
  //     importe,
  //     motivo,
  //     fecha: newFecha,
  //     cobrado,
  //     trabajador
  //   };
  //   id === "algo"
  //     ? ctx.nuevoregistro(obj_regis)
  //     : ctx
  //         .updateRegistro(obj_regis)
  //         .then(e => console.log(e))
  //         .catch(err => console.log(err));
  //   return nombre;
  // }
  // }
};
module.exports = resolvers;
