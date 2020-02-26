const express = require('express');
const router = express.Router();

const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  searchProductsList,
  sendProductPhoto,
  listSearch
} = require('../controllers/inventoryController');

const {
  requireSignin,
  isAuth,
  isAdmin,
  isSleMgr,
  isInvMgr
} = require('../controllers/userAuthController');

const { userById } = require('../controllers/userController');

/** Product Management */
router.get('/product/:productId', requireSignin, isSleMgr, read);
router.post(
  '/product/create/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  isInvMgr,
  create
);
router.delete(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  isInvMgr,
  remove
);

/* update */
router.put(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  isInvMgr,
  update
);

router.get('/products', list);
router.get('/products/search', listSearch);
// POST router: sending object the filter to product categories and price range... to access request body
router.post('/products/by/search', searchProductsList);
router.get('/product/send-product-photo/:productId', sendProductPhoto);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
