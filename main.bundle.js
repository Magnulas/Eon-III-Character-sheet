webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-remove-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button class=\"fa fa-plus btn btn-default\" type=\"button\" (click)=\"doAdd()\"></button>\r\n  <button class=\"fa fa-minus btn btn-default\" type=\"button\" (click)=\"doRemove()\"></button>\r\n</div>"

/***/ }),

/***/ "./src/app/add-remove-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRemoveMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddRemoveMenuComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AddRemoveMenuComponent.prototype, "array", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], AddRemoveMenuComponent.prototype, "min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], AddRemoveMenuComponent.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], AddRemoveMenuComponent.prototype, "default", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddRemoveMenuComponent.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddRemoveMenuComponent.prototype, "remove", void 0);
    AddRemoveMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-remove-menu',
            template: __webpack_require__("./src/app/add-remove-menu.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], AddRemoveMenuComponent);
    return AddRemoveMenuComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@media print{\r\n    .file-menu{\r\n        display:none\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"file-menu\">\r\n        <div style=\"display:inline-block\">\r\n            <button (click)=\"exportCharacter()\">Export</button>\r\n            <input-base style=\"display:inline-block\" type=\"text\" [(value)]=\"filename\"></input-base>\r\n        </div>\r\n        <button (click)=\"importCharacter()\">Import</button>\r\n        <dropbox-button [(character)]=\"character\"></dropbox-button>\r\n        <button style=\"margin-left: 50px\" (click)=\"newCharacter()\">Ny karaktär</button>\r\n        <!-- <button (click)=\"dropboxChooser()\">Dropbox</button>\r\n        <button (click)=\"dropboxSaver()\">Spara</button>-->\r\n    </div>\r\n    <character-sheet [character]=\"character\" [creator]=\"functionWrapper\"></character-sheet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("./src/app/models/character.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_character_creation_functions__ = __webpack_require__("./src/app/util/character-creation-functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    //client;
    function AppComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.character = null;
        this.functionWrapper = new __WEBPACK_IMPORTED_MODULE_2__util_character_creation_functions__["a" /* CharacterCreationFunctions */]();
        this.filename = "Karaktär";
        this.newCharacter();
        var self = this;
        self.importCharacterFromLocalStorage();
        window.addEventListener("beforeunload", function (e) {
            self.exportCharacterToLocalStorage();
        }, false);
    }
    AppComponent_1 = AppComponent;
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
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = this.filename + '.json';
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 100);
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
    AppComponent.prototype.importCharacterFromLocalStorage = function () {
        var jsonData = window.localStorage.getItem(AppComponent_1.LOCAL_STORAGE_PATH);
        if (jsonData) {
            //this.character = CharacterObject.deserialize(jsonData);
        }
    };
    AppComponent.prototype.exportCharacterToLocalStorage = function () {
        var jsonData = this.character.serialize();
        window.localStorage.setItem(AppComponent_1.LOCAL_STORAGE_PATH, jsonData);
    };
    AppComponent.prototype.newCharacter = function () {
        this.character = this.functionWrapper.newCharacter();
    };
    AppComponent.LOCAL_STORAGE_PATH = "Character";
    AppComponent = AppComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
        //@StaticFunctionsDecorator()
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], AppComponent);
    return AppComponent;
    var AppComponent_1;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_sortablejs__ = __webpack_require__("./node_modules/angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dropbox_button_component__ = __webpack_require__("./src/app/dropbox-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__character_sheet_component__ = __webpack_require__("./src/app/character-sheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page1_melee_weapon_component__ = __webpack_require__("./src/app/page1/melee-weapon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page1_ranged_weapon_component__ = __webpack_require__("./src/app/page1/ranged-weapon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page1_shield_component__ = __webpack_require__("./src/app/page1/shield.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page1_armor_component__ = __webpack_require__("./src/app/page1/armor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page1_speed_index_component__ = __webpack_require__("./src/app/page1/speed-index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page1_damage_grid_component__ = __webpack_require__("./src/app/page1/damage-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page2_combat_art_component__ = __webpack_require__("./src/app/page2/combat-art.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page3_rations_tracker_component__ = __webpack_require__("./src/app/page3/rations-tracker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__add_remove_menu_component__ = __webpack_require__("./src/app/add-remove-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__increment_decrement_menu_component__ = __webpack_require__("./src/app/increment-decrement-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__input_base_component__ = __webpack_require__("./src/app/input-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__form_input_component__ = __webpack_require__("./src/app/form-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__input_group_component__ = __webpack_require__("./src/app/input-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__character_stat_input_component__ = __webpack_require__("./src/app/character-stat-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__character_characteristic_component__ = __webpack_require__("./src/app/character-characteristic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__computed_expression_component__ = __webpack_require__("./src/app/computed-expression.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__input_computed_component__ = __webpack_require__("./src/app/input-computed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__input_box_component__ = __webpack_require__("./src/app/input-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_aligned_directive__ = __webpack_require__("./src/app/directives/aligned.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_focus_inputs_directive__ = __webpack_require__("./src/app/directives/focus-inputs.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_localization_directive__ = __webpack_require__("./src/app/directives/localization.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_autosize_directive__ = __webpack_require__("./src/app/directives/autosize.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_json_circular_pipe__ = __webpack_require__("./src/app/pipes/json-circular.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_array_constructor_pipe__ = __webpack_require__("./src/app/pipes/array-constructor.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular_pipes__ = __webpack_require__("./node_modules/angular-pipes/esm5/angular-pipes.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__dropbox_button_component__["a" /* DropboxButtonComponent */], __WEBPACK_IMPORTED_MODULE_7__character_sheet_component__["a" /* CharacterSheetComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page1_melee_weapon_component__["a" /* MeleeWeaponComponent */], __WEBPACK_IMPORTED_MODULE_12__page1_speed_index_component__["a" /* SpeedIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page1_ranged_weapon_component__["a" /* RangedWeaponComponent */], __WEBPACK_IMPORTED_MODULE_10__page1_shield_component__["a" /* ShieldComponent */], __WEBPACK_IMPORTED_MODULE_11__page1_armor_component__["a" /* ArmorComponent */], __WEBPACK_IMPORTED_MODULE_13__page1_damage_grid_component__["a" /* DamageGridComponent */],
                __WEBPACK_IMPORTED_MODULE_14__page2_combat_art_component__["a" /* CombatArtComponent */],
                __WEBPACK_IMPORTED_MODULE_15__page3_rations_tracker_component__["a" /* RationsTrackerComponent */],
                __WEBPACK_IMPORTED_MODULE_19__form_input_component__["a" /* FormInputComponent */], __WEBPACK_IMPORTED_MODULE_21__character_stat_input_component__["a" /* CharacterStatInputComponent */], __WEBPACK_IMPORTED_MODULE_22__character_characteristic_component__["a" /* CharacterCharacteristicComponent */], __WEBPACK_IMPORTED_MODULE_20__input_group_component__["a" /* InputGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__input_base_component__["a" /* InputBaseComponent */], __WEBPACK_IMPORTED_MODULE_23__computed_expression_component__["a" /* ComputedExpressionComponent */], __WEBPACK_IMPORTED_MODULE_24__input_computed_component__["a" /* InputComputedComponent */], __WEBPACK_IMPORTED_MODULE_16__add_remove_menu_component__["a" /* AddRemoveMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_25__input_box_component__["a" /* InputBoxComponent */], __WEBPACK_IMPORTED_MODULE_17__increment_decrement_menu_component__["a" /* IncrementDecrementMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_26__directives_aligned_directive__["a" /* AlignedDirective */], __WEBPACK_IMPORTED_MODULE_27__directives_focus_inputs_directive__["a" /* FocusInputsDirective */], __WEBPACK_IMPORTED_MODULE_29__directives_autosize_directive__["a" /* Autosize */], __WEBPACK_IMPORTED_MODULE_28__directives_localization_directive__["a" /* LocalizationDirective */],
                __WEBPACK_IMPORTED_MODULE_30__pipes_json_circular_pipe__["a" /* JsonCircularPipe */], __WEBPACK_IMPORTED_MODULE_31__pipes_array_constructor_pipe__["a" /* ArrayConstructor */], __WEBPACK_IMPORTED_MODULE_32_angular_pipes__["b" /* FloorPipe */], __WEBPACK_IMPORTED_MODULE_32_angular_pipes__["a" /* CeilPipe */]
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
    return AppModule;
}());



/***/ }),

/***/ "./src/app/character-characteristic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-input\">\r\n    <label>{{label}}</label>\r\n    <div style=\"width:100%\">\r\n        <input-base type=\"text\" [(value)]=\"characteristic.name\" style=\"flex: 1 0 50px; line-height: 2px\"></input-base>\r\n    </div>\r\n    <div>\r\n        <label i18n=\"@@locked\">Låst</label>\r\n        <input-box [checked]=\"characteristic.locked\" type=\"square\" fill=\"solid\" (click)=\"characteristic.locked = !characteristic.locked\"></input-box>\r\n        <label i18n=\"@@weakness\">Svaghet</label>\r\n        <input-box [checked]=\"characteristic.weakness\" type=\"square\" fill=\"solid\" (click)=\"characteristic.weakness = !characteristic.weakness\"></input-box>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/character-characteristic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterCharacteristicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character_charactertistic__ = __webpack_require__("./src/app/models/character-charactertistic.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterCharacteristicComponent = /** @class */ (function () {
    function CharacterCharacteristicComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CharacterCharacteristicComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_character_charactertistic__["a" /* CharacterCharacteristic */])
    ], CharacterCharacteristicComponent.prototype, "characteristic", void 0);
    CharacterCharacteristicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'character-characteristic',
            template: __webpack_require__("./src/app/character-characteristic.component.html"),
            styles: [__webpack_require__("./src/app/form-input.component.css"), __webpack_require__("./src/app/input-base.component.css")]
        })
    ], CharacterCharacteristicComponent);
    return CharacterCharacteristicComponent;
}());



/***/ }),

/***/ "./src/app/character-sheet.component.css":
/***/ (function(module, exports) {

module.exports = "h1 { \r\n\ttext-align: center; \r\n\tcolor: #FFFFFF; \r\n\ttext-transform: uppercase; \r\n\tmargin: 0px;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 { \r\n    text-align: center; \r\n}\r\n\r\n.page{\r\n    page-break-before:always;\r\n}\r\n\r\npre { font-size: x-small;  }\r\n\r\n@media screen {\r\n    .pages{\r\n        display:-webkit-box;\r\n        display:-ms-flexbox;\r\n        display:flex;\r\n        -ms-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n    }\r\n}\r\n\r\n.sub-form {\r\n    position: relative;\r\n\tborder-radius: 5px;\r\n\tborder-color: rgba(0,0,0,0);\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    -webkit-box-shadow: inset 0 0 24px #000000 !important;\r\n    box-shadow: inset 0 0 24px #000000 !important;\r\n\tbackground-color: rgba(0,0,0,0.1);\r\n    padding: 6px;\r\n    \r\n   /* display:flex;*/\r\n}\r\n\r\n/*\r\n.sub-form > div{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}*/\r\n\r\nh3{\r\n    margin: 0px;\r\n}\r\n\r\ncomputed-expression > span {\r\n    font-size: 10px;\r\n}\r\n\r\ndamage-grid{\r\n    margin:auto\r\n}\r\n\r\n.flex-row{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex; \r\n    -webkit-box-align: stretch; \r\n        -ms-flex-align: stretch; \r\n            align-items: stretch; \r\n    -webkit-box-orient: horizontal; \r\n    -webkit-box-direction: normal; \r\n        -ms-flex-direction: row; \r\n            flex-direction: row;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.flex-row > * {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n    max-width:100%;\r\n}\r\n\r\n.form-input{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.flex-field{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n\r\n.flex-column {\r\n\tdisplay:-webkit-box;\r\n\tdisplay:-ms-flexbox;\r\n\tdisplay:flex;\r\n\t-webkit-box-orient:vertical;\r\n\t-webkit-box-direction:normal;\r\n\t    -ms-flex-direction:column;\r\n\t        flex-direction:column;\r\n}\r\n\r\n.flex-column > * {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1 0 auto;\r\n\t        flex: 1 0 auto;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n@media print {\r\n    .sub-form{\r\n        page-break-inside: avoid;\r\n    }\r\n}\r\n\r\n.flex-form-input {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\t-webkit-box-pack: justify;\r\n\t    -ms-flex-pack: justify;\r\n\t        justify-content: space-between;\r\n}\r\n\r\n.input-group{\r\n    width:initial;\r\n}\r\n\r\nhr {\r\n    margin: 4px 0px 4px 0px;\r\n    border: 0;\r\n    height: 2px;\r\n    background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, 0.75)), to(rgba(0, 0, 0, 0)));\r\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));\r\n}\r\n\r\n@media print{\r\n    hr {\r\n        margin: 0px;\r\n    }\r\n}\r\n\r\n/*Page*/\r\n\r\npage[size=\"A4\"] {  \r\n  width: 21cm;\r\n  height: 29.7cm; \r\n}\r\n\r\npage[size=\"A4\"][layout=\"portrait\"] {\r\n  width: 29.7cm;\r\n  height: 21cm;  \r\n}\r\n\r\npage[size=\"A3\"] {\r\n  width: 29.7cm;\r\n  height: 42cm;\r\n}\r\n\r\npage[size=\"A3\"][layout=\"portrait\"] {\r\n  width: 42cm;\r\n  height: 29.7cm;  \r\n}\r\n\r\npage[size=\"A5\"] {\r\n  width: 14.8cm;\r\n  height: 21cm;\r\n}\r\n\r\npage[size=\"A5\"][layout=\"portrait\"] {\r\n  width: 21cm;\r\n  height: 14.8cm;  \r\n}\r\n"

/***/ }),

/***/ "./src/app/character-sheet.component.html":
/***/ (function(module, exports) {

module.exports = "<localization [source]=\"localization\" \r\n  i18n-strength=\"@@strength\" strength=\"STY\" (strengthChange)=\"character.attributes.strength.name=$event\"\r\n  i18n-constitution=\"@@constitution\" constitution=\"TÅL\" (constitutionChange)=\"character.attributes.constitution.name=$event\"\r\n  i18n-dexterity=\"@@dexterity\" dexterity=\"RÖR\" (dexterityChange)=\"character.attributes.dexterity.name=$event\"\r\n  i18n-charisma=\"@@charisma\" charisma=\"PER\" (charismaChange)=\"character.attributes.charisma.name=$event\" \r\n  i18n-intelligence=\"@@intelligence\" intelligence=\"PSY\" (intelligenceChange)=\"character.attributes.intelligence.name=$event\"\r\n  i18n-will=\"@@will\" will=\"VIL\" (willChange)=\"character.attributes.will.name=$event\"\r\n  i18n-education=\"@@education\" education=\"BIL\" (educationChange)=\"character.attributes.education.name=$event\"\r\n  i18n-sight=\"@@sight\" sight=\"SYN\" (sightChange)=\"character.attributes.sight.name=$event\"\r\n  i18n-hearing=\"@@hearing\" hearing=\"HÖR\" (hearingChange)=\"character.attributes.hearing.name=$event\"\r\n  i18n-eon4will=\"@@eon4will\" eon4will=\"Eon IV Vilja\" (eon4willChange)=\"character.attributes.eon4will.name=$event\"\r\n  i18n-combatExperience=\"@@combatExperience\" combatExperience=\"Stridsvana\" (combatExperienceChange)=\"character.attributes.combatExperience.name=$event\"\r\n  i18n-charismaIntelligenceSkill=\"@@charismaIntelligenceSkill\" charismaIntelligenceSkill=\"[PP]\" (charismaIntelligenceSkillChange)=\"character.inferedBaseSkills.charismaIntelligence.name=$event\"\r\n  i18n-dexterityIntelligenceSkill=\"@@dexterityIntelligenceSkill\" dexterityIntelligenceSkill=\"[RP]\" (dexterityIntelligenceSkillChange)=\"character.inferedBaseSkills.dexterityIntelligence.name=$event\"\r\n  i18n-sightIntelligenceSkill=\"@@sightIntelligenceSkill\" sightIntelligenceSkill=\"[PS]\" (sightIntelligenceSkillChange)=\"character.inferedBaseSkills.sightIntelligence.name=$event\"\r\n  i18n-nativeLanguageSkill=\"@@nativeLanguageSkill\" nativeLanguageSkill=\"Modersmål\" (nativeLanguageSkillChange)=\"character.inferedBaseSkills.nativeLanguage.name=$event\"\r\n  i18n-dexteritySkill=\"@@dexteritySkill\" dexteritySkill=\"[R]\" (dexteritySkillChange)=\"character.inferedBaseSkills.dexterity.name=$event\"\r\n  i18n-intelligenceSkill=\"@@intelligenceSkill\" intelligenceSkill=\"[P]\" (intelligenceSkillChange)=\"character.inferedBaseSkills.intelligence.name=$event\"\r\n  i18n-constitutionSkill=\"@@constitutionSkill\" constitutionSkill=\"[T]\" (constitutionSkillChange)=\"character.inferedBaseSkills.constitution.name=$event\"\r\n  i18n-educationSkill=\"@@educationSkill\" educationSkill=\"[B]\" (educationSkillChange)=\"character.inferedBaseSkills.education.name=$event\"\r\n  i18n-storyTellingSkill=\"@@storyTellingSkill\" storyTellingSkill=\"Berättarkonst\" (storyTellingSkillChange)=\"character.skills.storyTelling.name=$event\"\r\n  i18n-danceSkill=\"@@danceSkill\" danceSkill=\"Dansa\" (danceSkillChange)=\"character.skills.dance.name=$event\"\r\n  i18n-sleightOfHandSkill=\"@@sleightOfHandSkill\" sleightOfHandSkill=\"Fingerfärdighet\" (sleightOfHandSkillChange)=\"character.skills.sleightOfHand.name=$event\"\r\n  i18n-fishingSkill=\"@@fishingSkill\" fishingSkill=\"Fiske\" (fishingSkillChange)=\"character.skills.fishing.name=$event\"\r\n  i18n-seductionSkill=\"@@seductionSkill\" seductionSkill=\"Förföra\" (seductionSkillChange)=\"character.skills.seduction.name=$event\"\r\n  i18n-interogateSkill=\"@@interogateSkill\" interogateSkill=\"Förhöra\" (interogateSkillChange)=\"character.skills.interogate.name=$event\"\r\n  i18n-jestSkill=\"@@jestSkill\" jestSkill=\"Gyckla\" (jestSkillChange)=\"character.skills.jest.name=$event\"\r\n  i18n-hideSkill=\"@@hideSkill\" hideSkill=\"Gömma\" (hideSkillChange)=\"character.skills.hide.name=$event\"\r\n  i18n-tradeSkill=\"@@tradeSkill\" tradeSkill=\"Handel\" (tradeSkillChange)=\"character.skills.trade.name=$event\"\r\n  i18n-jumpSkill=\"@@jumpSkill\" jumpSkill=\"Hoppa\" (jumpSkillChange)=\"character.skills.jump.name=$event\"\r\n  i18n-throwSkill=\"@@throwSkill\" throwSkill=\"Kasta\" (throwSkillChange)=\"character.skills.throw.name=$event\"\r\n  i18n-climbSkill=\"@@climbSkill\" climbSkill=\"Klättra\" (climbSkillChange)=\"character.skills.climb.name=$event\"\r\n  i18n-driveWagonSkill=\"@@driveWagonSkill\" driveWagonSkill=\"Köra vagn\" (driveWagonSkillChange)=\"character.skills.driveWagon.name=$event\"\r\n  i18n-leadershipSkill=\"@@leadershipSkill\" leadershipSkill=\"Ledarskap\" (leadershipSkillChange)=\"character.skills.leadership.name=$event\"\r\n  i18n-marschSkill=\"@@marschSkill\" marschSkill=\"Marsch\" (marschSkillChange)=\"character.skills.marsch.name=$event\"\r\n  i18n-cookingSkill=\"@@cookingSkill\" cookingSkill=\"Matlagning\" (cookingSkillChange)=\"character.skills.cooking.name=$event\"\r\n  i18n-occultismSkill=\"@@occultismSkill\" occultismSkill=\"Ockultism\" (occultismSkillChange)=\"character.skills.occultism.name=$event\"\r\n  i18n-rideSkill=\"@@rideSkill\" rideSkill=\"Rida\" (rideSkillChange)=\"character.skills.ride.name=$event\"\r\n  i18n-singSkill=\"@@singSkill\" singSkill=\"Sjunga\" (singSkillChange)=\"character.skills.sing.name=$event\"\r\n  i18n-skiSkill=\"@@skiSkill\" skiSkill=\"Skidor\" (skiSkillChange)=\"character.skills.ski.name=$event\"\r\n  i18n-actingSkill=\"@@actingSkill\" actingSkill=\"Skådespel\" (actingSkillChange)=\"character.skills.acting.name=$event\"\r\n  i18n-brawlSkill=\"@@brawlSkill\" brawlSkill=\"Slagsmål\" (brawlSkillChange)=\"character.skills.brawl.name=$event\"\r\n  i18n-sneakSkill=\"@@sneakSkill\" sneakSkill=\"Smyga\" (sneakSkillChange)=\"character.skills.sneak.name=$event\"\r\n  i18n-scoutSkill=\"@@scoutSkill\" scoutSkill=\"Speja\" (scoutSkillChange)=\"character.skills.scout.name=$event\"\r\n  i18n-gamblingSkill=\"@@gamblingSkill\" gamblingSkill=\"Spel & dobbel\" (gamblingSkillChange)=\"character.skills.gambling.name=$event\"\r\n  i18n-trackingSkill=\"@@trackingSkill\" trackingSkill=\"Spåra\" (trackingSkillChange)=\"character.skills.tracking.name=$event\"\r\n  i18n-drinkingSkill=\"@@drinkingSkill\" drinkingSkill=\"Supa\" (drinkingSkillChange)=\"character.skills.drinking.name=$event\"\r\n  i18n-searchSkill=\"@@searchSkill\" searchSkill=\"Söka\" (searchSkillChange)=\"character.skills.search.name=$event\"\r\n  i18n-educateSkill=\"@@educateSkill\" educateSkill=\"Undervisning\" (educateSkillChange)=\"character.skills.educate.name=$event\"\r\n  i18n-avoidSkill=\"@@avoidSkill\" avoidSkill=\"Undvika\" (avoidSkillChange)=\"character.skills.avoid.name=$event\"\r\n  i18n-appraiseSkill=\"@@appraiseSkill\" appraiseSkill=\"Värdera\" (appraiseSkillChange)=\"character.skills.appraise.name=$event\"\r\n  i18n-survivalSkill=\"@@survivalSkill\" survivalSkill=\"Överlevnad\" (survivalSkillChange)=\"character.skills.survival.name=$event\"\r\n  i18n-persuadeSkill=\"@@persuadeSkill\" persuadeSkill=\"Övertala\" (persuadeSkillChange)=\"character.skills.persuade.name=$event\">\r\n</localization>\r\n<!--Character export/import, online/cloud storage, localization switching(?)-->\r\n<!--TODO vapen färdigheter\r\n    Gör så att färdighets fönstret öppnar en skill selection från misc skills + stridskonster\r\n    Gör om så att misc skills och combat arts är samma bas objekt? Nej, gör så att de båda har ett interface som heter Value el liknande.\r\n    Gör misc skills skillt från character skills? Nej, gör så att man kan välja bas skill för en misc skill, t.ex. svärd.\r\n    Meyn för bas skill selection kan komma upp när man väljer värde/markerar värde\r\n-->\r\n<div class=\"pages\">\r\n  <div size=\"A4\" class=\"page container\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-12\">\r\n        <div class=\"flex-row\" style=\"flex-direction:row-reverse\">\r\n          <div style=\"flex: 1 0 350px\" class=\"flex-column\">\r\n            <div class=\"sub-form\">\r\n              <h1>EON III</h1>\r\n            </div>\r\n            <div class=\"sub-form\">\r\n              <div>\r\n                <div class=\"flex-form-input\" style=\"height:100%\" aligned selector=\"form-input label, input-group label\">\r\n                  <div>\r\n                    <form-input i18n-label=\"@@name\" label=\"Namn\" [(value)]=\"character.name\"></form-input>\r\n                  </div>\r\n                  <div>\r\n                    <form-input i18n-label=\"@@Profession\" label=\"Yrke\" [(value)]=\"character.profession\"></form-input>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col col-md-6 col-12\">\r\n                      <form-input i18n-label=\"@@race\" label=\"Ras\" [(value)]=\"character.race\"></form-input>\r\n                      <form-input i18n-label=\"@@gender\" label=\"Kön\" [(value)]=\"character.gender\"></form-input>\r\n                      <form-input i18n-label=\"@@body\" label=\"Kropp\" [(value)]=\"character.body\"></form-input>\r\n                    </div>\r\n                    <div class=\"col col-md-6 col-12\">\r\n                      <input-group i18n-label=\"@@height\" label=\"Längd\" [(value)]=\"character.height\" i18n-suffix=\"@@heightUnit\" suffix=\"cm\" type=\"text\"></input-group>\r\n                      <input-group i18n-label=\"@@weight\" label=\"Vikt\" [(value)]=\"character.weight\" i18n-suffix=\"@@weightUnit\" suffix=\"kg\" type=\"text\"></input-group>\r\n                      <input-group i18n-label=\"@@age\" label=\"Ålder\" [(value)]=\"character.age\" i18n-suffix=\"@@ageUnit\" suffix=\"år\" type=\"text\"></input-group>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <form-input i18n-label=\"@@homestead\" label=\"Hemort\" [(value)]=\"character.homestead\"></form-input>\r\n                  </div>\r\n                  <div>\r\n                    <form-input i18n-label=\"@@religion\" label=\"Religion\" [(value)]=\"character.religion\"></form-input>\r\n                  </div>\r\n                  <div style=\"display:flex\">\r\n                    <label i18n=\"@@weaponarm\">Vapenarm</label>\r\n                    <div style=\"flex: 1 0 auto;display:flex;justify-content:space-around\">\r\n                      <div>\r\n                        <input type='radio' id='weapon-arm-right' class='pseudo-checkbox sr-only' value=\"right\" [(ngModel)]=\"character.handDominance\"\r\n                        />\r\n                        <label i18n=\"@@right\" for='weapon-arm-right' class='fancy-checkbox-label'>\r\n                          Höger\r\n                        </label>\r\n                      </div>\r\n                      <div>\r\n                        <input type='radio' id='weapon-arm-left' class='pseudo-checkbox sr-only' value=\"left\" [(ngModel)]=\"character.handDominance\"\r\n                        />\r\n                        <label i18n=\"@@left\" for='weapon-arm-left' class='fancy-checkbox-label'>\r\n                          Vänster\r\n                        </label>\r\n                      </div>\r\n                      <div>\r\n                        <input type='radio' id='weapon-arm-ambidextrous' class='pseudo-checkbox sr-only' value=\"ambidextrous\" [(ngModel)]=\"character.handDominance\"\r\n                        />\r\n                        <label i18n=\"@@ambidextrous\" for='weapon-arm-ambidextrous' class='fancy-checkbox-label'>\r\n                          Tvehänt\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div aligned style=\"flex: 0 0 auto\" class=\"flex-column\">\r\n            <div class=\"sub-form flex-column\">\r\n              <form-input [label]=\"character.attributes.strength.name\" [(value)]=\"character.attributes.strength.value\" type=\"number\"></form-input>\r\n              <form-input [label]=\"character.attributes.constitution.name\" [(value)]=\"character.attributes.constitution.value\" type=\"number\"></form-input>\r\n              <form-input [label]=\"character.attributes.dexterity.name\" [(value)]=\"character.attributes.dexterity.value\" type=\"number\"></form-input>\r\n              <form-input [label]=\"character.attributes.charisma.name\" [(value)]=\"character.attributes.charisma.value\" type=\"number\"></form-input>\r\n              <form-input [label]=\"character.attributes.intelligence.name\" [(value)]=\"character.attributes.intelligence.value\" type=\"number\"></form-input>\r\n              <form-input [label]=\"character.attributes.will.name\" [(value)]=\"character.attributes.will.value\" type=\"number\"></form-input>\r\n              <form-input [label]=\"character.attributes.education.name\" [(value)]=\"character.attributes.education.value\" type=\"number\"></form-input>\r\n            </div>\r\n            <div class=\"sub-form flex-column\">\r\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"character.attributes.extraAttributes\" min=\"0\" [default]=\"creator.newAttribute.bind(creator)\"></add-remove-menu>\r\n              <form-input [label]=\"character.attributes.sight.name\" [(value)]=\"character.attributes.sight.value\" type=\"number\"></form-input>\r\n              <form-input [label]=\"character.attributes.hearing.name\" [(value)]=\"character.attributes.hearing.value\" type=\"number\"></form-input>\r\n              <form-input *ngFor=\"let a of character.attributes.extraAttributes\" labelEditable=\"true\" [(label)]=\"a.name\" [(value)]=\"a.value\"\r\n                type=\"number\"></form-input>\r\n            </div>\r\n          </div>\r\n          <div style=\"flex: 1 0 300px\" class=\"flex-column\" aligned>\r\n            <div class=\"sub-form\" style=\"flex-grow:0\">\r\n              <div class=\"flex-form-input\">\r\n                <form-input i18n-label=\"@@player\" label=\"Spelare\" [(value)]=\"character.player\"></form-input>\r\n                <form-input i18n-label=\"@@gamemaster\" label=\"Spelledare\" [(value)]=\"character.gameMaster\"></form-input>\r\n              </div>\r\n            </div>\r\n            <div class=\"flex-form-input sub-form\">\r\n              <character-stat-input i18n-label=\"@@loyalty\" label=\"Lojalitet\" [stat]=\"character.characteristics.loyalty\"></character-stat-input>\r\n              <character-stat-input i18n-label=\"@@honor\" label=\"Heder\" [stat]=\"character.characteristics.honor\"></character-stat-input>\r\n              <character-stat-input i18n-label=\"@@lust\" label=\"Amor\" [stat]=\"character.characteristics.lust\"></character-stat-input>\r\n              <character-stat-input i18n-label=\"@@aggression\" label=\"Aggression\" [stat]=\"character.characteristics.aggression\"></character-stat-input>\r\n              <character-stat-input i18n-label=\"@@faith\" label=\"Tro\" [stat]=\"character.characteristics.faith\"></character-stat-input>\r\n              <character-stat-input i18n-label=\"@@generosity\" label=\"Generositet\" [stat]=\"character.characteristics.generosity\"></character-stat-input>\r\n              <character-stat-input i18n-label=\"@@reputation\" label=\"Rykte {{formatDefaultValue(DefaultValues.reputation)}}\" [stat]=\"character.characteristics.reputation\"></character-stat-input>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col col-lg-8 col-md-12 col-12 flex-column\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-12 flex-column\">\r\n            <div class=\"row\">\r\n              <div class=\"col col-md-7 col-12 flex-column\">\r\n\r\n                <div class=\"sub-form\">\r\n                  <div>\r\n                    <add-remove-menu class=\"hover-menu\" [(array)]=\"character.specialAbilities\" min=\"1\" [default]=\"creator.newStringValue.bind(creator)\"></add-remove-menu>\r\n                    <div class=\"flex-form-input flex-column-flex table-responsive\">\r\n                      <table class=\"table\">\r\n                        <thead>\r\n                          <th i18n=\"@@specialAbilities\">Speciella fördelar & nackdelar</th>\r\n                        </thead>\r\n                        <tbody [sortablejs]=\"character.specialAbilities\">\r\n                          <tr *ngFor='let a of character.specialAbilities'>\r\n                            <td>\r\n                              <input-base type=\"text\" [(value)]=\"a.value\"></input-base>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <!--TODO have another field with EON 4 mental problems?-->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-md-5 col-12 flex-column\">\r\n                <div class=\"row\" style=\"flex-grow:0\">\r\n                  <div class=\"col col-6 sub-form form-input\">\r\n                    <form-input i18n-label=\"@@luck\" label=\"Tur {{formatDefaultValue(DefaultValues.luck)}}\" [(value)]=\"character.attributes.luck.value\"\r\n                      type=\"number\"></form-input>\r\n                  </div>\r\n                  <div class=\"col col-6 sub-form form-input\">\r\n                    <form-input label=\"Qadosh\" [(value)]=\"character.attributes.qadosh.value\" type=\"number\"></form-input>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row sub-form\" aligned>\r\n                  <div class=\"col col-12\">\r\n                    <input-computed style=\"display: inline-block\" i18n-label=\"@@movement\" label=\"FÖR\" [computationBase]=\"character.inferedAttributes.speed\"></input-computed>\r\n                    <computed-expression [expression]=\"character.inferedAttributes.speed.expression\" [expressionLookupTable]=\"character.inferedAttributes.speed.baseValues\"></computed-expression>\r\n                  </div>\r\n                  <div class=\"col col-12\">\r\n                    <form-input style=\"display: inline-block\" i18n-label=\"@@running\" label=\"Språng\" [value]=\"character.inferedAttributes.speed.value * 2\"\r\n                      type=\"number\" [readonly]=\"true\"></form-input>\r\n                    <computed-expression expression=\"dexterity * 2\" [expressionLookupTable]=\"character.inferedAttributes.speed.baseValues\"></computed-expression>\r\n                  </div>\r\n                  <div class=\"col col-12\">\r\n                    <form-input style=\"display: inline-block\" i18n-label=\"@@sprinting\" label=\"Spurt\" [value]=\"character.inferedAttributes.speed.value * 3\"\r\n                      type=\"number\" [readonly]=\"true\"></form-input>\r\n                    <computed-expression expression=\"dexterity * 3\" [expressionLookupTable]=\"character.inferedAttributes.speed.baseValues\"></computed-expression>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row sub-form\">\r\n                  <ng-template #insentivityRow let-insentivity=\"insentivity\" let-label=\"label\" let-maxLevel=\"maxLevel\" let-thresholds=\"thresholds\">\r\n                    <td>\r\n                      <div><!--\r\n                        <increment-decrement-menu class=\"hover-menu\" [(value)]=\"insentivity.value\" min=\"0\" [max]=\"maxLevel\"></increment-decrement-menu>-->\r\n                        <label>{{label}}</label>\r\n                      </div>\r\n                    </td>\r\n                    <td *ngFor=\"let r of thresholds; let i = index\">\r\n                      <input-box [checked]=\"i < insentivity.value\" type=\"square\" fill=\"solid\" (click)=\"insentivity.value == i + 1 ? insentivity.value = insentivity.value - 1 : insentivity.value = i + 1\"></input-box>\r\n                    </td>\r\n                  </ng-template>\r\n\r\n                  <!--\r\n                    <h3 i18n=\"@@insensitivity\">Avtrubbning</h3>-->\r\n                  <table class=\"table\" style=\"margin:0px\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <ng-template *ngTemplateOutlet=\"insentivityRow;  context: { insentivity: character.insensitivities.exposure, label: 'Utsatthet', maxLevel: character.maxInsensitivitylevel, thresholds:  character.insensitivityThresholds}\"></ng-template>\r\n                      </tr>\r\n                      <tr>\r\n                        <ng-template *ngTemplateOutlet=\"insentivityRow;  context: { insentivity: character.insensitivities.violence, label: 'Våld', maxLevel: character.maxInsensitivitylevel, thresholds:  character.insensitivityThresholds}\"></ng-template>\r\n                      </tr>\r\n                      <tr>\r\n                        <ng-template *ngTemplateOutlet=\"insentivityRow;  context: { insentivity: character.insensitivities.supernatural, label: 'Övernaturligt', maxLevel: character.maxInsensitivitylevel, thresholds:  character.insensitivityThresholds}\"></ng-template>\r\n                      </tr>\r\n                      <tr>\r\n                        <td></td>\r\n                        <td *ngFor=\"let insensitivityThreshold of character.insensitivityThresholds; let i = index\">\r\n                          {{insensitivityThreshold}}\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <form-input i18n-label=\"@@will\" [label]=\"character.attributes.eon4will.name\" [(value)]=\"character.attributes.eon4will.value\" type=\"text\"></form-input>\r\n                </div>\r\n                <div class=\"row sub-form\">\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr style=\"margin-bottom: 2px\">\r\n                        <td i18n=\"@@focus\">\r\n                          <label>Fokus</label>\r\n                        </td>\r\n                        <td *ngFor=\"let r of character.maxWellBeing/2 | arrayConstructor; let i = index\" style=\"line-height:16px\">\r\n                          <input-box [checked]=\"i < character.focus\" type=\"circle\" fill=\"solid\" style=\"line-height:1px\" \r\n                          (click)=\"character.focus == i + 1 ? character.focus = character.focus - 1 : character.focus = i + 1\"></input-box>\r\n                          <input-box [checked]=\"(i + character.maxWellBeing/2) < character.focus\" type=\"circle\" fill=\"solid\" \r\n                          (click)=\"character.focus == (i + character.maxWellBeing/2)  + 1 ? character.focus = character.focus - 1 : character.focus = (i + character.maxWellBeing/2)  + 1\"></input-box>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td i18n=\"@@wellBeing\">\r\n                          <div>\r\n                            <label>Välmående</label>\r\n                          </div>\r\n                        </td>\r\n                        <td *ngFor=\"let r of character.maxWellBeing/2 | arrayConstructor; let i = index\" style=\"line-height:16px\">\r\n                          <input-box [checked]=\"i < character.wellBeing\" type=\"circle\" fill=\"solid\" \r\n                          (click)=\"character.wellBeing == i + 1 ? character.wellBeing = character.wellBeing - 1 : character.wellBeing = i + 1\"></input-box>\r\n                          <input-box [checked]=\"(i + character.maxWellBeing/2 ) < character.wellBeing\" type=\"circle\" fill=\"solid\" \r\n                          (click)=\"character.wellBeing == (i + character.maxWellBeing/2)  + 1 ? character.wellBeing = character.wellBeing - 1 : character.wellBeing = (i + character.maxWellBeing/2)  + 1\"></input-box>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12 flex-column\">\r\n            <div class=\"row sub-form\" aligned>\r\n              <h3 class=\"col col-3\" i18n=\"@@baseDamage\">Grundskada</h3>\r\n              <div class=\"col col-3 form-input\">\r\n                <input-group i18n-label=\"@@slash\" label=\"Hugg\" prefix=\"Ob\" [(value)]=\"character.baseDamage.slash\" type=\"text\"></input-group>\r\n              </div>\r\n              <div class=\"col col-3 form-input\">\r\n                <input-group i18n-label=\"@@crush\" label=\"Kross\" prefix=\"Ob\" [(value)]=\"character.baseDamage.crush\" type=\"text\"></input-group>\r\n              </div>\r\n              <div class=\"col col-3 form-input\">\r\n                <input-group i18n-label=\"@@pierce\" label=\"Stick\" prefix=\"Ob\" [(value)]=\"character.baseDamage.pierce\" type=\"text\"></input-group>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-lg-4 col-md-12 col-12 flex-column\">\r\n        <div class=\"row sub-form\">\r\n          <character-characteristic i18n-label=\"@@primaryCharacteristic\" label=\"Primärt karaktärsdrag\" [characteristic]=\"character.characteristics.primary\"\r\n            style=\"margin-bottom: 2px\"></character-characteristic>\r\n          <character-characteristic i18n-label=\"@@secondaryCharacteristic\" label=\"Sekundärt karaktärsdrag\" [characteristic]=\"character.characteristics.secondary\"></character-characteristic>\r\n        </div>\r\n        <div class=\"row sub-form\">\r\n          <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\r\n            <label class=\"flex-field\" i18n=\"@@clothesAndArmor\">Kläder & rustning</label>\r\n            <div style=\"display:flex;flex-wrap:wrap\">\r\n              <span class=\"formula\">&#215;0.5 =</span>\r\n              <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightBodyArmor())\" type=\"number\"></input-group>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\r\n            <label class=\"flex-field\" i18n=\"@@weaponsAndShields\">Vapen & sköldar</label>\r\n            <div style=\"display:flex;flex-wrap:wrap\">\r\n              <span class=\"formula\">+</span>\r\n              <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightWeaponsShields())\" type=\"number\"></input-group>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\r\n            <label class=\"flex-field\" i18n=\"@@carriedItemsAndCoins\">Burna föremål, mynt etc. </label>\r\n            <div style=\"display:flex;flex-wrap:wrap\">\r\n              <span class=\"formula\">+</span>\r\n              <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightCarriedItems())\" type=\"number\"></input-group>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\r\n            <label class=\"flex-field\" i18n=\"@@luggage\">Utrustning & proviant</label>\r\n            <div style=\"display:flex;flex-wrap:wrap\">\r\n              <span class=\"formula\">+</span>\r\n              <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightLuggage())\" type=\"number\"></input-group>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12 form-input\" style=\"flex-wrap:wrap\">\r\n            <label class=\"flex-field\" i18n=\"@@totalLoad\">Total belastning</label>\r\n            <div style=\"display:flex;flex-wrap:wrap\">\r\n              <span class=\"formula\">=</span>\r\n              <input-group i18n-suffix=\"@@weightUnit\" suffix=\"kg\" [value]=\"formatWeightSum(sumWeightTotal(),3)\" type=\"number\"></input-group>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12\">\r\n            <hr />\r\n          </div>\r\n          <div class=\"col col-12 form-input\" style=\"justify-content:space-between\">\r\n            <div>\r\n              <label class=\"flex-field\" i18n=\"@@carryingCapacity\">Bärförmåga</label>\r\n            </div>\r\n            <div>\r\n              <computed-expression right=\"true\" [expression]=\"character.inferedAttributes.carryingCapacity.expression\" [expressionLookupTable]=\"character.inferedAttributes.carryingCapacity.baseValues\"></computed-expression>\r\n              <input-computed [computationBase]=\"character.inferedAttributes.carryingCapacity\" i18n-suffix=\"@@weightUnit\" suffix=\"kg\"></input-computed>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" aligned selector=\"th:first-child\">\r\n      <div class=\"col col-12\">\r\n        <div class=\"sub-form\">\r\n          <div>\r\n            <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.meleeWeapons\" min=\"1\" [default]=\"creator.newMeleeWeapon.bind(creator)\"></add-remove-menu>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th i18n=\"@@meleeWeapons\">Närstridsvapen</th>\r\n                    <th i18n=\"@@skill\">Färdighet</th>\r\n                    <th i18n=\"@@grip\">Fattning</th>\r\n                    <th i18n=\"@@slash\">Hugg</th>\r\n                    <th i18n=\"@@crush\">Kross</th>\r\n                    <th i18n=\"@@pierce\">Stick</th>\r\n                    <th i18n=\"@@durability\">BRYT</th>\r\n                    <th i18n=\"@@speed\">SI</th>\r\n                    <th i18n=\"@@weight\">Vikt</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody [sortablejs]=\"character.equipment.meleeWeapons\">\r\n                  <tr melee-weapon *ngFor='let weapon of character.equipment.meleeWeapons' [item]=\"weapon.item\" [character]=\"character\" [(skill)]=\"weapon.skill\">\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-12\">\r\n        <div class=\"sub-form\">\r\n          <div>\r\n            <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.rangedWeapons\" min=\"1\" [default]=\"creator.newRangedWeapon.bind(creator)\"></add-remove-menu>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th i18n=\"@@rangedWeapons\">Avståndsvapen</th>\r\n                    <th i18n=\"@@skill\">Färdighet</th>\r\n                    <th i18n=\"@@range\">Avstånd</th>\r\n                    <th i18n=\"@@short\">Kort</th>\r\n                    <th i18n=\"@@normak\">Normal</th>\r\n                    <th i18n=\"@@far\">Långt</th>\r\n                    <th i18n=\"@@veryFar\">Mycket långt</th>\r\n                    <th i18n=\"@@weight\">Vikt</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody ranged-weapon *ngFor='let weapon of character.equipment.rangedWeapons' [item]=\"weapon.item\" [character]=\"character\" [(skill)]=\"weapon.skill\">\r\n                </tbody>\r\n                <!--\r\n                <tbody [sortablejs]=\"character.equipment.rangedWeapons\">\r\n                  <tr ranged-weapon *ngFor='let weapon of character.equipment.rangedWeapons' [item]=\"weapon.item\" [character]=\"character\" [(skill)]=\"weapon.skill\">\r\n                  </tr>\r\n                </tbody>-->\r\n              </table>\r\n            </div>\r\n            <!--\r\n            <div class=\"rTable\">\r\n              <div class=\"rTableRow\">\r\n                  <div class=\"rTableHead\" i18n=\"@@rangedWeapons\">Avståndsvapen</div>\r\n                  <div class=\"rTableHead\" i18n=\"@@skill\">Färdighet</div>\r\n                  <div class=\"rTableHead\" i18n=\"@@range\">Avstånd</div>\r\n                  <div class=\"rTableHead\" i18n=\"@@short\">Kort</div>\r\n                  <div class=\"rTableHead\" i18n=\"@@normak\">Normal</div>\r\n                  <div class=\"rTableHead\" i18n=\"@@far\">Långt</div>\r\n                  <div class=\"rTableHead\" i18n=\"@@veryFar\">Mycket långt</div>\r\n                  <div class=\"rTableHead\" i18n=\"@@weight\">Vikt</div>\r\n              </div>\r\n              <ranged-weapon class=\"rTableBody\" *ngFor='let weapon of character.equipment.rangedWeapons' [item]=\"weapon.item\" [character]=\"character\" [(skill)]=\"weapon.skill\">\r\n              </ranged-weapon>\r\n             </div>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-lg-8 col-12 flex-column\">\r\n            <div class=\"row sub-form\">\r\n              <div class=\"col col-12\">\r\n                <div>\r\n                  <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.shields\" min=\"1\" [default]=\"creator.newShield.bind(creator)\"></add-remove-menu>\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th i18n=\"@@shields\">Sköldar</th>\r\n                          <th i18n=\"@@skill\">Färdighet</th>\r\n                          <th i18n=\"@@passiveProtection\">Passivt s.</th>\r\n                          <th i18n=\"@@damage\">Skada</th>\r\n                          <th i18n=\"@@durability\">BRYT</th>\r\n                          <th i18n=\"@@speed\">SI</th>\r\n                          <th i18n=\"@@weight\">Vikt</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody [sortablejs]=\"character.equipment.shields\">\r\n                        <tr shield *ngFor='let shield of character.equipment.shields' [item]=\"shield.item\" [character]=\"character\" [(skill)]=\"shield.skill\">\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row sub-form\">\r\n              <div class=\"col col-12\">\r\n                <div>\r\n                  <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.armor\" min=\"1\" [default]=\"creator.newArmor.bind(creator)\"></add-remove-menu>\r\n                  <div class=\"table-responsive\">\r\n                    <table class=\"table\">\r\n                      <thead>\r\n                        <tr>\r\n                          <th i18n=\"@@armor\">Kroppsskydd</th>\r\n                          <th i18n=\"@@protects\">Ger skydd åt</th>\r\n                          <th i18n=\"@@slash\">Hugg</th>\r\n                          <th i18n=\"@@crush\">Kross</th>\r\n                          <th i18n=\"@@pierce\">Stick</th>\r\n                          <th i18n=\"@@durability\">BRYT</th>\r\n                          <th i18n=\"@@weight\">Vikt</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody [sortablejs]=\"character.equipment.armor\">\r\n                        <tr armor *ngFor='let armor of character.equipment.armor' [item]=\"armor\">\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-lg-4 col-12 flex-column\">\r\n            <div class=\"row\">\r\n              <div class=\"col col-lg-12 col-md-6 col-sm-6 col-12 flex-column\">\r\n                <div class=\"row sub-form\" aligned>\r\n                  <div class=\"col col-sm-12 col-12\">\r\n                    <input-computed i18n=\"@@winInitiative\" label=\"VINIT\" [computationBase]=\"character.inferedAttributes.initiative\"></input-computed>\r\n                    <computed-expression [expression]=\"character.inferedAttributes.initiative.expression\" [expressionLookupTable]=\"character.inferedAttributes.initiative.baseValues\"></computed-expression>\r\n                  </div>\r\n                  <div class=\"col col-sm-12 col-12\">\r\n                    <input-computed i18n=\"@@insight\" label=\"Insikt\" [computationBase]=\"character.inferedAttributes.insight\"></input-computed>\r\n                    <computed-expression [expression]=\"character.inferedAttributes.insight.expression\" [expressionLookupTable]=\"character.inferedAttributes.insight.baseValues\"></computed-expression>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col col-12 flex-column\">\r\n                    <div class=\"sub-form\">\r\n                      <input-computed i18n-label=\"@@blackOutCheck\" label=\"Chockslag\" [computationBase]=\"character.inferedAttributes.chockValue\"></input-computed>\r\n                      <computed-expression [expression]=\"character.inferedAttributes.chockValue.expression\" [expressionLookupTable]=\"character.inferedAttributes.chockValue.baseValues\"></computed-expression>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-lg-12 col-md-6 col-sm-6 col-12 flex-column\">\r\n                <div class=\"sub-form flex-form-input\">\r\n                  <damage-grid rows=\"11\" [columns]=\"maxDamageColumns\" [damageColumns]=\"character.exhaustion\" i18n-header=\"@@exhaustion\" header=\"Utmattning\"\r\n                    i18n-severDamageName=\"@@exhaustionLongterm\" severDamageName=\"Långtidsutmattning\">\r\n                    <ng-template #labelHeader>\r\n                      <div>\r\n                        <div style=\"width: 75%; display:inline-block;\">\r\n                          <span i18n=\"@@difficulty\" style=\"display:block;\">Svårighet</span>\r\n                        </div>\r\n                        <div style=\"width: 25%; display:inline-block;\">\r\n                          <span i18n=\"@@movement\" style=\"display:block;\">FÖR</span>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n                    <ng-template #label let-row=\"row\">\r\n                      <div *ngIf=\"row % 2 === 0 && row > 1\">\r\n                        <label style=\"text-align: center;width:75%;display:inline-block\">+Ob{{row/2}}T6</label>\r\n                        <label style=\"text-align: center;width:25%;display:inline-block\">-{{row/2}}</label>\r\n                      </div>\r\n                    </ng-template>\r\n                  </damage-grid>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-sm-12\">\r\n            <div class=\"flex-row\">\r\n              <div class=\"sub-form flex-form-input\">\r\n                <damage-grid rows=\"10\" [columns]=\"maxDamageColumns\" [damageColumns]=\"character.trauma\" i18n-header=\"@@trauma\" header=\"Trauma\">\r\n                  <ng-template #labelHeader>\r\n                    <span i18n=\"@@deathcheck\" style=\"display:block\">Dödslag</span>\r\n                    <span i18n=\"@@blackOutCheck\" style=\"display:block\">Chockslag</span>\r\n                  </ng-template>\r\n                  <ng-template #label let-row=\"row\">\r\n                    <label *ngIf=\"row > 0\" style=\"text-align: right;width:100%\">+Ob{{row}}T6</label>\r\n                  </ng-template>\r\n                </damage-grid>\r\n              </div>\r\n              <div class=\"sub-form flex-form-input\">\r\n                <damage-grid rows=\"10\" [columns]=\"maxDamageColumns\" [damageColumns]=\"character.pain\" i18n-header=\"@@pain\" header=\"Smärta\">\r\n                  <ng-template #labelHeader>\r\n                    <div style=\"width: 75%; display:inline-block;\">\r\n                      <div>\r\n                        <span i18n=\"@@difficulty\" style=\"display:block\">Svårighet</span>\r\n                        <span i18n=\"@@blackOutCheck\" style=\"display:block\">Chockslag</span>\r\n                      </div>\r\n                    </div>\r\n                    <div style=\"width: 25%; display:inline-block;\">\r\n                      <span i18n=\"@@movement\" style=\"display:block;\">FÖR</span>\r\n                    </div>\r\n                  </ng-template>\r\n                  <ng-template #label let-row=\"row\">\r\n                    <div *ngIf=\"row > 0\">\r\n                      <label style=\"text-align: center;width:75%;display:inline-block\">+Ob{{row}}T6</label>\r\n                      <label style=\"text-align: center;width:25%;display:inline-block\">-{{row}}</label>\r\n                    </div>\r\n                  </ng-template>\r\n                </damage-grid>\r\n              </div>\r\n              <div class=\"sub-form flex-row\">\r\n                <div class=\"flex-form-input\" style=\"flex: 1 0 auto\">\r\n                  <damage-grid rows=\"10\" [columns]=\"maxDamageColumns\" labelsRight=\"true\" type=\"square\" [damageColumns]=\"character.bleeding\"\r\n                    i18n-header=\"@@bloodloss\" header=\"Blödningstakt\">\r\n                    <ng-template #labelHeader>\r\n                      <span class=\"fa fa-long-arrow-right\" style=\"font-size:0.8cm;float:right\"></span>\r\n                    </ng-template>\r\n                    <ng-template #label let-row=\"row\">\r\n                      <div>\r\n                        <label *ngIf=\"row === 0\" i18n=\"@@minute\" style=\"text-align: center;display:inline-block\">{{'+1/'}}min</label>\r\n                        <label *ngIf=\"row > 0\" i18n=\"@@round\" style=\"text-align: center;display:inline-block\">{{'+' + row + '/'}}runda</label>\r\n                      </div>\r\n                    </ng-template>\r\n                  </damage-grid>\r\n                </div>\r\n                <div class=\"flex-form-input\" style=\"flex: 1 0 auto\">\r\n                  <damage-grid rows=\"10\" [columns]=\"maxDamageColumns\" [damageColumns]=\"character.bloodLoss\" i18n-header=\"@@bloodloss\" header=\"Blodförlust\">\r\n                    <ng-template #labelHeader>\r\n                      <span i18n=\"@@deathcheck\" style=\"display:block\">Dödslag</span>\r\n                      <span i18n=\"@@blackOutCheck\" style=\"display:block\">Chockslag</span>\r\n                    </ng-template>\r\n                    <ng-template #label let-row=\"row\">\r\n                      <label *ngIf=\"row > 1\" style=\"text-align: right;width:100%\">+Ob{{row - 1}}T6</label>\r\n                    </ng-template>\r\n                  </damage-grid>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #skillBodyRow let-skill=\"skill\">\r\n    <td style=\"display:flex;justify-content:space-between\">\r\n      <label>{{skill.name}}</label>\r\n      <span>{{skill.baseValue.name}}</span>\r\n    </td>\r\n    <td>\r\n      <input-base type=\"number\" [(value)]=\"skill.value\"></input-base>\r\n    </td>\r\n    <td>\r\n      <input-base type=\"text\" [(value)]=\"skill.specialization\"></input-base>\r\n    </td>\r\n  </ng-template>\r\n  <ng-template #miscellaneousSkillBodyRow let-skill=\"skill\">\r\n    <td>\r\n      <input-base type=\"text\" [(value)]=\"skill.name\"></input-base>\r\n    </td>\r\n    <td>\r\n      <input-base type=\"number\" [(value)]=\"skill.value\"></input-base>\r\n    </td>\r\n    <td>\r\n      <input-base type=\"text\" [(value)]=\"skill.specialization\"></input-base>\r\n    </td>\r\n  </ng-template>\r\n  <ng-template #simpleSkillBodyRow let-skill=\"skill\">\r\n    <td>\r\n      <input-base type=\"text\" [(value)]=\"skill.name\"></input-base>\r\n    </td>\r\n    <td>\r\n      <input-base type=\"number\" [(value)]=\"skill.value\"></input-base>\r\n    </td>\r\n  </ng-template>\r\n\r\n  <!--TODO cast coin type on drag drop?-->\r\n\r\n  <div size=\"A4\" class=\"page container\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-lg-6 col-md-12 flex-column\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-12 flex-column\">\r\n            <div class=\"sub-form\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th></th>\r\n                      <th i18n=\"@@value\">Värde</th>\r\n                      <th i18n=\"@@specialization\">Specialicering</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let skill of characterSkills\">\r\n                      <ng-template *ngTemplateOutlet=\"skillBodyRow;  context: { skill: skill}\"></ng-template>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12 flex-column\">\r\n            <div class=\"row sub-form\">\r\n              <div class=\"col col-12\">\r\n                <h3 i18n=\"@@baseSkillChanses\">Grundchanser för färdigheter</h3>\r\n              </div>\r\n              <div class=\"col col-12\">\r\n                <ng-template #baseSkill let-skill=\"skill\">\r\n                  <div>\r\n                    <input-computed [label]=\"skill.name\" [computationBase]=\"skill\" min=\"5\"></input-computed>\r\n                    <computed-expression [expression]=\"skill.expression\" [expressionLookupTable]=\"skill.baseValues\"></computed-expression>\r\n                  </div>\r\n                </ng-template>\r\n              </div>\r\n              <div class=\"col col-12\">\r\n                <div class=\"row\" aligned>\r\n                  <div class=\"col col-sm-6 col-12\">\r\n                    <div style=\"margin:auto\">\r\n                      <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.charismaIntelligence}\"></ng-template>\r\n                      <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.dexterityIntelligence}\"></ng-template>\r\n                      <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.sightIntelligence}\"></ng-template>\r\n                      <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.nativeLanguage}\"></ng-template>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col col-sm-6 col-12\">\r\n                    <div style=\"margin:auto\">\r\n                      <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.dexterity}\"></ng-template>\r\n                      <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.intelligence}\"></ng-template>\r\n                      <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.constitution}\"></ng-template>\r\n                      <ng-template *ngTemplateOutlet=\"baseSkill; context: { skill: character.inferedBaseSkills.education}\"></ng-template>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-lg-6 col-12 flex-column\">\r\n            <div class=\"sub-form\">\r\n              <div>\r\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"character.languageSkills\" min=\"1\" [default]=\"creator.newSkill.bind(creator)\"></add-remove-menu>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th i18n=\"@@language\">Språk</th>\r\n                        <th i18n=\"@@value\">Värde</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody [sortablejs]=\"character.languageSkills\">\r\n                      <tr *ngFor=\"let skill of character.languageSkills\">\r\n                        <ng-template *ngTemplateOutlet=\"simpleSkillBodyRow;  context: { skill: skill}\"></ng-template>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-lg-6 col-12 flex-column\">\r\n            <div class=\"sub-form\">\r\n              <div>\r\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"character.scriptSkills\" min=\"1\" [default]=\"creator.newSkill.bind(creator)\"></add-remove-menu>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th i18n=\"@@script\">Skrift</th>\r\n                        <th i18n=\"@@value\">Värde</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody [sortablejs]=\"character.scriptSkills\">\r\n                      <tr *ngFor=\"let skill of character.scriptSkills\">\r\n                        <ng-template *ngTemplateOutlet=\"simpleSkillBodyRow;  context: { skill: skill}\"></ng-template>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-lg-6 col-md-12 flex-column\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-12 flex-column\">\r\n            <div class=\"sub-form\">\r\n              <div>\r\n                <form-input [label]=\"character.attributes.combatExperience.name\" [(value)]=\"character.attributes.combatExperience.value\"\r\n                  type=\"number\"></form-input>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12 flex-column\">\r\n            <div class=\"sub-form\">\r\n              <div>\r\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"character.miscellaneousSkills\" min=\"5\" [default]=\"creator.newSkill.bind(creator)\"></add-remove-menu>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th i18n=\"@@skills\">Färdigheter</th>\r\n                        <th i18n=\"@@value\">Värde</th>\r\n                        <th i18n=\"@@specialization\">Specialicering</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody [sortablejs]=\"character.miscellaneousSkills\">\r\n                      <tr *ngFor=\"let skill of character.miscellaneousSkills\">\r\n                        <ng-template *ngTemplateOutlet=\"miscellaneousSkillBodyRow;  context: { skill: skill}\"></ng-template>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12 flex-column\">\r\n            <div class=\"sub-form\">\r\n              <add-remove-menu class=\"hover-menu\" [(array)]=\"character.combatArts\" min=\"1\" [default]=\"creator.newCombatArtSkill.bind(creator)\"></add-remove-menu>\r\n              <h3 i18n=\"@@combatArts\">Stridskonster</h3>\r\n              <combat-art *ngFor=\"let combatArt of character.combatArts\" [combatArt]=\"combatArt\"></combat-art>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-12 flex-column\">\r\n            <div class=\"sub-form\">\r\n              <div>\r\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"character.miscellaneous\" min=\"1\" [default]=\"creator.newStringValue.bind(creator)\"></add-remove-menu>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th i18n=\"@@miscellaneous\">Övrigt</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody [sortablejs]=\"character.miscellaneous\">\r\n                      <tr *ngFor=\"let misc of character.miscellaneous\">\r\n                        <td>\r\n                          <input-base type=\"text\" [(value)]=\"misc.value\"></input-base>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-lg-6 col-12 flex-column\">\r\n            <div class=\"sub-form\">\r\n              <div>\r\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.coins\" min=\"1\" [default]=\"creator.newCoin.bind(creator)\"></add-remove-menu>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th i18n=\"@@valuables\">Värdeföremål</th>\r\n                        <th i18n=\"@@count\">Antal</th>\r\n                        <th i18n=\"@@worthEach\">Värde/st</th>\r\n                        <th i18n=\"@@weightEach\">Vikt/st</th>\r\n                        <th i18n=\"@@totalWeight\">Total vikt</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody dragula=\"valuables-zone\" [dragulaModel]=\"character.equipment.coins\">\r\n                      <tr *ngFor=\"let coin of character.equipment.coins; let i = index\">\r\n                        <td>\r\n                          <input-base type=\"text\" [(value)]=\"coin.name\"></input-base>\r\n                        </td>\r\n                        <td>\r\n                          <input-base type=\"number\" [(value)]=\"coin.count\"></input-base>\r\n                        </td>\r\n                        <td>\r\n                          <input-group [(value)]=\"coin.worth\" i18n-suffix=\"@@coinUnit\" suffix=\"d\" type=\"number\"></input-group>\r\n                        </td>\r\n                        <td>\r\n                          <input-group [(value)]=\"coin.weight\" i18n-suffix=\"@@smallWeightUnit\" suffix=\"g\" type=\"number\"></input-group>\r\n                        </td>\r\n                        <td>\r\n                          <input-group [value]=\"coin.count && coin.weight ? coin.count * coin.weight : null\" i18n-suffix=\"@@smallWeightUnit\" suffix=\"g\"\r\n                            type=\"number\" readonly=\"true\"></input-group>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col-lg-6 col-12 flex-column\">\r\n            <div class=\"sub-form\">\r\n              <div>\r\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.coinsStorage\" min=\"1\" [default]=\"creator.newCoinStorage.bind(creator)\"></add-remove-menu>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th i18n=\"@@valuables\">Värdeföremål (förvaring)</th>\r\n                        <th i18n=\"@@count\">Antal</th>\r\n                        <th i18n=\"@@worthEach\">Värde/st</th>\r\n                        <th i18n=\"@@location\">Förvaring</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody dragula=\"valuables-zone\" [dragulaModel]=\"character.equipment.coinsStorage\">\r\n                      <tr *ngFor=\"let coin of character.equipment.coinsStorage\">\r\n                        <td>\r\n                          <input-base type=\"text\" [(value)]=\"coin.name\"></input-base>\r\n                        </td>\r\n                        <td>\r\n                          <input-base type=\"number\" [(value)]=\"coin.count\"></input-base>\r\n                        </td>\r\n                        <td>\r\n                          <input-group [(value)]=\"coin.worth\" i18n-suffix=\"@@coinUnit\" suffix=\"d\" type=\"number\"></input-group>\r\n                        </td>\r\n                        <td>\r\n                          <input-base type=\"text\" [(value)]=\"coin.location\"></input-base>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div size=\"A4\" class=\"page container\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-12\">\r\n        <div class=\"sub-form\">\r\n          <add-remove-menu class=\"hover-menu\" [(array)]=\"character.magic\" min=\"1\" [default]=\"creator.newMagic.bind(creator)\"></add-remove-menu>\r\n          <table class=\"table table-responsive\">\r\n            <thead>\r\n              <tr>\r\n                <th i18n=\"@@magicAndCeremonies\">Magi & ceremonier</th>\r\n                <th i18n=\"@@magnitude\">Magnitude</th>\r\n                <th i18n=\"@@magicCheck\">Färdighetsslag & tillhörande svårighetsslag</th>\r\n                <th i18n=\"@@time\">Tidsåtgång</th>\r\n                <th i18n=\"@@duration\">Varaktighet</th>\r\n                <th i18n=\"@@range\">Räckvidd</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody [sortablejs]=\"character.magic\">\r\n              <tr *ngFor=\"let magic of character.magic\">\r\n                <td>\r\n                  <input-base type=\"text\" [(value)]=\"magic.name\"></input-base>\r\n                </td>\r\n                <td>\r\n                  <input-base type=\"number\" [(value)]=\"magic.magnitude\"></input-base>\r\n                </td>\r\n                <td>\r\n                  <input-base type=\"text\" [(value)]=\"magic.description\"></input-base>\r\n                </td>\r\n                <td>\r\n                  <input-base type=\"text\" [(value)]=\"magic.time\"></input-base>\r\n                </td>\r\n                <td>\r\n                  <input-base type=\"text\" [(value)]=\"magic.duration\"></input-base>\r\n                </td>\r\n                <td>\r\n                  <input-base type=\"text\" [(value)]=\"magic.reach\"></input-base>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-12\">\r\n        <div class=\"sub-form\">\r\n          <div>\r\n            <add-remove-menu class=\"hover-menu\" [(array)]=\"character.contacts\" min=\"1\" [default]=\"creator.newContact.bind(creator)\"></add-remove-menu>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th i18n=\"@@contact\">Kontakt/fiende</th>\r\n                    <th i18n=\"@@profession\">Yrke</th>\r\n                    <th i18n=\"@@relation\">Relation</th>\r\n                    <th i18n=\"@@resources\">Resurser</th>\r\n                    <th i18n=\"@@miscellaneous\">Övrigt</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody [sortablejs]=\"character.contacts\">\r\n                  <tr *ngFor=\"let contact of character.contacts\">\r\n                    <td>\r\n                      <input-base type=\"text\" [(value)]=\"contact.name\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                      <input-base type=\"text\" [(value)]=\"contact.profession\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                      <input-base type=\"text\" [(value)]=\"contact.relation\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                      <input-base type=\"number\" [(value)]=\"contact.resources\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                      <input-base type=\"text\" [(value)]=\"contact.description\"></input-base>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-lg-6 col-12 flex-column\">\r\n        <div class=\"sub-form flex-column\">\r\n          <add-remove-menu class=\"hover-menu\" [(array)]=\"character.family.others\" min=\"1\" [default]=\"creator.newStringValue.bind(creator)\"></add-remove-menu>\r\n          <h3 i18n=\"@@family\">Familj & släkt</h3>\r\n          <div class=\"row\" aligned>\r\n            <div class=\"col col-lg-6 col-12\">\r\n              <form-input i18n-label=\"@@father\" label=\"Far\" [(value)]=\"character.family.father\"></form-input>\r\n            </div>\r\n            <div class=\"col col-lg-6 col-12\">\r\n              <form-input i18n-label=\"@@mother\" label=\"Mor\" [(value)]=\"character.family.mother\"></form-input>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <tbody [sortablejs]=\"character.family.others\">\r\n                <tr *ngFor=\"let family of character.family.others\">\r\n                  <td>\r\n                    <input-base type=\"text\" [(value)]=\"family.value\"></input-base>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"sub-form flex-column\">\r\n          <div>\r\n            <add-remove-menu class=\"hover-menu\" [(array)]=\"character.animals\" min=\"1\" [default]=\"creator.newAnimal.bind(creator)\"></add-remove-menu>\r\n            <h3 i18n=\"@@animals\">Rid- & packdjur</h3>\r\n            <div *ngFor=\"let animal of character.animals\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th i18n=\"@@name\">Namn</th>\r\n                      <th i18n=\"@@carryingCapacityAbbreviation\">BF</th>\r\n                      <th i18n=\"@@speed\">FÖR</th>\r\n                      <th i18n=\"@@crush\">Kross</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <input-base type=\"text\" [(value)]=\"animal.name\"></input-base>\r\n                      </td>\r\n                      <td>\r\n                        <input-base type=\"number\" [(value)]=\"animal.carryingCapacity\"></input-base>\r\n                      </td>\r\n                      <td>\r\n                        <input-base type=\"number\" [(value)]=\"animal.movement\"></input-base>\r\n                      </td>\r\n                      <td>\r\n                        <input-group prefix=\"Ob\" [(value)]=\"animal.damage\" type=\"text\"></input-group>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div>\r\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"animal.inventory\" min=\"1\" [default]=\"creator.newItem.bind(creator)\"></add-remove-menu>\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th i18n=\"@@equipment\">Utrustning</th>\r\n                        <th i18n=\"@@weight\">Vikt</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody dragula=\"equipment-zone\" [dragulaModel]=\"animal.inventory\">\r\n                      <tr *ngFor=\"let item of animal.inventory\">\r\n                        <td>\r\n                          <input-base type=\"text\" [(value)]=\"item.name\"></input-base>\r\n                        </td>\r\n                        <td>\r\n                          <input-base type=\"number\" [(value)]=\"item.weight\"></input-base>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <add-remove-menu class=\"hover-menu\" [(array)]=\"animal.techniques\" min=\"2\" [default]=\"creator.newStringValue.bind(creator)\"></add-remove-menu>\r\n                <h4 class=\"col col-12\" i18n=\"@@tricksAndAbilities\">Speciella trick och egenskaper</h4>\r\n                <div [sortablejs]=\"animal.techniques\" class=\"row\">\r\n                  <input-base class=\"col col-lg-6 col-md-6 col-12\" *ngFor=\"let technique of animal.techniques\" type=\"text\" [(value)]=\"technique.value\"></input-base>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-lg-6 col-12 flex-column\">\r\n        <div class=\"sub-form flex-column\">\r\n          <div>\r\n            <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.itemsCarried\" min=\"1\" [default]=\"creator.newItem.bind(creator)\"></add-remove-menu>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th i18n=\"@@equipment\">Burna föremål</th>\r\n                    <th i18n=\"@@weight\">Vikt</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody dragula=\"equipment-zone\" [dragulaModel]=\"character.equipment.itemsCarried\">\r\n                  <tr *ngFor=\"let item of character.equipment.itemsCarried\">\r\n                    <td>\r\n                      <input-base type=\"text\" [(value)]=\"item.name\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                      <input-base type=\"number\" [(value)]=\"item.weight\"></input-base>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sub-form flex-column\">\r\n          <div>\r\n            <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.luggage\" min=\"1\" [default]=\"creator.newItem.bind(creator)\"></add-remove-menu>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th i18n=\"@@equipment\">Utrustning</th>\r\n                    <th i18n=\"@@weight\">Vikt</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody dragula=\"equipment-zone\" [dragulaModel]=\"character.equipment.luggage\">\r\n                  <tr *ngFor=\"let luggage of character.equipment.luggage\">\r\n                    <td>\r\n                      <input-base type=\"text\" [(value)]=\"luggage.name\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                      <input-base type=\"number\" [(value)]=\"luggage.weight\"></input-base>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sub-form flex-column\">\r\n          <div>\r\n            <add-remove-menu class=\"hover-menu\" [(array)]=\"character.equipment.itemsStorage\" min=\"1\" [default]=\"creator.newItemStorage.bind(creator)\"></add-remove-menu>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th i18n=\"@@equipmentStorage\">Utrustning (Förvaring)</th>\r\n                    <th i18n=\"@@location\">Förvaring</th>\r\n                    <th i18n=\"@@weight\">Vikt</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody dragula=\"equipment-zone\" [dragulaModel]=\"character.equipment.itemsStorage\">\r\n                  <tr *ngFor=\"let item of character.equipment.itemsStorage\">\r\n                    <td>\r\n                      <input-base type=\"text\" [(value)]=\"item.name\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                      <input-base type=\"text\" [(value)]=\"item.location\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                      <input-base type=\"number\" [(value)]=\"item.weight\"></input-base>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sub-form flex-column\">\r\n          <rations-tracker [item]=\"character.rations\"></rations-tracker>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/character-sheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterSheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("./src/app/models/character.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_localization__ = __webpack_require__("./src/app/models/localization.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterSheetComponent = /** @class */ (function () {
    function CharacterSheetComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this._localization = new __WEBPACK_IMPORTED_MODULE_2__models_localization__["a" /* LocalizationObject */]();
        this.maxDamageColumns = 10;
        var self = this;
    }
    CharacterSheetComponent.prototype.ngDoCheck = function () {
        var self = this;
        Object.keys(this.character.inferedAttributes).forEach(function (key) {
            self.character.inferedAttributes[key].updateValue();
        });
        Object.keys(this.character.inferedBaseSkills).forEach(function (key) {
            self.character.inferedBaseSkills[key].updateValue();
        });
    };
    CharacterSheetComponent.prototype.sumAttribute = function (items, attribute) {
        return items.reduce(function (a, b) {
            if (b[attribute] !== null && typeof b[attribute] !== 'undefined')
                return a + Number(b[attribute]);
            return a;
        }, 0);
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
            this.sumAttribute(this.character.equipment.rangedWeapons.map(mapItems), 'quiverWeight') +
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
    Object.defineProperty(CharacterSheetComponent.prototype, "localization", {
        get: function () {
            return this._localization;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterSheetComponent.prototype, "character", {
        get: function () {
            return this._character;
        },
        set: function (value) {
            this._character = value;
            this.character.attributes.strength.name = this.localization.strength;
            this.character.attributes.constitution.name = this.localization.constitution;
            this.character.attributes.dexterity.name = this.localization.dexterity;
            this.character.attributes.charisma.name = this.localization.charisma;
            this.character.attributes.intelligence.name = this.localization.intelligence;
            this.character.attributes.will.name = this.localization.will;
            this.character.attributes.education.name = this.localization.education;
            this.character.attributes.sight.name = this.localization.sight;
            this.character.attributes.hearing.name = this.localization.hearing;
            this.character.attributes.eon4will.name = this.localization.eon4will;
            this.character.attributes.combatExperience.name = this.localization.combatExperience;
            this.character.inferedBaseSkills.education.name = this.localization.educationSkill;
            this.character.inferedBaseSkills.constitution.name = this.localization.constitutionSkill;
            this.character.inferedBaseSkills.dexterity.name = this.localization.dexteritySkill;
            this.character.inferedBaseSkills.intelligence.name = this.localization.intelligenceSkill;
            this.character.inferedBaseSkills.charismaIntelligence.name = this.localization.charismaIntelligenceSkill;
            this.character.inferedBaseSkills.dexterityIntelligence.name = this.localization.dexterityIntelligenceSkill;
            this.character.inferedBaseSkills.sightIntelligence.name = this.localization.sightIntelligenceSkill;
            this.character.inferedBaseSkills.nativeLanguage.name = this.localization.nativeLanguageSkill;
            this.character.skills.storyTelling.name = this.localization.storyTellingSkill;
            this.character.skills.dance.name = this.localization.danceSkill;
            this.character.skills.sleightOfHand.name = this.localization.sleightOfHandSkill;
            this.character.skills.fishing.name = this.localization.fishingSkill;
            this.character.skills.seduction.name = this.localization.seductionSkill;
            this.character.skills.interogate.name = this.localization.interogateSkill;
            this.character.skills.jest.name = this.localization.jestSkill;
            this.character.skills.hide.name = this.localization.hideSkill;
            this.character.skills.trade.name = this.localization.tradeSkill;
            this.character.skills.jump.name = this.localization.jumpSkill;
            this.character.skills.throw.name = this.localization.throwSkill;
            this.character.skills.climb.name = this.localization.climbSkill;
            this.character.skills.driveWagon.name = this.localization.driveWagonSkill;
            this.character.skills.leadership.name = this.localization.leadershipSkill;
            this.character.skills.marsch.name = this.localization.marschSkill;
            this.character.skills.cooking.name = this.localization.cookingSkill;
            this.character.skills.occultism.name = this.localization.occultismSkill;
            this.character.skills.ride.name = this.localization.rideSkill;
            this.character.skills.sing.name = this.localization.singSkill;
            this.character.skills.ski.name = this.localization.skiSkill;
            this.character.skills.acting.name = this.localization.actingSkill;
            this.character.skills.brawl.name = this.localization.brawlSkill;
            this.character.skills.sneak.name = this.localization.sneakSkill;
            this.character.skills.scout.name = this.localization.scoutSkill;
            this.character.skills.gambling.name = this.localization.gamblingSkill;
            this.character.skills.tracking.name = this.localization.trackingSkill;
            this.character.skills.drinking.name = this.localization.drinkingSkill;
            this.character.skills.search.name = this.localization.searchSkill;
            this.character.skills.educate.name = this.localization.educateSkill;
            this.character.skills.avoid.name = this.localization.avoidSkill;
            this.character.skills.appraise.name = this.localization.appraiseSkill;
            this.character.skills.survival.name = this.localization.survivalSkill;
            this.character.skills.persuade.name = this.localization.persuadeSkill;
            if (this.character) {
                this._sortedCharacterSkills = this.sortCharacterSkills(this.character);
            }
            //TODO set character attribute values from a localization object
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
            return __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */].DefaultValuesStatic;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CharacterSheetComponent.prototype, "creator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CharacterSheetComponent.prototype, "character", null);
    CharacterSheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'character-sheet',
            template: __webpack_require__("./src/app/character-sheet.component.html"),
            styles: [__webpack_require__("./src/app/character-sheet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], CharacterSheetComponent);
    return CharacterSheetComponent;
}());



/***/ }),

/***/ "./src/app/character-stat-input.component.css":
/***/ (function(module, exports) {

module.exports = "/*input-base {\r\n    display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n}*/"

/***/ }),

/***/ "./src/app/character-stat-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-input\">\r\n    <label>{{label}}</label>\r\n    <input-base type=\"number\" [(value)]=\"stat.value\"></input-base>\r\n    <input-base type=\"text\" [(value)]=\"stat.specialization\"\r\n                style=\"flex: 1 0 50px; line-height: 2px\"></input-base>\r\n</div>"

/***/ }),

/***/ "./src/app/character-stat-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterStatInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character_stat__ = __webpack_require__("./src/app/models/character-stat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterStatInputComponent = /** @class */ (function () {
    function CharacterStatInputComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CharacterStatInputComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_character_stat__["a" /* CharacterStat */])
    ], CharacterStatInputComponent.prototype, "stat", void 0);
    CharacterStatInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'character-stat-input',
            template: __webpack_require__("./src/app/character-stat-input.component.html"),
            styles: [__webpack_require__("./src/app/character-stat-input.component.css"), __webpack_require__("./src/app/form-input.component.css"), __webpack_require__("./src/app/input-base.component.css")]
        })
    ], CharacterStatInputComponent);
    return CharacterStatInputComponent;
}());



