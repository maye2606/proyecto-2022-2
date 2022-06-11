"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
// Crear la conexión a la BD
const db_1 = __importDefault(require("./config/db"));
// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos
const cors_1 = __importDefault(require("cors"));
db_1.default.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));
// crear el servidor
const app = (0, express_1.default)();
app.use(express_1.default.json());
// habilitar bodyparser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Habilitar cors
// Add a list of allowed origins.
const allowedOrigins = ['*'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
const PORT = 3000;
// Rutas de la app
app.use('/api/v1', routes_1.default);
app.use((err, _req, res, _next) => {
    res.status(500).json({
        message: err.message
    });
});
// carpeta publica
app.use(express_1.default.static('./assets/uploads'));
app.listen(PORT);
//# sourceMappingURL=index.js.map