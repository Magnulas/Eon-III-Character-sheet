webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add-remove-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button class=\"fa fa-plus btn btn-default\" type=\"button\" (click)=\"doAdd()\"></button>\r\n  <button class=\"fa fa-minus btn btn-default\" type=\"button\" (click)=\"doRemove()\"></button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-remove-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRemoveMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddRemoveMenuComponent = (function () {
    function AddRemoveMenuComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddRemoveMenuComponent.prototype.doAdd = function () {
        if (this.max !== null && typeof this.max !== 'undefined') {
            if (this.array.length >= this.max) {
                return;
            }
        }
        this.array.push(this.default());
        this.add.emit();
    };
    AddRemoveMenuComponent.prototype.doRemove = function () {
        if (this.min !== null && typeof this.min !== 'undefined') {
            if (this.array.length <= this.min) {
                return;
            }
        }
        this.array.pop();
        this.remove.emit();
    };
    return AddRemoveMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AddRemoveMenuComponent.prototype, "array", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], AddRemoveMenuComponent.prototype, "min", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], AddRemoveMenuComponent.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AddRemoveMenuComponent.prototype, "default", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddRemoveMenuComponent.prototype, "add", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddRemoveMenuComponent.prototype, "remove", void 0);
AddRemoveMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-remove-menu',
        template: __webpack_require__("../../../../../src/app/add-remove-menu.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], AddRemoveMenuComponent);

var _a, _b;
//# sourceMappingURL=add-remove-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media print{\r\n    .file-menu{\r\n        display:none\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"file-menu\">\r\n        <div style=\"display:inline-block\">\r\n            <button (click)=\"exportCharacter()\">Export</button>\r\n            <input-base style=\"display:inline-block\" type=\"text\" [(value)]=\"filename\"></input-base>\r\n        </div>\r\n        <button (click)=\"importCharacter()\">Import</button>\r\n        <dropbox-button [(character)]=\"character\"></dropbox-button>\r\n        <!-- <button (click)=\"dropboxChooser()\">Dropbox</button>\r\n        <button (click)=\"dropboxSaver()\">Spara</button>-->\r\n    </div>\r\n    <character-sheet [character]=\"character\" [creator]=\"functionWrapper\"></character-sheet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("../../../../../src/app/models/character.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_character_creation_functions__ = __webpack_require__("../../../../../src/app/util/character-creation-functions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    //client;
    function AppComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.character = null;
        this.functionWrapper = new __WEBPACK_IMPORTED_MODULE_2__util_character_creation_functions__["b" /* CharacterCreationFunctions */]();
        this.filename = "Karaktär";
        this.character = this.functionWrapper.newCharacter();
    }
    AppComponent.prototype.dropboxChooser = function () {
        var self = this;
        var options = {
            // Required. Called when a user selects an item in the Chooser.
            success: function (files) {
                var link = files[0].link;
                //alert("Here's the file link: " + files[0].link)
                //link = link.replace("?dl=0", "?dl=1") //TODO do better...
                //console.log(link)
                jQuery.ajax({
                    url: link,
                    async: true,
                    crossDomain: true,
                    dataType: 'text',
                    success: function (jsonText) {
                        console.log(jsonText);
                        self.character = __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */].deserialize(jsonText);
                    }
                });
            },
            // Optional. Called when the user closes the dialog without selecting a file
            // and does not include any parameters.
            cancel: function () {
            },
            // Optional. "preview" (default) is a preview link to the document for sharing,
            // "direct" is an expiring link to download the contents of the file. For more
            // information about link types, see Link types below.
            linkType: "direct",
            // Optional. A value of false (default) limits selection to a single file, while
            // true enables multiple file selection.
            multiselect: false,
            // Optional. This is a list of file extensions. If specified, the user will
            // only be able to select files with these extensions. You may also specify
            // file types, such as "video" or "images" in the list. For more information,
            // see File types below. By default, all extensions are allowed.
            extensions: ['.json'],
        };
        Dropbox.choose(options);
    };
    AppComponent.prototype.dropboxSaver = function () {
        var options = {
            // Success is called once all files have been successfully added to the user's
            // Dropbox, although they may not have synced to the user's devices yet.
            success: function () {
                // Indicate to the user that the files have been saved.
                alert("Success! Files saved to your Dropbox.");
            },
            // Progress is called periodically to update the application on the progress
            // of the user's downloads. The value passed to this callback is a float
            // between 0 and 1. The progress callback is guaranteed to be called at least
            // once with the value 1.
            progress: function (progress) { },
            // Cancel is called if the user presses the Cancel button or closes the Saver.
            cancel: function () { },
            // Error is called in the event of an unexpected response from the server
            // hosting the files, such as not being able to find a file. This callback is
            // also called if there is an error on Dropbox or if the user is over quota.
            error: function (errorMessage) { alert(errorMessage); }
        };
        /*
        var url: string;
        var filename: string;
        this.client.authenticate(function () {
            this.client.writeFile('hello.txt', 'Hello, World!', function () {
                alert('File written!');
            });
        });*/
        //Dropbox.save('https://dl.dropboxusercontent.com/1/view/066vqli7gxhjl0s/Eon/Eon%20III%20Rollformul%C3%A4r/test%20%2817%29.json', 'test 18', options);
    };
    AppComponent.prototype.exportCharacter = function () {
        var jsonData = this.character.serialize();
        var a = document.createElement("a");
        var file = new Blob([jsonData], { type: 'text/json' });
        a.href = URL.createObjectURL(file);
        a.download = this.filename + '.json';
        a.click();
    };
    AppComponent.prototype.importCharacter = function () {
        var input = document.createElement('input');
        input.type = 'file';
        input.accept = ".json";
        var self = this;
        input.addEventListener('change', function (e) {
            var file = e.target.files[0];
            if (!file) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                var contents = e.target.result;
                self.character = __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */].deserialize(contents);
            };
            self.filename = file.name.replace(/\.json$/, "");
            reader.readAsText(file);
        }, false);
        input.click();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
    //@StaticFunctionsDecorator()
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropbox_button_component__ = __webpack_require__("../../../../../src/app/dropbox-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__character_sheet_component__ = __webpack_require__("../../../../../src/app/character-sheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page1_melee_weapon_component__ = __webpack_require__("../../../../../src/app/page1/melee-weapon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page1_ranged_weapon_component__ = __webpack_require__("../../../../../src/app/page1/ranged-weapon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page1_shield_component__ = __webpack_require__("../../../../../src/app/page1/shield.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page1_armor_component__ = __webpack_require__("../../../../../src/app/page1/armor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page1_speed_index_component__ = __webpack_require__("../../../../../src/app/page1/speed-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page1_damage_grid_component__ = __webpack_require__("../../../../../src/app/page1/damage-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page2_combat_art_component__ = __webpack_require__("../../../../../src/app/page2/combat-art.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page3_rations_tracker_component__ = __webpack_require__("../../../../../src/app/page3/rations-tracker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_remove_menu_component__ = __webpack_require__("../../../../../src/app/add-remove-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__increment_decrement_menu_component__ = __webpack_require__("../../../../../src/app/increment-decrement-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__input_base_component__ = __webpack_require__("../../../../../src/app/input-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form_input_component__ = __webpack_require__("../../../../../src/app/form-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__input_group_component__ = __webpack_require__("../../../../../src/app/input-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__character_stat_input_component__ = __webpack_require__("../../../../../src/app/character-stat-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__computed_expression_component__ = __webpack_require__("../../../../../src/app/computed-expression.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__input_computed_component__ = __webpack_require__("../../../../../src/app/input-computed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__input_box_component__ = __webpack_require__("../../../../../src/app/input-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_aligned_directive__ = __webpack_require__("../../../../../src/app/directives/aligned.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_focus_inputs_directive__ = __webpack_require__("../../../../../src/app/directives/focus-inputs.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_localization_directive__ = __webpack_require__("../../../../../src/app/directives/localization.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_autosize_directive__ = __webpack_require__("../../../../../src/app/directives/autosize.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_json_circular_pipe__ = __webpack_require__("../../../../../src/app/pipes/json-circular.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__dropbox_button_component__["a" /* DropboxButtonComponent */], __WEBPACK_IMPORTED_MODULE_7__character_sheet_component__["a" /* CharacterSheetComponent */],
            __WEBPACK_IMPORTED_MODULE_8__page1_melee_weapon_component__["a" /* MeleeWeaponComponent */], __WEBPACK_IMPORTED_MODULE_12__page1_speed_index_component__["a" /* SpeedIndexComponent */],
            __WEBPACK_IMPORTED_MODULE_9__page1_ranged_weapon_component__["a" /* RangedWeaponComponent */], __WEBPACK_IMPORTED_MODULE_10__page1_shield_component__["a" /* ShieldComponent */], __WEBPACK_IMPORTED_MODULE_11__page1_armor_component__["a" /* ArmorComponent */], __WEBPACK_IMPORTED_MODULE_13__page1_damage_grid_component__["a" /* DamageGridComponent */],
            __WEBPACK_IMPORTED_MODULE_14__page2_combat_art_component__["a" /* CombatArtComponent */],
            __WEBPACK_IMPORTED_MODULE_15__page3_rations_tracker_component__["a" /* RationsTrackerComponent */],
            __WEBPACK_IMPORTED_MODULE_19__form_input_component__["a" /* FormInputComponent */], __WEBPACK_IMPORTED_MODULE_21__character_stat_input_component__["a" /* CharacterStatInputComponent */], __WEBPACK_IMPORTED_MODULE_20__input_group_component__["a" /* InputGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_18__input_base_component__["a" /* InputBaseComponent */], __WEBPACK_IMPORTED_MODULE_22__computed_expression_component__["a" /* ComputedExpressionComponent */], __WEBPACK_IMPORTED_MODULE_23__input_computed_component__["a" /* InputComputedComponent */], __WEBPACK_IMPORTED_MODULE_16__add_remove_menu_component__["a" /* AddRemoveMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_24__input_box_component__["a" /* InputBoxComponent */], __WEBPACK_IMPORTED_MODULE_17__increment_decrement_menu_component__["a" /* IncrementDecrementMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_25__directives_aligned_directive__["a" /* AlignedDirective */], __WEBPACK_IMPORTED_MODULE_26__directives_focus_inputs_directive__["a" /* FocusInputsDirective */], __WEBPACK_IMPORTED_MODULE_28__directives_autosize_directive__["a" /* Autosize */], __WEBPACK_IMPORTED_MODULE_27__directives_localization_directive__["a" /* LocalizationDirective */],
            __WEBPACK_IMPORTED_MODULE_29__pipes_json_circular_pipe__["a" /* JsonCircularPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_sortablejs__["SortablejsModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/character-sheet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { \r\n\ttext-align: center; \r\n\tcolor: #FFFFFF; \r\n\ttext-transform: uppercase; \r\n\tmargin: 0px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 { \r\n    text-align: center; \r\n}\r\n\r\n.page{\r\n    page-break-before:always;\r\n}\r\n\r\npre { font-size: x-small;  }\r\n\r\n@media screen {\r\n    .pages{\r\n        display:-webkit-box;\r\n        display:-ms-flexbox;\r\n        display:flex;\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n    }\r\n}\r\n\r\n.sub-form {\r\n    position: relative;\r\n\tborder-radius: 5px;\r\n\tborder-color: rgba(0,0,0,0);\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    box-shadow: inset 0 0 24px #000000 !important;\r\n\tbackground-color: rgba(0,0,0,0.1);\r\n    padding: 6px;\r\n    \r\n   /* display:flex;*/\r\n}\r\n/*\r\n.sub-form > div{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}*/\r\n\r\nh3{\r\n    margin: 0px;\r\n}\r\n\r\ncomputed-expression > span {\r\n    font-size: 10px;\r\n}\r\n\r\ndamage-grid{\r\n    margin:auto\r\n}\r\n\r\n.flex-row{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex; \r\n    -webkit-box-align: stretch; \r\n        -ms-flex-align: stretch; \r\n            align-items: stretch; \r\n    -webkit-box-orient: horizontal; \r\n    -webkit-box-direction: normal; \r\n        -ms-flex-direction: row; \r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.flex-row > * {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n    max-width:100%;\r\n}\r\n\r\n.form-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flex-field{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n\r\n.flex-column {\r\n\tdisplay:-webkit-box;\r\n\tdisplay:-ms-flexbox;\r\n\tdisplay:flex;\r\n\t-webkit-box-orient:vertical;\r\n\t-webkit-box-direction:normal;\r\n\t    -ms-flex-direction:column;\r\n\t        flex-direction:column;\r\n}\r\n\r\n\r\n.flex-column > * {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1 0 auto;\r\n\t        flex: 1 0 auto;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n\r\n@media print {\r\n    .sub-form{\r\n        page-break-inside: avoid;\r\n    }\r\n}\r\n\r\n.flex-form-input {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n.input-group{\r\n    width:initial;\r\n}\r\n.input-group-addon{\r\n    background-color: #ffffff;\r\n}\r\n\r\nhr {\r\n    margin: 4px 0px 4px 0px;\r\n    border: 0;\r\n    height: 2px;\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\r\n}\r\n\r\n@media print{\r\n    hr {\r\n        margin: 0px;\r\n    }\r\n}\r\n\r\n/*Page*/\r\npage[size=\"A4\"] {  \r\n  width: 21cm;\r\n  height: 29.7cm; \r\n}\r\npage[size=\"A4\"][layout=\"portrait\"] {\r\n  width: 29.7cm;\r\n  height: 21cm;  \r\n}\r\npage[size=\"A3\"] {\r\n  width: 29.7cm;\r\n  height: 42cm;\r\n}\r\npage[size=\"A3\"][layout=\"portrait\"] {\r\n  width: 42cm;\r\n  height: 29.7cm;  \r\n}\r\npage[size=\"A5\"] {\r\n  width: 14.8cm;\r\n  height: 21cm;\r\n}\r\npage[size=\"A5\"][layout=\"portrait\"] {\r\n  width: 21cm;\r\n  height: 14.8cm;  \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/character-sheet.component.html":
/***/ (function(module, exports) {

module.exports = "<localization [object]=\"this\" i18n-strength=\"@@strength\" strength=\"STY\" i18n-constitution=\"@@constitution\" constitution=\"TÅL\"\n  i18n-dexterity=\"@@dexterity\" dexterity=\"RÖR\" i18n-charisma=\"@@charisma\" charisma=\"PER\" i18n-intelligence=\"@@intelligence\"\n  intelligence=\"PSY\" i18n-will=\"@@will\" will=\"VIL\" i18n-education=\"@@education\" education=\"BIL\" i18n-sight=\"@@sight\" sight=\"SYN\"\n  i18n-hearing=\"@@hearing\" hearing=\"HÖR\" i18n-combatExperience=\"@@combatExperience\" combatExperience=\"Stridsvana\" i18n-charismaIntelligenceSkill=\"@@charismaIntelligenceSkill\"\n  charismaIntelligenceSkill=\"[PP]\" i18n-dexterityIntelligenceSkill=\"@@dexterityIntelligenceSkill\" dexterityIntelligenceSkill=\"[RP]\"\n  i18n-sightIntelligenceSkill=\"@@sightIntelligenceSkill\" sightIntelligenceSkill=\"[PS]\" i18n-nativeLanguageSkill=\"@@nativeLanguageSkill\"\n  nativeLanguageSkill=\"Modersmål\" i18n-dexteritySkill=\"@@dexteritySkill\" dexteritySkill=\"[R]\" i18n-intelligenceSkill=\"@@intelligenceSkill\"\n  intelligenceSkill=\"[P]\" i18n-constitutionSkill=\"@@constitutionSkill\" constitutionSkill=\"[T]\" i18n-educationSkill=\"@@educationSkill\"\n  educationSkill=\"[B]\" i18n-storyTellingSkill=\"@@storyTellingSkill\" storyTellingSkill=\"Berättarkonst\" i18n-danceSkill=\"@@danceSkill\"\n  danceSkill=\"Dansa\" i18n-sleightOfHandSkill=\"@@sleightOfHandSkill\" sleightOfHandSkill=\"Fingerfärdighet\" i18n-fishingSkill=\"@@fishingSkill\"\n  fishingSkill=\"Fiske\" i18n-seductionSkill=\"@@seductionSkill\" seductionSkill=\"Förföra\" i18n-interogateSkill=\"@@interogateSkill\"\n  interogateSkill=\"Förhöra\" i18n-jestSkill=\"@@jestSkill\" jestSkill=\"Gyckla\" i18n-hideSkill=\"@@hideSkill\" hideSkill=\"Gömma\"\n  i18n-tradeSkill=\"@@tradeSkill\" tradeSkill=\"Handel\" i18n-jumpSkill=\"@@jumpSkill\" jumpSkill=\"Hoppa\" i18n-throwSkill=\"@@throwSkill\"\n  throwSkill=\"Kasta\" i18n-climbSkill=\"@@climbSkill\" climbSkill=\"Klättra\" i18n-driveWagonSkill=\"@@driveWagonSkill\" driveWagonSkill=\"Köra vagn\"\n  i18n-leadershipSkill=\"@@leadershipSkill\" leadershipSkill=\"Ledarskap\" i18n-marschSkill=\"@@marschSkill\" marschSkill=\"Marsch\"\n  i18n-cookingSkill=\"@@cookingSkill\" cookingSkill=\"Matlagning\" i18n-occultismSkill=\"@@occultismSkill\" occultismSkill=\"Ockultism\"\n  i18n-rideSkill=\"@@rideSkill\" rideSkill=\"Rida\" i18n-singSkill=\"@@singSkill\" singSkill=\"Sjunga\" i18n-skiSkill=\"@@skiSkill\"\n  skiSkill=\"Skidor\" i18n-actingSkill=\"@@actingSkill\" actingSkill=\"Skådespel\" i18n-brawlSkill=\"@@brawlSkill\" brawlSkill=\"Slagsmål\"\n  i18n-sneakSkill=\"@@sneakSkill\" sneakSkill=\"Smyga\" i18n-scoutSkill=\"@@scoutSkill\" scoutSkill=\"Speja\" i18n-gamblingSkill=\"@@gamblingSkill\"\n  gamblingSkill=\"Spel & dobbel\" i18n-trackingSkill=\"@@trackingSkill\" trackingSkill=\"Spåra\" i18n-drinkingSkill=\"@@drinkingSkill\"\n  drinkingSkill=\"Supa\" i18n-searchSkill=\"@@searchSkill\" searchSkill=\"Söka\" i18n-educateSkill=\"@@educateSkill\" educateSkill=\"Undervisning\"\n  i18n-avoidSkill=\"@@avoidSkill\" avoidSkill=\"Undvika\" i18n-appraiseSkill=\"@@appraiseSkill\" appraiseSkill=\"Värdera\" i18n-survivalSkill=\"@@survivalSkill\"\n  survivalSkill=\"Överlevnad\" i18n-persuadeSkill=\"@@persuadeSkill\" persuadeSkill=\"Övertala\">\n</localization>\n<!--Character export/import, online/cloud storage, localization switching(?)-->\n<!--TODO vapen färdigheter\n    Gör så att färdighets fönstret öppnar en skill selection från misc skills + stridskonster\n    Gör om så att misc skills och combat arts är samma bas objekt? Nej, gör så att de båda har ett interface som heter Value el liknande.\n    Gör misc skills skillt från character skills? Nej, gör så att man kan välja bas skill för en misc skill, t.ex. svärd.\n    Meyn för bas skill selection kan komma upp när man väljer värde/markerar värde\n-->\n  <div class=\"pages\">\n<div size=\"A4\" class=\"page container\">\n  <div class=\"row\">\n    <div class=\"col col-12\">\n      <div class=\"flex-row\" style=\"flex-direction:row-reverse\">\n        <div style=\"flex: 1 0 350px\" class=\"flex-column\">\n          <div class=\"sub-form\">\n            <h1>EON III</h1>\n          </div>\n          <div class=\"sub-form\">\n            <div>\n              <div class=\"flex-form-input\" style=\"height:100%\" aligned selector=\"form-input label, input-group label\">\n                <div>\n                  <form-input i18n-label=\"@@name\" label=\"Namn\" [(value)]=\"character.name\"></form-input>\n                </div>\n                <div>\n                  <form-input i18n-label=\"@@Profession\" label=\"Yrke\" [(value)]=\"character.profession\"></form-input>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col col-md-6 col-12\">\n                    <form-input i18n-label=\"@@race\" label=\"Ras\" [(value)]=\"character.race\"></form-input>\n                    <form-input i18n-label=\"@@gender\" label=\"Kön\" [(value)]=\"character.gender\"></form-input>\n                    <form-input i18n-label=\"@@body\" label=\"Kropp\" [(value)]=\"character.body\"></form-input>\n                  </div>\n                  <div class=\"col col-md-6 col-12\">\n                    <input-group i18n-label=\"@@height\" label=\"Längd\" [(value)]=\"character.height\" i18n-suffix=\"@@heightUnit\" suffix=\"cm\" type=\"text\"></input-group>\n                    <input-group i18n-label=\"@@weight\" label=\"Vikt\" [(value)]=\"character.weight\" i18n-suffix=\"@@weightUnit\" suffix=\"kg\" type=\"text\"></input-group>\n                    <input-group i18n-label=\"@@age\" label=\"Ålder\" [(value)]=\"character.age\" i18n-suffix=\"@@ageUnit\" suffix=\"år\" type=\"text\"></input-group>\n                  </div>\n                </div>\n                <div>\n                  <form-input i18n-label=\"@@homestead\" label=\"Hemort\" [(value)]=\"character.homestead\"></form-input>\n                </div>\n                <div>\n                  <form-input i18n-label=\"@@religion\" label=\"Religion\" [(value)]=\"character.religion\"></form-input>\n                </div>\n                <div style=\"display:flex\">\n                  <label i18n=\"@@weaponarm\">Vapenarm</label>\n                  <div style=\"flex: 1 0 auto;display:flex;justify-content:space-around\">\n                    <div>\n                      <input type='radio' id='weapon-arm-right' class='pseudo-checkbox sr-only' value=\"right\" [(ngModel)]=\"character.handDominance\"\n                      />\n                      <label i18n=\"@@right\" for='weapon-arm-right' class='fancy-checkbox-label'>\n                      Höger\n                    </label>\n                    </div>\n                    <div>\n                      <input type='radio' id='weapon-arm-left' class='pseudo-checkbox sr-only' value=\"left\" [(ngModel)]=\"character.handDominance\"\n                      />\n                      <label i18n=\"@@left\" for='weapon-arm-left' class='fancy-checkbox-label'>\n                      Vänster\n                    </label>\n                    </div>\n                    <div>\n                      <input type='radio' id='weapon-arm-ambidextrous' class='pseudo-checkbox sr-only' value=\"ambidextrous\" [(ngModel)]=\"character.handDominance\"\n                      />\n                      <label i18n=\"@@ambidextrous\" for='weapon-arm-ambidextrous' class='fancy-checkbox-label'>\n                      Tvehänt\n                    </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div aligned style=\"flex: 0 0 auto\" class=\"flex-column\">\n          <div class=\"sub-form flex-column\">\n            <form-input [label]=\"character.attributes.strength.name\" [(value)]=\"character.attributes.strength.value\" type=\"number\"></form-input>\n            <form-input [label]=\"character.attributes.constitution.name\" [(value)]=\"character.attributes.constitution.value\" type=\"number\"></form-input>\n            <form-input [label]=\"character.attributes.dexterity.name\" [(value)]=\"character.attributes.dexterity.value\" type=\"number\"></form-input>\n            <form-input [label]=\"character.attributes.charisma.name\" [(value)]=\"character.attributes.charisma.value\" type=\"number\"></form-input>\n            <form-input [label]=\"character.attributes.intelligence.name\" [(value)]=\"character.attributes.intelligence.value\" type=\"number\"></form-input>\n            <form-input [label]=\"character.attributes.will.name\" [(value)]=\"character.attributes.will.value\" type=\"number\"></form-input>\n            <form-input [label]=\"character.attributes.education.name\" [(value)]=\"character.attributes.education.value\" type=\"number\"></form-input>\n          </div>\n          <div class=\"sub-form flex-column\">\n            <add-remove-menu class=\"hover-menu\" [(array)]=\"character.attributes.extraAttributes\" min=\"0\" [default]=\"creator.newAttribute.bind(creator)\"></add-remove-menu>\n            <form-input [label]=\"character.attributes.sight.name\" [(value)]=\"character.attributes.sight.value\" type=\"number\"></form-input>\n            <form-input [label]=\"character.attributes.hearing.name\" [(value)]=\"character.attributes.hearing.value\" type=\"number\"></form-input>\n            <form-input *ngFor=\"let a of character.attributes.extraAttributes\" labelEditable=\"true\" [(label)]=\"a.name\" [(value)]=\"a.value\"\n              type=\"number\"></form-input>\n          </div>\n        </div>\n        <div style=\"flex: 1 0 300px\" class=\"flex-column\" aligned>\n          <div class=\"sub-form\" style=\"flex-grow:0\">\n            <div class=\"flex-form-input\">\n              <form-input i18n-label=\"@@player\" label=\"Spelare\" [(value)]=\"character.player\"></form-input>\n              <form-input i18n-label=\"@@gamemaster\" label=\"Spelledare\" [(value)]=\"character.gameMaster\"></form-input>\n            </div>\n          </div>\n          <div class=\"flex-form-input sub-form\">\n            <character-stat-input i18n-label=\"@@loyalty\" label=\"Lojalitet\" [stat]=\"character.characteristics.loyalty\"></character-stat-input>\n            <character-stat-input i18n-label=\"@@honor\" label=\"Heder\" [stat]=\"character.characteristics.honor\"></character-stat-input>\n            <character-stat-input i18n-label=\"@@lust\" label=\"Amor\" [stat]=\"character.characteristics.lust\"></character-stat-input>\n            <character-stat-input i18n-label=\"@@aggression\" label=\"Aggression\" [stat]=\"character.characteristics.aggression\"></character-stat-input>\n            <character-stat-input i18n-label=\"@@faith\" label=\"Tro\" [stat]=\"character.characteristics.faith\"></character-stat-input>\n            <character-stat-input i18n-label=\"@@generosity\" label=\"Generositet\" [stat]=\"character.characteristics.generosity\"></character-stat-input>\n            <character-stat-input i18n-label=\"@@reputation\" label=\"Rykte {{formatDefaultValue(DefaultValues.reputation)}}\" [stat]=\"character.characteristics.reputation\"></character-stat-input>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col col-lg-8 col-md-12 col-12 flex-column\">\n      <div class=\"row\">\n        <div class=\"col col-12 flex-column\">\n          <div class=\"row\">\n            <div class=\"col col-md-7 col-12 flex-column\">\n              <div class=\"sub-form\">\n                <div>\n                  <add-remove-menu class=\"hover-menu\" [(array)]=\"character.specialAbilities\" min=\"1\" [default]=\"creator.newStringValue.bind(creator)\"></add-remove-menu>\n                  <div class=\"flex-form-input flex-column-flex table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <th i18n=\"@@specialAbilities\">Speciella fördelar & nackdelar</th>\n                      </thead>\n                      <tbody [sortablejs]=\"character.specialAbilities\">\n                        <tr *ngFor='let a of character.specialAbilities'>\n                          <td>\n                            <input-base type=\"text\" [(value)]=\"a.value\"></input-base>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col col-md-5 col-12 flex-column\">\n              <div class=\"row\" style=\"flex-grow:0\">\n                <div class=\"col col-6 sub-form form-input\">\n                  <form-input i18n-label=\"@@luck\" label=\"Tur {{formatDefaultValue(DefaultValues.luck)}}\" [(value)]=\"character.attributes.luck.value\"\n                    type=\"number\"></form-input>\n                </div>\n                <div class=\"col col-6 sub-form form-input\">\n                  <form-input label=\"Qadosh\" [(value)]=\"character.attributes.qadosh.value\" type=\"number\"></form-input>\n                </div>\n              </div>\n              <div class=\"row sub-form\" aligned>\n                <div class=\"col col-12\">\n                  <input-computed style=\"display: inline-block\" i18n-label=\"@@movement\" label=\"FÖR\" [computationBase]=\"character.inferedAttributes.speed\"></input-computed>\n                  <computed-expression [expression]=\"character.inferedAttributes.speed.expression\" [expressionLookupTable]=\"character.inferedAttributes.speed.baseValues\"></computed-expression>\n                </div>\n                <div class=\"col col-12\">\n                  <form-input style=\"display: inline-block\" i18n-label=\"@@running\" label=\"Språng\" [value]=\"character.inferedAttributes.speed.value * 2\"\n                    type=\"number\" [readonly]=\"true\"></form-input>\n                  <computed-expression expression=\"dexterity * 2\" [expressionLookupTable]=\"character.inferedAttributes.speed.baseValues\"></computed-expression>\n                </div>\n                <div class=\"col col-12\">\n                  <form-input style=\"display: inline-block\" i18n-label=\"@@sprinting\" label=\"Spurt\" [value]=\"character.inferedAttributes.speed.value * 3\"\n                    type=\"number\" [readonly]=\"true\"></form-input>\n                  <computed-expression expression=\"dexterity * 3\" [expressionLookupTable]=\"character.inferedAttributes.speed.baseValues\"></computed-expression>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-12 flex-column\">\n          <div class=\"row sub-form\" aligned>\n            <h3 class=\"col col-3\" i18n=\"@@baseDamage\">Grundskada</h3>\n            <div class=\"col col-3 form-input\">\n              <input-group i18n-label=\"@@slash\" label=\"Hugg\" prefix=\"Ob\" [(value)]=\"character.baseDamage.slash\" type=\"text\"></input-group>\n            </div>\n            <div class=\"col col-3 form-input\">\n              <input-group i18n-label=\"@@crush\" label=\"Kross\" prefix=\"Ob\" [(value)]=\"character.baseDamage.crush\" type=\"text\"></input-group>\n            </div>\n            <div class=\"col col-3 form-input\">\n              <input-group i18n-label=\"@@pierce\" label=\"Stick\" prefix=\"Ob\" [(value)]=\"character.baseDamage.pierce\" type=\"text\"></input-group>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-lg-4 col-md-12 col-12 flex-column\">\n      <div class=\"row sub-form\">\n        <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\n          <label class=\"flex-field\" i18n=\"@@clothesAndArmor\">Kläder & rustning</label>\n          <div style=\"display:flex;flex-wrap:wrap\">\n            <span class=\"formula\">&#215;0.5 =</span>\n            <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightBodyArmor())\" type=\"number\"></input-group>\n          </div>\n        </div>\n        <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\n          <label class=\"flex-field\" i18n=\"@@weaponsAndShields\">Vapen & sköldar</label>\n          <div style=\"display:flex;flex-wrap:wrap\"><span class=\"formula\">+</span>\n            <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightWeaponsShields())\" type=\"number\"></input-group>\n          </div>\n        </div>\n        <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\n          <label class=\"flex-field\" i18n=\"@@carriedItemsAndCoins\">Burna föremål, mynt etc. </label>\n          <div style=\"display:flex;flex-wrap:wrap\"><span class=\"formula\">+</span>\n            <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightCarriedItems())\" type=\"number\"></input-group>\n          </div>\n        </div>\n        <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\n          <label class=\"flex-field\" i18n=\"@@luggage\">Utrustning & proviant</label>\n          <div style=\"display:flex;flex-wrap:wrap\"><span class=\"formula\">+</span>\n            <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightLuggage())\" type=\"number\"></input-group>\n          </div>\n        </div>\n        <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\n          <label class=\"flex-field\" i18n=\"@@totalLoad\">Total belastning</label>\n          <div style=\"display:flex;flex-wrap:wrap\"><span class=\"formula\">=</span>\n            <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightTotal(),3)\" type=\"number\"></input-group>\n          </div>\n        </div>\n        <div class=\"col col-12\">\n          <hr />\n        </div>\n        <div class=\"col col-12 form-input\" style=\"justify-content:space-between\">\n          <div><label class=\"flex-field\" i18n=\"@@carryingCapacity\">Bärförmåga</label>\n          </div>\n          <div>\n            <computed-expression right=\"true\" [expression]=\"character.inferedAttributes.carryingCapacity.expression\" [expressionLookupTable]=\"character.inferedAttributes.carryingCapacity.baseValues\"></computed-expression>\n            <input-computed [computationBase]=\"character.inferedAttributes.carryingCapacity\" i18n-suffix=\"@@weightUnit\" suffix=\"kg\"></input-computed>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\" aligned selector=\"th:first-child\">\n    <div class=\"col col-12\">\n      <div class=\"sub-form\">\n        <div>\n          <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.meleeWeapons\" min=\"1\" [default]=\"creator.newMeleeWeapon.bind(creator)\"></add-remove-menu>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th i18n=\"@@meleeWeapons\">Närstridsvapen</th>\n                  <th i18n=\"@@skill\">Färdighet</th>\n                  <th i18n=\"@@grip\">Fattning</th>\n                  <th i18n=\"@@slash\">Hugg</th>\n                  <th i18n=\"@@crush\">Kross</th>\n                  <th i18n=\"@@pierce\">Stick</th>\n                  <th i18n=\"@@durability\">BRYT</th>\n                  <th i18n=\"@@speed\">SI</th>\n                  <th i18n=\"@@weight\">Vikt</th>\n                </tr>\n              </thead>\n              <tbody [sortablejs]=\"character.equipment.meleeWeapons\">\n                <tr melee-weapon *ngFor='let weapon of character.equipment.meleeWeapons' [item]=\"weapon.item\" [character]=\"character\" [(skill)]=\"weapon.skill\">\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-12\">\n      <div class=\"sub-form\">\n        <div>\n          <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.rangedWeapons\" min=\"1\" [default]=\"creator.newRangedWeapon.bind(creator)\"></add-remove-menu>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th i18n=\"@@rangedWeapons\">Avståndsvapen</th>\n                  <th i18n=\"@@skill\">Färdighet</th>\n                  <th i18n=\"@@range\">Avstånd</th>\n                  <th i18n=\"@@short\">Kort</th>\n                  <th i18n=\"@@normak\">Normal</th>\n                  <th i18n=\"@@far\">Långt</th>\n                  <th i18n=\"@@veryFar\">Mycket långt</th>\n                  <th i18n=\"@@weight\">Vikt</th>\n                </tr>\n              </thead>\n              <tbody [sortablejs]=\"character.equipment.rangedWeapons\">\n                <tr ranged-weapon *ngFor='let weapon of character.equipment.rangedWeapons' [item]=\"weapon.item\" [character]=\"character\" [(skill)]=\"weapon.skill\">\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-12\">\n      <div class=\"row\">\n        <div class=\"col col-lg-8 col-12 flex-column\">\n          <div class=\"row sub-form\">\n            <div class=\"col col-12\">\n              <div>\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.shields\" min=\"1\" [default]=\"creator.newShield.bind(creator)\"></add-remove-menu>\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th i18n=\"@@shields\">Sköldar</th>\n                        <th i18n=\"@@skill\">Färdighet</th>\n                        <th i18n=\"@@passiveProtection\">Passivt s.</th>\n                        <th i18n=\"@@damage\">Skada</th>\n                        <th i18n=\"@@durability\">BRYT</th>\n                        <th i18n=\"@@speed\">SI</th>\n                        <th i18n=\"@@weight\">Vikt</th>\n                      </tr>\n                    </thead>\n                    <tbody [sortablejs]=\"character.equipment.shields\">\n                      <tr shield *ngFor='let shield of character.equipment.shields' [item]=\"shield.item\" [character]=\"character\" [(skill)]=\"shield.skill\">\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row sub-form\">\n            <div class=\"col col-12\">\n              <div>\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.armor\" min=\"1\" [default]=\"creator.newArmor.bind(creator)\"></add-remove-menu>\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th i18n=\"@@armor\">Kroppsskydd</th>\n                        <th i18n=\"@@protects\">Ger skydd åt</th>\n                        <th i18n=\"@@slash\">Hugg</th>\n                        <th i18n=\"@@crush\">Kross</th>\n                        <th i18n=\"@@pierce\">Stick</th>\n                        <th i18n=\"@@durability\">BRYT</th>\n                        <th i18n=\"@@weight\">Vikt</th>\n                      </tr>\n                    </thead>\n                    <tbody [sortablejs]=\"character.equipment.armor\">\n                      <tr armor *ngFor='let armor of character.equipment.armor' [item]=\"armor\">\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-lg-4 col-12 flex-column\">\n          <div class=\"row\">\n            <div class=\"col col-lg-12 col-md-6 col-sm-6 col-12 flex-column\">\n              <div class=\"row sub-form\" aligned>\n                <div class=\"col col-sm-12 col-12\">\n                  <input-computed i18n=\"@@winInitiative\" label=\"VINIT\" [computationBase]=\"character.inferedAttributes.initiative\"></input-computed>\n                  <computed-expression [expression]=\"character.inferedAttributes.initiative.expression\" [expressionLookupTable]=\"character.inferedAttributes.initiative.baseValues\"></computed-expression>\n                </div>\n                <div class=\"col col-sm-12 col-12\">\n                  <input-computed i18n=\"@@insight\" label=\"Insikt\" [computationBase]=\"character.inferedAttributes.insight\"></input-computed>\n                  <computed-expression [expression]=\"character.inferedAttributes.insight.expression\" [expressionLookupTable]=\"character.inferedAttributes.insight.baseValues\"></computed-expression>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col col-12 flex-column\">\n                  <div class=\"sub-form\">\n                    <input-computed i18n-label=\"@@blackOutCheck\" label=\"Chockslag\" [computationBase]=\"character.inferedAttributes.chockValue\"></input-computed>\n                    <computed-expression [expression]=\"character.inferedAttributes.chockValue.expression\" [expressionLookupTable]=\"character.inferedAttributes.chockValue.baseValues\"></computed-expression>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col col-lg-12 col-md-6 col-sm-6 col-12 flex-column\">\n              <div class=\"sub-form flex-form-input\">\n                <damage-grid rows=\"11\" [columns]=\"maxDamageColumns\" [damageColumns]=\"character.exhaustion\" i18n-header=\"@@exhaustion\" header=\"Utmattning\"\n                  i18n-severDamageName=\"@@exhaustionLongterm\" severDamageName=\"Långtidsutmattning\">\n                  <ng-template #labelHeader>\n                    <div>\n                      <div style=\"width: 75%; display:inline-block;\">\n                        <span i18n=\"@@difficulty\" style=\"display:block;\">Svårighet</span>\n                      </div>\n                      <div style=\"width: 25%; display:inline-block;\">\n                        <span i18n=\"@@movement\" style=\"display:block;\">FÖR</span>\n                      </div>\n                    </div>\n                  </ng-template>\n                  <ng-template #label let-row=\"row\">\n                    <div *ngIf=\"row % 2 === 0 && row > 1\">\n                      <label style=\"text-align: center;width:75%;display:inline-block\">+Ob{{row/2}}T6</label>\n                      <label style=\"text-align: center;width:25%;display:inline-block\">-{{row/2}}</label>\n                    </div>\n                  </ng-template>\n                </damage-grid>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-12\">\n      <div class=\"row\">\n        <div class=\"col col-sm-12\">\n          <div class=\"flex-row\">\n            <div class=\"sub-form flex-form-input\">\n              <damage-grid rows=\"10\" [columns]=\"maxDamageColumns\" [damageColumns]=\"character.trauma\" i18n-header=\"@@trauma\" header=\"Trauma\">\n                <ng-template #labelHeader>\n                  <span i18n=\"@@deathcheck\" style=\"display:block\">Dödslag</span>\n                  <span i18n=\"@@blackOutCheck\" style=\"display:block\">Chockslag</span>\n                </ng-template>\n                <ng-template #label let-row=\"row\">\n                  <label *ngIf=\"row > 0\" style=\"text-align: right;width:100%\">+Ob{{row}}T6</label>\n                </ng-template>\n              </damage-grid>\n            </div>\n            <div class=\"sub-form flex-form-input\">\n              <damage-grid rows=\"10\" [columns]=\"maxDamageColumns\" [damageColumns]=\"character.pain\" i18n-header=\"@@pain\" header=\"Smärta\">\n                <ng-template #labelHeader>\n                  <div style=\"width: 75%; display:inline-block;\">\n                    <div>\n                      <span i18n=\"@@difficulty\" style=\"display:block\">Svårighet</span>\n                      <span i18n=\"@@blackOutCheck\" style=\"display:block\">Chockslag</span>\n                    </div>\n                  </div>\n                  <div style=\"width: 25%; display:inline-block;\">\n                    <span i18n=\"@@movement\" style=\"display:block;\">FÖR</span>\n                  </div>\n                </ng-template>\n                <ng-template #label let-row=\"row\">\n                  <div *ngIf=\"row > 0\">\n                    <label style=\"text-align: center;width:75%;display:inline-block\">+Ob{{row}}T6</label>\n                    <label style=\"text-align: center;width:25%;display:inline-block\">-{{row}}</label>\n                  </div>\n                </ng-template>\n              </damage-grid>\n            </div>\n            <div class=\"sub-form flex-row\">\n              <div class=\"flex-form-input\" style=\"flex: 1 0 auto\">\n                <damage-grid rows=\"10\" [columns]=\"maxDamageColumns\" labelsRight=\"true\" type=\"square\" [damageColumns]=\"character.bleeding\"\n                  i18n-header=\"@@bloodloss\" header=\"Blödningstakt\">\n                  <ng-template #labelHeader>\n                    <span class=\"fa fa-long-arrow-right\" style=\"font-size:0.8cm;float:right\"></span>\n                  </ng-template>\n                  <ng-template #label let-row=\"row\">\n                    <div>\n                      <label *ngIf=\"row === 0\" i18n=\"@@minute\" style=\"text-align: center;display:inline-block\">{{'+1/'}}min</label>\n                      <label *ngIf=\"row > 0\" i18n=\"@@round\" style=\"text-align: center;display:inline-block\">{{'+' + row + '/'}}runda</label>\n                    </div>\n                  </ng-template>\n                </damage-grid>\n              </div>\n              <div class=\"flex-form-input\" style=\"flex: 1 0 auto\">\n                <damage-grid rows=\"10\" [columns]=\"maxDamageColumns\" [damageColumns]=\"character.bloodLoss\" i18n-header=\"@@bloodloss\" header=\"Blodförlust\">\n                  <ng-template #labelHeader>\n                    <span i18n=\"@@deathcheck\" style=\"display:block\">Dödslag</span>\n                    <span i18n=\"@@blackOutCheck\" style=\"display:block\">Chockslag</span>\n                  </ng-template>\n                  <ng-template #label let-row=\"row\">\n                    <label *ngIf=\"row > 1\" style=\"text-align: right;width:100%\">+Ob{{row - 1}}T6</label>\n                  </ng-template>\n                </damage-grid>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #skillBodyRow let-skill=\"skill\">\n  <td style=\"display:flex;justify-content:space-between\">\n    <label>{{skill.name}}</label>\n    <span>{{skill.baseValue.name}}</span></td>\n  <td>\n    <input-base type=\"number\" [(value)]=\"skill.value\"></input-base>\n  </td>\n  <td>\n    <input-base type=\"text\" [(value)]=\"skill.specialization\"></input-base>\n  </td>\n</ng-template>\n<ng-template #miscellaneousSkillBodyRow let-skill=\"skill\">\n  <td>\n    <input-base type=\"text\" [(value)]=\"skill.name\"></input-base>\n  </td>\n  <td>\n    <input-base type=\"number\" [(value)]=\"skill.value\"></input-base>\n  </td>\n  <td>\n    <input-base type=\"text\" [(value)]=\"skill.specialization\"></input-base>\n  </td>\n</ng-template>\n<ng-template #simpleSkillBodyRow let-skill=\"skill\">\n  <td>\n    <input-base type=\"text\" [(value)]=\"skill.name\"></input-base>\n  </td>\n  <td>\n    <input-base type=\"number\" [(value)]=\"skill.value\"></input-base>\n  </td>\n</ng-template>\n\n<!--TODO cast coin type on drag drop?-->\n\n<div size=\"A4\" class=\"page container\">\n  <div class=\"row\">\n    <div class=\"col col-lg-6 col-md-12 flex-column\">\n      <div class=\"row\">\n        <div class=\"col col-12 flex-column\">\n          <div class=\"sub-form\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th></th>\n                    <th i18n=\"@@value\">Värde</th>\n                    <th i18n=\"@@specialization\">Specialicering</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let skill of characterSkills\">\n                    <ng-template *ngTemplateOutlet=\"skillBodyRow;  context: { skill: skill}\"></ng-template>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-12 flex-column\">\n          <div class=\"row sub-form\">\n            <div class=\"col col-12\">\n              <h3 i18n=\"@@baseSkillChanses\">Grundchanser för färdigheter</h3>\n            </div>\n            <div class=\"col col-12\">\n              <ng-template #baseSkill let-skill=\"skill\">\n                <div>\n                  <input-computed [label]=\"skill.name\" [computationBase]=\"skill\" min=\"5\"></input-computed>\n                  <computed-expression [expression]=\"skill.expression\" [expressionLookupTable]=\"skill.baseValues\"></computed-expression>\n                </div>\n              </ng-template>\n            </div>\n            <div class=\"col col-12\">\n              <div class=\"row\" aligned>\n                <div class=\"col col-sm-6 col-12\">\n                  <div style=\"margin:auto\">\n                    <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.charismaIntelligence}\"></ng-template>\n                    <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.dexterityIntelligence}\"></ng-template>\n                    <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.sightIntelligence}\"></ng-template>\n                    <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.nativeLanguage}\"></ng-template>\n                  </div>\n                </div>\n                <div class=\"col col-sm-6 col-12\">\n                  <div style=\"margin:auto\">\n                    <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.dexterity}\"></ng-template>\n                    <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.intelligence}\"></ng-template>\n                    <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.constitution}\"></ng-template>\n                    <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.education}\"></ng-template>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-lg-6 col-12 flex-column\">\n          <div class=\"sub-form\">\n            <div>\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"character.languageSkills\" min=\"1\" [default]=\"creator.newSkill.bind(creator)\"></add-remove-menu>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th i18n=\"@@language\">Språk</th>\n                      <th i18n=\"@@value\">Värde</th>\n                    </tr>\n                  </thead>\n                  <tbody [sortablejs]=\"character.languageSkills\">\n                    <tr *ngFor=\"let skill of character.languageSkills\">\n                      <ng-template *ngTemplateOutlet=\"simpleSkillBodyRow;  context: { skill: skill}\"></ng-template>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-lg-6 col-12 flex-column\">\n          <div class=\"sub-form\">\n            <div>\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"character.scriptSkills\" min=\"1\" [default]=\"creator.newSkill.bind(creator)\"></add-remove-menu>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th i18n=\"@@script\">Skrift</th>\n                      <th i18n=\"@@value\">Värde</th>\n                    </tr>\n                  </thead>\n                  <tbody [sortablejs]=\"character.scriptSkills\">\n                    <tr *ngFor=\"let skill of character.scriptSkills\">\n                      <ng-template *ngTemplateOutlet=\"simpleSkillBodyRow;  context: { skill: skill}\"></ng-template>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-lg-6 col-md-12 flex-column\">\n      <div class=\"row\">\n        <div class=\"col col-12 flex-column\">\n          <div class=\"sub-form\">\n            <div>\n              <form-input [label]=\"character.attributes.combatExperience.name\" [(value)]=\"character.attributes.combatExperience.value\"\n                type=\"number\"></form-input>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-12 flex-column\">\n          <div class=\"sub-form\">\n            <div>\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"character.miscellaneousSkills\" min=\"5\" [default]=\"creator.newSkill.bind(creator)\"></add-remove-menu>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th i18n=\"@@skills\">Färdigheter</th>\n                      <th i18n=\"@@value\">Värde</th>\n                      <th i18n=\"@@specialization\">Specialicering</th>\n                    </tr>\n                  </thead>\n                  <tbody [sortablejs]=\"character.miscellaneousSkills\">\n                    <tr *ngFor=\"let skill of character.miscellaneousSkills\">\n                      <ng-template *ngTemplateOutlet=\"miscellaneousSkillBodyRow;  context: { skill: skill}\"></ng-template>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-12 flex-column\">\n          <div class=\"sub-form\">\n            <add-remove-menu class=\"hover-menu\" [(array)]=\"character.combatArts\" min=\"1\" [default]=\"creator.newCombatArtSkill.bind(creator)\"></add-remove-menu>\n            <h3 i18n=\"@@combatArts\">Stridskonster</h3>\n            <combat-art *ngFor=\"let combatArt of character.combatArts\" [combatArt]=\"combatArt\"></combat-art>\n          </div>\n        </div>\n        <div class=\"col col-12 flex-column\">\n          <div class=\"sub-form\">\n            <div>\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"character.miscellaneous\" min=\"1\" [default]=\"creator.newStringValue.bind(creator)\"></add-remove-menu>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th i18n=\"@@miscellaneous\">Övrigt</th>\n                    </tr>\n                  </thead>\n                  <tbody [sortablejs]=\"character.miscellaneous\">\n                    <tr *ngFor=\"let misc of character.miscellaneous\">\n                      <td>\n                        <input-base type=\"text\" [(value)]=\"misc.value\"></input-base>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-12\">\n      <div class=\"row\">\n        <div class=\"col col-lg-6 col-12 flex-column\">\n          <div class=\"sub-form\">\n            <div>\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.coins\" min=\"1\" [default]=\"creator.newCoin.bind(creator)\"></add-remove-menu>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th i18n=\"@@valuables\">Värdeföremål</th>\n                      <th i18n=\"@@count\">Antal</th>\n                      <th i18n=\"@@worthEach\">Värde/st</th>\n                      <th i18n=\"@@weightEach\">Vikt/st</th>\n                      <th i18n=\"@@totalWeight\">Total vikt</th>\n                    </tr>\n                  </thead>\n                  <tbody dragula=\"valuables-zone\" [dragulaModel]=\"character.equipment.coins\">\n                    <tr *ngFor=\"let coin of character.equipment.coins; let i = index\">\n                      <td>\n                        <input-base type=\"text\" [(value)]=\"coin.name\"></input-base>\n                      </td>\n                      <td>\n                        <input-base type=\"number\" [(value)]=\"coin.count\"></input-base>\n                      </td>\n                      <td>\n                        <input-group [(value)]=\"coin.worth\" i18n-suffix=\"@@coinUnit\" suffix=\"d\" type=\"number\"></input-group>\n                      </td>\n                      <td>\n                        <input-group [(value)]=\"coin.weight\" i18n-suffix=\"@@smallWeightUnit\" suffix=\"g\" type=\"number\"></input-group>\n                      </td>\n                      <td>\n                        <input-group [value]=\"coin.count && coin.weight ? coin.count * coin.weight : null\" i18n-suffix=\"@@smallWeightUnit\" suffix=\"g\"\n                          type=\"number\" readonly=\"true\"></input-group>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col col-lg-6 col-12 flex-column\">\n          <div class=\"sub-form\">\n            <div>\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.coinsStorage\" min=\"1\" [default]=\"creator.newCoinStorage.bind(creator)\"></add-remove-menu>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th i18n=\"@@valuables\">Värdeföremål (förvaring)</th>\n                      <th i18n=\"@@count\">Antal</th>\n                      <th i18n=\"@@worthEach\">Värde/st</th>\n                      <th i18n=\"@@location\">Förvaring</th>\n                    </tr>\n                  </thead>\n                  <tbody dragula=\"valuables-zone\" [dragulaModel]=\"character.equipment.coinsStorage\">\n                    <tr *ngFor=\"let coin of character.equipment.coinsStorage\">\n                      <td>\n                        <input-base type=\"text\" [(value)]=\"coin.name\"></input-base>\n                      </td>\n                      <td>\n                        <input-base type=\"number\" [(value)]=\"coin.count\"></input-base>\n                      </td>\n                      <td>\n                        <input-group [(value)]=\"coin.worth\" i18n-suffix=\"@@coinUnit\" suffix=\"d\" type=\"number\"></input-group>\n                      </td>\n                      <td>\n                        <input-base type=\"text\" [(value)]=\"coin.location\"></input-base>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div size=\"A4\" class=\"page container\">\n  <div class=\"row\">\n    <div class=\"col col-12\">\n      <div class=\"sub-form\">\n        <add-remove-menu class=\"hover-menu\" [(array)]=\"character.magic\" min=\"1\" [default]=\"creator.newMagic.bind(creator)\"></add-remove-menu>\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th i18n=\"@@magicAndCermonies\">Magi & cermonier</th>\n              <th i18n=\"@@magnitude\">Magnitude</th>\n              <th i18n=\"@@magicCheck\">Färdighetsslag & tillhörande svårighetsslag</th>\n              <th i18n=\"@@time\">Tidsåtgång</th>\n              <th i18n=\"@@duration\">Varaktighet</th>\n              <th i18n=\"@@range\">Räckvidd</th>\n            </tr>\n          </thead>\n          <tbody [sortablejs]=\"character.magic\">\n            <tr *ngFor=\"let magic of character.magic\">\n              <td>\n                <input-base type=\"text\" [(value)]=\"magic.name\"></input-base>\n              </td>\n              <td>\n                <input-base type=\"number\" [(value)]=\"magic.magnitude\"></input-base>\n              </td>\n              <td>\n                <input-base type=\"text\" [(value)]=\"magic.description\"></input-base>\n              </td>\n              <td>\n                <input-base type=\"text\" [(value)]=\"magic.time\"></input-base>\n              </td>\n              <td>\n                <input-base type=\"text\" [(value)]=\"magic.duration\"></input-base>\n              </td>\n              <td>\n                <input-base type=\"text\" [(value)]=\"magic.reach\"></input-base>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"col col-12\">\n      <div class=\"sub-form\">\n        <div>\n          <add-remove-menu class=\"hover-menu\" [(array)]=\"character.contacts\" min=\"1\" [default]=\"creator.newContact.bind(creator)\"></add-remove-menu>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th i18n=\"@@contact\">Kontakt/fiende</th>\n                  <th i18n=\"@@profession\">Yrke</th>\n                  <th i18n=\"@@relation\">Relation</th>\n                  <th i18n=\"@@resources\">Resurser</th>\n                  <th i18n=\"@@miscellaneous\">Övrigt</th>\n                </tr>\n              </thead>\n              <tbody [sortablejs]=\"character.contacts\">\n                <tr *ngFor=\"let contact of character.contacts\">\n                  <td>\n                    <input-base type=\"text\" [(value)]=\"contact.name\"></input-base>\n                  </td>\n                  <td>\n                    <input-base type=\"text\" [(value)]=\"contact.profession\"></input-base>\n                  </td>\n                  <td>\n                    <input-base type=\"text\" [(value)]=\"contact.relation\"></input-base>\n                  </td>\n                  <td>\n                    <input-base type=\"number\" [(value)]=\"contact.resources\"></input-base>\n                  </td>\n                  <td>\n                    <input-base type=\"text\" [(value)]=\"contact.description\"></input-base>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-lg-6 col-12 flex-column\">\n      <div class=\"sub-form flex-column\">\n        <add-remove-menu class=\"hover-menu\" [(array)]=\"character.family.others\" min=\"1\" [default]=\"creator.newStringValue.bind(creator)\"></add-remove-menu>\n        <h3 i18n=\"@@family\">Familj & släkt</h3>\n        <div class=\"row\" aligned>\n          <div class=\"col col-lg-6 col-12\">\n            <form-input i18n-label=\"@@father\" label=\"Far\" [(value)]=\"character.family.father\"></form-input>\n          </div>\n          <div class=\"col col-lg-6 col-12\">\n            <form-input i18n-label=\"@@mother\" label=\"Mor\" [(value)]=\"character.family.mother\"></form-input>\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <tbody [sortablejs]=\"character.family.others\">\n              <tr *ngFor=\"let family of character.family.others\">\n                <td>\n                  <input-base type=\"text\" [(value)]=\"family.value\"></input-base>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"sub-form flex-column\">\n        <div>\n          <add-remove-menu class=\"hover-menu\" [(array)]=\"character.animals\" min=\"1\" [default]=\"creator.newAnimal.bind(creator)\"></add-remove-menu>\n          <h3 i18n=\"@@animals\">Rid- & packdjur</h3>\n          <div *ngFor=\"let animal of character.animals\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th i18n=\"@@name\">Namn</th>\n                    <th i18n=\"@@carryingCapacityAbbreviation\">BF</th>\n                    <th i18n=\"@@speed\">FÖR</th>\n                    <th i18n=\"@@crush\">Kross</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      <input-base type=\"text\" [(value)]=\"animal.name\"></input-base>\n                    </td>\n                    <td>\n                      <input-base type=\"number\" [(value)]=\"animal.carryingCapacity\"></input-base>\n                    </td>\n                    <td>\n                      <input-base type=\"number\" [(value)]=\"animal.movement\"></input-base>\n                    </td>\n                    <td>\n                      <input-group prefix=\"Ob\" [(value)]=\"animal.damage\" type=\"text\"></input-group>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div>\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"animal.inventory\" min=\"1\" [default]=\"creator.newItem.bind(creator)\"></add-remove-menu>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th i18n=\"@@equipment\">Utrustning</th>\n                      <th i18n=\"@@weight\">Vikt</th>\n                    </tr>\n                  </thead>\n                  <tbody dragula=\"equipment-zone\" [dragulaModel]=\"animal.inventory\">\n                    <tr *ngFor=\"let item of animal.inventory\">\n                      <td>\n                        <input-base type=\"text\" [(value)]=\"item.name\"></input-base>\n                      </td>\n                      <td>\n                        <input-base type=\"number\" [(value)]=\"item.weight\"></input-base>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <div>\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"animal.techniques\" min=\"2\" [default]=\"creator.newStringValue.bind(creator)\"></add-remove-menu>\n              <h4 class=\"col col-12\" i18n=\"@@tricksAndAbilities\">Speciella trick och egenskaper</h4>\n              <div [sortablejs]=\"animal.techniques\" class=\"row\">\n                <input-base class=\"col col-lg-6 col-md-6 col-12\" *ngFor=\"let technique of animal.techniques\" type=\"text\" [(value)]=\"technique.value\"></input-base>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col col-lg-6 col-12 flex-column\">\n      <div class=\"sub-form flex-column\">\n        <div>\n          <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.itemsCarried\" min=\"1\" [default]=\"creator.newItem.bind(creator)\"></add-remove-menu>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th i18n=\"@@equipment\">Burna föremål</th>\n                  <th i18n=\"@@weight\">Vikt</th>\n                </tr>\n              </thead>\n              <tbody dragula=\"equipment-zone\" [dragulaModel]=\"character.equipment.itemsCarried\">\n                <tr *ngFor=\"let item of character.equipment.itemsCarried\">\n                  <td>\n                    <input-base type=\"text\" [(value)]=\"item.name\"></input-base>\n                  </td>\n                  <td>\n                    <input-base type=\"number\" [(value)]=\"item.weight\"></input-base>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"sub-form flex-column\">\n        <div>\n          <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.luggage\" min=\"1\" [default]=\"creator.newItem.bind(creator)\"></add-remove-menu>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th i18n=\"@@equipment\">Utrustning</th>\n                  <th i18n=\"@@weight\">Vikt</th>\n                </tr>\n              </thead>\n              <tbody dragula=\"equipment-zone\" [dragulaModel]=\"character.equipment.luggage\">\n                <tr *ngFor=\"let luggage of character.equipment.luggage\">\n                  <td>\n                    <input-base type=\"text\" [(value)]=\"luggage.name\"></input-base>\n                  </td>\n                  <td>\n                    <input-base type=\"number\" [(value)]=\"luggage.weight\"></input-base>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"sub-form flex-column\">\n        <div>\n          <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.itemsStorage\" min=\"1\" [default]=\"creator.newItemStorage.bind(creator)\"></add-remove-menu>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th i18n=\"@@equipmentStorage\">Utrustning (Förvaring)</th>\n                  <th i18n=\"@@location\">Förvaring</th>\n                  <th i18n=\"@@weight\">Vikt</th>\n                </tr>\n              </thead>\n              <tbody dragula=\"equipment-zone\" [dragulaModel]=\"character.equipment.itemsStorage\">\n                <tr *ngFor=\"let item of character.equipment.itemsStorage\">\n                  <td>\n                    <input-base type=\"text\" [(value)]=\"item.name\"></input-base>\n                  </td>\n                  <td>\n                    <input-base type=\"text\" [(value)]=\"item.location\"></input-base>\n                  </td>\n                  <td>\n                    <input-base type=\"number\" [(value)]=\"item.weight\"></input-base>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n      <div class=\"sub-form flex-column\">\n        <rations-tracker [item]=\"character.rations\"></rations-tracker>\n      </div>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/character-sheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_character_creation_functions__ = __webpack_require__("../../../../../src/app/util/character-creation-functions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterSheetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterSheetComponent = CharacterSheetComponent_1 = (function () {
    function CharacterSheetComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.maxDamageColumns = 10;
        var self = this;
    }
    //private _iCheck = 0;
    CharacterSheetComponent.prototype.ngDoCheck = function () {
        //console.log("ngDoCheck", this._iCheck)
        //this._iCheck++;
        var self = this;
        Object.keys(this.character.inferedAttributes).forEach(function (key) {
            self.character.inferedAttributes[key].updateValue();
        });
        Object.keys(this.character.inferedBaseSkills).forEach(function (key) {
            self.character.inferedBaseSkills[key].updateValue();
        });
    };
    CharacterSheetComponent.prototype.sumWeights = function (items) {
        return items.reduce(function (a, b) {
            if (b.weight !== null && typeof b.weight !== 'undefined')
                return a + Number(b.weight);
            return a;
        }, 0);
    };
    CharacterSheetComponent.prototype.sumWeightsStack = function (items) {
        return items.reduce(function (a, b) {
            if (b.weight !== null && typeof b.weight !== 'undefined')
                return a + Number(b.weight) * b.count;
            return a;
        }, 0);
    };
    CharacterSheetComponent.prototype.formatWeightSum = function (val, precision) {
        if (precision === void 0) { precision = 3; }
        return val !== 0 && typeof val === 'number' ? Number(val.toPrecision(precision)) : null;
    };
    CharacterSheetComponent.prototype.sumWeightBodyArmor = function () {
        return 0.5 * this.sumWeights(this.character.equipment.armor);
    };
    CharacterSheetComponent.prototype.sumWeightWeaponsShields = function () {
        var mapItems = function (a) { return a.item; };
        return this.sumWeights(this.character.equipment.meleeWeapons.map(mapItems)) +
            this.sumWeights(this.character.equipment.rangedWeapons.map(mapItems)) +
            this.sumWeights(this.character.equipment.shields.map(mapItems));
    };
    CharacterSheetComponent.prototype.sumWeightCarriedItems = function () {
        return this.sumWeights(this.character.equipment.itemsCarried) + this.sumWeightsStack(this.character.equipment.coins) / 1000;
    };
    CharacterSheetComponent.prototype.sumWeightLuggage = function () {
        return this.sumWeights(this.character.equipment.luggage) + this.character.rations.count * this.character.rations.weight;
    };
    CharacterSheetComponent.prototype.sumWeightTotal = function () {
        return this.sumWeightBodyArmor() + this.sumWeightWeaponsShields() + this.sumWeightCarriedItems() + this.sumWeightLuggage();
    };
    Object.defineProperty(CharacterSheetComponent.prototype, "character", {
        get: function () {
            return this._character;
        },
        set: function (value) {
            this._character = value;
            if (this.character) {
                this._sortedCharacterSkills = this.sortCharacterSkills(this.character);
            }
        },
        enumerable: true,
        configurable: true
    });
    CharacterSheetComponent.prototype.sortCharacterSkills = function (character) {
        var sortedCharacterSkills = new Array();
        Object.keys(character.skills).forEach(function (key) {
            sortedCharacterSkills.push(character.skills[key]);
        });
        sortedCharacterSkills.sort(function (a, b) { return a.name ? a.name.localeCompare(b.name, document.documentElement.lang) : -1; });
        //TODO setup name value monitorting and update name sort order on name change
        return sortedCharacterSkills;
    };
    CharacterSheetComponent.prototype.formatDefaultValue = function (value) {
        return "[" + value + "]";
    };
    Object.defineProperty(CharacterSheetComponent.prototype, "DefaultValues", {
        get: function () {
            return CharacterSheetComponent_1.DefaultValuesStatic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterSheetComponent.prototype, "characterSkills", {
        get: function () {
            return this._sortedCharacterSkills;
        },
        enumerable: true,
        configurable: true
    });
    return CharacterSheetComponent;
}());
CharacterSheetComponent.DefaultValuesStatic = {
    luck: 11,
    reputation: 5
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__util_character_creation_functions__["ICharacterCreationFunctions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__util_character_creation_functions__["ICharacterCreationFunctions"]) === "function" && _a || Object)
], CharacterSheetComponent.prototype, "creator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CharacterSheetComponent.prototype, "character", null);
CharacterSheetComponent = CharacterSheetComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'character-sheet',
        template: __webpack_require__("../../../../../src/app/character-sheet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/character-sheet.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], CharacterSheetComponent);

var CharacterSheetComponent_1, _a, _b, _c;
//# sourceMappingURL=character-sheet.component.js.map

/***/ }),

/***/ "../../../../../src/app/character-stat-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*input-base {\r\n    display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/character-stat-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-input\">\r\n    <label>{{label}}</label>\r\n    <input-base type=\"number\" [(value)]=\"stat.value\"></input-base>\r\n    <input-base type=\"text\" [(value)]=\"stat.specialization\"\r\n                style=\"flex: 1 0 50px; line-height: 2px\"></input-base>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/character-stat-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character_stat__ = __webpack_require__("../../../../../src/app/models/character-stat.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterStatInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterStatInputComponent = (function () {
    function CharacterStatInputComponent() {
    }
    return CharacterStatInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CharacterStatInputComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_character_stat__["a" /* CharacterStat */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_character_stat__["a" /* CharacterStat */]) === "function" && _a || Object)
], CharacterStatInputComponent.prototype, "stat", void 0);
CharacterStatInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'character-stat-input',
        template: __webpack_require__("../../../../../src/app/character-stat-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/character-stat-input.component.css"), __webpack_require__("../../../../../src/app/form-input.component.css"), __webpack_require__("../../../../../src/app/input-base.component.css")]
    })
], CharacterStatInputComponent);

var _a;
//# sourceMappingURL=character-stat-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/computed-expression.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    display: inline-block;\r\n}\r\n\r\nspan{\r\n    font-size: 12px;\r\n    display:block;\r\n}\r\n\r\n@media print{\r\n    span{\r\n        font-size: 0.25cm;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/computed-expression.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputedExpressionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComputedExpressionComponent = (function () {
    function ComputedExpressionComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.right = false;
    }
    Object.defineProperty(ComputedExpressionComponent.prototype, "expression", {
        get: function () {
            var expression = this._expression;
            if (this._expressionLookupTable) {
                var self = this;
                Object.keys(this._expressionLookupTable).forEach(function (key) {
                    var str = self._expressionLookupTable[key].name;
                    if (str) {
                        var regex = new RegExp('\\b' + key + '\\b', "g");
                        expression = expression.replace(regex, str);
                    }
                });
            }
            expression = expression.replace("*", "×");
            return expression;
        },
        set: function (value) {
            if (this._expressionLookupTable) {
                var self = this;
                Object.keys(this._expressionLookupTable).forEach(function (key) {
                    var str = self._expressionLookupTable[key].name;
                    if (str) {
                        var regex = new RegExp('\\b' + str + '\\b', "g");
                        value = value.replace(regex, key);
                    }
                });
            }
            value = value.replace("×", '*');
            this._expression = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComputedExpressionComponent.prototype, "expressionLookupTable", {
        get: function () {
            return this._expressionLookupTable;
        },
        set: function (value) {
            this._expressionLookupTable = value;
            //this.expression = this.expression; //Refresh expression, or perhaps we should subscribe to the expression
        },
        enumerable: true,
        configurable: true
    });
    return ComputedExpressionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ComputedExpressionComponent.prototype, "right", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComputedExpressionComponent.prototype, "expression", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ComputedExpressionComponent.prototype, "expressionLookupTable", null);
ComputedExpressionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'computed-expression',
        template: "<div>\n<span *ngIf=\"right\">{{expression}}=</span>\n<span *ngIf=\"!right\">={{expression}}</span>\n</div>\n",
        styles: [__webpack_require__("../../../../../src/app/computed-expression.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], ComputedExpressionComponent);

var _a, _b;
//# sourceMappingURL=computed-expression.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/aligned.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlignedDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlignedDirective = (function () {
    function AlignedDirective(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.selector = "label";
    }
    AlignedDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        this.observer = new MutationObserver(function (mutations) {
            var recompute = false;
            mutations.forEach(function (mutation) {
                if (jQuery(mutation.addedNodes).find(self.selector).length > 0 ||
                    jQuery(mutation.removedNodes).find(self.selector).length > 0 ||
                    mutation.attributeName === "style") {
                    recompute = true;
                }
            });
            if (recompute) {
                self.recomputeLongestLabel();
            }
        });
        self.recomputeLongestLabel();
        var recompute = function () {
            self.recomputeLongestLabel();
        };
        window.matchMedia('print').addListener(recompute);
        window.matchMedia('screen').addListener(recompute);
        setTimeout(function () {
            self.recomputeLongestLabel();
        }, 100);
    };
    AlignedDirective.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
    };
    AlignedDirective.prototype.recomputeLongestLabel = function () {
        var config = {
            childList: true,
            attributes: true,
            characterData: false,
            attributeFilter: ["style"],
            subtree: true,
            attributeOldValue: false,
            characterDataOldValue: false
        };
        //Turn of observr so we don't trigger it while updating the width
        this.observer.disconnect();
        var labels = jQuery(this._el.nativeElement).find(this.selector);
        //Clear set widths
        labels.css('width', '');
        var maxWidth = Math.max.apply(Math, labels.map(function () { return jQuery(this).width(); }).get());
        labels.width(maxWidth);
        this.observer.observe(this._el.nativeElement, config);
        var self = this;
    };
    return AlignedDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AlignedDirective.prototype, "selector", void 0);
AlignedDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[aligned]',
        host: {}
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], AlignedDirective);

var _a, _b;
//# sourceMappingURL=aligned.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/autosize.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngAfterContentChecked = function () {
        this.adjust();
    };
    Autosize.prototype.adjust = function () {
        this.element.nativeElement.style.overflow = 'hidden';
        this.element.nativeElement.style.height = 'auto';
        this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
    };
    return Autosize;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Autosize.prototype, "onInput", null);
Autosize = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'textarea[autosize]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Autosize);

var _a;
//# sourceMappingURL=autosize.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/focus-inputs.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusInputsDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusInputsDirective = (function () {
    function FocusInputsDirective(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.focusSelector = "input, textarea";
        var self = this;
        this._focus = function (event) {
            var newEvent = new event.originalEvent.constructor(event.originalEvent.type, event.originalEvent);
            self._el.nativeElement.dispatchEvent(newEvent);
        };
    }
    FocusInputsDirective.prototype.ngAfterViewInit = function () {
        var self = this;
        this.observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                var added = jQuery(mutation.addedNodes).find(self.focusSelector);
                if (added.length > 0) {
                    self.addFocusSubscription(added);
                }
                var removed = jQuery(mutation.removedNodes).find(self.focusSelector);
                if (removed.length > 0) {
                    self.removeFocusSubscription(removed);
                }
            });
        });
        var config = {
            childList: true,
            attributes: true,
            characterData: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        };
        this.observer.observe(this._el.nativeElement, config);
        this.addFocusSubscription(jQuery(this._el.nativeElement).find(this.focusSelector));
    };
    FocusInputsDirective.prototype.addFocusSubscription = function (elements) {
        //TODO add subscription to focus event
        elements.on('focus', '', this._focus);
    };
    FocusInputsDirective.prototype.removeFocusSubscription = function (elements) {
        //TODO remove subscription to focus event
        elements.off('focus', '', this._focus);
    };
    return FocusInputsDirective;
}());
FocusInputsDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[focus-inputs]',
        host: {}
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], FocusInputsDirective);

var _a, _b;
//# sourceMappingURL=focus-inputs.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/localization.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizationDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalizationDirective = (function () {
    function LocalizationDirective() {
    }
    Object.defineProperty(LocalizationDirective.prototype, "object", {
        get: function () {
            return this._object;
        },
        set: function (value) {
            this._object = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "strength", {
        /*Attributes */
        get: function () {
            return this.object.character.attributes.strength.name;
        },
        set: function (value) {
            this.object.character.attributes.strength.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "constitution", {
        get: function () {
            return this.object.character.attributes.constitution.name;
        },
        set: function (value) {
            this.object.character.attributes.constitution.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "dexterity", {
        get: function () {
            return this.object.character.attributes.dexterity.name;
        },
        set: function (value) {
            this.object.character.attributes.dexterity.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "charisma", {
        get: function () {
            return this.object.character.attributes.charisma.name;
        },
        set: function (value) {
            this.object.character.attributes.charisma.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "intelligence", {
        get: function () {
            return this.object.character.attributes.intelligence.name;
        },
        set: function (value) {
            this.object.character.attributes.intelligence.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "will", {
        get: function () {
            return this.object.character.attributes.will.name;
        },
        set: function (value) {
            this.object.character.attributes.will.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "education", {
        get: function () {
            return this.object.character.attributes.education.name;
        },
        set: function (value) {
            this.object.character.attributes.education.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "sight", {
        get: function () {
            return this.object.character.attributes.sight.name;
        },
        set: function (value) {
            this.object.character.attributes.sight.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "hearing", {
        get: function () {
            return this.object.character.attributes.hearing.name;
        },
        set: function (value) {
            this.object.character.attributes.hearing.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "combatExperience", {
        get: function () {
            return this.object.character.attributes.combatExperience.name;
        },
        set: function (value) {
            this.object.character.attributes.combatExperience.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "educationSkill", {
        /* Base skills*/
        get: function () {
            return this.object.character.inferedBaseSkills.education.name;
        },
        set: function (value) {
            this.object.character.inferedBaseSkills.education.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "constitutionSkill", {
        get: function () {
            return this.object.character.inferedBaseSkills.constitution.name;
        },
        set: function (value) {
            this.object.character.inferedBaseSkills.constitution.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "dexteritySkill", {
        get: function () {
            return this.object.character.inferedBaseSkills.dexterity.name;
        },
        set: function (value) {
            this.object.character.inferedBaseSkills.dexterity.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "intelligenceSkill", {
        get: function () {
            return this.object.character.inferedBaseSkills.intelligence.name;
        },
        set: function (value) {
            this.object.character.inferedBaseSkills.intelligence.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "charismaIntelligenceSkill", {
        get: function () {
            return this.object.character.inferedBaseSkills.charismaIntelligence.name;
        },
        set: function (value) {
            this.object.character.inferedBaseSkills.charismaIntelligence.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "dexterityIntelligenceSkill", {
        get: function () {
            return this.object.character.inferedBaseSkills.dexterityIntelligence.name;
        },
        set: function (value) {
            this.object.character.inferedBaseSkills.dexterityIntelligence.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "sightIntelligenceSkill", {
        get: function () {
            return this.object.character.inferedBaseSkills.sightIntelligence.name;
        },
        set: function (value) {
            this.object.character.inferedBaseSkills.sightIntelligence.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "nativeLanguageSkill", {
        get: function () {
            return this.object.character.inferedBaseSkills.nativeLanguage.name;
        },
        set: function (value) {
            this.object.character.inferedBaseSkills.nativeLanguage.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "storyTellingSkill", {
        /* Skills */
        get: function () {
            return this.object.character.skills.storyTelling.name;
        },
        set: function (value) {
            this.object.character.skills.storyTelling.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "danceSkill", {
        get: function () {
            return this.object.character.skills.dance.name;
        },
        set: function (value) {
            this.object.character.skills.dance.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "sleightOfHandSkill", {
        get: function () {
            return this.object.character.skills.sleightOfHand.name;
        },
        set: function (value) {
            this.object.character.skills.sleightOfHand.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "fishingSkill", {
        get: function () {
            return this.object.character.skills.fishing.name;
        },
        set: function (value) {
            this.object.character.skills.fishing.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "seductionSkill", {
        get: function () {
            return this.object.character.skills.seduction.name;
        },
        set: function (value) {
            this.object.character.skills.seduction.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "interogateSkill", {
        get: function () {
            return this.object.character.skills.interogate.name;
        },
        set: function (value) {
            this.object.character.skills.interogate.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "jestSkill", {
        get: function () {
            return this.object.character.skills.jest.name;
        },
        set: function (value) {
            this.object.character.skills.jest.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "hideSkill", {
        get: function () {
            return this.object.character.skills.hide.name;
        },
        set: function (value) {
            this.object.character.skills.hide.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "tradeSkill", {
        get: function () {
            return this.object.character.skills.trade.name;
        },
        set: function (value) {
            this.object.character.skills.trade.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "jumpSkill", {
        get: function () {
            return this.object.character.skills.jump.name;
        },
        set: function (value) {
            this.object.character.skills.jump.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "throwSkill", {
        get: function () {
            return this.object.character.skills.throw.name;
        },
        set: function (value) {
            this.object.character.skills.throw.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "climbSkill", {
        get: function () {
            return this.object.character.skills.climb.name;
        },
        set: function (value) {
            this.object.character.skills.climb.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "driveWagonSkill", {
        get: function () {
            return this.object.character.skills.driveWagon.name;
        },
        set: function (value) {
            this.object.character.skills.driveWagon.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "leadershipSkill", {
        get: function () {
            return this.object.character.skills.leadership.name;
        },
        set: function (value) {
            this.object.character.skills.leadership.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "marschSkill", {
        get: function () {
            return this.object.character.skills.marsch.name;
        },
        set: function (value) {
            this.object.character.skills.marsch.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "cookingSkill", {
        get: function () {
            return this.object.character.skills.cooking.name;
        },
        set: function (value) {
            this.object.character.skills.cooking.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "occultismSkill", {
        get: function () {
            return this.object.character.skills.occultism.name;
        },
        set: function (value) {
            this.object.character.skills.occultism.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "rideSkill", {
        get: function () {
            return this.object.character.skills.ride.name;
        },
        set: function (value) {
            this.object.character.skills.ride.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "singSkill", {
        get: function () {
            return this.object.character.skills.sing.name;
        },
        set: function (value) {
            this.object.character.skills.sing.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "skiSkill", {
        get: function () {
            return this.object.character.skills.ski.name;
        },
        set: function (value) {
            this.object.character.skills.ski.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "actingSkill", {
        get: function () {
            return this.object.character.skills.acting.name;
        },
        set: function (value) {
            this.object.character.skills.acting.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "brawlSkill", {
        get: function () {
            return this.object.character.skills.brawl.name;
        },
        set: function (value) {
            this.object.character.skills.brawl.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "sneakSkill", {
        get: function () {
            return this.object.character.skills.sneak.name;
        },
        set: function (value) {
            this.object.character.skills.sneak.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "scoutSkill", {
        get: function () {
            return this.object.character.skills.scout.name;
        },
        set: function (value) {
            this.object.character.skills.scout.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "gamblingSkill", {
        get: function () {
            return this.object.character.skills.gambling.name;
        },
        set: function (value) {
            this.object.character.skills.gambling.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "trackingSkill", {
        get: function () {
            return this.object.character.skills.tracking.name;
        },
        set: function (value) {
            this.object.character.skills.tracking.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "drinkingSkill", {
        get: function () {
            return this.object.character.skills.drinking.name;
        },
        set: function (value) {
            this.object.character.skills.drinking.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "searchSkill", {
        get: function () {
            return this.object.character.skills.search.name;
        },
        set: function (value) {
            this.object.character.skills.search.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "educateSkill", {
        get: function () {
            return this.object.character.skills.educate.name;
        },
        set: function (value) {
            this.object.character.skills.educate.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "avoidSkill", {
        get: function () {
            return this.object.character.skills.avoid.name;
        },
        set: function (value) {
            this.object.character.skills.avoid.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "appraiseSkill", {
        get: function () {
            return this.object.character.skills.appraise.name;
        },
        set: function (value) {
            this.object.character.skills.appraise.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "survivalSkill", {
        get: function () {
            return this.object.character.skills.survival.name;
        },
        set: function (value) {
            this.object.character.skills.survival.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "persuadeSkill", {
        get: function () {
            return this.object.character.skills.persuade.name;
        },
        set: function (value) {
            this.object.character.skills.persuade.name = value;
        },
        enumerable: true,
        configurable: true
    });
    return LocalizationDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "object", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "strength", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "constitution", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "dexterity", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "charisma", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "intelligence", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "will", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "education", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "sight", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "hearing", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "combatExperience", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "educationSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "constitutionSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "dexteritySkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "intelligenceSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "charismaIntelligenceSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "dexterityIntelligenceSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "sightIntelligenceSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "nativeLanguageSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "storyTellingSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "danceSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "sleightOfHandSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "fishingSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "seductionSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "interogateSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "jestSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "hideSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "tradeSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "jumpSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "throwSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "climbSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "driveWagonSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "leadershipSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "marschSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "cookingSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "occultismSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "rideSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "singSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "skiSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "actingSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "brawlSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "sneakSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "scoutSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "gamblingSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "trackingSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "drinkingSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "searchSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "educateSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "avoidSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "appraiseSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "survivalSkill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LocalizationDirective.prototype, "persuadeSkill", null);
LocalizationDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'localization'
    })
], LocalizationDirective);

//# sourceMappingURL=localization.directive.js.map

/***/ }),

/***/ "../../../../../src/app/dropbox-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("../../../../../src/app/models/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropboxButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropboxButtonComponent = (function () {
    function DropboxButtonComponent(_el) {
        this._el = _el;
        this.characterChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(DropboxButtonComponent.prototype, "character", {
        get: function () {
            return this._character;
        },
        set: function (value) {
            this._character = value;
            this.characterChange.emit(this.character);
        },
        enumerable: true,
        configurable: true
    });
    DropboxButtonComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        var options = {
            success: function (files) {
                var link = files[0].link;
                jQuery.ajax({
                    url: link,
                    async: true,
                    crossDomain: true,
                    dataType: 'text',
                    success: function (jsonText) {
                        self.character = __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */].deserialize(jsonText);
                    }
                });
            },
            cancel: function () {
            },
            linkType: "direct",
            multiselect: false,
            extensions: ['.json'],
        };
        var button = Dropbox.createChooseButton(options);
        this._el.nativeElement.appendChild(button);
    };
    return DropboxButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DropboxButtonComponent.prototype, "characterChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DropboxButtonComponent.prototype, "character", null);
DropboxButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dropbox-button',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DropboxButtonComponent);

var _a;
//# sourceMappingURL=dropbox-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/form-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-input{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-input\">\r\n    <label [contentEditable]=\"labelEditable\">{{(label)}}</label>\r\n    <input #field [type]=\"type\" [(readonly)]=\"readonly\"\r\n        (change)=\"value = field.value\" [value]=\"value\" />\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/form-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_base_component__ = __webpack_require__("../../../../../src/app/input-base.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormInputComponent = (function (_super) {
    __extends(FormInputComponent, _super);
    function FormInputComponent(_el, _re) {
        var _this = _super.call(this, _el, _re) || this;
        _this.labelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._labelEditable = false;
        return _this;
    }
    FormInputComponent.prototype.ngAfterViewInit = function () {
        var label = this._el.nativeElement.getElementsByTagName('label');
        var self = this;
        for (var i = 0; i < label.length; ++i) {
            label[i].addEventListener('input', function (e) {
                if (e.target.innerText !== self.label) {
                    self.label = e.target.innerText;
                }
            });
        }
    };
    Object.defineProperty(FormInputComponent.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
            this.labelChange.emit(this._label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormInputComponent.prototype, "labelEditable", {
        get: function () {
            return this._labelEditable;
        },
        set: function (value) {
            this._labelEditable = value;
        },
        enumerable: true,
        configurable: true
    });
    return FormInputComponent;
}(__WEBPACK_IMPORTED_MODULE_1__input_base_component__["a" /* InputBaseComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FormInputComponent.prototype, "label", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FormInputComponent.prototype, "labelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FormInputComponent.prototype, "labelEditable", null);
FormInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'form-input',
        template: __webpack_require__("../../../../../src/app/form-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form-input.component.css"), __webpack_require__("../../../../../src/app/input-base.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], FormInputComponent);

var _a, _b;
//# sourceMappingURL=form-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/increment-decrement-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncrementDecrementMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncrementDecrementMenuComponent = (function () {
    function IncrementDecrementMenuComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.increment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.decrement = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(IncrementDecrementMenuComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.valueChange.emit(this.value);
        },
        enumerable: true,
        configurable: true
    });
    IncrementDecrementMenuComponent.prototype.doIncrement = function () {
        if (this.max !== null && typeof this.max !== 'undefined') {
            if (this.value >= this.max) {
                return;
            }
        }
        this.value = this.value + 1;
        this.increment.emit();
    };
    IncrementDecrementMenuComponent.prototype.doDecrement = function () {
        if (this.min !== null && typeof this.min !== 'undefined') {
            if (this.value <= this.min) {
                return;
            }
        }
        this.value = this.value - 1;
        this.decrement.emit();
    };
    return IncrementDecrementMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], IncrementDecrementMenuComponent.prototype, "min", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], IncrementDecrementMenuComponent.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], IncrementDecrementMenuComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IncrementDecrementMenuComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IncrementDecrementMenuComponent.prototype, "increment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], IncrementDecrementMenuComponent.prototype, "decrement", void 0);
IncrementDecrementMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'increment-decrement-menu',
        template: "\n<div>\n  <button class=\"fa fa-plus btn btn-default\" type=\"button\" (click)=\"doIncrement()\"></button>\n  <button class=\"fa fa-minus btn btn-default\" type=\"button\" (click)=\"doDecrement()\"></button>\n</div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], IncrementDecrementMenuComponent);

var _a, _b;
//# sourceMappingURL=increment-decrement-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/input-base.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nlabel {\r\n  margin-right: 2px;\r\n}\r\n\r\ninput{\r\n    max-width: 100%;\r\n    display:block;\r\n}\r\n\r\ninput {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n\r\ninput[type=\"text\"]\r\n{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 50px;\r\n          flex: 1 0 50px;\r\n  min-width: 50px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"number\"]{\r\n    width: 60px;\r\n    text-align:center;\r\n    margin:auto;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    -moz-appearance:textfield;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -moz-appearance: none;\r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\n\r\n@media print{\r\n  input[type=\"number\"]{\r\n    width: 1cm;\r\n}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input-base.component.html":
/***/ (function(module, exports) {

module.exports = "<input #field [type]=\"type\" [(readonly)]=\"readonly\"\r\n        (change)=\"value = field.value\" [value]=\"value\" />"

/***/ }),

/***/ "../../../../../src/app/input-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputBaseComponent = InputBaseComponent_1 = (function () {
    function InputBaseComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this._value = null;
        this.readonly = false;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._type = InputBaseComponent_1.ValidTypes[0];
    }
    Object.defineProperty(InputBaseComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (InputBaseComponent_1.ValidTypes.indexOf(value) < 0) {
                value = InputBaseComponent_1.ValidTypes[0];
            }
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputBaseComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.valueChange.emit(this._value);
        },
        enumerable: true,
        configurable: true
    });
    return InputBaseComponent;
}());
InputBaseComponent.ValidTypes = ['text', 'number'];
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], InputBaseComponent.prototype, "readonly", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], InputBaseComponent.prototype, "type", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], InputBaseComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputBaseComponent.prototype, "valueChange", void 0);
InputBaseComponent = InputBaseComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'input-base',
        template: __webpack_require__("../../../../../src/app/input-base.component.html"),
        styles: [__webpack_require__("../../../../../src/app/input-base.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], InputBaseComponent);

var InputBaseComponent_1, _a, _b;
//# sourceMappingURL=input-base.component.js.map

/***/ }),

/***/ "../../../../../src/app/input-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cell {\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    margin-top: auto;\r\n    padding: 1px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.cell.circle, .cell.circle > .cell-content.solid {\r\n    border-radius: 50%;\r\n}\r\n\r\n.cell-content{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: transparent;\r\n}\r\n\r\n.cell-content.checked {\r\n    background-color: black;\r\n}\r\n\r\n.cell-content.dash{\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    height: 3px;\r\n}\r\n\r\n.cell-content.checked.slash{\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%) rotate(-45deg);\r\n            transform: translateY(-50%) rotate(-45deg);\r\n    height: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cell\" [ngClass]=\"type\">\r\n    <div class=\"cell-content\" [ngClass]=\"getClass()\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/input-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputBoxComponent = InputBoxComponent_1 = (function () {
    function InputBoxComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.typeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.checked = false;
        this._type = InputBoxComponent_1.ValidTypes[0];
        this._fill = InputBoxComponent_1.ValidFill[0];
    }
    Object.defineProperty(InputBoxComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (InputBoxComponent_1.ValidTypes.indexOf(value) < 0) {
                value = InputBoxComponent_1.ValidTypes[0];
            }
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputBoxComponent.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        set: function (value) {
            if (InputBoxComponent_1.ValidFill.indexOf(value) < 0) {
                value = InputBoxComponent_1.ValidFill[0];
            }
            this._fill = value;
        },
        enumerable: true,
        configurable: true
    });
    InputBoxComponent.prototype.getClass = function () {
        var tmp = {
            checked: this.checked
        };
        tmp[this.fill] = true;
        return tmp;
    };
    return InputBoxComponent;
}());
InputBoxComponent.ValidTypes = ['circle', 'square'];
InputBoxComponent.ValidFill = ['solid', 'dash', 'slash'];
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], InputBoxComponent.prototype, "checked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], InputBoxComponent.prototype, "type", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputBoxComponent.prototype, "typeChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], InputBoxComponent.prototype, "fill", null);
InputBoxComponent = InputBoxComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'input-box',
        template: __webpack_require__("../../../../../src/app/input-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/input-box.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], InputBoxComponent);

var InputBoxComponent_1, _a, _b;
//# sourceMappingURL=input-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/input-computed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tooltip-box {\r\n    border: 1px solid black;\r\n    background: whitesmoke;\r\n    border-radius: 5px;\r\n    padding: 8px;\r\n    z-index: 10;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    left: 50%;\r\n    position:absolute;\r\n    bottom: 100%;\r\n    opacity: 0;\r\n    pointer-events: visible;\r\n    visibility: hidden;\r\n    transition: visibility 0.5s, opacity 0.5s linear; /*NOTE: The visibility transition needs some time to allow the focus events to finish propagating and setting the final visibility status or the elements will be hidden and no focus events can be recieved*/\r\n}\r\n\r\n.show{\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.strike{\r\n    text-decoration: line-through;\r\n}\r\n\r\ntextarea\r\n{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 60px;\r\n          flex: 1 0 60px;\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input-computed.component.html":
/***/ (function(module, exports) {

module.exports = "<div focus-inputs (focus)=\"showExpression()\" (focusout)=\"hideExpression()\" style=\"display:inline-block\">\r\n    <div [class.show]=\"expressionVisible\" class=\"form-input tooltip-box\" style=\"position:absolute;\">\r\n        <input type=\"checkbox\" [(ngModel)]=\"computationBase.ignoreExpression\">\r\n        <textarea [(ngModel)]=\"expression\" [class.strike]=\"computationBase.ignoreExpression\"></textarea>\r\n    </div>\r\n    <div class=\"form-input\">\r\n        <label *ngIf=\"!!label\">{{label}}</label>\r\n        <div class=\"input-group\" style=\"flex: 1 0 0px\">\r\n            <span *ngIf=\"!!prefix\" class=\"input-group-addon\">{{prefix}}</span>\r\n            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"computationBase.value\" [readonly]=\"!computationBase.ignoreExpression\"/>\r\n            <span *ngIf=\"!!suffix\" class=\"input-group-addon\">{{suffix}}</span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/input-computed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character_attribute__ = __webpack_require__("../../../../../src/app/models/character-attribute.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComputedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComputedComponent = (function () {
    function InputComputedComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.prefix = null;
        this.suffix = null;
        this.expressionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.expressionVisible = false;
        var self = this;
    }
    Object.defineProperty(InputComputedComponent.prototype, "expression", {
        get: function () {
            var expression = this.computationBase.expression;
            if (this.computationBase.baseValues) {
                var self = this;
                Object.keys(this.computationBase.baseValues).forEach(function (key) {
                    var str = self.computationBase.baseValues[key].name;
                    if (str) {
                        var regex = new RegExp('\\b' + key + '\\b', "g");
                        expression = expression.replace(regex, str);
                    }
                });
            }
            return expression;
        },
        set: function (value) {
            if (this.computationBase.baseValues) {
                var self = this;
                Object.keys(this.computationBase.baseValues).forEach(function (key) {
                    var str = self.computationBase.baseValues[key].name;
                    if (str) {
                        var regex = new RegExp('\\b' + str + '\\b', "g");
                        value = value.replace(regex, key);
                    }
                });
            }
            this.computationBase.expression = value;
            this.expressionChange.emit(this.computationBase.expression);
        },
        enumerable: true,
        configurable: true
    });
    InputComputedComponent.prototype.showExpression = function () {
        this.expressionVisible = true;
    };
    InputComputedComponent.prototype.hideExpression = function () {
        this.expressionVisible = false;
    };
    return InputComputedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputComputedComponent.prototype, "prefix", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputComputedComponent.prototype, "suffix", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_character_attribute__["a" /* CharacterInferedAttribute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_character_attribute__["a" /* CharacterInferedAttribute */]) === "function" && _a || Object)
], InputComputedComponent.prototype, "computationBase", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputComputedComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], InputComputedComponent.prototype, "expression", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], InputComputedComponent.prototype, "expressionChange", void 0);
InputComputedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'input-computed',
        template: __webpack_require__("../../../../../src/app/input-computed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/input-computed.component.css"), __webpack_require__("../../../../../src/app/input-group.component.css"), __webpack_require__("../../../../../src/app/form-input.component.css"), __webpack_require__("../../../../../src/app/input-base.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], InputComputedComponent);

var _a, _b, _c;
//# sourceMappingURL=input-computed.component.js.map

/***/ }),

/***/ "../../../../../src/app/input-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-field\r\n{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 60px;\r\n          flex: 1 0 60px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"number\"].form-control:first-child{\r\n    margin-right: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/input-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-input\">\r\n    <label *ngIf=\"!!label\">{{label}}</label>\r\n    <div class=\"input-group flex-field\">\r\n        <span *ngIf=\"!!prefix\" class=\"input-group-addon\">{{prefix}}</span>\r\n        <input #field class=\"form-control\" [type]=\"type\" [(readonly)]=\"readonly\"\r\n                (change)=\"value = field.value\" [value]=\"value\"/>\r\n        <span *ngIf=\"!!suffix\" class=\"input-group-addon\">{{suffix}}</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/input-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_input_component__ = __webpack_require__("../../../../../src/app/form-input.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputGroupComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputGroupComponent = (function (_super) {
    __extends(InputGroupComponent, _super);
    function InputGroupComponent(_el, _re) {
        var _this = _super.call(this, _el, _re) || this;
        _this.prefix = null;
        _this.suffix = null;
        return _this;
    }
    return InputGroupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__form_input_component__["a" /* FormInputComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputGroupComponent.prototype, "prefix", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputGroupComponent.prototype, "suffix", void 0);
InputGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'input-group',
        template: __webpack_require__("../../../../../src/app/input-group.component.html"),
        styles: [__webpack_require__("../../../../../src/app/input-group.component.css"), __webpack_require__("../../../../../src/app/form-input.component.css"), __webpack_require__("../../../../../src/app/input-base.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], InputGroupComponent);

var _a, _b;
//# sourceMappingURL=input-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/animal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__equipment_item__ = __webpack_require__("../../../../../src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__immutable_wrapper__ = __webpack_require__("../../../../../src/app/models/immutable-wrapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Animal = (function () {
    function Animal() {
        this.name = null;
        this.carryingCapacity = null;
        this.movement = null;
        this.damage = null;
        this.inventory = new Array();
        this.techniques = new Array();
    }
    return Animal;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"],
    __metadata("design:type", String)
], Animal.prototype, "name", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"],
    __metadata("design:type", Number)
], Animal.prototype, "carryingCapacity", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"],
    __metadata("design:type", Number)
], Animal.prototype, "movement", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"],
    __metadata("design:type", String)
], Animal.prototype, "damage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_0__equipment_item__["a" /* Item */]))),
    __metadata("design:type", Object)
], Animal.prototype, "inventory", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_1__immutable_wrapper__["a" /* Wrapper */]))),
    __metadata("design:type", Object)
], Animal.prototype, "techniques", void 0);
//# sourceMappingURL=animal.js.map

/***/ }),

/***/ "../../../../../src/app/models/character-attribute.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serializr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_serialize_context_refs__ = __webpack_require__("../../../../../src/app/util/serialize-context-refs.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CharacterAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CharacterAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterInferedAttribute; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterAttribute = (function () {
    function CharacterAttribute() {
        this._value = Number.NaN;
        this.name = null;
    }
    Object.defineProperty(CharacterAttribute.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            if (typeof value === 'number')
                this._value = Math.floor(this._value);
        },
        enumerable: true,
        configurable: true
    });
    return CharacterAttribute;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], CharacterAttribute.prototype, "_value", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CharacterAttribute.prototype, "name", void 0);
var CharacterAttributes = (function () {
    function CharacterAttributes() {
        this.strength = new CharacterAttribute();
        this.constitution = new CharacterAttribute();
        this.dexterity = new CharacterAttribute();
        this.charisma = new CharacterAttribute();
        this.intelligence = new CharacterAttribute();
        this.will = new CharacterAttribute();
        this.education = new CharacterAttribute();
        this.sight = new CharacterAttribute();
        this.hearing = new CharacterAttribute();
        this.luck = new CharacterAttribute();
        this.qadosh = new CharacterAttribute();
        this.combatExperience = new CharacterAttribute();
        this.extraAttributes = new Array();
    }
    return CharacterAttributes;
}());

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["createModelSchema"])(CharacterAttributes, {
    strength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    constitution: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    dexterity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    charisma: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    intelligence: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    will: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    education: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    sight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    hearing: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    luck: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    qadosh: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    combatExperience: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute),
    extraAttributes: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CharacterAttribute))
}); // (context : any) => serializrConstructor(context, CharacterAttributes) )
var CharacterInferedAttribute = (function () {
    function CharacterInferedAttribute(baseValues) {
        this.min = Number.MIN_VALUE;
        this.max = Number.MAX_VALUE;
        this._value = Number.NaN;
        this._expression = null;
        this.ignoreExpression = false;
        this.baseValues = baseValues;
    }
    Object.defineProperty(CharacterInferedAttribute.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this.ignoreExpression) {
                this.setValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterInferedAttribute.prototype, "expression", {
        get: function () {
            return this._expression;
        },
        set: function (value) {
            this._expression = value;
            var regex = new RegExp(/\b\w+\b/, "g");
            var match = null;
            this._variableNames = [];
            do {
                match = regex.exec(this._expression);
                if (match)
                    this._variableNames.push(match[0]);
            } while (match);
        },
        enumerable: true,
        configurable: true
    });
    CharacterInferedAttribute.prototype.setValue = function (value) {
        this._value = Math.floor(value);
    };
    CharacterInferedAttribute.prototype.updateValue = function () {
        if (!this.ignoreExpression) {
            var values = {};
            var self = this;
            if (self.baseValues) {
                this._variableNames.forEach(function (key) {
                    if (self.baseValues[key] && self.baseValues[key].value !== null && typeof self.baseValues[key].value !== 'undefined')
                        values[key] = self.baseValues[key].value;
                });
            }
            var val = this.compute(values);
            if (val < this.min) {
                val = this.min;
            }
            else if (val > this.max) {
                val = this.max;
            }
            this.setValue(val);
        }
    };
    CharacterInferedAttribute.prototype.compute = function (variables) {
        try {
            return math.eval(this.expression, variables);
        }
        catch (e) {
            return 0;
        }
    };
    return CharacterInferedAttribute;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CharacterInferedAttribute.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_serialize_context_refs__["a" /* myObject */])(CharacterAttributes)),
    __metadata("design:type", CharacterAttributes)
], CharacterInferedAttribute.prototype, "baseValues", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], CharacterInferedAttribute.prototype, "min", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], CharacterInferedAttribute.prototype, "max", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], CharacterInferedAttribute.prototype, "_value", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CharacterInferedAttribute.prototype, "_expression", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Boolean)
], CharacterInferedAttribute.prototype, "ignoreExpression", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["primitive"])())),
    __metadata("design:type", Object)
], CharacterInferedAttribute.prototype, "_variableNames", void 0);
//# sourceMappingURL=character-attribute.js.map

/***/ }),

/***/ "../../../../../src/app/models/character-skill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serializr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_serialize_context_refs__ = __webpack_require__("../../../../../src/app/util/serialize-context-refs.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterSkill; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterSkill = (function () {
    function CharacterSkill(baseValue) {
        this._value = null;
        this.name = null;
        this.specialization = null;
        this.baseValue = baseValue;
    }
    Object.defineProperty(CharacterSkill.prototype, "value", {
        get: function () {
            var sum = null;
            if (this.baseValue && this.baseValue.value) {
                sum = sum + this.baseValue.value;
            }
            if (!Number.isNaN(this._value) && this._value !== null) {
                sum = sum + this._value;
            }
            return sum;
        },
        set: function (value) {
            if (value !== null) {
                value = Number(value);
                if (this.baseValue && this.baseValue.value) {
                    this._value = value - this.baseValue.value;
                }
                else {
                    this._value = value;
                }
                if (this._value < 1) {
                    this._value = 0;
                }
                this._value = Math.floor(this._value);
            }
            else {
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return CharacterSkill;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CharacterSkill.prototype, "value", null);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["createModelSchema"])(CharacterSkill, {
    _value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["primitive"])(),
    name: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["primitive"])(),
    specialization: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["primitive"])(),
    baseValue: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util_serialize_context_refs__["a" /* myObject */])(null)
}); //, (context : any) => serializrInterface(context, ['baseValue']) )
//# sourceMappingURL=character-skill.js.map

/***/ }),

/***/ "../../../../../src/app/models/character-stat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterStat; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacterStat = (function () {
    function CharacterStat() {
        this.specialization = null;
        this.value = null;
    }
    return CharacterStat;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CharacterStat.prototype, "specialization", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], CharacterStat.prototype, "value", void 0);
//# sourceMappingURL=character-stat.js.map

/***/ }),

/***/ "../../../../../src/app/models/character.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character_stat__ = __webpack_require__("../../../../../src/app/models/character-stat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_attribute__ = __webpack_require__("../../../../../src/app/models/character-attribute.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combat_art__ = __webpack_require__("../../../../../src/app/models/combat-art.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__equipment_equipment__ = __webpack_require__("../../../../../src/app/models/equipment/equipment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipment_melee_weapon__ = __webpack_require__("../../../../../src/app/models/equipment/melee-weapon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animal__ = __webpack_require__("../../../../../src/app/models/animal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__character_skill__ = __webpack_require__("../../../../../src/app/models/character-skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__magic__ = __webpack_require__("../../../../../src/app/models/magic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact__ = __webpack_require__("../../../../../src/app/models/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__immutable_wrapper__ = __webpack_require__("../../../../../src/app/models/immutable-wrapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__damage_columns__ = __webpack_require__("../../../../../src/app/models/damage-columns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_serializr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__ = __webpack_require__("../../../../../src/app/util/serialize-context-refs.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CharacterSkillItem; });
/* unused harmony export CharacterSkillMelee */
/* unused harmony export CharacterSkillRanged */
/* unused harmony export CharacterSkillShield */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterObject; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CharacterSkillItem = (function () {
    function CharacterSkillItem() {
        this.skill = null;
        this.item = null;
    }
    return CharacterSkillItem;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_11_serializr__["serializable"],
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__immutable_wrapper__["a" /* Wrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__immutable_wrapper__["a" /* Wrapper */]) === "function" && _a || Object)
], CharacterSkillItem.prototype, "skill", void 0);
var CharacterSkillMelee = (function (_super) {
    __extends(CharacterSkillMelee, _super);
    function CharacterSkillMelee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CharacterSkillMelee;
}(CharacterSkillItem));

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(CharacterSkillMelee, { item: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["a" /* MeleeWeapon */]) });
var CharacterSkillRanged = (function (_super) {
    __extends(CharacterSkillRanged, _super);
    function CharacterSkillRanged() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CharacterSkillRanged;
}(CharacterSkillItem));

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(CharacterSkillRanged, { item: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["b" /* RangedWeapon */]) });
var CharacterSkillShield = (function (_super) {
    __extends(CharacterSkillShield, _super);
    function CharacterSkillShield() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CharacterSkillShield;
}(CharacterSkillItem));

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(CharacterSkillShield, { item: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["c" /* Shield */]) });
var CharatcterCharacteristics = (function () {
    function CharatcterCharacteristics() {
        this.loyalty = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.honor = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.lust = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.aggression = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.faith = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.generosity = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.reputation = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
    }
    return CharatcterCharacteristics;
}());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(CharatcterCharacteristics, {
    loyalty: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    honor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    lust: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    aggression: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    faith: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    generosity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    reputation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */])
});
var InferedAttributes = (function () {
    function InferedAttributes() {
    }
    return InferedAttributes;
}());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(InferedAttributes, {
    speed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    initiative: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    insight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    chockValue: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    carryingCapacity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */])
});
var InferedBaseSkills = (function () {
    function InferedBaseSkills() {
    }
    return InferedBaseSkills;
}());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(InferedBaseSkills, {
    constitution: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    dexterity: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    intelligence: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    education: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    charismaIntelligence: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    dexterityIntelligence: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    sightIntelligence: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */]),
    nativeLanguage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */])
});
var BaseSkills = (function () {
    function BaseSkills() {
    }
    return BaseSkills;
}());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(BaseSkills, {
    storyTelling: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    dance: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    sleightOfHand: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    fishing: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    seduction: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    interogate: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    jest: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    hide: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    trade: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    jump: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    throw: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    climb: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    driveWagon: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    leadership: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    marsch: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    cooking: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    occultism: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    ride: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    sing: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    ski: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    acting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    brawl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    sneak: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    scout: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    gambling: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    tracking: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    drinking: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    search: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    educate: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    avoid: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    appraise: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    survival: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */]),
    persuade: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */])
});
var Family = (function () {
    function Family() {
        this.mother = null;
        this.father = null;
        this.others = [];
    }
    return Family;
}());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(Family, {
    mother: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    father: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    others: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_9__immutable_wrapper__["a" /* Wrapper */]))
});
var Equipment = (function () {
    function Equipment() {
        this.meleeWeapons = [];
        this.rangedWeapons = [];
        this.shields = [];
        this.armor = [];
        this.itemsCarried = [];
        this.itemsStorage = [];
        this.luggage = [];
        this.coins = [];
        this.coinsStorage = [];
    }
    return Equipment;
}());
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(Equipment, {
    meleeWeapons: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(CharacterSkillMelee)),
    rangedWeapons: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(CharacterSkillRanged)),
    shields: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(CharacterSkillShield)),
    armor: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["d" /* Armor */])),
    itemsCarried: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["e" /* Item */])),
    itemsStorage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["f" /* ItemStorage */])),
    luggage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["e" /* Item */])),
    coins: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["g" /* Coins */])),
    coinsStorage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["h" /* CoinsStorage */]))
});
var CharacterObject = (function () {
    function CharacterObject() {
        this.player = null;
        this.gameMaster = null;
        this.name = null;
        this.profession = null;
        this.race = null;
        this.gender = null;
        this.age = null;
        this.height = null;
        this.weight = null;
        this.body = null;
        this.homestead = null;
        this.religion = null;
        this.handDominance = null;
        this.attributes = new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["b" /* CharacterAttributes */]();
        this.characteristics = new CharatcterCharacteristics();
        this.specialAbilities = new Array();
        this.baseDamage = new __WEBPACK_IMPORTED_MODULE_4__equipment_melee_weapon__["a" /* MeleeDamage */]();
        this.exhaustion = new __WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]();
        this.trauma = new __WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]();
        this.pain = new __WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]();
        this.bleeding = new __WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]();
        this.bloodLoss = new __WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]();
        this.inferedAttributes = new InferedAttributes();
        this.inferedBaseSkills = new InferedBaseSkills();
        this.skills = new BaseSkills();
        this.languageSkills = new Array();
        this.scriptSkills = new Array();
        this.miscellaneousSkills = new Array();
        this.combatArts = new Array();
        this.miscellaneous = new Array();
        this.magic = new Array();
        this.contacts = new Array();
        this.family = new Family();
        this.animals = new Array();
        this.equipment = new Equipment();
        this.rations = new __WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["i" /* ItemStack */]();
        var self = this;
        this.inferedAttributes = {
            speed: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            initiative: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            insight: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            chockValue: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            carryingCapacity: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes)
        };
        this.inferedAttributes.speed.expression = "(dexterity+constitution+10)/4";
        this.inferedAttributes.initiative.expression = "(dexterity/2 + combatExperience)/2";
        this.inferedAttributes.insight.expression = "(intelligence + sight)/10 + combatExperience/2";
        this.inferedAttributes.chockValue.expression = "(strength + constitution + will)/3";
        this.inferedAttributes.carryingCapacity.expression = "(strength + constitution)/2";
        this.inferedAttributes.speed.min =
            this.inferedAttributes.initiative.min =
                this.inferedAttributes.insight.min =
                    this.inferedAttributes.chockValue.min =
                        this.inferedAttributes.carryingCapacity.min = 0;
        this.inferedBaseSkills = {
            constitution: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            dexterity: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            intelligence: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            education: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            charismaIntelligence: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            dexterityIntelligence: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            sightIntelligence: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes),
            nativeLanguage: new __WEBPACK_IMPORTED_MODULE_1__character_attribute__["a" /* CharacterInferedAttribute */](this.attributes)
        };
        this.inferedBaseSkills.constitution.expression = "constitution/2";
        this.inferedBaseSkills.dexterity.expression = "dexterity/2";
        this.inferedBaseSkills.intelligence.expression = "intelligence/2";
        this.inferedBaseSkills.education.expression = "education/2";
        this.inferedBaseSkills.charismaIntelligence.expression = "(charisma+intelligence)/4";
        this.inferedBaseSkills.dexterityIntelligence.expression = "(dexterity+intelligence)/4";
        this.inferedBaseSkills.sightIntelligence.expression = "(sight+intelligence)/4";
        this.inferedBaseSkills.nativeLanguage.expression = "intelligence";
        this.inferedBaseSkills.constitution.min =
            this.inferedBaseSkills.dexterity.min =
                this.inferedBaseSkills.intelligence.min =
                    this.inferedBaseSkills.education.min =
                        this.inferedBaseSkills.charismaIntelligence.min =
                            this.inferedBaseSkills.dexterityIntelligence.min =
                                this.inferedBaseSkills.sightIntelligence.min =
                                    this.inferedBaseSkills.nativeLanguage.min = 5;
        this.skills = {
            storyTelling: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            dance: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterityIntelligence),
            sleightOfHand: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            fishing: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            seduction: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            interogate: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            jest: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterityIntelligence),
            hide: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterityIntelligence),
            trade: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            jump: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            throw: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            climb: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            driveWagon: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            leadership: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            marsch: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.constitution),
            cooking: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            occultism: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.education),
            ride: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            sing: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            ski: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            acting: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            brawl: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            sneak: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            scout: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.sightIntelligence),
            gambling: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            tracking: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.sightIntelligence),
            drinking: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.constitution),
            search: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.sightIntelligence),
            educate: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            avoid: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            appraise: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.education),
            survival: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            persuade: new __WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence)
        };
    }
    CharacterObject.prototype.serialize = function () {
        return CircularJSON.stringify(this); //serialize(this)
    };
    CharacterObject.deserialize = function (json) {
        var character = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["deserialize"])(CharacterObject, CircularJSON.parse(json));
        return character;
    };
    return CharacterObject;
}());

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["createModelSchema"])(CharacterObject, {
    player: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    gameMaster: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    name: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    profession: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    race: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    gender: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    age: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    weight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    body: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    homestead: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    religion: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    handDominance: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["primitive"])(),
    attributes: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_1__character_attribute__["b" /* CharacterAttributes */]),
    characteristics: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(CharatcterCharacteristics),
    specialAbilities: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_9__immutable_wrapper__["a" /* Wrapper */])),
    baseDamage: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_4__equipment_melee_weapon__["a" /* MeleeDamage */]),
    exhaustion: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]),
    trauma: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]),
    pain: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]),
    bleeding: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]),
    bloodLoss: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_10__damage_columns__["a" /* DamageColumns */]),
    inferedAttributes: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(InferedAttributes),
    inferedBaseSkills: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(InferedBaseSkills),
    skills: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(BaseSkills),
    languageSkills: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */])),
    scriptSkills: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */])),
    miscellaneousSkills: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_6__character_skill__["a" /* CharacterSkill */])),
    combatArts: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_2__combat_art__["c" /* CombatArt */])),
    miscellaneous: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_9__immutable_wrapper__["a" /* Wrapper */])),
    magic: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_7__magic__["a" /* Magic */])),
    contacts: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_8__contact__["a" /* Contact */])),
    family: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(Family),
    animals: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_5__animal__["a" /* Animal */])),
    equipment: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(Equipment),
    rations: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_3__equipment_equipment__["i" /* ItemStack */])
});
var _a;
//# sourceMappingURL=character.js.map

