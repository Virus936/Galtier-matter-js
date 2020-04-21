const { Engine, Render, Runner, World, Bodies } = Matter;

const width = 600;
const height = 900;
const billeSize = 4;
const nombreBille = 1000;
const sizeWall = 25; 

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);
engine.world.gravity.y =0.2 
// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, sizeWall, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, sizeWall, { isStatic: true }),
  Bodies.rectangle(0, height / 2, sizeWall, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, sizeWall, height, { isStatic: true })
];
World.add(world, walls);

// billes
setInterval( function(){
    World.add(world, Bodies.circle(width/2 , 50, billeSize)) 
    World.add(world, Bodies.circle(width/2 , 50, billeSize)) 
    World.add(world, Bodies.circle(width/2 , 50, billeSize)) 
    World.add(world, Bodies.circle(width/2 , 50, billeSize)) 

}, 100)

// les batons 
var x = sizeWall/2 + billeSize*5
const tailleBaton = 200
while(x < width - sizeWall)
{
    World.add(world, Bodies.rectangle( x ,height - ( tailleBaton/2 + sizeWall/2), 2,tailleBaton, {isStatic:true}))
    x = x + 5*billeSize
}

// les obstacles
//

var y = 100
x_start1 = width/2 - ( 14*billeSize )*(Math.trunc(( width/2- sizeWall ) /(  12*billeSize )))
x_start2 = x_start1 + 7*billeSize
x = x_start1
i = 1
while(y< height - tailleBaton*2)
{
    while(x < width - sizeWall)
    {
        World.add(world, Bodies.circle( x ,y, 2*billeSize, {isStatic:true}))
        x = x + 14*billeSize
    }
    y = y + 10*billeSize
    i++
    i%2 == 0 ? x = x_start2 : x = x_start1
}
