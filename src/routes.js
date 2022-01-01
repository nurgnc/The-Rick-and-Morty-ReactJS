import Home from './components/page/Home';
import CharacterDetail from './components/page/CharacterDetail';
import Characters from './components/page/Characters';
import About from './components/page/About';
import Search from './components/page/Search';

const routes = [
    { title: 'Home', path: '/', element: Home, isNav: true },
    { title: 'About', path: 'about', element: About, isNav: true },
    { title: 'Characters', path: 'characters', element: Characters, isNav: true },
    {
        title: 'Character Detail',
        path: 'characters/:characterId',
        element: CharacterDetail,
        isNav: false,
    },
    { title: 'Character Search', path: 'search', element: Search, isNav: true },
];

export default routes;