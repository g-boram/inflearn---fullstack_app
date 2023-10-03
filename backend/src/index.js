
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://goboramy:goboramy@cluster0.twugldo.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 4000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('연결 완료')
  })
  .catch(err => {
    console.error(err)
  })




app.get('/', (req, res, next) => {
  // setImmediate(() => {
  //   next( new Error('it is an error'))
  // });

  res.send('Hello, world');
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

// app.use('/users', require('./routes/users'));

// app.use((error, req, res, next) => {
//   res.status(err.status || 500)
//   res.send(error.message || '서버에서 에러가 났습니다.');
// })

app.use(express.static(path.join(__dirname, '../uploads')))

app.listen(port, () => {
  console.log(`${port} 번 포트 실행.`)
});
