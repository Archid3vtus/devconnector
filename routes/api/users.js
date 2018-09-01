const expres = require('express');
const router = expres.Router();

// @route       GET api/users/test
// @desc        Tests users route
// @ access     Public
router.get('/test', (req, res) => res.json({msg: "Users Works"}));

module.exports = router;