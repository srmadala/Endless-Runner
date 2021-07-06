class Menu extends Phaser.Scene {
  constructor() {
    super("menuScene");
  }
  
  preload() {
    this.load.image('title', './Assets/TitleScene-01.png');
  }
  
  create() {
    this.add.image(0, 0, 'title').setOrigin(0, 0);
      
    this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  }
  
  update(){
    if (Phaser.Input.Keyboard.JustDown(this.upKey)){
      this.scene.start('playScene');
    }
  }
}
