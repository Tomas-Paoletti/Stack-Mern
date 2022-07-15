
import '#Config/env.js';// ponerlo primero ya que se cargan de arriba a abajo y en el caso que algun import lo use no esatria encontrando los .emv
import httpServer from '#Config/http.js';

import connectDB from '#Config/db.js';
const bootstrap = async () => {
    await connectDB(process.env.MONGODB_URL);
    httpServer.listen(process.env.PUERTO, () => {
        console.log(`Servidor en el puerto ${process.env.PUERTO} `);
    });
};

bootstrap();
