const http = require("http");
const express = require("express");
const { google } = require("googleapis");

const app = express();

/* setup Oauth*/
const oauth2Client = new google.auth.OAuth2(
  "390958863468-1n9f5bljugpedm41a3gd4uogr80ta71o.apps.googleusercontent.com",
  "jas0ih1FKqCOkzeDO_qgjdm6",
  "http://localhost:3000/oauthcallback"
);

/* get the url link for authentication*/
function getAuthUrl() {
  const url = oauth2Client.generateAuthUrl({
    scope: "https://www.googleapis.com/auth/youtube.readonly",
  });
  console.log("URL: " + url);
  return url;
}

/* the redirect URL registered in my Google Cloud Platform */
app.use("/oauthcallback", function (req, res) {
  const code = req.query.code;
  console.log("code:", JSON.stringify(code, null, 2));
  const { tokens } = oauth2Client.getToken(code);

  console.log("tokens:: ", JSON.stringify(tokens, null, 2));

  res.send(`
                <!DOCTYPE html>
                <html lang="en">
                <body>
                    <h3>Login successful!!</h3>
                    <a href="/details">Go to details page</a>
                </body>
                </html>
            `);
});

/* Url for triggering the getAuthUrl */
app.use("/", function (req, res) {
  const url = getAuthUrl();
  res.send(`
       <!DOCTYPE html>
       <html lang="en">
        <body>
<h1>Authentication using google oAuth</h1>
        <a href=${url}>Login</a>
        </body>
        </html>
    `);
});

/* Express setup and exposing PORT to localhost:3000 */
const port = 3000;
const server = http.createServer(app);
server.listen(port);
server.on("listening", function () {
  console.log(`listening to ${port}`);
});
