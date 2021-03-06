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
var objects;
(function (objects) {
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        // constructors
        function Button(imagePath, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, managers.Game.AssetManager.getResult(imagePath)) || this;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            _this.halfWidth = _this.width * 0.5;
            _this.halfHeight = _this.height * 0.5;
            _this.isColliding = false;
            _this.isCentered = isCentered;
            if (_this.isCentered) {
                _this.regX = _this.halfWidth;
                _this.regY = _this.halfHeight;
            }
            _this.x = x;
            _this.y = y;
            _this.on("mouseover", _this._MouseOver);
            _this.on("mouseout", _this._MouseOut);
            return _this;
        }
        // private methods
        Button.prototype._MouseOver = function () {
            this.alpha = 0.7; // change alpha transparency to 70%
        };
        Button.prototype._MouseOut = function () {
            this.alpha = 1.0; // change alpha transparency to 100%
        };
        // public methods
        /**
         * The Start Method performs object initialization
         *
         * @returns {void}
         */
        Button.prototype.Start = function () {
        };
        Button.prototype.Update = function () {
        };
        Button.prototype.Reset = function () {
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map