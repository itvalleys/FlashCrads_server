(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-conceptData-levels-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/editquestion/editquestion.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/editquestion/editquestion.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsEditquestionEditquestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"font-size: x-large;\">Edit Question/Answer</ion-title>\n    <ion-icon name=\"close\" slot=\"end\" color=\"light\" (click)=\"  dismiss()\" style=\"font-size: xx-large;\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label>Question:</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"que\" name=\"que\" value=\"{{que}}\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item>\n          <ion-label>Answer:</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"ans\" name=\"ans\" value=\"{{ans}}\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <br>\n      <br>\n      <ion-col size=\"6\" offset=\"3\">\n        <ion-button expand=\"block\" (click)=\"editSingleQue()\">\n          submit\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/conceptData/levels.page.html":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/conceptData/levels.page.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesConceptDataLevelsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"color: white;\">levels</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div class=\"\" *ngIf=\"qnA\">\n\n    <table id=\"customers\">\n      <tr>\n        <th>Qestions</th>\n        <th>Answers</th>\n        <th>Actions</th>\n      </tr>\n      <tr *ngFor=\"let i of qnA\">\n        <td>{{i.Questions}}</td>\n        <td>{{i.Answers}}</td>\n        <td>\n          <ion-icon name=\"pencil\" slot=\"start\" color=\"warning\" (click)=\"edit(i._id)\"></ion-icon>\n          <ion-icon name=\"trash\" slot=\"end\" color=\"danger\" (click)=\"delete(i._id)\" class=\"move\"></ion-icon>\n        </td>\n      </tr>\n    </table>\n\n\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/Components/editquestion/editquestion.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/Components/editquestion/editquestion.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsEditquestionEditquestionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZWRpdHF1ZXN0aW9uL2VkaXRxdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/Components/editquestion/editquestion.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/Components/editquestion/editquestion.component.ts ***!
      \*******************************************************************/

    /*! exports provided: EditquestionComponent */

    /***/
    function srcAppComponentsEditquestionEditquestionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditquestionComponent", function () {
        return EditquestionComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_Shared_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Shared/index.service */
      "./src/app/Shared/index.service.ts");

      var EditquestionComponent = /*#__PURE__*/function () {
        function EditquestionComponent(modalctrl, indexservice) {
          _classCallCheck(this, EditquestionComponent);

          this.modalctrl = modalctrl;
          this.indexservice = indexservice;
        }

        _createClass(EditquestionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.que = this.data[0].Questions;
            this.ans = this.data[0].Answers;
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            this.modalctrl.dismiss({
              dismissed: true
            });
          }
        }, {
          key: "editSingleQue",
          value: function editSingleQue() {
            var editdata = {
              id: this.data[0]._id,
              que: this.que,
              ans: this.ans
            };
            this.indexservice.editSingleQnA(editdata).subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return EditquestionComponent;
      }();

      EditquestionComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_Shared_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"]
        }];
      };

      EditquestionComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      EditquestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editquestion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./editquestion.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/editquestion/editquestion.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./editquestion.component.scss */
        "./src/app/Components/editquestion/editquestion.component.scss"))["default"]]
      })], EditquestionComponent);
      /***/
    },

    /***/
    "./src/app/Pages/conceptData/levels-routing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/Pages/conceptData/levels-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: LevelsPageRoutingModule */

    /***/
    function srcAppPagesConceptDataLevelsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelsPageRoutingModule", function () {
        return LevelsPageRoutingModule;
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


      var _levels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./levels.page */
      "./src/app/Pages/conceptData/levels.page.ts");

      var routes = [{
        path: '',
        component: _levels_page__WEBPACK_IMPORTED_MODULE_3__["LevelsPage"]
      }];

      var LevelsPageRoutingModule = function LevelsPageRoutingModule() {
        _classCallCheck(this, LevelsPageRoutingModule);
      };

      LevelsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LevelsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/conceptData/levels.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/Pages/conceptData/levels.module.ts ***!
      \****************************************************/

    /*! exports provided: LevelsPageModule */

    /***/
    function srcAppPagesConceptDataLevelsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelsPageModule", function () {
        return LevelsPageModule;
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


      var _levels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./levels-routing.module */
      "./src/app/Pages/conceptData/levels-routing.module.ts");
      /* harmony import */


      var _levels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./levels.page */
      "./src/app/Pages/conceptData/levels.page.ts");

      var LevelsPageModule = function LevelsPageModule() {
        _classCallCheck(this, LevelsPageModule);
      };

      LevelsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _levels_routing_module__WEBPACK_IMPORTED_MODULE_5__["LevelsPageRoutingModule"]],
        declarations: [_levels_page__WEBPACK_IMPORTED_MODULE_6__["LevelsPage"]]
      })], LevelsPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/conceptData/levels.page.scss":
    /*!****************************************************!*\
      !*** ./src/app/Pages/conceptData/levels.page.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesConceptDataLevelsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#customers {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td,\n#customers th {\n  border: 1px solid #ddd;\n  padding: 20px;\n}\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers tr:hover {\n  background-color: #ddd;\n}\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #967abd;\n  color: white;\n}\n\nion-icon {\n  font-size: x-large;\n}\n\n.move {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvY29uY2VwdERhdGEvbGV2ZWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVFLHNIQUFBO0VBRUEseUJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7O0VBRUUsc0JBQUE7RUFDQSxhQUFBO0FBTEY7O0FBUUE7RUFDRSx5QkFBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9jb25jZXB0RGF0YS9sZXZlbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnQge1xyXG4vLyAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvZ3JhZC5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuLy8gfVxyXG5cclxuI2N1c3RvbWVycyB7XHJcbiAgLy9mb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLFxyXG4gICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0ZCxcclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY3YWJkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLm1vdmUge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/Pages/conceptData/levels.page.ts":
    /*!**************************************************!*\
      !*** ./src/app/Pages/conceptData/levels.page.ts ***!
      \**************************************************/

    /*! exports provided: LevelsPage */

    /***/
    function srcAppPagesConceptDataLevelsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelsPage", function () {
        return LevelsPage;
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _Components_editquestion_editquestion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../Components/editquestion/editquestion.component */
      "./src/app/Components/editquestion/editquestion.component.ts");

      var LevelsPage = /*#__PURE__*/function () {
        function LevelsPage(activatedRoute, indexser, modalctrl) {
          _classCallCheck(this, LevelsPage);

          this.activatedRoute = activatedRoute;
          this.indexser = indexser;
          this.modalctrl = modalctrl;
          this.tablestyle = 'bootstrap';
        }

        _createClass(LevelsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
            console.log(this.id);
            this.getQuestionsData(this.id);
          } // ionViewWillEnter() {
          //   this.id = this.activatedRoute.snapshot.paramMap.get('id');
          //   console.log(this.id);
          // }

        }, {
          key: "getQuestionsData",
          value: function getQuestionsData(id) {
            var _this = this;

            this.indexser.getQuestionsData(id).subscribe(function (res) {
              _this.qnA = res.record[0].QnA;
              console.log(_this.qnA);
              _this.qdata = res.record[0];
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "delete",
          value: function _delete(qid) {
            var _this2 = this;

            // console.log(this.qdata);
            console.log('delete');
            this.indexser.deleteoneQue(qid).subscribe(function (res) {
              console.log(res);

              _this2.getQuestionsData(_this2.id);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "edit",
          value: function edit(qid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var ques, modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      ques = this.qnA.filter(function (el) {
                        return el._id == qid;
                      });
                      console.log(ques);
                      _context.next = 4;
                      return this.modalctrl.create({
                        component: _Components_editquestion_editquestion_component__WEBPACK_IMPORTED_MODULE_5__["EditquestionComponent"],
                        cssClass: 'editqueModal',
                        componentProps: {
                          data: ques
                        }
                      });

                    case 4:
                      modal = _context.sent;
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LevelsPage;
      }();

      LevelsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_Shared_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      LevelsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-levels',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./levels.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/conceptData/levels.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./levels.page.scss */
        "./src/app/Pages/conceptData/levels.page.scss"))["default"]]
      })], LevelsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Pages-conceptData-levels-module-es5.js.map