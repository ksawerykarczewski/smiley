// let app;
// let player;

// window.onload = function () {
//     app = new PIXI.Application(
//         {
//             width: 800,
//             height: 600,
//             backgroundColor: 0xAAAAA
//         }
//     );

//     document.body.appendChild(app.view);

//     //preload assets
//     app.loader.baseUrl = "../assets/images";
//     app.loader.add("player", "1.png");
//     app.loader.onComplete.add(doneLoading);

//     app.loader.load();

//     function doneLoading(e) {
//         player = PIXI.Sprite.from(app.loader.resources.player.texture);
//         player.x = app.view.width / 2;
//         player.y = app.view.height / 2;
//         player.anchor.set(0.5);

//         app.stage.addChild(player);
//     }
// }
// setup canvas

const app = new PIXI.Application({
    transparent: true
});
document.body.appendChild(app.view);

let bol = false;

// create a texture from an image path
const texture = PIXI.Texture.from('../assets/images/1.png');

// create a second texture
const secondTexture = PIXI.Texture.from('../assets/images/2.png');

// create a new Sprite using the texture
const dude = new PIXI.Sprite(texture);

// center the sprites anchor point
dude.anchor.set(0.5);

// move the sprite to the center of the screen
dude.x = app.screen.width / 2;
dude.y = app.screen.height / 2;

app.stage.addChild(dude);

// make the sprite interactive
dude.interactive = true;
dude.buttonMode = true;

dude.on('pointertap', () => {
    bol = !bol;
    if (bol) {
        dude.texture = secondTexture;
    } else {
        dude.texture = texture;
    }
});

app.ticker.add(() => {
    // just for fun, let's rotate mr rabbit a little
    dude.rotation += 0.1;
});

