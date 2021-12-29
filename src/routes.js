import Home from './components/page/Home';
import ProductDetail from './components/page/ProductDetail';
import Products from './components/page/Products';
import About from './components/page/About';
import ProductSearch from './components/page/ProductSearch';

const routes = [
    { title: 'Ana Sayfa', path: '/', element: Home, isNav: true },
    { title: 'Hakkımızda', path: 'about', element: About, isNav: true },
    { title: 'Karakterler', path: 'products', element: Products, isNav: true },
    {
        title: 'Karakter Özellikleri',
        path: 'products/:productId',
        element: ProductDetail,
        isNav: false,
    },
    { title: 'Ürün Ara', path: 'arama', element: ProductSearch, isNav: false },
];

export default routes;