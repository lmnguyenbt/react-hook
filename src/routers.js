import Home from './views/home/home';
import ProductList from './views/product/product-list/product-list';
import ProductDetail from './views/product/product-detail/product-detail';

const routes = [
	{ path: '/', exact: true, name: 'Home', component: Home },
	{ path: '/products', exact: true, name: 'Products', component: ProductList },
	{ path: '/products/:id', exact: true, name: 'Products Detail', component: ProductDetail }
];

export default routes;
