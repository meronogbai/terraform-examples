module.exports.handler = async (event) => {
  console.log("Event: ", event);
  const responseMessage = `${process.env.GREETING} from lambda!`;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};
