const http = require("http");
const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  const url = new URL(req.url, `http://${host}:${port}`);

  if (url.pathname === "/user") {
    const name = url.searchParams.get("name");
    const email = url.searchParams.get("email");

    const responseJSON = JSON.stringify({ "name": name, "email": email });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(responseJSON);
  } else {
    res.writeHead(200);
    res.end();
  }
};

const server = http.createServer(requestListener);

module.exports = server;
