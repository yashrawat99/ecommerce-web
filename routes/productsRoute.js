const router = require('express').Router();
// @METHOD- GET
router.get('/', (req, res) => {
  console.log(req);
  res.send({
    message: 'ok',
    success: true,
  });
});

module.exports = router;
