(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-subjects-subjects-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/subjects/subjects.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/subjects/subjects.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSubjectsSubjectsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <span class=\"dots\" style=\"font-size:30px;cursor:pointer; color: white;\" (click)=\"openNav()\">&#9776;</span>\n    </ion-buttons>\n    <ion-title color=\"light\">subjects</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div id=\"mySidenav\" class=\"sidenav\" style=\"margin-top: 50px;\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <div class=\"\" style=\"margin-top: 25px;\">\n      <a *ngFor=\"let i of coursearr\" (click)=\"getflash(i.subjectName, i._id, i.courseId)\">{{i.subjectName}}</a>\n    </div>\n  </div>\n\n\n  <div id=\"main\" *ngIf=\"datagot\">\n    <app-flash></app-flash>\n  </div>\n\n\n  <!-- <div class=\"fab\" *ngIf=\"hide\">\n    <ion-fab vertical=\"center\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button (click)=\"openNav()\">\n        <ion-icon name=\"share\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div> -->\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/Pages/subjects/subjects-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/Pages/subjects/subjects-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: SubjectsPageRoutingModule */

    /***/
    function srcAppPagesSubjectsSubjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectsPageRoutingModule", function () {
        return SubjectsPageRoutingModule;
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


      var _subjects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./subjects.page */
      "./src/app/Pages/subjects/subjects.page.ts");

      var routes = [{
        path: '',
        component: _subjects_page__WEBPACK_IMPORTED_MODULE_3__["SubjectsPage"]
      }];

      var SubjectsPageRoutingModule = function SubjectsPageRoutingModule() {
        _classCallCheck(this, SubjectsPageRoutingModule);
      };

      SubjectsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SubjectsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/subjects/subjects.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/Pages/subjects/subjects.module.ts ***!
      \***************************************************/

    /*! exports provided: SubjectsPageModule */

    /***/
    function srcAppPagesSubjectsSubjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectsPageModule", function () {
        return SubjectsPageModule;
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


      var _subjects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./subjects-routing.module */
      "./src/app/Pages/subjects/subjects-routing.module.ts");
      /* harmony import */


      var _subjects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./subjects.page */
      "./src/app/Pages/subjects/subjects.page.ts");
      /* harmony import */


      var src_app_flash_flash_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/flash/flash.module */
      "./src/app/flash/flash.module.ts");

      var SubjectsPageModule = function SubjectsPageModule() {
        _classCallCheck(this, SubjectsPageModule);
      };

      SubjectsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _subjects_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubjectsPageRoutingModule"], src_app_flash_flash_module__WEBPACK_IMPORTED_MODULE_7__["FlashPageModule"]],
        declarations: [_subjects_page__WEBPACK_IMPORTED_MODULE_6__["SubjectsPage"]]
      })], SubjectsPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/subjects/subjects.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/Pages/subjects/subjects.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSubjectsSubjectsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: transparent;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n}\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}\n\n#main {\n  transition: margin-left 0.5s;\n  padding: 16px;\n}\n\n@media screen and (max-height: 1000px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n\n  .sidenav a {\n    font-size: 25px;\n  }\n\n  .sidenav {\n    width: 200px;\n  }\n\n  #main {\n    margin-left: 200px;\n  }\n}\n\nion-content {\n  --background: url('grad.jpg') 0 0/100% 100% no-repeat;\n}\n\n.item {\n  background-color: transparent;\n}\n\n.zoom {\n  transition: transform 0.2s;\n}\n\n.zoom:hover {\n  /* IE 9 */\n  /* Safari 3-8 */\n  transform: scale(1.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvc3ViamVjdHMvc3ViamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxlQUFBO0VBRUY7O0VBQUE7SUFDRSxZQUFBO0VBR0Y7O0VBREE7SUFDRSxrQkFBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRSxxREFBQTtBQUdGOztBQUFBO0VBQ0UsNkJBQUE7QUFHRjs7QUFBQTtFQUNFLDBCQUFBO0FBR0Y7O0FBQUE7RUFDNkIsU0FBQTtFQUNJLGVBQUE7RUFDL0Isc0JBQUE7QUFLRiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3N1YmplY3RzL3N1YmplY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuI21haW4ge1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXM7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDEwMDBweCkge1xyXG4gIC5zaWRlbmF2IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuc2lkZW5hdiBhIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgLnNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICAjbWFpbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9ncmFkLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi56b29tIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxufVxyXG5cclxuLnpvb206aG92ZXIge1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7IC8qIElFIDkgKi9cclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogU2FmYXJpIDMtOCAqL1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/Pages/subjects/subjects.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/Pages/subjects/subjects.page.ts ***!
      \*************************************************/

    /*! exports provided: SubjectsPage */

    /***/
    function srcAppPagesSubjectsSubjectsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectsPage", function () {
        return SubjectsPage;
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


      var src_app_Shared_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Shared/index.service */
      "./src/app/Shared/index.service.ts");

      var SubjectsPage = /*#__PURE__*/function () {
        function SubjectsPage(indexser, activatedRoute) {
          _classCallCheck(this, SubjectsPage);

          this.indexser = indexser;
          this.activatedRoute = activatedRoute;
        }

        _createClass(SubjectsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.hide = false;
            this.datagot = false;
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
            this.indexser.getSingleCourse(this.id).subscribe(function (res) {
              console.log(res);
              _this.coursearr = res.record[0].subjects;
              _this.data = {
                name: _this.coursearr[0].subjectName,
                subId: _this.coursearr[0]._id,
                courseid: _this.coursearr[0].courseId
              };

              _this.indexser.subject.next(_this.data);

              console.log(_this.data);
              _this.datagot = true;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "openNav",
          value: function openNav() {
            this.hide = false;
            document.getElementById('mySidenav').style.width = '200px';
            document.getElementById('main').style.marginLeft = '200px';
          }
        }, {
          key: "closeNav",
          value: function closeNav() {
            this.hide = true;
            document.getElementById('mySidenav').style.width = '0px';
            document.getElementById('main').style.marginLeft = '0';
          }
        }, {
          key: "getflash",
          value: function getflash(subjname, id, cid) {
            this.data = {
              name: subjname,
              subId: id,
              courseid: cid
            };
            this.indexser.subject.next(this.data);
          }
        }]);

        return SubjectsPage;
      }();

      SubjectsPage.ctorParameters = function () {
        return [{
          type: src_app_Shared_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      SubjectsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subjects',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./subjects.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/subjects/subjects.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./subjects.page.scss */
        "./src/app/Pages/subjects/subjects.page.scss"))["default"]]
      })], SubjectsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Pages-subjects-subjects-module-es5.js.map