/***/ }),

/***/ "../../../../../src/app/models/combat-art.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatArtTechnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CombatArtMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CombatArt; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CombatArtTechnique = (function () {
    function CombatArtTechnique() {
        this.name = null;
        this.description = null;
        this.cost = null;
    }
    return CombatArtTechnique;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CombatArtTechnique.prototype, "name", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CombatArtTechnique.prototype, "description", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], CombatArtTechnique.prototype, "cost", void 0);
var CombatArtMoment = (function () {
    function CombatArtMoment() {
        this.name = null;
        this.difficulty = null;
        this.relation = null;
    }
    return CombatArtMoment;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CombatArtMoment.prototype, "name", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CombatArtMoment.prototype, "difficulty", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CombatArtMoment.prototype, "relation", void 0);
var CombatArt = (function () {
    function CombatArt() {
        this.name = null;
        this.value = null;
        this.moments = new Array();
        this.techniques = new Array();
    }
    return CombatArt;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], CombatArt.prototype, "name", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], CombatArt.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CombatArtMoment))),
    __metadata("design:type", Object)
], CombatArt.prototype, "moments", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["list"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(CombatArtTechnique))),
    __metadata("design:type", Object)
], CombatArt.prototype, "techniques", void 0);
//# sourceMappingURL=combat-art.js.map

