const axios = require("axios");

(async () => {
  const resp = await axios.get('http://localhost:3000/')
  const data = resp.data

  console.log(data)
})();