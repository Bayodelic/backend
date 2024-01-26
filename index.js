
const mongoose = require('mongoose');
const app = require('./app');
const uri = "mongodb+srv://braulio:123braulio456@cluster0.vo9lxbf.mongodb.net/?retryWrites=true&w=majority";
var port = 3700;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    //Creacion del servidor
    app.listen(port, () => {
        console.log("Servidor Corriendo correctamente en el puerto localhost:3700");
    })
    
} finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