/***/ }),

/***/ "../../../../../src/app/models/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Contact = (function () {
    function Contact() {
        this.name = null;
        this.profession = null;
        this.relation = null;
        this.resources = null;
        this.description = null;
    }
    return Contact;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Contact.prototype, "profession", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Contact.prototype, "relation", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], Contact.prototype, "resources", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Contact.prototype, "description", void 0);
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ "../../../../../src/app/models/damage-columns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageColumns; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DamageColumns = (function () {
    function DamageColumns() {
        this.damageSever = 0;
        this.damage = 0;
        this.columns = 10;
    }
    return DamageColumns;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], DamageColumns.prototype, "damageSever", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], DamageColumns.prototype, "damage", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], DamageColumns.prototype, "columns", void 0);
//# sourceMappingURL=damage-columns.js.map

/***/ }),

/***/ "../../../../../src/app/models/equipment/armor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("../../../../../src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Armor; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Protection = (function () {
    function Protection() {
        this.slash = null;
        this.crush = null;
        this.pierce = null;
    }
    return Protection;
}());
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", Number)
], Protection.prototype, "slash", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", Number)
], Protection.prototype, "crush", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", Number)
], Protection.prototype, "pierce", void 0);
var Armor = (function (_super) {
    __extends(Armor, _super);
    function Armor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.areas = null;
        _this.resistance = new Protection();
        _this.durability = null;
        return _this;
    }
    return Armor;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], Armor.prototype, "areas", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["object"])(Protection)),
    __metadata("design:type", Protection)
], Armor.prototype, "resistance", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", Number)
], Armor.prototype, "durability", void 0);
//# sourceMappingURL=armor.js.map