/***/ }),

/***/ "./src/app/computed-expression.component.css":
/***/ (function(module, exports) {

module.exports = "div{\r\n    display: inline-block;\r\n}\r\n\r\nspan{\r\n    font-size: 12px;\r\n    display:block;\r\n}\r\n\r\n@media print{\r\n    span{\r\n        font-size: 0.25cm;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/computed-expression.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputedExpressionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComputedExpressionComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComputedExpressionComponent.prototype, "right", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ComputedExpressionComponent.prototype, "expression", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ComputedExpressionComponent.prototype, "expressionLookupTable", null);
    ComputedExpressionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'computed-expression',
            template: "<div>\n<span *ngIf=\"right\">{{expression}}=</span>\n<span *ngIf=\"!right\">={{expression}}</span>\n</div>\n",
            styles: [__webpack_require__("./src/app/computed-expression.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ComputedExpressionComponent);
    return ComputedExpressionComponent;
}());



/***/ }),

/***/ "./src/app/directives/aligned.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlignedDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlignedDirective = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AlignedDirective.prototype, "selector", void 0);
    AlignedDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[aligned]',
            host: {}
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], AlignedDirective);
    return AlignedDirective;
}());



/***/ }),

/***/ "./src/app/directives/autosize.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], Autosize.prototype, "onInput", null);
    Autosize = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], Autosize);
    return Autosize;
}());



