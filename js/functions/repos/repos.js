const fetch = require('node-fetch')

const handler = async function () {
  try {
    const response = await fetch(`${process.env.GH_API_URL}/users/theduckfliesagain/repos`, {
      headers: { 
        Accept: 'application/json',
        Authorization: `token ${process.env.GH_API_KEY}`
       },
    })
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