/***/ }),

/***/ "../../../../../src/app/models/equipment/coins.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_stack__ = __webpack_require__("../../../../../src/app/models/equipment/item-stack.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CoinsStorage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Coins = (function (_super) {
    __extends(Coins, _super);
    function Coins() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.worth = null;
        return _this;
    }
    return Coins;
}(__WEBPACK_IMPORTED_MODULE_0__item_stack__["a" /* ItemStack */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", Number)
], Coins.prototype, "worth", void 0);
var CoinsStorage = (function (_super) {
    __extends(CoinsStorage, _super);
    function CoinsStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.location = null;
        return _this;
    }
    return CoinsStorage;
}(Coins));

__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], CoinsStorage.prototype, "location", void 0);
//# sourceMappingURL=coins.js.map

/***/ }),

/***/ "../../../../../src/app/models/equipment/equipment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("../../../../../src/app/models/equipment/item.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__item__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__item__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_stack__ = __webpack_require__("../../../../../src/app/models/equipment/item-stack.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__item_stack__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coins__ = __webpack_require__("../../../../../src/app/models/equipment/coins.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__coins__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__coins__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__melee_weapon__ = __webpack_require__("../../../../../src/app/models/equipment/melee-weapon.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__melee_weapon__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ranged_weapon__ = __webpack_require__("../../../../../src/app/models/equipment/ranged-weapon.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__ranged_weapon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shield__ = __webpack_require__("../../../../../src/app/models/equipment/shield.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__shield__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__armor__ = __webpack_require__("../../../../../src/app/models/equipment/armor.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__armor__["a"]; });







//# sourceMappingURL=equipment.js.map

/***/ }),

