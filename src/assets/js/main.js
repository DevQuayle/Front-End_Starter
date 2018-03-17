"use strict";
exports.__esModule = true;
var Main = (function () {
    function Main() {
        var _this = this;
        this.init = function () {
            console.log('to jest to zmiana :P');
            console.log('Przeładowanie js :S');
            console.log('Przeładowanie js test 2');
        };
        /** Function call when DOMContentLoaded **/
        this.loaded = function () {
            _this.init();
        };
        /** Function call when window.onload **/
        this.onLoad = function () {
        };
        /** Function call when window.resize **/
        this.onResize = function () {
        };
    }
    return Main;
}());
exports.Main = Main;
var APP = new Main();
document.addEventListener("DOMContentLoaded", function (event) {
    APP.loaded();
});
window.onload = function () {
    APP.onLoad();
};
window.onresize = function () {
    APP.onResize();
};
//# sourceMappingURL=main.js.map