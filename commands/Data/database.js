var mongoose = require("mongoose") // faz requisicao do mongoose
var Schema = mongoose.Schema // só para deixar bonitinho
mongoose.connect("mongodb+srv://Darkzin:junior19@darkbull720-pcnrf.gcp.mongodb.net/test?retryWrites=true&w=majority", { // Onde pegamos o link, da conexão em Cluster
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () { // Caso Logue Corretamente
    console.log('\x1b[32m[ BANCO DE DADOS ] \x1b[0mBanco de dados foi ligado');
}).catch(function () { // Caso de ERRO
    console.log('\x1b[31m[ BANCO DE DADOS ] \x1b[0mBanco de dados desligado por erro');
});

// Iremos fazer um pequeno databse do usuário:
var User = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: false },
})
var Guild = new Schema({
    _id: { type: String, required: true }, // ID Do Usuário
    code: { type: Number, default: 0000 },
    ip: { type: String, required: false },
})
/* Colocamos assim, o nome do que queremos (que nem um Objeto sabe?)
money: { type: Number, default: 0 },
Type: será o formato dele (Number = Número, String = Texto, Boolean = true/false)
default: será o valor inicial que todos irão ter
required: è que é NECESSÀRIO TER
*/

// Aqui é a exportação. para usar essa base do documento, fora desse código (Troca de documentos)
var Users = mongoose.model("Users", User);
var Guilds = mongoose.model("Guilds", Guild);
exports.Users = Users
exports.Guilds = Guilds