/***/ "../../../../../src/app/models/equipment/item-stack.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("../../../../../src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemStack; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemStack = (function (_super) {
    __extends(ItemStack, _super);
    function ItemStack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = null;
        return _this;
    }
    return ItemStack;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", Number)
], ItemStack.prototype, "count", void 0);
//# sourceMappingURL=item-stack.js.map

/***/ }),

/***/ "../../../../../src/app/models/equipment/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ItemStorage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Item = (function () {
    function Item() {
        this.weight = null;
        this.name = null;
    }
    return Item;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], Item.prototype, "weight", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
var ItemStorage = (function (_super) {
    __extends(ItemStorage, _super);
    function ItemStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.location = null;
        return _this;
    }
    return ItemStorage;
}(Item));

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], ItemStorage.prototype, "location", void 0);
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/models/equipment/melee-weapon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("../../../../../src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeleeDamage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SpeedIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MeleeWeapon; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeleeDamage = (function () {
    function MeleeDamage() {
        this.slash = null;
        this.crush = null;
        this.pierce = null;
    }
    return MeleeDamage;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], MeleeDamage.prototype, "slash", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], MeleeDamage.prototype, "crush", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], MeleeDamage.prototype, "pierce", void 0);
var SpeedIndex = (function () {
    function SpeedIndex() {
        this.opening = null;
        this.engaged = null;
    }
    return SpeedIndex;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", Number)
], SpeedIndex.prototype, "opening", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", Number)
], SpeedIndex.prototype, "engaged", void 0);
var MeleeWeapon = (function (_super) {
    __extends(MeleeWeapon, _super);
    function MeleeWeapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.grip = null;
        _this.damage = new MeleeDamage();
        _this.durability = null;
        _this.speedIndex = new SpeedIndex();
        return _this;
    }
    return MeleeWeapon;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], MeleeWeapon.prototype, "grip", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["object"])(MeleeDamage)),
    __metadata("design:type", MeleeDamage)
], MeleeWeapon.prototype, "damage", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", Number)
], MeleeWeapon.prototype, "durability", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["object"])(SpeedIndex)),
    __metadata("design:type", SpeedIndex)
], MeleeWeapon.prototype, "speedIndex", void 0);
//# sourceMappingURL=melee-weapon.js.map