/***/ }),

/***/ "./src/app/directives/focus-inputs.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusInputsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusInputsDirective = /** @class */ (function () {
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
    FocusInputsDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[focus-inputs]',
            host: {}
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], FocusInputsDirective);
    return FocusInputsDirective;
}());



/***/ }),

/***/ "./src/app/directives/localization.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalizationDirective = /** @class */ (function () {
    function LocalizationDirective() {
        this.strengthChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.constitutionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dexterityChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.charismaChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.intelligenceChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.willChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.educationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sightChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hearingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eon4willChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.combatExperienceChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.educationSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.constitutionSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dexteritySkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.intelligenceSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.charismaIntelligenceSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dexterityIntelligenceSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sightIntelligenceSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nativeLanguageSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.storyTellingSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.danceSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sleightOfHandSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fishingSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.seductionSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.interogateSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.jestSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hideSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tradeSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.jumpSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.throwSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.climbSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.driveWagonSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.leadershipSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.marschSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cookingSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.occultismSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rideSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.singSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.skiSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actingSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.brawlSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sneakSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.scoutSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.gamblingSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.trackingSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.drinkingSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.educateSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.avoidSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.appraiseSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.survivalSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.persuadeSkillChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(LocalizationDirective.prototype, "source", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            this._src = value;
            this.strength = this._src.strength;
            this.constitution = this._src.constitution;
            this.dexterity = this._src.dexterity;
            this.charisma = this._src.charisma;
            this.intelligence = this._src.intelligence;
            this.will = this._src.will;
            this.education = this._src.education;
            this.sight = this._src.sight;
            this.hearing = this._src.hearing;
            this.eon4will = this._src.eon4will;
            this.combatExperience = this._src.combatExperience;
            this.educationSkill = this._src.educationSkill;
            this.constitutionSkill = this._src.constitutionSkill;
            this.dexteritySkill = this._src.dexteritySkill;
            this.intelligenceSkill = this._src.intelligenceSkill;
            this.charismaIntelligenceSkill = this._src.charismaIntelligenceSkill;
            this.dexterityIntelligenceSkill = this._src.dexterityIntelligenceSkill;
            this.sightIntelligenceSkill = this._src.sightIntelligenceSkill;
            this.nativeLanguageSkill = this._src.nativeLanguageSkill;
            this.storyTellingSkill = this._src.storyTellingSkill;
            this.danceSkill = this._src.danceSkill;
            this.sleightOfHandSkill = this._src.sleightOfHandSkill;
            this.fishingSkill = this._src.fishingSkill;
            this.seductionSkill = this._src.seductionSkill;
            this.interogateSkill = this._src.interogateSkill;
            this.jestSkill = this._src.jestSkill;
            this.hideSkill = this._src.hideSkill;
            this.tradeSkill = this._src.tradeSkill;
            this.jumpSkill = this._src.jumpSkill;
            this.throwSkill = this._src.throwSkill;
            this.climbSkill = this._src.climbSkill;
            this.driveWagonSkill = this._src.driveWagonSkill;
            this.leadershipSkill = this._src.leadershipSkill;
            this.marschSkill = this._src.marschSkill;
            this.cookingSkill = this._src.cookingSkill;
            this.occultismSkill = this._src.occultismSkill;
            this.rideSkill = this._src.rideSkill;
            this.singSkill = this._src.singSkill;
            this.skiSkill = this._src.skiSkill;
            this.actingSkill = this._src.actingSkill;
            this.brawlSkill = this._src.brawlSkill;
            this.sneakSkill = this._src.sneakSkill;
            this.scoutSkill = this._src.scoutSkill;
            this.gamblingSkill = this._src.gamblingSkill;
            this.trackingSkill = this._src.trackingSkill;
            this.drinkingSkill = this._src.drinkingSkill;
            this.searchSkill = this._src.searchSkill;
            this.educateSkill = this._src.educateSkill;
            this.avoidSkill = this._src.avoidSkill;
            this.appraiseSkill = this._src.appraiseSkill;
            this.survivalSkill = this._src.survivalSkill;
            this.persuadeSkill = this._src.persuadeSkill;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "strength", {
        /*Attributes */
        get: function () {
            return this._src.strength;
        },
        set: function (value) {
            this._src.strength = value;
            this.strengthChange.emit(this._src.strength);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "constitution", {
        get: function () {
            return this._src.constitution;
        },
        set: function (value) {
            this._src.constitution = value;
            this.constitutionChange.emit(this._src.constitution);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "dexterity", {
        get: function () {
            return this._src.dexterity;
        },
        set: function (value) {
            this._src.dexterity = value;
            this.dexterityChange.emit(this._src.dexterity);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "charisma", {
        get: function () {
            return this._src.charisma;
        },
        set: function (value) {
            this._src.charisma = value;
            this.charismaChange.emit(this._src.charisma);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "intelligence", {
        get: function () {
            return this._src.intelligence;
        },
        set: function (value) {
            this._src.intelligence = value;
            this.intelligenceChange.emit(this._src.intelligence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "will", {
        get: function () {
            return this._src.will;
        },
        set: function (value) {
            this._src.will = value;
            this.willChange.emit(this._src.will);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "education", {
        get: function () {
            return this._src.education;
        },
        set: function (value) {
            this._src.education = value;
            this.educationChange.emit(this._src.education);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "sight", {
        get: function () {
            return this._src.sight;
        },
        set: function (value) {
            this._src.sight = value;
            this.sightChange.emit(this._src.sight);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "hearing", {
        get: function () {
            return this._src.hearing;
        },
        set: function (value) {
            this._src.hearing = value;
            this.hearingChange.emit(this._src.hearing);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "eon4will", {
        get: function () {
            return this._src.eon4will;
        },
        set: function (value) {
            this._src.eon4will = value;
            this.eon4willChange.emit(this._src.eon4will);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "combatExperience", {
        get: function () {
            return this._src.combatExperience;
        },
        set: function (value) {
            this._src.combatExperience = value;
            this.combatExperienceChange.emit(this._src.combatExperience);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "educationSkill", {
        /* Base skills*/
        get: function () {
            return this._src.education;
        },
        set: function (value) {
            this._src.educationSkill = value;
            this.educationSkillChange.emit(this._src.educationSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "constitutionSkill", {
        get: function () {
            return this._src.constitution;
        },
        set: function (value) {
            this._src.constitutionSkill = value;
            this.constitutionSkillChange.emit(this._src.constitutionSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "dexteritySkill", {
        get: function () {
            return this._src.dexterity;
        },
        set: function (value) {
            this._src.dexteritySkill = value;
            this.dexteritySkillChange.emit(this._src.dexteritySkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "intelligenceSkill", {
        get: function () {
            return this._src.intelligence;
        },
        set: function (value) {
            this._src.intelligenceSkill = value;
            this.intelligenceSkillChange.emit(this._src.intelligenceSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "charismaIntelligenceSkill", {
        get: function () {
            return this._src.charismaIntelligenceSkill;
        },
        set: function (value) {
            this._src.charismaIntelligenceSkill = value;
            this.charismaIntelligenceSkillChange.emit(this._src.charismaIntelligenceSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "dexterityIntelligenceSkill", {
        get: function () {
            return this._src.dexterityIntelligenceSkill;
        },
        set: function (value) {
            this._src.dexterityIntelligenceSkill = value;
            this.dexterityIntelligenceSkillChange.emit(this._src.dexterityIntelligenceSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "sightIntelligenceSkill", {
        get: function () {
            return this._src.sightIntelligenceSkill;
        },
        set: function (value) {
            this._src.sightIntelligenceSkill = value;
            this.sightIntelligenceSkillChange.emit(this._src.sightIntelligenceSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "nativeLanguageSkill", {
        get: function () {
            return this._src.nativeLanguageSkill;
        },
        set: function (value) {
            this._src.nativeLanguageSkill = value;
            this.nativeLanguageSkillChange.emit(this._src.nativeLanguageSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "storyTellingSkill", {
        /* Skills */
        get: function () {
            return this._src.storyTellingSkill;
        },
        set: function (value) {
            this._src.storyTellingSkill = value;
            this.storyTellingSkillChange.emit(this._src.storyTellingSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "danceSkill", {
        get: function () {
            return this._src.danceSkill;
        },
        set: function (value) {
            this._src.danceSkill = value;
            this.danceSkillChange.emit(this._src.danceSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "sleightOfHandSkill", {
        get: function () {
            return this._src.sleightOfHandSkill;
        },
        set: function (value) {
            this._src.sleightOfHandSkill = value;
            this.sleightOfHandSkillChange.emit(this._src.sleightOfHandSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "fishingSkill", {
        get: function () {
            return this._src.fishingSkill;
        },
        set: function (value) {
            this._src.fishingSkill = value;
            this.fishingSkillChange.emit(this._src.fishingSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "seductionSkill", {
        get: function () {
            return this._src.seductionSkill;
        },
        set: function (value) {
            this._src.seductionSkill = value;
            this.seductionSkillChange.emit(this._src.seductionSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "interogateSkill", {
        get: function () {
            return this._src.interogateSkill;
        },
        set: function (value) {
            this._src.interogateSkill = value;
            this.interogateSkillChange.emit(this._src.interogateSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "jestSkill", {
        get: function () {
            return this._src.jestSkill;
        },
        set: function (value) {
            this._src.jestSkill = value;
            this.jestSkillChange.emit(this._src.jestSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "hideSkill", {
        get: function () {
            return this._src.hideSkill;
        },
        set: function (value) {
            this._src.hideSkill = value;
            this.hideSkillChange.emit(this._src.hideSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "tradeSkill", {
        get: function () {
            return this._src.tradeSkill;
        },
        set: function (value) {
            this._src.tradeSkill = value;
            this.tradeSkillChange.emit(this._src.tradeSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "jumpSkill", {
        get: function () {
            return this._src.jumpSkill;
        },
        set: function (value) {
            this._src.jumpSkill = value;
            this.jumpSkillChange.emit(this._src.jumpSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "throwSkill", {
        get: function () {
            return this._src.throwSkill;
        },
        set: function (value) {
            this._src.throwSkill = value;
            this.throwSkillChange.emit(this._src.throwSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "climbSkill", {
        get: function () {
            return this._src.climbSkill;
        },
        set: function (value) {
            this._src.climbSkill = value;
            this.climbSkillChange.emit(this._src.climbSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "driveWagonSkill", {
        get: function () {
            return this._src.driveWagonSkill;
        },
        set: function (value) {
            this._src.driveWagonSkill = value;
            this.driveWagonSkillChange.emit(this._src.driveWagonSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "leadershipSkill", {
        get: function () {
            return this._src.leadershipSkill;
        },
        set: function (value) {
            this._src.leadershipSkill = value;
            this.leadershipSkillChange.emit(this._src.leadershipSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "marschSkill", {
        get: function () {
            return this._src.marschSkill;
        },
        set: function (value) {
            this._src.marschSkill = value;
            this.marschSkillChange.emit(this._src.marschSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "cookingSkill", {
        get: function () {
            return this._src.cookingSkill;
        },
        set: function (value) {
            this._src.cookingSkill = value;
            this.cookingSkillChange.emit(this._src.cookingSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "occultismSkill", {
        get: function () {
            return this._src.occultismSkill;
        },
        set: function (value) {
            this._src.occultismSkill = value;
            this.occultismSkillChange.emit(this._src.occultismSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "rideSkill", {
        get: function () {
            return this._src.rideSkill;
        },
        set: function (value) {
            this._src.rideSkill = value;
            this.rideSkillChange.emit(this._src.rideSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "singSkill", {
        get: function () {
            return this._src.singSkill;
        },
        set: function (value) {
            this._src.singSkill = value;
            this.singSkillChange.emit(this._src.singSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "skiSkill", {
        get: function () {
            return this._src.skiSkill;
        },
        set: function (value) {
            this._src.skiSkill = value;
            this.skiSkillChange.emit(this._src.skiSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "actingSkill", {
        get: function () {
            return this._src.actingSkill;
        },
        set: function (value) {
            this._src.actingSkill = value;
            this.actingSkillChange.emit(this._src.actingSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "brawlSkill", {
        get: function () {
            return this._src.brawlSkill;
        },
        set: function (value) {
            this._src.brawlSkill = value;
            this.brawlSkillChange.emit(this._src.brawlSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "sneakSkill", {
        get: function () {
            return this._src.sneakSkill;
        },
        set: function (value) {
            this._src.sneakSkill = value;
            this.sneakSkillChange.emit(this._src.sneakSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "scoutSkill", {
        get: function () {
            return this._src.scoutSkill;
        },
        set: function (value) {
            this._src.scoutSkill = value;
            this.scoutSkillChange.emit(this._src.scoutSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "gamblingSkill", {
        get: function () {
            return this._src.gamblingSkill;
        },
        set: function (value) {
            this._src.gamblingSkill = value;
            this.gamblingSkillChange.emit(this._src.gamblingSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "trackingSkill", {
        get: function () {
            return this._src.trackingSkill;
        },
        set: function (value) {
            this._src.trackingSkill = value;
            this.trackingSkillChange.emit(this._src.trackingSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "drinkingSkill", {
        get: function () {
            return this._src.drinkingSkill;
        },
        set: function (value) {
            this._src.drinkingSkill = value;
            this.drinkingSkillChange.emit(this._src.drinkingSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "searchSkill", {
        get: function () {
            return this._src.searchSkill;
        },
        set: function (value) {
            this._src.searchSkill = value;
            this.searchSkillChange.emit(this._src.searchSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "educateSkill", {
        get: function () {
            return this._src.educateSkill;
        },
        set: function (value) {
            this._src.educateSkill = value;
            this.educateSkillChange.emit(this._src.educateSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "avoidSkill", {
        get: function () {
            return this._src.avoidSkill;
        },
        set: function (value) {
            this._src.avoidSkill = value;
            this.avoidSkillChange.emit(this._src.avoidSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "appraiseSkill", {
        get: function () {
            return this._src.appraiseSkill;
        },
        set: function (value) {
            this._src.appraiseSkill = value;
            this.appraiseSkillChange.emit(this._src.appraiseSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "survivalSkill", {
        get: function () {
            return this._src.survivalSkill;
        },
        set: function (value) {
            this._src.survivalSkill = value;
            this.survivalSkillChange.emit(this._src.survivalSkill);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizationDirective.prototype, "persuadeSkill", {
        get: function () {
            return this._src.persuadeSkill;
        },
        set: function (value) {
            this._src.persuadeSkill = value;
            this.persuadeSkillChange.emit(this._src.persuadeSkill);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "source", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "strength", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "strengthChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "constitution", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "constitutionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "dexterity", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "dexterityChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "charisma", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "charismaChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "intelligence", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "intelligenceChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "will", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "willChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "education", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "educationChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "sight", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "sightChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "hearing", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "hearingChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "eon4will", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "eon4willChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "combatExperience", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "combatExperienceChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "educationSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "educationSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "constitutionSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "constitutionSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "dexteritySkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "dexteritySkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "intelligenceSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "intelligenceSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "charismaIntelligenceSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "charismaIntelligenceSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "dexterityIntelligenceSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "dexterityIntelligenceSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "sightIntelligenceSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "sightIntelligenceSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "nativeLanguageSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "nativeLanguageSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "storyTellingSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "storyTellingSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "danceSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "danceSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "sleightOfHandSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "sleightOfHandSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "fishingSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "fishingSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "seductionSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "seductionSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "interogateSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "interogateSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "jestSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "jestSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "hideSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "hideSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "tradeSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "tradeSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "jumpSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "jumpSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "throwSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "throwSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "climbSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "climbSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "driveWagonSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "driveWagonSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "leadershipSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "leadershipSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "marschSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "marschSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "cookingSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "cookingSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "occultismSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "occultismSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "rideSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "rideSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "singSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "singSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "skiSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "skiSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "actingSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "actingSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "brawlSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "brawlSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "sneakSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "sneakSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "scoutSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "scoutSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "gamblingSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "gamblingSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "trackingSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "trackingSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "drinkingSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "drinkingSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "searchSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "searchSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "educateSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "educateSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "avoidSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "avoidSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "appraiseSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "appraiseSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "survivalSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "survivalSkillChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LocalizationDirective.prototype, "persuadeSkill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LocalizationDirective.prototype, "persuadeSkillChange", void 0);
    LocalizationDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'localization'
        })
    ], LocalizationDirective);
    return LocalizationDirective;
}());



/***/ }),

/***/ "./src/app/dropbox-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropboxButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("./src/app/models/character.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropboxButtonComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DropboxButtonComponent.prototype, "characterChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DropboxButtonComponent.prototype, "character", null);
    DropboxButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dropbox-button',
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], DropboxButtonComponent);
    return DropboxButtonComponent;
}());



/***/ }),

/***/ "./src/app/form-input.component.css":
/***/ (function(module, exports) {

module.exports = ".form-input{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/form-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-input\">\r\n    <label [contentEditable]=\"labelEditable\">{{(label)}}</label>\r\n    <input #field [type]=\"type\" [(readonly)]=\"readonly\"\r\n        (change)=\"value = field.value\" [value]=\"value\" step=\"any\" />\r\n</div>"

/***/ }),

/***/ "./src/app/form-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_base_component__ = __webpack_require__("./src/app/input-base.component.ts");
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


var FormInputComponent = /** @class */ (function (_super) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FormInputComponent.prototype, "label", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FormInputComponent.prototype, "labelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FormInputComponent.prototype, "labelEditable", null);
    FormInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-input',
            template: __webpack_require__("./src/app/form-input.component.html"),
            styles: [__webpack_require__("./src/app/form-input.component.css"), __webpack_require__("./src/app/input-base.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], FormInputComponent);
    return FormInputComponent;
}(__WEBPACK_IMPORTED_MODULE_1__input_base_component__["a" /* InputBaseComponent */]));



/***/ }),

/***/ "./src/app/increment-decrement-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncrementDecrementMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IncrementDecrementMenuComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IncrementDecrementMenuComponent.prototype, "min", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], IncrementDecrementMenuComponent.prototype, "max", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], IncrementDecrementMenuComponent.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IncrementDecrementMenuComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IncrementDecrementMenuComponent.prototype, "increment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], IncrementDecrementMenuComponent.prototype, "decrement", void 0);
    IncrementDecrementMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'increment-decrement-menu',
            template: "\n<div>\n  <button class=\"fa fa-plus btn btn-default\" type=\"button\" (click)=\"doIncrement()\"></button>\n  <button class=\"fa fa-minus btn btn-default\" type=\"button\" (click)=\"doDecrement()\"></button>\n</div>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], IncrementDecrementMenuComponent);
    return IncrementDecrementMenuComponent;
}());



/***/ }),

/***/ "./src/app/input-base.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nlabel {\r\n  margin-right: 2px;\r\n}\r\n\r\ninput{\r\n    max-width: 100%;\r\n    display:block;\r\n}\r\n\r\ninput {\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n\r\ninput[type=\"text\"]\r\n{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 50px;\r\n          flex: 1 0 50px;\r\n  min-width: 50px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"number\"]{\r\n    width: 60px;\r\n    text-align:center;\r\n    margin:auto;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    -moz-appearance:textfield;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -moz-appearance: none;\r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\n\r\n@media print{\r\n  input[type=\"number\"]{\r\n    width: 1cm;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/input-base.component.html":
/***/ (function(module, exports) {

module.exports = "<input #field [type]=\"type\" [(readonly)]=\"readonly\"\r\n        (change)=\"value = field.value\" [value]=\"value\" step=\"any\"/>"

/***/ }),

/***/ "./src/app/input-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputBaseComponent = /** @class */ (function () {
    function InputBaseComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this._value = null;
        this.readonly = false;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._type = InputBaseComponent_1.ValidTypes[0];
    }
    InputBaseComponent_1 = InputBaseComponent;
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
    InputBaseComponent.ValidTypes = ['text', 'number'];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], InputBaseComponent.prototype, "readonly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputBaseComponent.prototype, "type", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputBaseComponent.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InputBaseComponent.prototype, "valueChange", void 0);
    InputBaseComponent = InputBaseComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'input-base',
            template: __webpack_require__("./src/app/input-base.component.html"),
            styles: [__webpack_require__("./src/app/input-base.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], InputBaseComponent);
    return InputBaseComponent;
    var InputBaseComponent_1;
}());



/***/ }),

/***/ "./src/app/input-box.component.css":
/***/ (function(module, exports) {

module.exports = ".cell {\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    margin-top: auto;\r\n    padding: 1px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.cell.circle, .cell.circle > .cell-content.solid {\r\n    border-radius: 50%;\r\n}\r\n\r\n.cell-content{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: transparent;\r\n}\r\n\r\n.cell-content.checked {\r\n    background-color: black;\r\n}\r\n\r\n.cell-content.dash{\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    height: 3px;\r\n}\r\n\r\n.cell-content.checked.slash{\r\n    position: relative;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%) rotate(-45deg);\r\n            transform: translateY(-50%) rotate(-45deg);\r\n    height: 3px;\r\n}"

/***/ }),

/***/ "./src/app/input-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cell\" [ngClass]=\"type\" >\r\n    <div class=\"cell-content\" [ngClass]=\"getClass()\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/input-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputBoxComponent = /** @class */ (function () {
    function InputBoxComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
        this.checked = false;
        this._type = InputBoxComponent_1.ValidTypes[0];
        this._fill = InputBoxComponent_1.ValidFill[0];
    }
    InputBoxComponent_1 = InputBoxComponent;
    Object.defineProperty(InputBoxComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        //@Output() typeChange = new EventEmitter();
        set: function (value) {
            if (InputBoxComponent_1.ValidTypes.indexOf(value) < 0) {
                value = InputBoxComponent_1.ValidTypes[0];
            }
            this._type = value;
            //     this.typeChange.emit(this._type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputBoxComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        // @Output() checkedChange = new EventEmitter();
        set: function (value) {
            this._checked = value;
            //  this.checkedChange.emit(this._checked);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputBoxComponent.prototype, "fill", {
        get: function () {
            return this._fill;
        },
        //@Output() fillChange = new EventEmitter();
        set: function (value) {
            if (InputBoxComponent_1.ValidFill.indexOf(value) < 0) {
                value = InputBoxComponent_1.ValidFill[0];
            }
            this._fill = value;
            //   this.fillChange.emit(this._fill);
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
    InputBoxComponent.ValidTypes = ['circle', 'square'];
    InputBoxComponent.ValidFill = ['solid', 'dash', 'slash'];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputBoxComponent.prototype, "type", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputBoxComponent.prototype, "checked", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputBoxComponent.prototype, "fill", null);
    InputBoxComponent = InputBoxComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'input-box',
            template: __webpack_require__("./src/app/input-box.component.html"),
            styles: [__webpack_require__("./src/app/input-box.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], InputBoxComponent);
    return InputBoxComponent;
    var InputBoxComponent_1;
}());



/***/ }),

/***/ "./src/app/input-computed.component.css":
/***/ (function(module, exports) {

module.exports = ".tooltip-box {\r\n    border: 1px solid black;\r\n    background: whitesmoke;\r\n    border-radius: 5px;\r\n    padding: 8px;\r\n    z-index: 10;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n    left: 50%;\r\n    position:absolute;\r\n    bottom: 100%;\r\n    opacity: 0;\r\n    pointer-events: visible;\r\n    visibility: hidden;\r\n    -webkit-transition: visibility 0.5s, opacity 0.5s linear;\r\n    transition: visibility 0.5s, opacity 0.5s linear; /*NOTE: The visibility transition needs some time to allow the focus events to finish propagating and setting the final visibility status or the elements will be hidden and no focus events can be recieved*/\r\n}\r\n\r\n.show{\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.strike{\r\n    text-decoration: line-through;\r\n}\r\n\r\ntextarea\r\n{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 60px;\r\n          flex: 1 0 60px;\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/input-computed.component.html":
/***/ (function(module, exports) {

module.exports = "<div focus-inputs (focus)=\"showExpression()\" (focusout)=\"hideExpression()\" style=\"display:inline-block\">\r\n    <div [class.show]=\"expressionVisible\" class=\"form-input tooltip-box\" style=\"position:absolute;\">\r\n        <input type=\"checkbox\" [(ngModel)]=\"computationBase.ignoreExpression\">\r\n        <textarea [(ngModel)]=\"expression\" [class.strike]=\"computationBase.ignoreExpression\"></textarea>\r\n    </div>\r\n    <div class=\"form-input\">\r\n        <label *ngIf=\"!!label\">{{label}}</label>\r\n        <div class=\"input-group\" style=\"flex: 1 0 0px\">\r\n            <div *ngIf=\"!!prefix\" class=\"input-group-prepend\"><span class=\"input-group-text\">{{prefix}}</span></div>\r\n            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"computationBase.value\" [readonly]=\"!computationBase.ignoreExpression\" step=\"any\"/>\r\n            <div *ngIf=\"!!suffix\" class=\"input-group-append\"><span class=\"input-group-text\">{{suffix}}</span></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/input-computed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComputedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character_attribute__ = __webpack_require__("./src/app/models/character-attribute.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComputedComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputComputedComponent.prototype, "prefix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputComputedComponent.prototype, "suffix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_character_attribute__["c" /* CharacterInferedAttribute */])
    ], InputComputedComponent.prototype, "computationBase", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputComputedComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InputComputedComponent.prototype, "expression", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InputComputedComponent.prototype, "expressionChange", void 0);
    InputComputedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'input-computed',
            template: __webpack_require__("./src/app/input-computed.component.html"),
            styles: [__webpack_require__("./src/app/input-computed.component.css"), __webpack_require__("./src/app/input-group.component.css"), __webpack_require__("./src/app/form-input.component.css"), __webpack_require__("./src/app/input-base.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], InputComputedComponent);
    return InputComputedComponent;
}());



/***/ }),

/***/ "./src/app/input-group.component.css":
/***/ (function(module, exports) {

module.exports = ".flex-field\r\n{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 60px;\r\n          flex: 1 0 60px;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=\"number\"].form-control:first-child{\r\n    margin-right: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/input-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-input\">\r\n    <label *ngIf=\"!!label\">{{label}}</label>\r\n    <div class=\"input-group flex-field\" style=\"flex-wrap:nowrap\">\r\n        <div *ngIf=\"!!prefix\" class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">{{prefix}}</span>\r\n        </div>\r\n        <input #field class=\"form-control\" [type]=\"type\" [(readonly)]=\"readonly\" (change)=\"value = field.value\" [value]=\"value\" step=\"any\"\r\n        />\r\n        <div *ngIf=\"!!suffix\" class=\"input-group-append\">\r\n            <span class=\"input-group-text\">{{suffix}}</span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/input-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_input_component__ = __webpack_require__("./src/app/form-input.component.ts");
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


var InputGroupComponent = /** @class */ (function (_super) {
    __extends(InputGroupComponent, _super);
    function InputGroupComponent(_el, _re) {
        var _this = _super.call(this, _el, _re) || this;
        _this.prefix = null;
        _this.suffix = null;
        return _this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputGroupComponent.prototype, "prefix", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputGroupComponent.prototype, "suffix", void 0);
    InputGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'input-group',
            template: __webpack_require__("./src/app/input-group.component.html"),
            styles: [__webpack_require__("./src/app/input-group.component.css"), __webpack_require__("./src/app/form-input.component.css"), __webpack_require__("./src/app/input-base.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], InputGroupComponent);
    return InputGroupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__form_input_component__["a" /* FormInputComponent */]));



/***/ }),

/***/ "./src/app/models/animal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__equipment_item__ = __webpack_require__("./src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__immutable_wrapper__ = __webpack_require__("./src/app/models/immutable-wrapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Animal = /** @class */ (function () {
    function Animal() {
        this.name = null;
        this.carryingCapacity = null;
        this.movement = null;
        this.damage = null;
        this.inventory = new Array();
        this.techniques = new Array();
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Animal.prototype, "name", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Animal.prototype, "carryingCapacity", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Animal.prototype, "movement", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Animal.prototype, "damage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_2_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_2_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_0__equipment_item__["a" /* Item */]))),
        __metadata("design:type", Array)
    ], Animal.prototype, "inventory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_2_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_2_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_1__immutable_wrapper__["a" /* Wrapper */]))),
        __metadata("design:type", Array)
    ], Animal.prototype, "techniques", void 0);
    return Animal;
}());



/***/ }),

/***/ "./src/app/models/character-attribute.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterAttribute; });
/* unused harmony export CharacterDiceAttribute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CharacterAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CharacterInferedAttribute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_serialize_context_refs__ = __webpack_require__("./src/app/util/serialize-context-refs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterAttribute = /** @class */ (function () {
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
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], CharacterAttribute.prototype, "_value", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CharacterAttribute.prototype, "name", void 0);
    return CharacterAttribute;
}());

var CharacterDiceAttribute = /** @class */ (function () {
    function CharacterDiceAttribute() {
        this._value = null;
        this.name = null;
    }
    Object.defineProperty(CharacterDiceAttribute.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CharacterDiceAttribute.prototype, "_value", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CharacterDiceAttribute.prototype, "name", void 0);
    return CharacterDiceAttribute;
}());

var CharacterAttributes = /** @class */ (function () {
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
        this.eon4will = new CharacterDiceAttribute();
    }
    return CharacterAttributes;
}());

Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["a" /* createModelSchema */])(CharacterAttributes, {
    strength: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    constitution: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    dexterity: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    charisma: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    intelligence: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    will: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    education: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    sight: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    hearing: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    luck: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    qadosh: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    combatExperience: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute),
    extraAttributes: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterAttribute)),
    eon4will: Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CharacterDiceAttribute),
}); // (context : any) => serializrConstructor(context, CharacterAttributes) )
var CharacterInferedAttribute = /** @class */ (function () {
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
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CharacterInferedAttribute.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_1__util_serialize_context_refs__["a" /* myObject */])(CharacterAttributes)),
        __metadata("design:type", CharacterAttributes)
    ], CharacterInferedAttribute.prototype, "baseValues", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], CharacterInferedAttribute.prototype, "min", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], CharacterInferedAttribute.prototype, "max", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], CharacterInferedAttribute.prototype, "_value", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CharacterInferedAttribute.prototype, "_expression", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Boolean)
    ], CharacterInferedAttribute.prototype, "ignoreExpression", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["e" /* primitive */])())),
        __metadata("design:type", Array)
    ], CharacterInferedAttribute.prototype, "_variableNames", void 0);
    return CharacterInferedAttribute;
}());



/***/ }),

/***/ "./src/app/models/character-charactertistic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterCharacteristic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacterCharacteristic = /** @class */ (function () {
    function CharacterCharacteristic() {
        this.name = null;
        this.locked = false;
        this.weakness = false;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CharacterCharacteristic.prototype, "name", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Boolean)
    ], CharacterCharacteristic.prototype, "locked", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Boolean)
    ], CharacterCharacteristic.prototype, "weakness", void 0);
    return CharacterCharacteristic;
}());



/***/ }),

/***/ "./src/app/models/character-skill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterSkill; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_serialize_context_refs__ = __webpack_require__("./src/app/util/serialize-context-refs.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterSkill = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CharacterSkill.prototype, "value", null);
    return CharacterSkill;
}());

Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["a" /* createModelSchema */])(CharacterSkill, {
    _value: Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["e" /* primitive */])(),
    name: Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["e" /* primitive */])(),
    specialization: Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["e" /* primitive */])(),
    baseValue: Object(__WEBPACK_IMPORTED_MODULE_2__util_serialize_context_refs__["a" /* myObject */])(null)
}); //, (context : any) => serializrInterface(context, ['baseValue']) )


/***/ }),

/***/ "./src/app/models/character-stat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterStat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CharacterStat = /** @class */ (function () {
    function CharacterStat() {
        this.specialization = null;
        this.value = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CharacterStat.prototype, "specialization", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], CharacterStat.prototype, "value", void 0);
    return CharacterStat;
}());



/***/ }),

/***/ "./src/app/models/character.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CharacterSkillItem; });
/* unused harmony export CharacterSkillMelee */
/* unused harmony export CharacterSkillRanged */
/* unused harmony export CharacterSkillShield */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__character_stat__ = __webpack_require__("./src/app/models/character-stat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character_charactertistic__ = __webpack_require__("./src/app/models/character-charactertistic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__character_attribute__ = __webpack_require__("./src/app/models/character-attribute.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combat_art__ = __webpack_require__("./src/app/models/combat-art.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equipment_equipment__ = __webpack_require__("./src/app/models/equipment/equipment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipment_melee_weapon__ = __webpack_require__("./src/app/models/equipment/melee-weapon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animal__ = __webpack_require__("./src/app/models/animal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__character_skill__ = __webpack_require__("./src/app/models/character-skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__magic__ = __webpack_require__("./src/app/models/magic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact__ = __webpack_require__("./src/app/models/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__immutable_wrapper__ = __webpack_require__("./src/app/models/immutable-wrapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__damage_columns__ = __webpack_require__("./src/app/models/damage-columns.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__ = __webpack_require__("./src/app/util/serialize-context-refs.ts");
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














var CharacterSkillItem = /** @class */ (function () {
    function CharacterSkillItem() {
        this.skill = null;
        this.item = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_12_serializr__["f" /* serializable */],
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__immutable_wrapper__["a" /* Wrapper */])
    ], CharacterSkillItem.prototype, "skill", void 0);
    return CharacterSkillItem;
}());

var CharacterSkillMelee = /** @class */ (function (_super) {
    __extends(CharacterSkillMelee, _super);
    function CharacterSkillMelee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CharacterSkillMelee;
}(CharacterSkillItem));

Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(CharacterSkillMelee, { item: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["g" /* MeleeWeapon */]) });
var CharacterSkillRanged = /** @class */ (function (_super) {
    __extends(CharacterSkillRanged, _super);
    function CharacterSkillRanged() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CharacterSkillRanged;
}(CharacterSkillItem));

Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(CharacterSkillRanged, { item: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["h" /* RangedWeapon */]) });
var CharacterSkillShield = /** @class */ (function (_super) {
    __extends(CharacterSkillShield, _super);
    function CharacterSkillShield() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CharacterSkillShield;
}(CharacterSkillItem));

Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(CharacterSkillShield, { item: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["i" /* Shield */]) });
var Insensitivity = /** @class */ (function () {
    function Insensitivity() {
        this.value = 0;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_12_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Insensitivity.prototype, "value", void 0);
    return Insensitivity;
}());
Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(Insensitivity, {
    value: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])()
});
var Insensitivities = /** @class */ (function () {
    function Insensitivities() {
        this.exposure = new Insensitivity();
        this.violence = new Insensitivity();
        this.supernatural = new Insensitivity();
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_12_serializr__["f" /* serializable */],
        __metadata("design:type", Insensitivity)
    ], Insensitivities.prototype, "exposure", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_12_serializr__["f" /* serializable */],
        __metadata("design:type", Insensitivity)
    ], Insensitivities.prototype, "violence", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_12_serializr__["f" /* serializable */],
        __metadata("design:type", Insensitivity)
    ], Insensitivities.prototype, "supernatural", void 0);
    return Insensitivities;
}());
Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(Insensitivities, {
    exposure: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(Insensitivity),
    violence: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(Insensitivity),
    supernatural: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(Insensitivity)
});
var CharacterCharacteristics = /** @class */ (function () {
    function CharacterCharacteristics() {
        this.loyalty = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.honor = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.lust = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.aggression = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.faith = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.generosity = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.reputation = new __WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]();
        this.primary = new __WEBPACK_IMPORTED_MODULE_1__character_charactertistic__["a" /* CharacterCharacteristic */]();
        this.secondary = new __WEBPACK_IMPORTED_MODULE_1__character_charactertistic__["a" /* CharacterCharacteristic */]();
    }
    return CharacterCharacteristics;
}());
Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(CharacterCharacteristics, {
    loyalty: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    honor: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    lust: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    aggression: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    faith: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    generosity: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    reputation: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_0__character_stat__["a" /* CharacterStat */]),
    primary: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_1__character_charactertistic__["a" /* CharacterCharacteristic */]),
    secondary: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_1__character_charactertistic__["a" /* CharacterCharacteristic */])
});
var InferedAttributes = /** @class */ (function () {
    function InferedAttributes() {
    }
    return InferedAttributes;
}());
Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(InferedAttributes, {
    speed: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    initiative: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    insight: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    chockValue: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    carryingCapacity: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */])
});
var InferedBaseSkills = /** @class */ (function () {
    function InferedBaseSkills() {
    }
    return InferedBaseSkills;
}());
Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(InferedBaseSkills, {
    constitution: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    dexterity: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    intelligence: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    education: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    charismaIntelligence: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    dexterityIntelligence: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    sightIntelligence: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */]),
    nativeLanguage: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */])
});
var BaseSkills = /** @class */ (function () {
    function BaseSkills() {
    }
    return BaseSkills;
}());
Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(BaseSkills, {
    storyTelling: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    dance: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    sleightOfHand: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    fishing: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    seduction: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    interogate: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    jest: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    hide: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    trade: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    jump: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    throw: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    climb: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    driveWagon: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    leadership: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    marsch: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    cooking: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    occultism: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    ride: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    sing: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    ski: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    acting: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    brawl: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    sneak: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    scout: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    gambling: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    tracking: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    drinking: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    search: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    educate: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    avoid: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    appraise: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    survival: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */]),
    persuade: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */])
});
var Family = /** @class */ (function () {
    function Family() {
        this.mother = null;
        this.father = null;
        this.others = [];
    }
    return Family;
}());
Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(Family, {
    mother: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    father: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    others: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_10__immutable_wrapper__["a" /* Wrapper */]))
});
var Equipment = /** @class */ (function () {
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
Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(Equipment, {
    meleeWeapons: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(CharacterSkillMelee)),
    rangedWeapons: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(CharacterSkillRanged)),
    shields: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(CharacterSkillShield)),
    armor: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["a" /* Armor */])),
    itemsCarried: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["d" /* Item */])),
    itemsStorage: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["f" /* ItemStorage */])),
    luggage: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["d" /* Item */])),
    coins: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["b" /* Coins */])),
    coinsStorage: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["c" /* CoinsStorage */]))
});
var CharacterObject = /** @class */ (function () {
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
        this.attributes = new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["b" /* CharacterAttributes */]();
        this.characteristics = new CharacterCharacteristics();
        this.specialAbilities = new Array();
        this.baseDamage = new __WEBPACK_IMPORTED_MODULE_5__equipment_melee_weapon__["a" /* MeleeDamage */]();
        this.exhaustion = new __WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]();
        this.trauma = new __WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]();
        this.pain = new __WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]();
        this.bleeding = new __WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]();
        this.bloodLoss = new __WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]();
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
        this.rations = new __WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["e" /* ItemStack */]();
        this.insensitivities = new Insensitivities();
        this.focus = 10;
        this.wellBeing = 10;
        var self = this;
        this.inferedAttributes = {
            speed: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            initiative: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            insight: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            chockValue: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            carryingCapacity: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes)
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
            constitution: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            dexterity: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            intelligence: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            education: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            charismaIntelligence: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            dexterityIntelligence: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            sightIntelligence: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes),
            nativeLanguage: new __WEBPACK_IMPORTED_MODULE_2__character_attribute__["c" /* CharacterInferedAttribute */](this.attributes)
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
            storyTelling: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            dance: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterityIntelligence),
            sleightOfHand: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            fishing: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            seduction: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            interogate: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            jest: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterityIntelligence),
            hide: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterityIntelligence),
            trade: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            jump: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            throw: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            climb: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            driveWagon: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            leadership: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            marsch: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.constitution),
            cooking: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            occultism: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.education),
            ride: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            sing: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            ski: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            acting: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence),
            brawl: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            sneak: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            scout: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.sightIntelligence),
            gambling: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            tracking: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.sightIntelligence),
            drinking: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.constitution),
            search: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.sightIntelligence),
            educate: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            avoid: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.dexterity),
            appraise: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.education),
            survival: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.intelligence),
            persuade: new __WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */](this.inferedBaseSkills.charismaIntelligence)
        };
    }
    CharacterObject.prototype.serialize = function () {
        return CircularJSON.stringify(this); //serialize(this)
    };
    Object.defineProperty(CharacterObject.prototype, "insensitivityThresholds", {
        get: function () {
            return CharacterObject._insensitivityThresholds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterObject.prototype, "maxInsensitivitylevel", {
        get: function () {
            return CharacterObject.maxInsensitivitylevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterObject.prototype, "maxWellBeingArray", {
        get: function () {
            return CharacterObject._maxWellBeingArray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterObject.prototype, "maxWellBeing", {
        get: function () {
            return CharacterObject.maxWellBeing;
        },
        enumerable: true,
        configurable: true
    });
    CharacterObject.deserialize = function (json) {
        var character = Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["b" /* deserialize */])(CharacterObject, CircularJSON.parse(json));
        return character;
    };
    CharacterObject.insentivityStep = 5;
    CharacterObject.maxInsensitivitylevel = 5;
    CharacterObject._insensitivityThresholds = [5, 10, 15, 20, 25]; //Array<number>(CharacterObject.maxInsensitivitylevel).map((i, j)=> {console.log(j); return j*CharacterObject.insentivityStep});
    CharacterObject.maxWellBeing = 10;
    CharacterObject._maxWellBeingArray = Array(CharacterObject.maxWellBeing);
    CharacterObject.DefaultValuesStatic = {
        luck: 11,
        reputation: 5
    };
    return CharacterObject;
}());

Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["a" /* createModelSchema */])(CharacterObject, {
    player: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    gameMaster: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    name: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    profession: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    race: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    gender: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    age: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    height: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    weight: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    body: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    homestead: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    religion: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    focus: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    wellBeing: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    handDominance: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["e" /* primitive */])(),
    attributes: Object(__WEBPACK_IMPORTED_MODULE_13__util_serialize_context_refs__["a" /* myObject */])(__WEBPACK_IMPORTED_MODULE_2__character_attribute__["b" /* CharacterAttributes */]),
    characteristics: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(CharacterCharacteristics),
    specialAbilities: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_10__immutable_wrapper__["a" /* Wrapper */])),
    baseDamage: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_5__equipment_melee_weapon__["a" /* MeleeDamage */]),
    exhaustion: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]),
    trauma: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]),
    pain: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]),
    bleeding: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]),
    bloodLoss: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_11__damage_columns__["a" /* DamageColumns */]),
    inferedAttributes: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(InferedAttributes),
    inferedBaseSkills: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(InferedBaseSkills),
    skills: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(BaseSkills),
    languageSkills: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */])),
    scriptSkills: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */])),
    miscellaneousSkills: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_7__character_skill__["a" /* CharacterSkill */])),
    combatArts: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_3__combat_art__["a" /* CombatArt */])),
    miscellaneous: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_10__immutable_wrapper__["a" /* Wrapper */])),
    magic: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_8__magic__["a" /* Magic */])),
    contacts: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_9__contact__["a" /* Contact */])),
    family: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(Family),
    animals: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_6__animal__["a" /* Animal */])),
    equipment: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(Equipment),
    rations: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_4__equipment_equipment__["e" /* ItemStack */]),
    insensitivities: Object(__WEBPACK_IMPORTED_MODULE_12_serializr__["d" /* object */])(Insensitivities)
});


