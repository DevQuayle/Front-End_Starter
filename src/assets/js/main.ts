import $ = require('jquery');
import axios from 'axios';

export class Main {

    init = (): void => {
        console.log('to jest to zmiana :P');
        console.log('Przeładowanie js :S');
        console.log('Przeładowanie js test 2');
    }



    /** Function call when DOMContentLoaded **/
    public loaded = (): void => {
        this.init();
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