/***/ }),

/***/ "../../../../../src/app/models/equipment/ranged-weapon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("../../../../../src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serializr__);
/* unused harmony export RangedDamage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangedWeapon; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RangedDamage = (function () {
    function RangedDamage() {
        this.short = null;
        this.normal = null;
        this.far = null;
        this.veryFar = null;
    }
    return RangedDamage;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], RangedDamage.prototype, "short", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], RangedDamage.prototype, "normal", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], RangedDamage.prototype, "far", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], RangedDamage.prototype, "veryFar", void 0);
var RangedWeapon = (function (_super) {
    __extends(RangedWeapon, _super);
    function RangedWeapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.range = null;
        _this.damage = new RangedDamage();
        return _this;
    }
    return RangedWeapon;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"],
    __metadata("design:type", String)
], RangedWeapon.prototype, "range", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_serializr__["object"])(RangedDamage)),
    __metadata("design:type", RangedDamage)
], RangedWeapon.prototype, "damage", void 0);
//# sourceMappingURL=ranged-weapon.js.map

/***/ }),

/***/ "../../../../../src/app/models/equipment/shield.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("../../../../../src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__melee_weapon__ = __webpack_require__("../../../../../src/app/models/equipment/melee-weapon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shield; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Shield = (function (_super) {
    __extends(Shield, _super);
    function Shield() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = null;
        _this.durability = null;
        _this.speedIndex = new __WEBPACK_IMPORTED_MODULE_1__melee_weapon__["c" /* SpeedIndex */]();
        _this.passiveProtection = null;
        return _this;
    }
    return Shield;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));

