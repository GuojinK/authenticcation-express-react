const {OAuth2Client} = require("google-auth-library")

const GoogleOAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URL
)
module.exports = GoogleOAuth2Client