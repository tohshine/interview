import express,{Express} from 'express'
import { json } from "body-parser";
import cors from "cors";
import path from 'path'
import promMid from 'express-prometheus-middleware'
import {rootRoute} from './rootRoutes'
import { register } from "prom-client";


const app = express();






//local dev is 5000; while deploy into production default web server port will be selected 
const PORT = process.env.PORT || 5000;
app.set("trust-proxy", true);
//creating cors to allow only connection coming from the frontend react 
app.use(cors());


app.use(promMid({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
  requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
 
   authenticate: req => req.headers.authorization === 'mysecrettoken',
 
}));


 

  //body parser middleware to parse request into json response
  app.use(json());
  app.get("/prom-test", function(req: express.Request, res: express.Response) {
    res.send(register.metrics());
  });




  //serve static asset in production
if (process.env.NODE_ENV === "production") {
  //server asset
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

  //endpoint created are injected inside the entry point index.ts
  rootRoute(app)

// This is to inform the user or client access the server with incorrect route
app.all("*", (req,res) => {
  res.status(404).send('Page not found')
});

  const start =  () => {
    app.listen(PORT, () => {
      console.log(`server has started on port ${PORT}`);
    });
  };

  //server initiated here on port 5000
  start()
