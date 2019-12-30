const { gql } = require("apollo-server");

const typeDefs = gql`
  type cigarros {
    id: String
    marca: String
    nombre: String
    img: String
    pedido: Int
    stock: Int
  }

  type Query {
    PedirCigarros: [cigarros]
  }
`;

module.exports = typeDefs;
