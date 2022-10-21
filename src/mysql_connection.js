import mysql from 'mysql';

const conector = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   port:3306,
   database:'contactos'
});

const conectar = () => {
   conector.connect( err =>{
      if(err) throw err
      console.log('Database connection SUCCESSFUL');
   });
}

export {conectar}