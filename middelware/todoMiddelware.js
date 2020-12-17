module.exports.verifyPostRequest = (req, res, next) => {
  const requiredProperties = ["taskName"];
  let result = requiredProperties.every((keys) => {
    return req.body[keys] && req.body[keys].trim().length !== 0;
  });
  if (!result) {
    res.status(400).json({
      status: "unsecusseful",
      meassage: "request body is invalid",
    });
    return;
  }
  req.body.taskName = req.body.taskName.trim();
  next();
};

module.exports.verifyUpdateRequest = (req, res, next) => {
  const requiredProperties = ["status"];
  let result = requiredProperties.every((keys) => {
    return req.body[keys] && req.body[keys].trim().length !== 0;
  });
  if (!result || req.body.status !== "completed") {
    res.status(400).json({
      status: "unsecusseful",
      meassage: "request body is invalid",
    });
    return;
  }
  req.body.status = req.body.status.trim();
  next();
};
