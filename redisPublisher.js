const express = require("express");
const axios = require("axios");
const redis = require("redis");

const app = express();
const port = process.env.PORT || 3001;

let redisClient;

const task = {
  taskId:1234
};

(async () => {
  redisClient = redis.createClient({
    url: 'redis://@localhost:16666'
  });

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

async function doSomething(req, res) {
  await redisClient.publish('do', JSON.stringify(task));
}

app.get("/do", doSomething);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});