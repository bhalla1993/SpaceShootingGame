var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            console.log("Inside collision" + math.Vec2.Distance(P1, P2));
            if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    managers.Game.ScoreBoard.Score += 100;
                    managers.Game.ScoreBoard.Lives -= 1;
                    object2.visible = false;
                    /*switch(object2.name) {
                        case "island":
                        let yaySound = createjs.Sound.play("yay");
                        yaySound.volume = 0.2;
                        managers.Game.ScoreBoard.Score += 100;
                        break;
        
                        case "cloud":
                        let thunderSound = createjs.Sound.play("thunder");
                        thunderSound.volume = 0.2;
                        managers.Game.ScoreBoard.Lives -= 1;
        
                        
                        break;
                    }*/
                }
            }
            else {
                object2.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map