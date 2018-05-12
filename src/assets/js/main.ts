declare const require: any;
declare const window: any;
const $ = require('jquery');

const fancybox = require('@fancyapps/fancybox');
require("@fancyapps/fancybox/dist/jquery.fancybox.css");

import * as L from 'leaflet';
require("leaflet/dist/leaflet.css");

// import Swiper from 'swiper';
// require("swiper/dist/css/swiper.css");


// import axios from 'axios';
// const is = requir('is_js');


export class Main {

    mapInit = (): void => {
        const mapContainers: any = document.querySelectorAll('.map');

        Array.apply(null, mapContainers).map((mapContainer, index) => {

            const lat: number = mapContainer.getAttribute('data-lat');
            const lng: number = mapContainer.getAttribute('data-lng');
            const zoom: number = mapContainer.getAttribute('data-zoom');


            var map = L.map(mapContainer, {
                scrollWheelZoom: false,
                dragging: true,
                zoomControl: false,
            }).setView([+lat, +lng], +zoom);


            L.control.zoom({
                position: 'bottomright'
            }).addTo(map);


            L.tileLayer(window.mapStyle, {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
            }).addTo(map);


            var myIcon = L.icon({
                iconUrl: 'assets/img/marker.png',
            });

            L.marker([lat, lng], {
                icon: myIcon,
            }).addTo(map);
        });

    }

    /** ONLY  Initialized function **/
    initialize = (): void => {
        $('.fancybox').fancybox();
        // $(document).foundation();
    }

    /** Function call when DOMContentLoaded **/
    public loaded = (): void => {
        this.initialize();
        this.mapInit();
    }

    /** Function call when window.onload **/
    public onLoad = (): void => {
    }

    /** Function call when window.resize **/
    public onResize = (): void => {
    }

    public onScroll = (): void => {
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

document.addEventListener('scroll', () => {
    APP.onScroll();
});

