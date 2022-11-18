const redis = require('redis');

(async () => {

  const client = redis.createClient({
    url: 'redis://@localhost:16666'
  });

  const subscriber = client.duplicate();

  await subscriber.connect();

  await subscriber.subscribe('do', (message) => {
    console.log(message); // 'message'
  });

})();