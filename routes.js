const router = require('express').Router();

router.use('/_sysinfo', _sysinfo = (req,res,next) => {
  res.send('connected');
});

module.exports = exports = router;
