const errorHandler = (error, req, res, next) => {
    const { statusCode, message } = error;
    return res.status(statusCode || 500).json({
      status: "error",
      statusCode,
      message,
    });
  };
  
  module.exports = { errorHandler };