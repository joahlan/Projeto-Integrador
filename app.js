const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


const usuariosRoutes = require('./routes/usuarios');
const projetosRoutes = require('./routes/projetos');
const matchesRoutes = require('./routes/matches');

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/projetos', projetosRoutes);
app.use('/api/matches', matchesRoutes);


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
