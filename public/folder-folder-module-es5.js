(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/fast/fast.component.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/fast/fast.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFastFastComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"flip-container\" (click)=\"flip()\" [class.flipped]=\"flipped\">\n\n  <div class=\"flipper\">\n\n\n    <div class=\"front\">\n\n\n      <ng-content select=\".flash-card-front\"></ng-content>\n\n    </div>\n\n    <div class=\"back\">\n\n      <ng-content select=\".flash-card-back\"></ng-content>\n\n    </div>\n\n  </div>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderFolderPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"font-size: x-large;\">{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"4\" size-xs=\"12\" size-sm=\"6\" *ngFor=\"let i of courses\">\n        <ion-card [routerLink]=\"['/subjects',i._id]\">\n          <div class=\"autosize\" style=\"height: 200px;\">\n            <img style=\"width:100%; \n            height:100%; \" src=\"https://smedia2.intoday.in/indiatoday/images/stories/2016July/3_072016052319.jpg\" />\n          </div>\n          <ion-card-header>\n            <ion-card-title>{{i.courseName}}</ion-card-title>\n            <ion-card-subtitle>{{i.description}}:batch</ion-card-subtitle>\n          </ion-card-header>\n\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" (click)=\"presentModal()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/Components/fast/fast.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/Components/fast/fast.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFastFastComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* entire container, keeps perspective */\n.flip-container {\n  perspective: 1000px;\n}\n/* flip the pane when hovered */\n.flip-container.flipped .flipper {\n  transform: rotateY(180deg);\n}\n.flip-container,\n.front,\n.back {\n  width: 90vw;\n  height: 75vh;\n  margin: 20px auto;\n  border-radius: 10px;\n}\n/* flip speed goes here */\n.flipper {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n/* hide back of pane during swap */\n.front {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ecf0f1;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 0px 8px 4px -4px rgba(163, 163, 163, 0.25);\n  border: 1px solid white;\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.back {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #ecf0f1;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  box-shadow: 0px 8px 4px -4px rgba(163, 163, 163, 0.25);\n  border: 1px solid #dee2e3;\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/* front pane, placed above back */\n.front {\n  z-index: 2;\n  /* for firefox 31 */\n  transform: rotateY(0deg);\n}\n/* back, initially hidden pane */\n.back {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mYXN0L2Zhc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQUE7QUFDQTtFQUNFLG1CQUFBO0FBQ0Y7QUFFQSwrQkFBQTtBQUNBO0VBQ0UsMEJBQUE7QUFDRjtBQUVBOzs7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBLHlCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBLGtDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUdBLHNEQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUdBLHNEQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGO0FBRUEsa0NBQUE7QUFDQTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7QUFFQSxnQ0FBQTtBQUNBO0VBQ0UsMEJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZmFzdC9mYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZW50aXJlIGNvbnRhaW5lciwga2VlcHMgcGVyc3BlY3RpdmUgKi9cclxuLmZsaXAtY29udGFpbmVyIHtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcblxyXG4vKiBmbGlwIHRoZSBwYW5lIHdoZW4gaG92ZXJlZCAqL1xyXG4uZmxpcC1jb250YWluZXIuZmxpcHBlZCAuZmxpcHBlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5mbGlwLWNvbnRhaW5lcixcclxuLmZyb250LFxyXG4uYmFjayB7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgaGVpZ2h0OiA3NXZoO1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXHJcbi5mbGlwcGVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBoaWRlIGJhY2sgb2YgcGFuZSBkdXJpbmcgc3dhcCAqL1xyXG4uZnJvbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDRweCAtNHB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC4yNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYxO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCA4cHggNHB4IC00cHggcmdiYSgxNjMsIDE2MywgMTYzLCAwLjI1KTtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDRweCAtNHB4IHJnYmEoMTYzLCAxNjMsIDE2MywgMC4yNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlMztcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4vKiBmcm9udCBwYW5lLCBwbGFjZWQgYWJvdmUgYmFjayAqL1xyXG4uZnJvbnQge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgLyogZm9yIGZpcmVmb3ggMzEgKi9cclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbn1cclxuXHJcbi8qIGJhY2ssIGluaXRpYWxseSBoaWRkZW4gcGFuZSAqL1xyXG4uYmFjayB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/Components/fast/fast.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/Components/fast/fast.component.ts ***!
      \***************************************************/

    /*! exports provided: FastComponent */

    /***/
    function srcAppComponentsFastFastComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FastComponent", function () {
        return FastComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FastComponent = /*#__PURE__*/function () {
        function FastComponent() {
          _classCallCheck(this, FastComponent);

          this.flipped = false;
        }

        _createClass(FastComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "flip",
          value: function flip() {
            this.flipped = !this.flipped;
          }
        }]);

        return FastComponent;
      }();

      FastComponent.ctorParameters = function () {
        return [];
      };

      FastComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fast',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./fast.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/fast/fast.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./fast.component.scss */
        "./src/app/Components/fast/fast.component.scss"))["default"]]
      })], FastComponent);
      /***/
    },

    /***/
    "./src/app/Components/fast/fast.module.ts":
    /*!************************************************!*\
      !*** ./src/app/Components/fast/fast.module.ts ***!
      \************************************************/

    /*! exports provided: FastModule */

    /***/
    function srcAppComponentsFastFastModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FastModule", function () {
        return FastModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _fast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fast.component */
      "./src/app/Components/fast/fast.component.ts");

      var FastModule = function FastModule() {
        _classCallCheck(this, FastModule);
      };

      FastModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_fast_component__WEBPACK_IMPORTED_MODULE_3__["FastComponent"]],
        exports: [_fast_component__WEBPACK_IMPORTED_MODULE_3__["FastComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], FastModule);
      /***/
    },

    /***/
    "./src/app/folder/folder-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/folder/folder-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: FolderPageRoutingModule */

    /***/
    function srcAppFolderFolderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function () {
        return FolderPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./folder.page */
      "./src/app/folder/folder.page.ts");

      var routes = [{
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
      }];

      var FolderPageRoutingModule = function FolderPageRoutingModule() {
        _classCallCheck(this, FolderPageRoutingModule);
      };

      FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FolderPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/folder.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/folder/folder.module.ts ***!
      \*****************************************/

    /*! exports provided: FolderPageModule */

    /***/
    function srcAppFolderFolderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FolderPageModule", function () {
        return FolderPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./folder-routing.module */
      "./src/app/folder/folder-routing.module.ts");
      /* harmony import */


      var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./folder.page */
      "./src/app/folder/folder.page.ts");
      /* harmony import */


      var _Components_fast_fast_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Components/fast/fast.module */
      "./src/app/Components/fast/fast.module.ts");
      /* harmony import */


      var _flash_flash_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../flash/flash.module */
      "./src/app/flash/flash.module.ts");

      var FolderPageModule = function FolderPageModule() {
        _classCallCheck(this, FolderPageModule);
      };

      FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"], _Components_fast_fast_module__WEBPACK_IMPORTED_MODULE_7__["FastModule"], _flash_flash_module__WEBPACK_IMPORTED_MODULE_8__["FlashPageModule"]],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
      })], FolderPageModule);
      /***/
    },

    /***/
    "./src/app/folder/folder.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/folder/folder.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderFolderPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content {\n  --background: url('grad.jpg') 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQU1BO0VBQ0UscURBQUE7QUFIRiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9mb2xkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9va2trLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuLy8gfVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvZ3JhZC5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/folder/folder.page.ts":
    /*!***************************************!*\
      !*** ./src/app/folder/folder.page.ts ***!
      \***************************************/

    /*! exports provided: FolderPage */

    /***/
    function srcAppFolderFolderPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FolderPage", function () {
        return FolderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Components_add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../Components/add-subject/add-subject.component */
      "./src/app/Components/add-subject/add-subject.component.ts");
      /* harmony import */


      var _Shared_index_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Shared/index.service */
      "./src/app/Shared/index.service.ts");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! socket.io-client */
      "./node_modules/socket.io-client/lib/index.js");
      /* harmony import */


      var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../environments/environment */
      "./src/environments/environment.ts");

      var FolderPage = /*#__PURE__*/function () {
        function FolderPage(activatedRoute, popoverController, modalctrl, indexser) {
          _classCallCheck(this, FolderPage);

          this.activatedRoute = activatedRoute;
          this.popoverController = popoverController;
          this.modalctrl = modalctrl;
          this.indexser = indexser;
          this.fastquestions = true;
          this.zim = false;
          this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 2,
            speed: 400
          };
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_6___default()(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apibaseurl);
        }

        _createClass(FolderPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.call = 'zoom';
            this.folder = this.activatedRoute.snapshot.paramMap.get('id');

            if (this.folder === 'FastQuestions') {
              this.fastquestions = true;
              console.log(this.fastquestions);
            } else {
              this.zim = true;
              this.fastquestions = false;
              console.log(this.zim);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getCourses();
            this.socket.on('refreshgettingCourse', function (data) {
              _this.getCourses();
            });
          }
        }, {
          key: "getCourses",
          value: function getCourses() {
            var _this2 = this;

            this.indexser.getCourse().subscribe(function (res) {
              console.log(res);
              _this2.courses = res.record;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "removeFromarray",
          value: function removeFromarray(id) {
            this.maths = this.maths.filter(function (el) {
              return el.id != id;
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalctrl.create({
                        component: _Components_add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_4__["AddSubjectComponent"],
                        cssClass: 'my-custom-class'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return FolderPage;
      }();

      FolderPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _Shared_index_service__WEBPACK_IMPORTED_MODULE_5__["IndexService"]
        }];
      };

      FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./folder.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./folder.page.scss */
        "./src/app/folder/folder.page.scss"))["default"]]
      })], FolderPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-folder-module-es5.js.map