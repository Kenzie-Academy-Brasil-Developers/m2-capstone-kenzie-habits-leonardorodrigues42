import Api from "../models/Api.models.js";

const teste = await Api.userLogin({
  email: "grupo4Guilherme@mail.com",
  password: "a47b0998c8e0a567fec5ae036c6fda10",
});

console.log(teste);



