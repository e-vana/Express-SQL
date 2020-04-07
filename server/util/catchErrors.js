const catchErrors = fn =>
  (req, res) => {
      Promise.resolve(fn(req, res)).catch((error) => {
          res.status(500).json({
              error: error.message
          });
      });
  }

module.exports = catchErrors