/***/ }),

/***/ "./src/app/models/combat-art.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CombatArtTechnique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CombatArtMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatArt; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CombatArtTechnique = /** @class */ (function () {
    function CombatArtTechnique() {
        this.name = null;
        this.description = null;
        this.cost = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CombatArtTechnique.prototype, "name", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CombatArtTechnique.prototype, "description", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], CombatArtTechnique.prototype, "cost", void 0);
    return CombatArtTechnique;
}());

var CombatArtMoment = /** @class */ (function () {
    function CombatArtMoment() {
        this.name = null;
        this.difficulty = null;
        this.relation = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CombatArtMoment.prototype, "name", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CombatArtMoment.prototype, "difficulty", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CombatArtMoment.prototype, "relation", void 0);
    return CombatArtMoment;
}());

var CombatArt = /** @class */ (function () {
    function CombatArt() {
        this.name = null;
        this.value = null;
        this.moments = new Array();
        this.techniques = new Array();
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CombatArt.prototype, "name", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], CombatArt.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CombatArtMoment))),
        __metadata("design:type", Array)
    ], CombatArt.prototype, "moments", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(CombatArtTechnique))),
        __metadata("design:type", Array)
    ], CombatArt.prototype, "techniques", void 0);
    return CombatArt;
}());



/***/ }),

