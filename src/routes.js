import Home from './components/page/Home';
import ProductDetail from './components/page/ProductDetail';
import Products from './components/page/Products';
import About from './components/page/About';
import Search from './components/page/Search';

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
    { title: 'Character Search', path: 'search', element: Search, isNav: true },
];

export default routes;