const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {logErrors, errorhandler}, boomErrorHandler = require('./middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     });
//   } else{
//     res.send('No hay parametros');
//   }
// })

// app.get('/categories/:categoryId/:products/productsId', (req, res) => {
//   const { categoryId, productsId } = req.params;
//   res.json({
//     categoryid,
//     productsId,
//   });
// })