/***/ "./src/app/models/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Contact = /** @class */ (function () {
    function Contact() {
        this.name = null;
        this.profession = null;
        this.relation = null;
        this.resources = null;
        this.description = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Contact.prototype, "name", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Contact.prototype, "profession", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Contact.prototype, "relation", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Contact.prototype, "resources", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Contact.prototype, "description", void 0);
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/damage-columns.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageColumns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DamageColumns = /** @class */ (function () {
    function DamageColumns() {
        this.damageSever = 0;
        this.damage = 0;
        this.columns = 10;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], DamageColumns.prototype, "damageSever", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], DamageColumns.prototype, "damage", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], DamageColumns.prototype, "columns", void 0);
    return DamageColumns;
}());



/***/ }),

/***/ "./src/app/models/equipment/armor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Armor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("./src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
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


var Protection = /** @class */ (function () {
    function Protection() {
        this.slash = null;
        this.crush = null;
        this.pierce = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Protection.prototype, "slash", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Protection.prototype, "crush", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Protection.prototype, "pierce", void 0);
    return Protection;
}());
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.areas = null;
        _this.resistance = new Protection();
        _this.durability = null;
        return _this;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Armor.prototype, "areas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["d" /* object */])(Protection)),
        __metadata("design:type", Protection)
    ], Armor.prototype, "resistance", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Armor.prototype, "durability", void 0);
    return Armor;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));



