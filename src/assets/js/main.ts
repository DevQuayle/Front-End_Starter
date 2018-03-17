declare var require: any
const $ = require('jquery');
require('@fancyapps/fancybox/dist/jquery.fancybox.css');
import 'foundation-sites';
const fancybox = require('@fancyapps/fancybox');
const foundation = require('foundation-sites');
// const is = require('is_js');


import axios from 'axios';

export class Main {



    /** ONLY  Initialized function **/
    initialize = (): void => {
        $('.fancybox').fancybox();
        $(document).foundation();
    }

    /** Function call when DOMContentLoaded **/
    public loaded = (): void => {
        this.initialize();
    }

    /** Function call when window.onload **/
    public onLoad = (): void => {
    }

    /** Function call when window.resize **/
    public onResize = (): void => {
    }
}


const APP = new Main();
document.addEventListener("DOMContentLoaded", function (event) {
    APP.loaded();
});

window.onload = () => {
    APP.onLoad();
};

window.onresize = () => {
    APP.onResize();
};

