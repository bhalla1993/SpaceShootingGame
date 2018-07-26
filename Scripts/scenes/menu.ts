module scenes {
    export class Menu extends objects.Scene {
        // member variables
        private _background:objects.Background;
        private _gameNameLabel: objects.Label;
        private _singlePlayer: objects.Label;
        private _levelLabel: objects.Label;
        private _playButton:objects.Button;
        private _instructionButton:objects.Button;
        private _exitButton:objects.Button;
        
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            //this._ocean = new objects.Ocean();
            
            //this._welcomeLabel = new objects.Label("Mail Pilot", "80px", "Dock51", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this._gameNameLabel=new objects.Label("Space Shooter","70px","Arial","#FFF000",400,100,true);
            this._background = new objects.Background();
            this._singlePlayer=new objects.Label("Single Player","50px","Arial","#FFF000",400,200,true);            
            this._levelLabel=new objects.Label("Level 1","70px","Arial","#FFF000",400,300,true);            
            this._playButton=new objects.Button("PlayButton",200,450,true);
            this._instructionButton=new objects.Button("InstructionButton",400,450,true);
            this._exitButton=new objects.Button("ExitButton",600,450,true);
            
            
            this.Main();
        }

        public Update():void {
            this._background.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - START SCENE`);
            //this.addChild(this._ocean);
            this.addChild(this._background);

            this.addChild(this._gameNameLabel);
            this.addChild(this._singlePlayer);
            this.addChild(this._levelLabel);
            this.addChild(this._playButton);
            this.addChild(this._instructionButton);
            this.addChild(this._exitButton);

             this.addChild(this._instructionButton);

            this._instructionButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INSTRUCTIONS;
            }, this);
        
       }
    }
}