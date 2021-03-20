export const JWT_COOKIE = 'shippal_jwt';
export const JWT_EXPIRY = 7;

export const CLIENT_HOST = 'https://www.yocompute.com';

export const HOME_PAGE = 'page/home';
export const BRAND_PAGE = 'page/brand';
export const PRODUCT_PAGE = 'page/product';
export const CART_PAGE = 'page/cart';
export const PAYMENT_PAGE = 'pay/payment';
export const ORDER_PAGE = 'page/order';


export const PaymentStatus = {
    NEW: 'N'
}

export const PaymentMethod = {
    CREDIT_CARD: 'CC',
    WECHAT: 'W'
}

export const Role = {
    "Super": "Super",
    "Admin": "Admin",
    "CustomerService": "Customer Service",
    "Driver": "Driver"
}

export const Roles = ["Super", "Admin", "Customer Service", "Driver"];

export const Permissions = {
    "/brands/new": ["Super"],
    "/roles": ["Super", "Admin"],
    "/roles/new": ["Super"],
    "/roles/:id": ["Super"],
    "/payments": ["Super"]
}