// const express = require('express');
// const fs = require('fs');

// const diretorio = './imagens';

// const app = express();

// app.get('/imagens', (req,res) => {
//     fs.readdir(diretorio, (erro, imgs) => {
//         if(erro)
//             return res.status(500).json({error: 'Erro ao retornar imagens'});
//         console.log("imgs: ", imgs)
//         return res.json({imagens: imgs});
//     });
// });

// const PORTA = 5000;
// app.listen(PORTA, ()=>{
//     console.log(`Servidor em http://localhost:${PORTA}`);
// })