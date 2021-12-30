import Home from './components/page/Home';
import ProductDetail from './components/page/ProductDetail';
import Products from './components/page/Products';
import About from './components/page/About';
import ProductSearch from './components/page/ProductSearch';

const routes = [
    { title: 'Home', path: '/', element: Home, isNav: true },
    { title: 'About', path: 'about', element: About, isNav: true },
    { title: 'Characters', path: 'characters', element: Products, isNav: true },
    {
        title: 'Character Detail',
        path: 'characters/:characterId',
        element: ProductDetail,
        isNav: false,
    },
    { title: 'Character Search', path: 'search', element: ProductSearch, isNav: false },
];

export default routes;