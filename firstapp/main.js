(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: #04192E;\r\n    display: block;\r\n    padding: 3%;\r\n    color:white;\r\n    font-size: 26px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <div class=\"container\">\n      <div class=\"row header\">\n        <div class=\"col\">\n          <a style=\"color:white;\">Kausik blog application</a>\n        </div>\n      </div>\n    </div>\n    </div>\n\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" >Brand</a>\n          </div>\n      \n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n             <li> <a [routerLink]=\"['/home']\">Home </a></li>\n              <li><a [routerLink]=\"['/about']\" >About</a></li>\n              <li><a [routerLink]=\"['/create']\">Post A Blog</a></li>\n            </ul>\n            \n          </div><!-- /.navbar-collapse -->\n        </div><!-- /.container-fluid -->\n      </nav>\n      \n<br/>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Hi welcome for firstApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog-http.service */ "./src/app/blog-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//router module include for  setting up the route 











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_15__["NotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                //router module is used to declare for possible route declareation
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] },
                    { path: 'blog/:blogId', component: _view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"] },
                    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"] },
                    { path: 'edit/:blogId', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"] },
                    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_15__["NotfoundComponent"] }
                ])
            ],
            providers: [_blog_service__WEBPACK_IMPORTED_MODULE_16__["BlogService"], _blog_http_service__WEBPACK_IMPORTED_MODULE_17__["BlogHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-http.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog-http.service.ts ***!
  \**************************************/
/*! exports provided: BlogHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogHttpService", function() { return BlogHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable */ "./node_modules/rxjs/observable.js");
/* harmony import */ var rxjs_observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogHttpService = /** @class */ (function () {
    function BlogHttpService(_http) {
        this._http = _http;
        this.baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
        console.log("blog-http service was called");
    }
    BlogHttpService.prototype.handleError = function (err) {
        console.log("Handle error Http Calls");
        console.log(err.message);
        return rxjs_observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    BlogHttpService.prototype.getallBlogs = function () {
        var myResponse = this._http.get(this.baseUrl + '/all?authToken=ZTBiODc2NDJiMGYzNWIzZDJhNjNjM2E4MTI5MTNhM2IyY2I1YzFkMWQyODIyY2NkYTgyNjFlZGI3YzQ1ODg2MzllOGE1ODRhOTQyZjQ1NzkzYjVjOTEwNGY5ZWM5Njk3NTBmZWM3YmYxM2E0NTI0MmNmZmZmZGZmYmRhYmFkOWU5Nw==');
        console.log(myResponse);
        return myResponse;
    };
    //method to get a particular blog
    BlogHttpService.prototype.getSingleBlogInformation = function (currentBlogId) {
        console.log(currentBlogId);
        var myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=ZTBiODc2NDJiMGYzNWIzZDJhNjNjM2E4MTI5MTNhM2IyY2I1YzFkMWQyODIyY2NkYTgyNjFlZGI3YzQ1ODg2MzllOGE1ODRhOTQyZjQ1NzkzYjVjOTEwNGY5ZWM5Njk3NTBmZWM3YmYxM2E0NTI0MmNmZmZmZGZmYmRhYmFkOWU5Nw==');
        console.log(myResponse);
        return myResponse;
    };
    //method of create blog
    BlogHttpService.prototype.createBlog = function (blogData) {
        var myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=ZTBiODc2NDJiMGYzNWIzZDJhNjNjM2E4MTI5MTNhM2IyY2I1YzFkMWQyODIyY2NkYTgyNjFlZGI3YzQ1ODg2MzllOGE1ODRhOTQyZjQ1NzkzYjVjOTEwNGY5ZWM5Njk3NTBmZWM3YmYxM2E0NTI0MmNmZmZmZGZmYmRhYmFkOWU5Nw==', blogData);
        console.log(myResponse);
        return myResponse; //add this line
    };
    //method of delete blog
    BlogHttpService.prototype.deleteBlog = function (blogId) {
        var data = {};
        var myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=ZTBiODc2NDJiMGYzNWIzZDJhNjNjM2E4MTI5MTNhM2IyY2I1YzFkMWQyODIyY2NkYTgyNjFlZGI3YzQ1ODg2MzllOGE1ODRhOTQyZjQ1NzkzYjVjOTEwNGY5ZWM5Njk3NTBmZWM3YmYxM2E0NTI0MmNmZmZmZGZmYmRhYmFkOWU5Nw==', data);
        console.log(myResponse);
        return myResponse;
    };
    //method of edit blog
    BlogHttpService.prototype.editBlog = function (blogId, blogData) {
        var myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=ZTBiODc2NDJiMGYzNWIzZDJhNjNjM2E4MTI5MTNhM2IyY2I1YzFkMWQyODIyY2NkYTgyNjFlZGI3YzQ1ODg2MzllOGE1ODRhOTQyZjQ1NzkzYjVjOTEwNGY5ZWM5Njk3NTBmZWM3YmYxM2E0NTI0MmNmZmZmZGZmYmRhYmFkOWU5Nw==', blogData);
        console.log(myResponse);
        return myResponse;
    };
    BlogHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogHttpService);
    return BlogHttpService;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogService = /** @class */ (function () {
    function BlogService() {
        this.allBlogs = [
            {
                "Id": 1,
                "lastModified": "27/12/2018",
                "createDate": "12/01/2015",
                "tags": [],
                "author": "admin",
                "category": "comedy",
                "isPublished": true,
                "views": 0,
                "bodyHtml": "this is blog body",
                "description": "this is blog 1 description",
                "title": "this is blog 1"
            },
            {
                "Id": 2,
                "lastModified": "27/12/2018",
                "createDate": "12/01/2015",
                "tags": [],
                "author": "admin",
                "category": "comedy",
                "isPublished": true,
                "views": 0,
                "bodyHtml": "this is blog body",
                "description": "this is blog 2 description",
                "title": "this is blog 2"
            },
            {
                "Id": 3,
                "lastModified": "27/12/2018",
                "createDate": "12/01/2015",
                "tags": [],
                "author": "admin",
                "category": "comedy",
                "isPublished": true,
                "views": 0,
                "bodyHtml": "this is blog body",
                "description": "this is blog 3 description",
                "title": "this is blog 3"
            }
        ];
        console.log("service constructor is called");
    }
    //method to return all blogs
    BlogService.prototype.getallBlogs = function () {
        return this.allBlogs;
    };
    //method to get a particular blog
    BlogService.prototype.getSingleBlogInformation = function (currentBlogId) {
        //using a for loop 
        for (var _i = 0, _a = this.allBlogs; _i < _a.length; _i++) {
            var blog = _a[_i];
            if (blog.Id == currentBlogId) {
                this.currentBlog = blog;
            }
        }
        console.log(this.currentBlog);
        return this.currentBlog;
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n "

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n\n  <div class=\"row\" style=\"text-align:left\">\n    <div class=\"col-md-12\">\n      <form #createBlogForm=\"ngForm\" (ngSubmit)=\"createBlog()\">\n\n        <div class=\"form-group\">\n\n\n          <label>Blog Title</label>\n          <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"blogTitle\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Enter blog Title\"\n            required>\n\n        </div>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n         Blog Title is required \n        </div>\n\n        <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"blogDescription\" #description=\"ngModel\" class=\"form-control\" placeholder=\"Enter Description\"\n            required>\n        </div>\n        <div class=\"form-group\">\n          <label>Enter the blog body</label>\n          <textarea name=\"blogBodyHtml\" [(ngModel)]=\"blogBodyHtml\" #bodyHtml=\"ngModel\" class=\"form-control\" rows=\"3\" required></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Category</label>\n          <select [(ngModel)]=\"blogCategory\" #category=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n                <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>\n              </select>\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.form.valid\">Post the blog</button>\n      </form>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = /** @class */ (function () {
    function CreateComponent(blogHttpService, _route, router, toastr) {
        this.blogHttpService = blogHttpService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.possibleCategories = ["Comedy", "Drama", "Technologies", "Action"];
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createBlog = function () {
        var _this = this;
        var blogData = {
            title: this.blogTitle,
            description: this.blogDescription,
            blogBody: this.blogBodyHtml,
            category: this.blogCategory
        }; // end og blog data
        console.log(blogData);
        this.blogHttpService.createBlog(blogData).subscribe(function (data) {
            console.log("logging Data");
            console.log(data);
            _this.toastr.success('Blog Posted Successfully!', 'Success!');
            setTimeout(function () {
                _this.router.navigate(['/blog', data.data.blogId]);
            }, 2000);
        }, function (error) {
            console.log("error message");
            console.log(error.errorMessage);
            _this.toastr.error('Some Error occured!', 'Oops!');
        });
    }; //end of create blog method
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_http_service__WEBPACK_IMPORTED_MODULE_1__["BlogHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"currentBlog\">\n  <h3>Edit this blog</h3>\n  <div class=\"row\" style=\"text-align:left\">\n    <div class=\"col-md-12\">\n      <form #createBlogForm=\"ngForm\" (ngSubmit)=\"editThisBlog()\">\n\n        <div class=\"form-group\">\n\n\n          <label>Blog Title</label>\n          <input type=\"text\" name=\"blogTitle\" [(ngModel)]=\"currentBlog.title\" #title=\"ngModel\" class=\"form-control\" placeholder=\"Enter blog Title\"\n            required>\n\n        </div>\n        <div [hidden]=\"title.valid || title.pristine\" class=\"alert alert-danger\">\n         Blog Title is required \n        </div>\n\n        <div class=\"form-group\">\n          <label>Description</label>\n          <input type=\"text\" name=\"blogDescription\" [(ngModel)]=\"currentBlog.description\" #description=\"ngModel\" class=\"form-control\" placeholder=\"Enter Description\"\n            required>\n        </div>\n        <div class=\"form-group\">\n          <label>Enter the blog body</label>\n          <textarea name=\"blogBodyHtml\" [(ngModel)]=\"currentBlog.bodyHtml\" #bodyHtml=\"ngModel\" class=\"form-control\" rows=\"3\" required></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label>Category</label>\n          <select [(ngModel)]=\"currentBlog.category\" #category=\"ngModel\" name=\"blogCategory\" class=\"form-control\" id=\"category\" required>\n                <option *ngFor=\"let category of possibleCategories\" [value]=\"category\">{{category}}</option>\n              </select>\n        </div>\n\n\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!createBlogForm.form.valid\">Edit the blog</button>\n      </form>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(blogHttpService, _route, router, toastr) {
        this.blogHttpService = blogHttpService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.possibleCategories = ["Comedy", "Drama", "Technologies", "Action"];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(" blog edit ngOnInit called");
        //getting blog id from the route
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        //calling the function to get the blog id with this blog  ot of overall array
        /* this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
         console.log(this.currentBlog);*/
        this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            console.log("logging Data");
            console.log(data);
            _this.currentBlog = data["data"];
        }, function (error) {
            console.log("error message");
            console.log(error.errorMessage);
        });
    }; // end of ngonit function
    EditComponent.prototype.editThisBlog = function () {
        var _this = this;
        this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(function (data) {
            console.log("logging Data");
            console.log(data);
            _this.toastr.success('Blog Edited Successfully!', 'Success!');
            setTimeout(function () {
                _this.router.navigate(['/blog', _this.currentBlog.blogId]);
            }, 2000);
        }, function (error) {
            console.log("error message");
            console.log(error.errorMessage);
            _this.toastr.error('Some Error occured!', 'Oops!');
        });
    }; //end of edit blog
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_http_service__WEBPACK_IMPORTED_MODULE_1__["BlogHttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:22px\">All Blogs </div>\n    <br><br><br><br>\n  </div>\n  <div class=\"row\" style=\"text-align:center\" *ngIf=\"allBlogs.length>0\">\n    <div *ngFor=\"let blog of allBlogs\" class=\"col-md-4\">\n\n      <div class=\"panel panel-default\">\n        \n        <div class=\"panel-heading\">{{blog.title | uppercase}}</div>\n        <div class=\"panel-body\">\n            <p>{{blog.description}}</p>\n        </div>\n        <div class=\"panel-footer\">Posted on {{blog.created | date}}<br/> by {{blog.author}}\n        <br/><br/><a [routerLink]=\"['/blog',blog.blogId]\" class=\"btn btn-primary\">Read</a>\n        \n        </div>\n        \n      </div>\n\n      <br/>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { BlogService } from '../blog.service';

var HomeComponent = /** @class */ (function () {
    /* constructor(private blogService:BlogService) {
       console.log("Home componenet constructor log");
       this.allBlogs=this.blogService.getallBlogs();
       console.log(this.allBlogs);
       
   
      }*/
    function HomeComponent(blogHttpService) {
        this.blogHttpService = blogHttpService;
        console.log("Home componenet constructor log");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Home componenet onit called");
        // this.allBlogs=this.blogHttpService.getallBlogs();
        this.allBlogs = this.blogHttpService.getallBlogs().subscribe(function (data) {
            console.log("logging Data");
            console.log(data);
            _this.allBlogs = data["data"];
        }, function (error) {
            console.log("error message");
            console.log(error.errorMessage);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("Home componenet destroye ");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_http_service__WEBPACK_IMPORTED_MODULE_1__["BlogHttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n this is custome message.\n</h1>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"currentBlog\">\n    <div class=\"col-md-12\">\n      <h2>{{currentBlog.title}}</h2>\n      <!-- <small>blog number - {{currentBlog.blogId}}</small> -->\n      <p>posted by {{currentBlog.author}} on {{currentBlog.created | date}}</p>\n      <p *ngIf=\"currentBlog.tags.length>0\">tags : <span *ngFor=\"let tag of currentBlog.tags;let first=first;let last=last\">{{tag}}{{last ? '' : ', '}}</span></p>\n      <hr>\n      <div [innerHtml]=\"currentBlog.bodyHtml\"></div>\n      <hr>\n      <h5>category - {{currentBlog.category}}</h5>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\" *ngIf=\"currentBlog\">\n    <div class=\"col-md-4\">\n\n      <a class=\"btn btn-primary\"  [routerLink]=\"['/edit',currentBlog.blogId]\">Edit </a>\n\n    </div>\n    <div class=\"col-md-4\">\n\n      <a class=\"btn btn-danger\" (click)=\"deleteThisBlog()\">Delete </a>\n\n    </div>\n    <div class=\"col-md-4\">\n\n      <a class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back </a>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _blog_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blog-http.service */ "./src/app/blog-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// importing route related code




var ViewComponent = /** @class */ (function () {
    function ViewComponent(_route, router, blogService, blogHttpService, toastr, location) {
        this._route = _route;
        this.router = router;
        this.blogService = blogService;
        this.blogHttpService = blogHttpService;
        this.toastr = toastr;
        this.location = location;
        console.log(" blog view constructor is calling");
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(" blog view ngOnInit called");
        //getting blog id from the route
        var myBlogId = this._route.snapshot.paramMap.get('blogId');
        console.log(myBlogId);
        //calling the function to get the blog id with this blog  ot of overall array
        /* this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
         console.log(this.currentBlog);*/
        this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(function (data) {
            console.log("logging Data");
            console.log(data);
            _this.currentBlog = data["data"];
        }, function (error) {
            console.log("error message");
            console.log(error.errorMessage);
        });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        console.log("blog view componenet destroye ");
    };
    ViewComponent.prototype.deleteThisBlog = function () {
        var _this = this;
        this.blogHttpService.deleteBlog(this.currentBlog.myBlogId).subscribe(function (data) {
            console.log("logging Data");
            console.log(data);
            _this.toastr.success('Blog Deleted Successfully!', 'Success!');
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 2000);
        }, function (error) {
            console.log("error message");
            console.log(error.errorMessage);
            _this.toastr.error('Some Error occured!', 'Oops!');
        });
    }; //end of delete blog
    ViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"], _blog_http_service__WEBPACK_IMPORTED_MODULE_5__["BlogHttpService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\a610715\Desktop\k_backup\Documents\aedwisor\angular\test\firstapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map