/***/ }),

/***/ "./src/app/models/equipment/coins.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CoinsStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_stack__ = __webpack_require__("./src/app/models/equipment/item-stack.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
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


var Coins = /** @class */ (function (_super) {
    __extends(Coins, _super);
    function Coins() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.worth = null;
        return _this;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Coins.prototype, "worth", void 0);
    return Coins;
}(__WEBPACK_IMPORTED_MODULE_0__item_stack__["a" /* ItemStack */]));

var CoinsStorage = /** @class */ (function (_super) {
    __extends(CoinsStorage, _super);
    function CoinsStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.location = null;
        return _this;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], CoinsStorage.prototype, "location", void 0);
    return CoinsStorage;
}(Coins));



/***/ }),

/***/ "./src/app/models/equipment/equipment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("./src/app/models/equipment/item.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__item__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__item__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_stack__ = __webpack_require__("./src/app/models/equipment/item-stack.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__item_stack__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coins__ = __webpack_require__("./src/app/models/equipment/coins.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__coins__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__coins__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__melee_weapon__ = __webpack_require__("./src/app/models/equipment/melee-weapon.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__melee_weapon__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ranged_weapon__ = __webpack_require__("./src/app/models/equipment/ranged-weapon.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__ranged_weapon__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shield__ = __webpack_require__("./src/app/models/equipment/shield.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_5__shield__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__armor__ = __webpack_require__("./src/app/models/equipment/armor.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__armor__["a"]; });









/***/ }),

