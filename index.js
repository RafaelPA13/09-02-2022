//importar as configurações do servidor
var servidor = require("./config/servidor")

//carregar a variavel app do servidor
var app = servidor.app

//carregar a variavel porta do servidor 
var porta = servidor.porta

//criar uma rota para a requisição /
app.get("/",(req,res)=>{
    res.send("O servdor está funcioinado")
})
//ligar o servidor
app.listen(porta,()=>{
console.log("servidor em http://localhost" +porta)
})