// Liberias incompatibles
//var _ = require("lodash");

// npm i --save-dev @types/node

import _ from "lodash"; // Ya se puede :0

const data = [{
  username: "diebots",
  role: "admin"
},{
  username: "erichan",
  role: "admin"
},{
  username: "michi",
  role: "seller"
},{
  username: "monky",
  role: "seller"
},{
  username: "miaunoice",
  role: "costumer"
}];

// Agrupar por un tipo en especifico con lodash
const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