/***/ "./src/app/models/equipment/item-stack.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemStack; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("./src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
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


var ItemStack = /** @class */ (function (_super) {
    __extends(ItemStack, _super);
    function ItemStack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = null;
        return _this;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], ItemStack.prototype, "count", void 0);
    return ItemStack;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));



/***/ }),

/***/ "./src/app/models/equipment/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ItemStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
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

var Item = /** @class */ (function () {
    function Item() {
        this.weight = null;
        this.name = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Item.prototype, "weight", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Item.prototype, "name", void 0);
    return Item;
}());

var ItemStorage = /** @class */ (function (_super) {
    __extends(ItemStorage, _super);
    function ItemStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.location = null;
        return _this;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], ItemStorage.prototype, "location", void 0);
    return ItemStorage;
}(Item));



/***/ }),

/***/ "./src/app/models/equipment/melee-weapon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeleeDamage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SpeedIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MeleeWeapon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("./src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
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


var MeleeDamage = /** @class */ (function () {
    function MeleeDamage() {
        this.slash = null;
        this.crush = null;
        this.pierce = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], MeleeDamage.prototype, "slash", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], MeleeDamage.prototype, "crush", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], MeleeDamage.prototype, "pierce", void 0);
    return MeleeDamage;
}());

var SpeedIndex = /** @class */ (function () {
    function SpeedIndex() {
        this.opening = null;
        this.engaged = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], SpeedIndex.prototype, "opening", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], SpeedIndex.prototype, "engaged", void 0);
    return SpeedIndex;
}());

var MeleeWeapon = /** @class */ (function (_super) {
    __extends(MeleeWeapon, _super);
    function MeleeWeapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.grip = null;
        _this.damage = new MeleeDamage();
        _this.durability = null;
        _this.speedIndex = new SpeedIndex();
        return _this;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], MeleeWeapon.prototype, "grip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["d" /* object */])(MeleeDamage)),
        __metadata("design:type", MeleeDamage)
    ], MeleeWeapon.prototype, "damage", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], MeleeWeapon.prototype, "durability", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["d" /* object */])(SpeedIndex)),
        __metadata("design:type", SpeedIndex)
    ], MeleeWeapon.prototype, "speedIndex", void 0);
    return MeleeWeapon;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));



/***/ }),

/***/ "./src/app/models/equipment/ranged-weapon.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RangedDamage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RangedWeapon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("./src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
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


var RangedDamage = /** @class */ (function () {
    function RangedDamage() {
        this.short = null;
        this.normal = null;
        this.far = null;
        this.veryFar = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], RangedDamage.prototype, "short", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], RangedDamage.prototype, "normal", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], RangedDamage.prototype, "far", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], RangedDamage.prototype, "veryFar", void 0);
    return RangedDamage;
}());

var Quiver = /** @class */ (function () {
    function Quiver() {
        this.shots = null;
        this.size = null;
        this.shots = 0;
        this.size = 12;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Quiver.prototype, "shots", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Quiver.prototype, "size", void 0);
    return Quiver;
}());

var RangedWeapon = /** @class */ (function (_super) {
    __extends(RangedWeapon, _super);
    function RangedWeapon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.range = null;
        _this.quiverWeight = null;
        _this.quivers = new Array();
        _this.damage = new RangedDamage();
        return _this;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], RangedWeapon.prototype, "range", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], RangedWeapon.prototype, "quiverWeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["c" /* list */])(Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["d" /* object */])(Quiver))),
        __metadata("design:type", Array)
    ], RangedWeapon.prototype, "quivers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_1_serializr__["d" /* object */])(RangedDamage)),
        __metadata("design:type", RangedDamage)
    ], RangedWeapon.prototype, "damage", void 0);
    return RangedWeapon;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));



/***/ }),

/***/ "./src/app/models/equipment/shield.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shield; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__("./src/app/models/equipment/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__melee_weapon__ = __webpack_require__("./src/app/models/equipment/melee-weapon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
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



var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.damage = null;
        _this.durability = null;
        _this.speedIndex = new __WEBPACK_IMPORTED_MODULE_1__melee_weapon__["c" /* SpeedIndex */]();
        _this.passiveProtection = null;
        return _this;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Shield.prototype, "damage", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Shield.prototype, "durability", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */])(Object(__WEBPACK_IMPORTED_MODULE_2_serializr__["d" /* object */])(__WEBPACK_IMPORTED_MODULE_1__melee_weapon__["c" /* SpeedIndex */])),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__melee_weapon__["c" /* SpeedIndex */])
    ], Shield.prototype, "speedIndex", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_2_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Shield.prototype, "passiveProtection", void 0);
    return Shield;
}(__WEBPACK_IMPORTED_MODULE_0__item__["a" /* Item */]));



/***/ }),

/***/ "./src/app/models/immutable-wrapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Wrapper = /** @class */ (function () {
    function Wrapper() {
        this.value = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Object)
    ], Wrapper.prototype, "value", void 0);
    return Wrapper;
}());



/***/ }),

/***/ "./src/app/models/localization.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizationObject; });
var LocalizationObject = /** @class */ (function () {
    function LocalizationObject() {
    }
    return LocalizationObject;
}());



/***/ }),

/***/ "./src/app/models/magic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Magic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Magic = /** @class */ (function () {
    function Magic() {
        this.magnitude = null;
        this.description = null;
        this.time = null;
        this.duration = null;
        this.reach = null;
        this.name = null;
    }
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", Number)
    ], Magic.prototype, "magnitude", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Magic.prototype, "description", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Magic.prototype, "time", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Magic.prototype, "duration", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Magic.prototype, "reach", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_serializr__["f" /* serializable */],
        __metadata("design:type", String)
    ], Magic.prototype, "name", void 0);
    return Magic;
}());



/***/ }),

/***/ "./src/app/page1/armor.component.html":
/***/ (function(module, exports) {

module.exports = "<td>\r\n    <input-base [(value)]=\"item.name\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.areas\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.resistance.slash\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.resistance.crush\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.resistance.pierce\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.durability\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.weight\" type=\"number\"></input-base>\r\n</td>\r\n"

/***/ }),

/***/ "./src/app/page1/armor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_component__ = __webpack_require__("./src/app/page1/item.component.ts");
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


var ArmorComponent = /** @class */ (function (_super) {
    __extends(ArmorComponent, _super);
    function ArmorComponent(_el, _re) {
        return _super.call(this, _el, _re) || this;
    }
    ArmorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tr[armor]',
            template: __webpack_require__("./src/app/page1/armor.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ArmorComponent);
    return ArmorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__item_component__["a" /* ItemComponent */]));



/***/ }),

/***/ "./src/app/page1/damage-grid.component.css":
/***/ (function(module, exports) {

module.exports = ".cell {\r\n    display: table-cell;\r\n    width: 16px;\r\n    height: 16px;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.component{\r\n    display:table;\r\n}\r\n\r\n.section{\r\n    display: table-row;\r\n}\r\n\r\n.label, .grid{\r\n    vertical-align: middle;\r\n    display: table-cell;\r\n}\r\n\r\n.label{\r\n    padding-right: 8px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.cell:before, .cell:after{\r\n    position: relative;\r\n    display: inline-block;\r\n    font-family: 'eon-3';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    background-color: white;\r\n}\r\n\r\n.cell.circle:before{\r\n    border-radius: 50%;\r\n     content: \"\\e902\";\r\n}\r\n\r\n.cell.circle.fill:before{\r\n     content: \"\\e903\";\r\n}\r\n\r\n.cell.circle.dash:before{\r\n     content: \"\\e901\";\r\n}\r\n\r\n.cell.circle.stroke:before{\r\n     content: \"\\e905\";\r\n}\r\n\r\n.cell.square:before{\r\n     content: \"\\e907\";\r\n}\r\n\r\n.cell.square.fill:before{\r\n     content: \"\\e908\";\r\n}\r\n\r\n.cell.square.dash:before{\r\n     content: \"\\e906\";\r\n}\r\n\r\n@media print{\r\n    .cell, .cell:before, .cell:after{\r\n        font-size: 0.26cm;\r\n    }\r\n    .cell {\r\n        width: 0.26cm;\r\n        height: 0.26cm;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/page1/damage-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div aligned selector=\".label\">-->\r\n<div>\r\n    <div class=\"hover-menu\" aligned>\r\n        <div style=\"display:flex\">\r\n            <label>{{header}}</label>\r\n            <increment-decrement-menu [(value)]=\"damageColumns.damage\" min=\"0\"></increment-decrement-menu>\r\n        </div>\r\n        <div style=\"display:flex\" *ngIf=\"severDamageName !== null\">\r\n            <label>{{severDamageName}}</label>\r\n            <increment-decrement-menu [(value)]=\"damageColumns.damageSever\" min=\"0\"></increment-decrement-menu>\r\n        </div>\r\n        <div style=\"display:flex\">\r\n            <label i18n=\"@@columns\">Kolumner</label>\r\n            <increment-decrement-menu [(value)]=\"damageColumns.columns\" min=\"1\" [max]=\"columns\"></increment-decrement-menu>\r\n        </div>\r\n    </div>\r\n    <div class=\"component\">\r\n        <div class=\"section\">\r\n            <div class=\"label\" *ngIf=\"!labelsRight\">\r\n                <ng-container *ngTemplateOutlet=\"labelHeaderTemplate;\"></ng-container>\r\n            </div>\r\n            <div class=\"grid\">\r\n                    <h3>{{header}}</h3>\r\n            </div>\r\n            <div class=\"label\" *ngIf=\"labelsRight\">\r\n                <ng-container *ngTemplateOutlet=\"labelHeaderTemplate;\"></ng-container>\r\n            </div>\r\n        </div>\r\n        <div class=\"section\" *ngFor=\"let row of rowsArray;let r = index\" style=\"line-height:0px\">\r\n            <div class=\"label\" *ngIf=\"!labelsRight\">\r\n                <ng-container *ngTemplateOutlet=\"labelTemplate; context: {row: row}\"></ng-container>\r\n            </div>\r\n            <div class=\"grid\">\r\n                <span class=\"cell\" [ngClass]=\"getCellClass(r,c)\" *ngFor=\"let column of columnsArray;let c = index\"></span>\r\n            </div>\r\n            <div class=\"label\" *ngIf=\"labelsRight\">\r\n                <ng-container *ngTemplateOutlet=\"labelTemplate; context: {row: row}\"></ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page1/damage-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_damage_columns__ = __webpack_require__("./src/app/models/damage-columns.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DamageGridComponent = /** @class */ (function () {
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
    DamageGridComponent_1 = DamageGridComponent;
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
    DamageGridComponent.ValidTypes = ['circle', 'square'];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_damage_columns__["a" /* DamageColumns */])
    ], DamageGridComponent.prototype, "damageColumns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DamageGridComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DamageGridComponent.prototype, "severDamageName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DamageGridComponent.prototype, "labelsRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])("label"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DamageGridComponent.prototype, "labelTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])("labelHeader"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], DamageGridComponent.prototype, "labelHeaderTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DamageGridComponent.prototype, "type", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DamageGridComponent.prototype, "columns", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DamageGridComponent.prototype, "columnsArrayChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DamageGridComponent.prototype, "rows", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DamageGridComponent.prototype, "rowsArrayChange", void 0);
    DamageGridComponent = DamageGridComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'damage-grid',
            template: __webpack_require__("./src/app/page1/damage-grid.component.html"),
            styles: [__webpack_require__("./src/app/page1/damage-grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], DamageGridComponent);
    return DamageGridComponent;
    var DamageGridComponent_1;
}());



