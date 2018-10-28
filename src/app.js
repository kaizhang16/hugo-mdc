import {
    MDCDrawer
} from '@material/drawer';
import {
    MDCTopAppBar
} from '@material/top-app-bar';

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = true;
});

const listEl = document.querySelector('.mdc-drawer .mdc-drawer__content .mdc-list');
const mainContentEl = document.querySelector('.main-content');
listEl.addEventListener('click', (event) => {
    drawer.open = false;
});
document.body.addEventListener('MDCDrawer:closed', () => {
    mainContentEl.querySelector('input, button').focus();
});
