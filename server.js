const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
 *  the frontend application to interact as planned with the api server
 */
const PORT = process.env.PORT || 4001;

// middleware for public files
app.use(express.static(__dirname));

// middleware for logging
app.use(morgan("dev"));

// middleware for handling CORS requests from index.html
app.use(cors());

// middware for parsing request bodies
app.use(bodyParser.json());

// Routers
const apiRouter = require("./server/api");
app.use("/api", apiRouter);

// error handling and 404 page display
app.use((req, res) => {
  res.status(404).send("Not a valid URL!");
});

// This conditional is here for testing purposes:
if (!module.parent) {
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });
}