/***/ }),

/***/ "./src/app/page1/item-skill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemSkillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("./src/app/models/character.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemSkillComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ItemSkillComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */])
    ], ItemSkillComponent.prototype, "character", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ItemSkillComponent.prototype, "skill", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ItemSkillComponent.prototype, "skillChange", void 0);
    return ItemSkillComponent;
}());



/***/ }),

/***/ "./src/app/page1/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("./src/app/models/character.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = /** @class */ (function () {
    function ItemComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ItemComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */])
    ], ItemComponent.prototype, "character", void 0);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/page1/melee-weapon.component.html":
/***/ (function(module, exports) {

module.exports = "<td>\r\n    <input-base [(value)]=\"item.name\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"skill\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.grip\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.slash\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.crush\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.pierce\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.durability\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <speed-index \r\n                [(value1)]=\"item.speedIndex.opening\" \r\n                [(value2)]=\"item.speedIndex.engaged\" \r\n                [character]=\"character\"></speed-index>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.weight\" type=\"number\"></input-base>\r\n</td>"

/***/ }),

/***/ "./src/app/page1/melee-weapon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeleeWeaponComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_skill_component__ = __webpack_require__("./src/app/page1/item-skill.component.ts");
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


var MeleeWeaponComponent = /** @class */ (function (_super) {
    __extends(MeleeWeaponComponent, _super);
    function MeleeWeaponComponent(_el, _re) {
        return _super.call(this, _el, _re) || this;
    }
    MeleeWeaponComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tr[melee-weapon]',
            template: __webpack_require__("./src/app/page1/melee-weapon.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], MeleeWeaponComponent);
    return MeleeWeaponComponent;
}(__WEBPACK_IMPORTED_MODULE_1__item_skill_component__["a" /* ItemSkillComponent */]));



/***/ }),

/***/ "./src/app/page1/ranged-weapon.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"rTableRow\">\r\n    <div class=\"rTableCell\"><input-base [(value)]=\"item.name\" type=\"text\"></input-base></div>\r\n    <div class=\"rTableCell\"><input-base [(value)]=\"skill\" type=\"number\"></input-base></div>\r\n    <div class=\"rTableCell\"><input-base [(value)]=\"item.range\" type=\"text\"></input-base></div>\r\n    <div class=\"rTableCell\"><input-group prefix=\"Ob\" [(value)]=\"item.damage.short\" type=\"text\"></input-group></div>\r\n    <div class=\"rTableCell\"><input-group prefix=\"Ob\" [(value)]=\"item.damage.normal\" type=\"text\"></input-group></div>\r\n    <div class=\"rTableCell\"><input-group prefix=\"Ob\" [(value)]=\"item.damage.far\" type=\"text\"></input-group></div>\r\n    <div class=\"rTableCell\"><input-group prefix=\"Ob\" [(value)]=\"item.damage.veryFar\" type=\"text\"></input-group></div>\r\n    <div class=\"rTableCell\"><input-base [(value)]=\"item.weight\" type=\"number\"></input-base></div>\r\n</div>\r\n    <div class=\"rTableRow\" ng-if=\"item.quivers.length > 0\"> \r\n    <span i18n=\"@@shots\" style=\"margin-right: 10px\">Skott</span>\r\n    <div style=\"display:inline-block\">\r\n        <div *ngFor=\"let quiver of item.quivers\" style=\"display:inline-block;margin-right:20px\">\r\n            <span *ngFor=\"let q of quiver.size | arrayConstructor; let i = index\">\r\n                <input-box [checked]=\"i < quiver.shots\" type=\"circle\" fill=\"solid\" (click)=\"quiver.shots == i + 1 ? quiver.shots = quiver.shots - 1 : quiver.shots = i + 1\"></input-box>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n-->\r\n<tr>\r\n<td>\r\n    <div>\r\n    <add-remove-menu class=\"hover-menu\" [(array)]=\"item.quivers\" min=\"0\" [default]=\"newQuiver\"></add-remove-menu>\r\n    <input-base [(value)]=\"item.name\" type=\"text\"></input-base>\r\n    </div>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"skill\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.range\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.short\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.normal\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.far\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage.veryFar\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.weight\" type=\"number\"></input-base>\r\n</td>\r\n</tr>\r\n<tr *ngIf=\"item.quivers.length > 0\">\r\n    <td>\r\n        <span i18n=\"@@shots\" style=\"margin-right: 10px\">Skott</span>\r\n    </td>\r\n    <td colspan=6>\r\n                <div *ngFor=\"let quiver of item.quivers\" style=\"display:inline-block;margin-right:20px\">\r\n                    <span *ngFor=\"let q of quiver.size | arrayConstructor; let i = index\" style=\"display: inline-block\">\r\n                        <input-box [checked]=\"i < quiver.shots\" type=\"circle\" fill=\"solid\" (click)=\"quiver.shots == i + 1 ? quiver.shots = quiver.shots - 1 : quiver.shots = i + 1\"></input-box>\r\n                    </span>\r\n                </div>\r\n    </td>\r\n    <td>\r\n        <input-base [(value)]=\"item.quiverWeight\" type=\"number\"></input-base>\r\n    </td>\r\n</tr>"

/***/ }),

/***/ "./src/app/page1/ranged-weapon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangedWeaponComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_equipment_ranged_weapon__ = __webpack_require__("./src/app/models/equipment/ranged-weapon.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_skill_component__ = __webpack_require__("./src/app/page1/item-skill.component.ts");
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



var RangedWeaponComponent = /** @class */ (function (_super) {
    __extends(RangedWeaponComponent, _super);
    function RangedWeaponComponent(_el, _re) {
        return _super.call(this, _el, _re) || this;
    }
    RangedWeaponComponent.prototype.newQuiver = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__models_equipment_ranged_weapon__["a" /* Quiver */]();
    };
    RangedWeaponComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tbody[ranged-weapon]',
            template: __webpack_require__("./src/app/page1/ranged-weapon.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], RangedWeaponComponent);
    return RangedWeaponComponent;
}(__WEBPACK_IMPORTED_MODULE_2__item_skill_component__["a" /* ItemSkillComponent */]));



/***/ }),

/***/ "./src/app/page1/shield.component.html":
/***/ (function(module, exports) {

module.exports = "<td>\r\n    <input-base [(value)]=\"item.name\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"skill\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.passiveProtection\" type=\"text\"></input-base>\r\n</td>\r\n<td>\r\n    <input-group prefix=\"Ob\" [(value)]=\"item.damage\" type=\"text\"></input-group>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.durability\" type=\"number\"></input-base>\r\n</td>\r\n<td>\r\n    <speed-index [(value1)]=\"item.speedIndex.opening\" [(value2)]=\"item.speedIndex.engaged\" [character]=\"character\"></speed-index>\r\n</td>\r\n<td>\r\n    <input-base [(value)]=\"item.weight\" type=\"number\"></input-base>\r\n</td>\r\n"

/***/ }),

/***/ "./src/app/page1/shield.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_skill_component__ = __webpack_require__("./src/app/page1/item-skill.component.ts");
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


var ShieldComponent = /** @class */ (function (_super) {
    __extends(ShieldComponent, _super);
    function ShieldComponent(_el, _re) {
        return _super.call(this, _el, _re) || this;
    }
    ShieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tr[shield]',
            template: __webpack_require__("./src/app/page1/shield.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ShieldComponent);
    return ShieldComponent;
}(__WEBPACK_IMPORTED_MODULE_1__item_skill_component__["a" /* ItemSkillComponent */]));



/***/ }),

/***/ "./src/app/page1/speed-index.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=\"number\"].form-control:first-child{\r\n    margin-right: 0px;\r\n}\r\n\r\ninput[type=\"number\"].form-control:last-child{\r\n    margin-left: 0px;\r\n}\r\n\r\ninput[type=\"number\"]{\r\n    width: 40px;\r\n}\r\n\r\n@media print{\r\ninput[type=\"number\"]{\r\n    width: 0.6cm;\r\n}\r\n}"

/***/ }),

/***/ "./src/app/page1/speed-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-input\">\r\n    <div class=\"input-group\" style=\"flex-wrap:nowrap\">\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"value1Sum\" style=\"border-right:1px solid black\" step=\"any\"/>\r\n        <!--<span class=\"input-group-addon\">/</span>-->\r\n        <input class=\"form-control\" type=\"number\" [(ngModel)]=\"value2Sum\" step=\"any\"/>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page1/speed-index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeedIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character__ = __webpack_require__("./src/app/models/character.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeedIndexComponent = /** @class */ (function () {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_character__["a" /* CharacterObject */])
    ], SpeedIndexComponent.prototype, "character", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SpeedIndexComponent.prototype, "value1", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SpeedIndexComponent.prototype, "value1Change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SpeedIndexComponent.prototype, "value2", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SpeedIndexComponent.prototype, "value2Change", void 0);
    SpeedIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'speed-index',
            template: __webpack_require__("./src/app/page1/speed-index.component.html"),
            styles: [__webpack_require__("./src/app/input-group.component.css"), __webpack_require__("./src/app/form-input.component.css"), __webpack_require__("./src/app/input-base.component.css"), __webpack_require__("./src/app/page1/speed-index.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], SpeedIndexComponent);
    return SpeedIndexComponent;
}());



/***/ }),

/***/ "./src/app/page2/combat-art.component.css":
/***/ (function(module, exports) {

module.exports = "div{\r\n    position: relative;\r\n}"

/***/ }),

/***/ "./src/app/page2/combat-art.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div style=\"display:flex;justify-content: space-between\">\r\n        <form-input i18n-label=\"@@combatArt\" label=\"Stridskonst\" [(value)]=\"combatArt.name\"></form-input>\r\n        <form-input i18n-label=\"@@value\" label=\"Värde\" [(value)]=\"combatArt.value\" type=\"number\"></form-input>\r\n    </div>\r\n    <div>\r\n        <add-remove-menu class=\"hover-menu\" [(array)]=\"combatArt.moments\" min=\"1\" [default]=\"newMoment\"></add-remove-menu>\r\n        <table class=\"table\">\r\n            <thead>\r\n                <th i18n=\"@@moment\">Moment</th>\r\n                <th i18n=\"@@difficulty\">Svårighet</th>\r\n                <th i18n=\"@@related\">Besläktning</th>\r\n            </thead>\r\n            <tbody [sortablejs]=\"combatArt.moments\">\r\n                <tr *ngFor=\"let moment of combatArt.moments\">\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"moment.name\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"moment.difficulty\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"moment.related\"></input-base>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div>\r\n        <add-remove-menu class=\"hover-menu\" [(array)]=\"combatArt.techniques\" min=\"1\" [default]=\"newTechnique\"></add-remove-menu>\r\n        <table class=\"table\">\r\n            <thead>\r\n                <th i18n=\"@@technique\">Teknik</th>\r\n                <th i18n=\"@@kk\">KK</th>\r\n                <th i18n=\"@@description\">Beskrivning</th>\r\n            </thead>\r\n            <tbody [sortablejs]=\"combatArt.techniques\">\r\n                <tr *ngFor=\"let technique of combatArt.techniques\">\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"technique.name\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                        <input-base type=\"number\" [(value)]=\"technique.cost\"></input-base>\r\n                    </td>\r\n                    <td>\r\n                        <input-base type=\"text\" [(value)]=\"technique.description\"></input-base>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page2/combat-art.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatArtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_combat_art__ = __webpack_require__("./src/app/models/combat-art.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CombatArtComponent = /** @class */ (function () {
    function CombatArtComponent() {
    }
    CombatArtComponent.prototype.newTechnique = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__models_combat_art__["c" /* CombatArtTechnique */]();
    };
    CombatArtComponent.prototype.newMoment = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__models_combat_art__["b" /* CombatArtMoment */]();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_combat_art__["a" /* CombatArt */])
    ], CombatArtComponent.prototype, "combatArt", void 0);
    CombatArtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'combat-art',
            template: __webpack_require__("./src/app/page2/combat-art.component.html"),
            styles: [__webpack_require__("./src/app/page2/combat-art.component.css")]
        })
    ], CombatArtComponent);
    return CombatArtComponent;
}());



/***/ }),

/***/ "./src/app/page3/rations-tracker.component.css":
/***/ (function(module, exports) {

module.exports = ".ration{\r\n    display: inline-block;\r\n}\r\n\r\n.ration:before, .ration:after{\r\n    position: relative;\r\n    display: inline-block;\r\n    font-family: 'eon-3';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    background-color: white;\r\n}\r\n\r\n.ration:before{\r\n    border-radius: 50%;\r\n     content: \"\\e902\";\r\n}\r\n\r\n.ration.fill:before{\r\n     content: \"\\e903\";\r\n}"

/***/ }),

/***/ "./src/app/page3/rations-tracker.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <increment-decrement-menu class=\"hover-menu\" [(value)]=\"item.count\" min=\"0\" [max]=\"maxRations\"></increment-decrement-menu>\r\n    <div style=\"display:flex; justify-content: space-between\">\r\n        <form-input i18n-label=\"@@rations\" label=\"Proviant\" [(value)]=\"item.name\"></form-input>\r\n        <form-input i18n-label=\"@@weightEach\" label=\"Vikt/st\" [(value)]=\"item.weight\" type=\"number\"></form-input>\r\n    </div>\r\n    <div style=\"display:flex; justify-content: space-between; flex-wrap: wrap\">\r\n        <label i18n=\"@@dailyRations\">Dagsransoner</label>\r\n        <span class=\"ration\" [ngClass]=\"{fill: i < item.count}\" *ngFor=\"let r of maxRationsArray; let i = index\"></span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/page3/rations-tracker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RationsTrackerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_equipment_item_stack__ = __webpack_require__("./src/app/models/equipment/item-stack.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RationsTrackerComponent = /** @class */ (function () {
    function RationsTrackerComponent(_el, _re) {
        this._el = _el;
        this._re = _re;
    }
    RationsTrackerComponent_1 = RationsTrackerComponent;
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
    RationsTrackerComponent.maxRations = 14;
    RationsTrackerComponent._maxRationsArray = Array(RationsTrackerComponent_1.maxRations);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_equipment_item_stack__["a" /* ItemStack */])
    ], RationsTrackerComponent.prototype, "item", void 0);
    RationsTrackerComponent = RationsTrackerComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'rations-tracker',
            template: __webpack_require__("./src/app/page3/rations-tracker.component.html"),
            styles: [__webpack_require__("./src/app/page3/rations-tracker.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], RationsTrackerComponent);
    return RationsTrackerComponent;
    var RationsTrackerComponent_1;
}());



/***/ }),

/***/ "./src/app/pipes/array-constructor.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayConstructor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrayConstructor = /** @class */ (function () {
    function ArrayConstructor() {
    }
    ArrayConstructor.prototype.transform = function (value, args) {
        var res = [];
        for (var i = 0; i < Math.floor(value); i++) {
            res.push(i);
        }
        return res;
    };
    ArrayConstructor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'arrayConstructor' })
    ], ArrayConstructor);
    return ArrayConstructor;
}());



/***/ }),

/***/ "./src/app/pipes/json-circular.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonCircularPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonCircularPipe = /** @class */ (function () {
    function JsonCircularPipe() {
    }
    JsonCircularPipe.prototype.transform = function (val) {
        return CircularJSON.stringify(val);
    };
    JsonCircularPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'jsoncircular'
        })
    ], JsonCircularPipe);
    return JsonCircularPipe;
}());



/***/ }),

/***/ "./src/app/util/character-creation-functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterCreationFunctions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_character__ = __webpack_require__("./src/app/models/character.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_character_attribute__ = __webpack_require__("./src/app/models/character-attribute.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_character_skill__ = __webpack_require__("./src/app/models/character-skill.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_combat_art__ = __webpack_require__("./src/app/models/combat-art.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_magic__ = __webpack_require__("./src/app/models/magic.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_contact__ = __webpack_require__("./src/app/models/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_animal__ = __webpack_require__("./src/app/models/animal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__ = __webpack_require__("./src/app/models/equipment/equipment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_immutable_wrapper__ = __webpack_require__("./src/app/models/immutable-wrapper.ts");









var CharacterCreationFunctions = /** @class */ (function () {
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
        character.characteristics.reputation.value = __WEBPACK_IMPORTED_MODULE_0__models_character__["a" /* CharacterObject */].DefaultValuesStatic.reputation;
        character.attributes.luck.value = __WEBPACK_IMPORTED_MODULE_0__models_character__["a" /* CharacterObject */].DefaultValuesStatic.luck;
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
        return new __WEBPACK_IMPORTED_MODULE_1__models_character_attribute__["a" /* CharacterAttribute */]();
    };
    CharacterCreationFunctions.prototype.newStringValue = function () {
        return new __WEBPACK_IMPORTED_MODULE_8__models_immutable_wrapper__["a" /* Wrapper */]();
    };
    CharacterCreationFunctions.prototype.newMeleeWeapon = function () {
        var weapon = new __WEBPACK_IMPORTED_MODULE_0__models_character__["b" /* CharacterSkillItem */]();
        weapon.item = new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["g" /* MeleeWeapon */]();
        return weapon;
    };
    CharacterCreationFunctions.prototype.newRangedWeapon = function () {
        var weapon = new __WEBPACK_IMPORTED_MODULE_0__models_character__["b" /* CharacterSkillItem */]();
        weapon.item = new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["h" /* RangedWeapon */]();
        return weapon;
    };
    CharacterCreationFunctions.prototype.newShield = function () {
        var shield = new __WEBPACK_IMPORTED_MODULE_0__models_character__["b" /* CharacterSkillItem */]();
        shield.item = new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["i" /* Shield */]();
        return shield;
    };
    CharacterCreationFunctions.prototype.newArmor = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["a" /* Armor */]();
    };
    CharacterCreationFunctions.prototype.newSkill = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__models_character_skill__["a" /* CharacterSkill */](null);
    };
    CharacterCreationFunctions.prototype.newCombatArtSkill = function () {
        var art = new __WEBPACK_IMPORTED_MODULE_3__models_combat_art__["a" /* CombatArt */]();
        for (var i = 0; i < 2; ++i) {
            art.moments.push(new __WEBPACK_IMPORTED_MODULE_3__models_combat_art__["b" /* CombatArtMoment */]());
        }
        for (var i = 0; i < 3; ++i) {
            art.techniques.push(new __WEBPACK_IMPORTED_MODULE_3__models_combat_art__["c" /* CombatArtTechnique */]());
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
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["b" /* Coins */]();
    };
    CharacterCreationFunctions.prototype.newCoinStorage = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["c" /* CoinsStorage */]();
    };
    CharacterCreationFunctions.prototype.newItem = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["d" /* Item */]();
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
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["e" /* ItemStack */]();
    };
    CharacterCreationFunctions.prototype.newItemStorage = function () {
        return new __WEBPACK_IMPORTED_MODULE_7__models_equipment_equipment__["f" /* ItemStorage */]();
    };
    return CharacterCreationFunctions;
}());



/***/ }),

/***/ "./src/app/util/serialize-context-refs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = myObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serializr__ = __webpack_require__("./node_modules/serializr/lib/es/serializr.js");

function myObject(modelschema) {
    var o = null;
    if (modelschema)
        o = Object(__WEBPACK_IMPORTED_MODULE_0_serializr__["d" /* object */])(modelschema);
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


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map