__decorate([
    __WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"],
    __metadata("design:type", String)
], Shield.prototype, "damage", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"],
    __metadata("design:type", Number)
], Shield.prototype, "durability", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_serializr__["object"])(__WEBPACK_IMPORTED_MODULE_1__melee_weapon__["c" /* SpeedIndex */])),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__melee_weapon__["c" /* SpeedIndex */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__melee_weapon__["c" /* SpeedIndex */]) === "function" && _a || Object)
], Shield.prototype, "speedIndex", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_serializr__["serializable"],
    __metadata("design:type", String)
], Shield.prototype, "passiveProtection", void 0);
var _a;
//# sourceMappingURL=shield.js.map

/***/ }),

/***/ "../../../../../src/app/models/immutable-wrapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Wrapper = (function () {
    function Wrapper() {
        this.value = null;
    }
    return Wrapper;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Object)
], Wrapper.prototype, "value", void 0);
//# sourceMappingURL=immutable-wrapper.js.map

/***/ }),

/***/ "../../../../../src/app/models/magic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serializr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Magic; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Magic = (function () {
    function Magic() {
        this.magnitude = null;
        this.description = null;
        this.time = null;
        this.duration = null;
        this.reach = null;
        this.name = null;
    }
    return Magic;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", Number)
], Magic.prototype, "magnitude", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Magic.prototype, "description", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Magic.prototype, "time", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Magic.prototype, "duration", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Magic.prototype, "reach", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_serializr__["serializable"],
    __metadata("design:type", String)
], Magic.prototype, "name", void 0);
//# sourceMappingURL=magic.js.map

/***/ }),

/***/ "../../../../../src/app/page1/armor.component.html":
/***/ (function(module, exports) {

module.exports = "<td>\r\n    <input-base [(value)]=\"item.name\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.areas\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.resistance.slash\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.resistance.crush\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.resistance.pierce\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.durability\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.weight\" type=\"number\"></input-base>\r\n</td>\r\n"

/***/ }),

/***/ "../../../../../src/app/page1/armor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_component__ = __webpack_require__("../../../../../src/app/page1/item.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmorComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArmorComponent = (function (_super) {
    __extends(ArmorComponent, _super);
    function ArmorComponent(_el, _re) {
        return _super.call(this, _el, _re) || this;
    }
    return ArmorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__item_component__["a" /* ItemComponent */]));
ArmorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tr[armor]',
        template: __webpack_require__("../../../../../src/app/page1/armor.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], ArmorComponent);

var _a, _b;
//# sourceMappingURL=armor.component.js.map

/***/ }),

/***/ "../../../../../src/app/page1/damage-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cell {\r\n    display: table-cell;\r\n    width: 16px;\r\n    height: 16px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.component{\r\n    display:table;\r\n}\r\n\r\n.section{\r\n    display: table-row;\r\n}\r\n\r\n.label, .grid{\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n}\r\n\r\n.label{\r\n    padding-right: 8px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.cell:before, .cell:after{\r\n    position: relative;\r\n    display: inline-block;\r\n    font-family: 'eon-3';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    background-color: white;\r\n}\r\n.cell.circle:before{\r\n    border-radius: 50%;\r\n     content: \"\\E902\";\r\n}\r\n.cell.circle.fill:before{\r\n     content: \"\\E903\";\r\n}\r\n.cell.circle.dash:before{\r\n     content: \"\\E901\";\r\n}\r\n.cell.circle.stroke:before{\r\n     content: \"\\E905\";\r\n}\r\n.cell.square:before{\r\n     content: \"\\E907\";\r\n}\r\n.cell.square.fill:before{\r\n     content: \"\\E908\";\r\n}\r\n.cell.square.dash:before{\r\n     content: \"\\E906\";\r\n}\r\n\r\n\r\n@media print{\r\n    .cell, .cell:before, .cell:after{\r\n        font-size: 0.26cm;\r\n    }\r\n    .cell {\r\n        width: 0.26cm;\r\n        height: 0.26cm;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page1/damage-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div aligned selector=\".label\">-->\r\n<div>\r\n    <div class=\"hover-menu\" aligned>\r\n        <div style=\"display:flex\">\r\n            <label>{{header}}</label>\r\n            <increment-decrement-menu [(value)]=\"damageColumns.damage\" min=\"0\"></increment-decrement-menu>\r\n        </div>\r\n        <div style=\"display:flex\" *ngIf=\"severDamageName !== null\">\r\n            <label>{{severDamageName}}</label>\r\n            <increment-decrement-menu [(value)]=\"damageColumns.damageSever\" min=\"0\"></increment-decrement-menu>\r\n        </div>\r\n        <div style=\"display:flex\">\r\n            <label i18n=\"@@columns\">Kolumner</label>\r\n            <increment-decrement-menu [(value)]=\"damageColumns.columns\" min=\"1\" [max]=\"columns\"></increment-decrement-menu>\r\n        </div>\r\n    </div>\r\n    <div class=\"component\">\r\n        <div class=\"section\">\r\n            <div class=\"label\" *ngIf=\"!labelsRight\">\r\n                <ng-container *ngTemplateOutlet=\"labelHeaderTemplate;\"></ng-container>\r\n            </div>\r\n            <div class=\"grid\">\r\n                    <h3>{{header}}</h3>\r\n            </div>\r\n            <div class=\"label\" *ngIf=\"labelsRight\">\r\n                <ng-container *ngTemplateOutlet=\"labelHeaderTemplate;\"></ng-container>\r\n            </div>\r\n        </div>\r\n        <div class=\"section\" *ngFor=\"let row of rowsArray;let r = index\" style=\"line-height:0px\">\r\n            <div class=\"label\" *ngIf=\"!labelsRight\">\r\n                <ng-container *ngTemplateOutlet=\"labelTemplate; context: {row: row}\"></ng-container>\r\n            </div>\r\n            <div class=\"grid\">\r\n                <span class=\"cell\" [ngClass]=\"getCellClass(r,c)\" *ngFor=\"let column of columnsArray;let c = index\"></span>\r\n            </div>\r\n            <div class=\"label\" *ngIf=\"labelsRight\">\r\n                <ng-container *ngTemplateOutlet=\"labelTemplate; context: {row: row}\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/page1/damage-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_damage_columns__ = __webpack_require__("../../../../../src/app/models/damage-columns.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DamageGridComponent = DamageGridComponent_1 = (function () {
    function DamageGridComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this._columns = [];
        this._rows = [];
        this.columnsArrayChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rowsArrayChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.type = DamageGridComponent_1.ValidTypes[0];
        this.labelsRight = false;
        this.severDamageName = null;
    }
    Object.defineProperty(DamageGridComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            if (DamageGridComponent_1.ValidTypes.indexOf(value) < 0) {
                value = DamageGridComponent_1.ValidTypes[0];
            }
            this._type = value; //TODO perhaps revalidate the value aswell...
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DamageGridComponent.prototype, "columns", {
        get: function () {
            return this._columns.length;
        },
        set: function (value) {
            this._columns = [];
            for (var i = 0; i < value; ++i)
                this._columns.push(i);
            this.columnsArrayChange.emit(this.columnsArray);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DamageGridComponent.prototype, "rows", {
        get: function () {
            return this._rows.length;
        },
        set: function (value) {
            this._rows = [];
            for (var i = 0; i < value; ++i)
                this._rows.push(i);
            this.rowsArrayChange.emit(this.rowsArray);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DamageGridComponent.prototype, "rowsArray", {
        get: function () {
            return this._rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DamageGridComponent.prototype, "columnsArray", {
        get: function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    DamageGridComponent.prototype.getCellClass = function (row, column) {
        var classes = { fill: false, stroke: false, dash: false };
        if (column >= this.damageColumns.columns) {
            classes.fill = true;
        }
        else if (row * this.damageColumns.columns + column < this.damageColumns.damageSever) {
            classes.stroke = true;
        }
        else if (row * this.damageColumns.columns + column - this.damageColumns.damageSever < this.damageColumns.damage) {
            classes.dash = true;
        }
        classes[this.type] = true;
        return classes;
    };
    return DamageGridComponent;
}());
DamageGridComponent.ValidTypes = ['circle', 'square'];
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_damage_columns__["a" /* DamageColumns */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_damage_columns__["a" /* DamageColumns */]) === "function" && _a || Object)
], DamageGridComponent.prototype, "damageColumns", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DamageGridComponent.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DamageGridComponent.prototype, "severDamageName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DamageGridComponent.prototype, "labelsRight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])("label"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _b || Object)
], DamageGridComponent.prototype, "labelTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])("labelHeader"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _c || Object)
], DamageGridComponent.prototype, "labelHeaderTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DamageGridComponent.prototype, "type", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DamageGridComponent.prototype, "columns", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DamageGridComponent.prototype, "columnsArrayChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DamageGridComponent.prototype, "rows", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DamageGridComponent.prototype, "rowsArrayChange", void 0);
DamageGridComponent = DamageGridComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'damage-grid',
        template: __webpack_require__("../../../../../src/app/page1/damage-grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page1/damage-grid.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object])
], DamageGridComponent);

var DamageGridComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=damage-grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/page1/item-skill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("../../../../../src/app/models/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemSkillComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemSkillComponent = (function () {
    function ItemSkillComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.skillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(ItemSkillComponent.prototype, "skill", {
        get: function () {
            return this._skill;
        },
        set: function (value) {
            this._skill = value;
            this.skillChange.emit(this.skill);
        },
        enumerable: true,
        configurable: true
    });
    return ItemSkillComponent;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ItemSkillComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */]) === "function" && _a || Object)
], ItemSkillComponent.prototype, "character", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ItemSkillComponent.prototype, "skill", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ItemSkillComponent.prototype, "skillChange", void 0);
var _a;
//# sourceMappingURL=item-skill.component.js.map

/***/ }),

/***/ "../../../../../src/app/page1/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("../../../../../src/app/models/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = (function () {
    function ItemComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
    }
    return ItemComponent;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ItemComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */]) === "function" && _a || Object)
], ItemComponent.prototype, "character", void 0);
var _a;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/app/page1/melee-weapon.component.html":
/***/ (function(module, exports) {

module.exports = "<td>\r\n    <input-base [(value)]=\"item.name\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"skill\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.grip\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.slash\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.crush\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.pierce\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.durability\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <speed-index \r\n                [(value1)]=\"item.speedIndex.opening\" \r\n                [(value2)]=\"item.speedIndex.engaged\" \r\n                [character]=\"character\"></speed-index>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.weight\" type=\"number\"></input-base>\r\n</td>"

/***/ }),

/***/ "../../../../../src/app/page1/melee-weapon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_skill_component__ = __webpack_require__("../../../../../src/app/page1/item-skill.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeleeWeaponComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MeleeWeaponComponent = (function (_super) {
    __extends(MeleeWeaponComponent, _super);
    function MeleeWeaponComponent(_el, _re) {
        return _super.call(this, _el, _re) || this;
    }
    return MeleeWeaponComponent;
}(__WEBPACK_IMPORTED_MODULE_1__item_skill_component__["a" /* ItemSkillComponent */]));
MeleeWeaponComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tr[melee-weapon]',
        template: __webpack_require__("../../../../../src/app/page1/melee-weapon.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], MeleeWeaponComponent);

var _a, _b;
//# sourceMappingURL=melee-weapon.component.js.map

/***/ }),

/***/ "../../../../../src/app/page1/ranged-weapon.component.html":
/***/ (function(module, exports) {

module.exports = "<td>\r\n    <input-base [(value)]=\"item.name\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"skill\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.range\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.short\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.normal\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.far\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.veryFar\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.weight\" type=\"number\"></input-base>\r\n</td>"

/***/ }),

/***/ "../../../../../src/app/page1/ranged-weapon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_skill_component__ = __webpack_require__("../../../../../src/app/page1/item-skill.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangedWeaponComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RangedWeaponComponent = (function (_super) {
    __extends(RangedWeaponComponent, _super);
    function RangedWeaponComponent(_el, _re) {
        return _super.call(this, _el, _re) || this;
    }
    return RangedWeaponComponent;
}(__WEBPACK_IMPORTED_MODULE_1__item_skill_component__["a" /* ItemSkillComponent */]));
RangedWeaponComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tr[ranged-weapon]',
        template: __webpack_require__("../../../../../src/app/page1/ranged-weapon.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], RangedWeaponComponent);

var _a, _b;
//# sourceMappingURL=ranged-weapon.component.js.map

/***/ }),

/***/ "../../../../../src/app/page1/shield.component.html":
/***/ (function(module, exports) {

module.exports = "<td>\r\n    <input-base [(value)]=\"item.name\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"skill\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.passiveProtection\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.durability\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <speed-index [(value1)]=\"item.speedIndex.opening\" [(value2)]=\"item.speedIndex.engaged\" [character]=\"character\"></speed-index>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.weight\" type=\"number\"></input-base>\r\n</td>\r\n"

/***/ }),

