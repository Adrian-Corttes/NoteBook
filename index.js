import express from "express";
import { conectar } from './src/mysql_connection.js';

const app = express()

//Configuración de Pug
app.set('views', 'src/views');

//configuracion de archivos estaticos
app.use(express.static('./src/views'));



app.get('/',(req, res)=>{
   res.render('index');
});





//Iniciamos el servidor
app.listen('3000', ()=>{
   //conectar()
   console.log('Server listening on port 3000')
});



//https://www.youtube.com/watch?v=U5C_VbKCaIc&t=2177s  0:41:12