const express = require('express');
const router = express.Router();

const {
  create,
  customerById,
  read,
  remove,
  update,
  list,
  relatedProductList,
  listCategories,
  searchProductsList,
  sendProductPhoto,
  listSearch
} = require('../controllers/productController');
const {
  requireSignin,
  isAuth,
  isAdmin
} = require('../controllers/userAuthController');
const { userById } = require('../controllers/userController');

/** Product Management */
router.get('/product/:productId', read);
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.delete(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

/* update */
router.put(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);

router.get('/products', list);
router.get('/products/search', listSearch);
router.get('/products/related/:productId', relatedProductList);
router.get('/products/categories', listCategories);
// POST router: sending object the filter to product categories and price range... to access request body
router.post('/products/by/search', searchProductsList);
router.get('/product/send-product-photo/:productId', sendProductPhoto);

router.param('userId', userById);
router.param('productId', customerById);

module.exports = router;

//search router.get
//delete router.delete
//edit router.put
//add router.post
const express = require('express');
const router = express.Router();

const {
  add,
  customerById,
  read,
  remove,
  update,
  customerSearch
} = require('../controllers/customerController');

router.get('/customer/:customertId', read);
router.post('/customer/create/:customerId', add);
router.delete('/customer/:customertId', remove);
router.get('customer/searchCustomer/:customerId', customerSearch);