/***/ "../../../../../src/app/page1/shield.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_skill_component__ = __webpack_require__("../../../../../src/app/page1/item-skill.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShieldComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShieldComponent = (function (_super) {
    __extends(ShieldComponent, _super);
    function ShieldComponent(_el, _re) {
        return _super.call(this, _el, _re) || this;
    }
    return ShieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__item_skill_component__["a" /* ItemSkillComponent */]));
ShieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tr[shield]',
        template: __webpack_require__("../../../../../src/app/page1/shield.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], ShieldComponent);

var _a, _b;
//# sourceMappingURL=shield.component.js.map

/***/ }),

/***/ "../../../../../src/app/page1/speed-index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"number\"].form-control:first-child{\r\n    margin-right: 0px;\r\n}\r\n\r\ninput[type=\"number\"].form-control:last-child{\r\n    margin-left: 0px;\r\n}\r\n\r\ninput[type=\"number\"]{\r\n    width: 40px;\r\n}\r\n@media print{\r\ninput[type=\"number\"]{\r\n    width: 0.6cm;\r\n}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page1/speed-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-input\">\r\n    <div class=\"input-group\">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"value1Sum\" style=\"border-right:1px solid black\"/>\r\n        <!--<span class=\"input-group-addon\">/</span>-->\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"value2Sum\"/>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/page1/speed-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("../../../../../src/app/models/character.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeedIndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeedIndexComponent = (function () {
    function SpeedIndexComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this._value1 = null;
        this._value2 = null;
        this.value1Change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.value2Change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(SpeedIndexComponent.prototype, "value1", {
        get: function () {
            return this._value1;
        },
        set: function (value) {
            this._value1 = value;
            this.value1Change.emit(this.value1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeedIndexComponent.prototype, "value2", {
        get: function () {
            return this._value2;
        },
        set: function (value) {
            this._value2 = value;
            this.value2Change.emit(this.value2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeedIndexComponent.prototype, "value1Sum", {
        get: function () {
            return this.getValueSum(this.value1);
        },
        set: function (value) {
            this.value1 = this.setValueSum(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeedIndexComponent.prototype, "value2Sum", {
        get: function () {
            return this.getValueSum(this.value2);
        },
        set: function (value) {
            this.value2 = this.setValueSum(value);
        },
        enumerable: true,
        configurable: true
    });
    SpeedIndexComponent.prototype.getValueSum = function (value) {
        if (value === null)
            return null;
        return value + this.character.inferedAttributes.initiative.value;
    };
    SpeedIndexComponent.prototype.setValueSum = function (value) {
        if (value === null)
            return null;
        return value - this.character.inferedAttributes.initiative.value;
    };
    return SpeedIndexComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */]) === "function" && _a || Object)
], SpeedIndexComponent.prototype, "character", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SpeedIndexComponent.prototype, "value1", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SpeedIndexComponent.prototype, "value1Change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SpeedIndexComponent.prototype, "value2", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SpeedIndexComponent.prototype, "value2Change", void 0);
SpeedIndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'speed-index',
        template: __webpack_require__("../../../../../src/app/page1/speed-index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/input-group.component.css"), __webpack_require__("../../../../../src/app/form-input.component.css"), __webpack_require__("../../../../../src/app/input-base.component.css"), __webpack_require__("../../../../../src/app/page1/speed-index.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], SpeedIndexComponent);

var _a, _b, _c;
//# sourceMappingURL=speed-index.component.js.map

/***/ }),

/***/ "../../../../../src/app/page2/combat-art.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    position: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page2/combat-art.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div style=\"display:flex;justify-content: space-between\">\r\n        <form-input i18n-label=\"@@combatArt\" label=\"Stridskonst\" [(value)]=\"combatArt.name\"></form-input>\r\n        <form-input i18n-label=\"@@value\" label=\"Värde\" [(value)]=\"combatArt.value\" type=\"number\"></form-input>\r\n    </div>\r\n    <div>\r\n        <add-remove-menu class=\"hover-menu\" [(array)]=\"combatArt.moments\" min=\"1\" [default]=\"newMoment\"></add-remove-menu>\r\n        <table class=\"table\">\r\n            <thead>\r\n                <th i18n=\"@@moment\">Moment</th>\r\n                <th i18n=\"@@difficulty\">Svårighet</th>\r\n                <th i18n=\"@@related\">Besläktning</th>\r\n            </thead>\r\n            <tbody [sortablejs]=\"combatArt.moments\">\r\n                <tr *ngFor=\"let moment of combatArt.moments\">\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"moment.name\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"moment.difficulty\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"moment.related\"></input-base>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div>\r\n        <add-remove-menu class=\"hover-menu\" [(array)]=\"combatArt.techniques\" min=\"1\" [default]=\"newTechnique\"></add-remove-menu>\r\n        <table class=\"table\">\r\n            <thead>\r\n                <th i18n=\"@@technique\">Teknik</th>\r\n                <th i18n=\"@@kk\">KK</th>\r\n                <th i18n=\"@@description\">Beskrivning</th>\r\n            </thead>\r\n            <tbody [sortablejs]=\"combatArt.techniques\">\r\n                <tr *ngFor=\"let technique of combatArt.techniques\">\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"technique.name\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                        <input-base type=\"number\" [(value)]=\"technique.cost\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"technique.description\"></input-base>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/page2/combat-art.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_combat_art__ = __webpack_require__("../../../../../src/app/models/combat-art.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatArtComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CombatArtComponent = (function () {
    function CombatArtComponent() {
    }
    CombatArtComponent.prototype.newTechnique = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__models_combat_art__["a" /* CombatArtTechnique */]();
    };
    CombatArtComponent.prototype.newMoment = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__models_combat_art__["b" /* CombatArtMoment */]();
    };
    return CombatArtComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_combat_art__["c" /* CombatArt */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_combat_art__["c" /* CombatArt */]) === "function" && _a || Object)
], CombatArtComponent.prototype, "combatArt", void 0);
CombatArtComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'combat-art',
        template: __webpack_require__("../../../../../src/app/page2/combat-art.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page2/combat-art.component.css")]
    })
], CombatArtComponent);

var _a;
//# sourceMappingURL=combat-art.component.js.map

/***/ }),

/***/ "../../../../../src/app/page3/rations-tracker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ration{\r\n    display: inline-block;\r\n}\r\n\r\n.ration:before, .ration:after{\r\n    position: relative;\r\n    display: inline-block;\r\n    font-family: 'eon-3';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    background-color: white;\r\n}\r\n.ration:before{\r\n    border-radius: 50%;\r\n     content: \"\\E902\";\r\n}\r\n.ration.fill:before{\r\n     content: \"\\E903\";\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page3/rations-tracker.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <increment-decrement-menu class=\"hover-menu\" [(value)]=\"item.count\" min=\"0\" [max]=\"maxRations\"></increment-decrement-menu>\r\n    <div style=\"display:flex; justify-content: space-between\">\r\n        <form-input i18n-label=\"@@rations\" label=\"Proviant\" [(value)]=\"item.name\"></form-input>\r\n        <form-input i18n-label=\"@@weightEach\" label=\"Vikt/st\" [(value)]=\"item.weight\" type=\"number\"></form-input>\r\n    </div>\r\n    <div style=\"display:flex; justify-content: space-between; flex-wrap: wrap\">\r\n        <label i18n=\"@@dailyRations\">Dagsransoner</label>\r\n        <span class=\"ration\" [ngClass]=\"{fill: i < item.count}\" *ngFor=\"let r of maxRationsArray; let i = index\"></span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/page3/rations-tracker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_equipment_item_stack__ = __webpack_require__("../../../../../src/app/models/equipment/item-stack.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RationsTrackerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RationsTrackerComponent = RationsTrackerComponent_1 = (function () {
    function RationsTrackerComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
    }
    Object.defineProperty(RationsTrackerComponent.prototype, "maxRationsArray", {
        get: function () {
            return RationsTrackerComponent_1._maxRationsArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RationsTrackerComponent.prototype, "maxRations", {
        get: function () {
            return RationsTrackerComponent_1._maxRationsArray.length;
        },
        enumerable: true,
        configurable: true
    });
    return RationsTrackerComponent;
}());
RationsTrackerComponent.maxRations = 14;
RationsTrackerComponent._maxRationsArray = Array(RationsTrackerComponent_1.maxRations);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_equipment_item_stack__["a" /* ItemStack */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_equipment_item_stack__["a" /* ItemStack */]) === "function" && _a || Object)
], RationsTrackerComponent.prototype, "item", void 0);
RationsTrackerComponent = RationsTrackerComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rations-tracker',
        template: __webpack_require__("../../../../../src/app/page3/rations-tracker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page3/rations-tracker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], RationsTrackerComponent);

var RationsTrackerComponent_1, _a, _b, _c;
//# sourceMappingURL=rations-tracker.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/json-circular.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonCircularPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonCircularPipe = (function () {
    function JsonCircularPipe() {
    }
    JsonCircularPipe.prototype.transform = function (val) {
        return CircularJSON.stringify(val);
    };
    return JsonCircularPipe;
}());
JsonCircularPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'jsoncircular'
    })
], JsonCircularPipe);

//# sourceMappingURL=json-circular.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/util/character-creation-functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_character__ = __webpack_require__("../../../../../src/app/models/character.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character_attribute__ = __webpack_require__("../../../../../src/app/models/character-attribute.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_character_skill__ = __webpack_require__("../../../../../src/app/models/character-skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_combat_art__ = __webpack_require__("../../../../../src/app/models/combat-art.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_magic__ = __webpack_require__("../../../../../src/app/models/magic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_contact__ = __webpack_require__("../../../../../src/app/models/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_animal__ = __webpack_require__("../../../../../src/app/models/animal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__ = __webpack_require__("../../../../../src/app/models/equipment/equipment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_immutable_wrapper__ = __webpack_require__("../../../../../src/app/models/immutable-wrapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__character_sheet_component__ = __webpack_require__("../../../../../src/app/character-sheet.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CharacterCreationFunctions; });










var CharacterCreationFunctions = (function () {
    function CharacterCreationFunctions() {
    }
    CharacterCreationFunctions.prototype.newCharacter = function () {
        var character = new __WEBPACK_IMPORTED_MODULE_0__models_character__["a" /* CharacterObject */]();
        for (var i = 0; i < 4; ++i) {
            character.specialAbilities.push(this.newStringValue());
        }
        for (var i = 0; i < 11; ++i) {
            character.miscellaneous.push(this.newStringValue());
        }
        character.characteristics.reputation.value = __WEBPACK_IMPORTED_MODULE_9__character_sheet_component__["a" /* CharacterSheetComponent */].DefaultValuesStatic.reputation;
        character.attributes.luck.value = __WEBPACK_IMPORTED_MODULE_9__character_sheet_component__["a" /* CharacterSheetComponent */].DefaultValuesStatic.luck;
        for (var i = 0; i < 5; ++i) {
            character.equipment.meleeWeapons.push(this.newMeleeWeapon());
        }
        for (var i = 0; i < 3; ++i) {
            character.equipment.rangedWeapons.push(this.newRangedWeapon());
        }
        for (var i = 0; i < 2; ++i) {
            character.equipment.shields.push(this.newShield());
        }
        for (var i = 0; i < 7; ++i) {
            character.equipment.armor.push(this.newArmor());
        }
        for (var i = 0; i < 20; ++i) {
            character.miscellaneousSkills.push(this.newSkill());
        }
        character.combatArts.push(this.newCombatArtSkill());
        {
            var nSkills = 3;
            for (var i = 0; i < nSkills; ++i) {
                character.languageSkills.push(this.newSkill());
            }
            for (var i = 0; i < nSkills; ++i) {
                character.scriptSkills.push(this.newSkill());
            }
        }
        for (var i = 0; i < 3; ++i) {
            character.equipment.coins.push(this.newCoin());
        }
        for (var i = 0; i < 3; ++i) {
            character.equipment.coinsStorage.push(this.newCoinStorage());
        }
        for (var i = 0; i < 12; ++i) {
            character.magic.push(this.newMagic());
        }
        for (var i = 0; i < 4; ++i) {
            character.family.others.push(this.newStringValue());
        }
        for (var i = 0; i < 6; ++i) {
            character.contacts.push(this.newContact());
        }
        for (var i = 0; i < 5; ++i) {
            character.equipment.itemsCarried.push(this.newItem());
        }
        for (var i = 0; i < 12; ++i) {
            character.equipment.luggage.push(this.newItem());
        }
        for (var i = 0; i < 5; ++i) {
            character.equipment.itemsStorage.push(this.newItemStorage());
        }
        for (var i = 0; i < 2; ++i) {
            character.animals.push(this.newAnimal());
        }
        return character;
    };
    CharacterCreationFunctions.prototype.newAttribute = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__models_character_attribute__["c" /* CharacterAttribute */]();
    };
    CharacterCreationFunctions.prototype.newStringValue = function () {
        return new __WEBPACK_IMPORTED_MODULE_8__models_immutable_wrapper__["a" /* Wrapper */]();
    };
    CharacterCreationFunctions.prototype.newMeleeWeapon = function () {
        var weapon = new __WEBPACK_IMPORTED_MODULE_0__models_character__["b" /* CharacterSkillItem */]();
        weapon.item = new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["a" /* MeleeWeapon */]();
        return weapon;
    };
    CharacterCreationFunctions.prototype.newRangedWeapon = function () {
        var weapon = new __WEBPACK_IMPORTED_MODULE_0__models_character__["b" /* CharacterSkillItem */]();
        weapon.item = new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["b" /* RangedWeapon */]();
        return weapon;
    };
    CharacterCreationFunctions.prototype.newShield = function () {
        var shield = new __WEBPACK_IMPORTED_MODULE_0__models_character__["b" /* CharacterSkillItem */]();
        shield.item = new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["c" /* Shield */]();
        return shield;
    };
    CharacterCreationFunctions.prototype.newArmor = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["d" /* Armor */]();
    };
    CharacterCreationFunctions.prototype.newSkill = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__models_character_skill__["a" /* CharacterSkill */](null);
    };
    CharacterCreationFunctions.prototype.newCombatArtSkill = function () {
        var art = new __WEBPACK_IMPORTED_MODULE_3__models_combat_art__["c" /* CombatArt */]();
        for (var i = 0; i < 2; ++i) {
            art.moments.push(new __WEBPACK_IMPORTED_MODULE_3__models_combat_art__["b" /* CombatArtMoment */]());
        }
        for (var i = 0; i < 3; ++i) {
            art.techniques.push(new __WEBPACK_IMPORTED_MODULE_3__models_combat_art__["a" /* CombatArtTechnique */]());
        }
        return art;
    };
    CharacterCreationFunctions.prototype.newMagic = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__models_magic__["a" /* Magic */]();
    };
    CharacterCreationFunctions.prototype.newContact = function () {
        return new __WEBPACK_IMPORTED_MODULE_5__models_contact__["a" /* Contact */]();
    };
    CharacterCreationFunctions.prototype.newCoin = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["g" /* Coins */]();
    };
    CharacterCreationFunctions.prototype.newCoinStorage = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["h" /* CoinsStorage */]();
    };
    CharacterCreationFunctions.prototype.newItem = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["e" /* Item */]();
    };
    CharacterCreationFunctions.prototype.newAnimal = function () {
        var animal = new __WEBPACK_IMPORTED_MODULE_6__models_animal__["a" /* Animal */]();
        for (var i = 0; i < 5; ++i) {
            animal.inventory.push(this.newItem());
        }
        for (var i = 0; i < 4; ++i) {
            animal.techniques.push(this.newStringValue());
        }
        return animal;
    };
    CharacterCreationFunctions.prototype.newItemStack = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["i" /* ItemStack */]();
    };
    CharacterCreationFunctions.prototype.newItemStorage = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["f" /* ItemStorage */]();
    };
    return CharacterCreationFunctions;
}());

//# sourceMappingURL=character-creation-functions.js.map

/***/ }),

/***/ "../../../../../src/app/util/serialize-context-refs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("../../../../serializr/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serializr__);
/* harmony export (immutable) */ __webpack_exports__["a"] = myObject;

function myObject(modelschema) {
    var o = null;
    if (modelschema)
        o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_serializr__["object"])(modelschema);
    var obj = {
        serializer: function (item) {
            throw Error("Not implemeneted. Just use CircularJSON for serialization");
            /*
            if(!context.rootContext._myObjectMap_Resolved){
                context.rootContext._myObjectMap_Resolved = new Map<Object, Object>();
            }
            
            if(!context.rootContext._myObjectMap_Pending){
                context.rootContext._myObjectMap_Pending = new Map<Object, Object>();
            }
            
            var resolved: Map<Object,Object> = context.rootContext._myObjectMap_Resolved;
            var pending: Map<Object,Object> = context.rootContext._myObjectMap_Pending;

            if (item === null || item === undefined)
                return item
            if(o.serialize){
                return o.serialize(item);
            }
            return item;*/
        },
        deserializer: function (childJson, done, context, oldValue) {
            if (childJson === null || childJson === undefined) {
                return void done(null, childJson);
            }
            if (!context.rootContext._myObjectMap_Resolved) {
                context.rootContext._myObjectMap_Resolved = new Map();
            }
            if (!context.rootContext._myObjectMap_Pending) {
                context.rootContext._myObjectMap_Pending = new Map();
            }
            var resolved = context.rootContext._myObjectMap_Resolved;
            var pending = context.rootContext._myObjectMap_Pending;
            var existingObject = resolved.get(childJson);
            if (existingObject) {
                //Cache
                return void done(null, existingObject);
            }
            else if (o) {
                //New
                return void o.deserializer(childJson, function (err, val) {
                    var pendingObject = pending.get(childJson);
                    if (pendingObject) {
                        Object.assign(pendingObject, val);
                        val = pendingObject;
                        pending.delete(childJson);
                    }
                    resolved.set(childJson, val);
                    done(err, val);
                }, context, oldValue);
            }
            else {
                //Wait for new
                if (!pending.get(childJson)) {
                    pending.set(childJson, {});
                }
                return void done(null, pending.get(childJson));
            }
        }
    };
    return obj;
}
/*
export function serializrInterface<T extends Object>(context: any, clazz: Clazz<T>, keys: Array<string>){
    
    var obj: T = new clazz();
    context.rootContext.resolvedRefs[context.json] = obj;

    for(var i = 0;i<keys.length;++i){
        var key = keys[i];
        var existingObject = context.rootContext.resolvedRefs[context.json]
        obj[key]
    }
}

export function serializrConstructor<T extends Object>(context: any, clazz: Clazz<T>): T {
    var existingObject = context.rootContext.resolvedRefs[context.json]
    if (existingObject) {
        return existingObject;
    }
    
    var obj: T = new clazz();
    context.rootContext.resolvedRefs[context.json] = obj;
    return obj;
}

export function serializrConstructorFactory<T extends Object>(context: any, clazz: Factory<T>): T {
    var existingObject = context.rootContext.resolvedRefs[context.json]
    if (existingObject) {
        return existingObject;
    }
    var obj: T = clazz(context);
    context.rootContext.resolvedRefs[context.json] = obj;
    return obj;
}
*/ 
//# sourceMappingURL=serialize-context-refs.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map