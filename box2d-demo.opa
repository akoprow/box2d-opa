import box2d

import stdlib.web.canvas

function ignore(_) { void } // TODO Should be in stdlib somewhere

module Stack {

  function buildWorld(world) {
    shape = B2D_Shape.mk_box({height: 10., width: 10.})
    B2D_Shape.set_density(shape, 1.0);
    B2D_Shape.set_friction(shape, 0.5);
    body = B2D_Body.init({x: 0., y: 0.})
    B2D_Body.add_shape(body, shape);

    function draw(params) {
      inrange(0, 7, function (i) {
        fi = Float.of_int(i)
        B2D_Body.get_position(body)
          |> B2D_Vec2.set(_,
              { x: 500./2. + params.offset + params.mult*Random.float(1.) + params.imult*fi,
                y: 250. - 5. - fi*22.
              })
        B2D_World.addBody(world, body);
      })
    }

    List.iter(draw, [
      {offset:   -1., mult: -2., imult:  0. },
      {offset: -100., mult: -5., imult:  1. },
      {offset:  100., mult:  5., imult: -1. }
    ]);
  }

}

function createGround(world) {
  shape = B2D_Shape.mk_box({width: 1000., height: 50.});
  B2D_Shape.set_restitution(shape, 0.2);
  body = B2D_Body.init({x: -500., y: 340.});
  B2D_Body.add_shape(body, shape);
  B2D_World.addBody(world, body);
}

function createBox(world, params) {
  box = B2D_Shape.mk_box({width: params.width, height: params.height});
  if (params.fixed)
    B2D_Shape.set_density(box, 1.0) |> ignore;
  body = B2D_Body.init({x: params.x, y: params.y});
  B2D_Body.add_shape(body, box);
  B2D_World.addBody(world, body);
}

function createWorld() {
  world_box = B2D_AABB.init({x1: -1000., y1: -1000., x2: 1000., y2: 1000.})
  gravity = B2D_Vec2.init({x: 0., y: 300.})
  world = B2D_World.init(world_box, gravity, true)
  createGround(world);
  createBox(world, {x: 0., y: 125., width: 10., height: 250., fixed: true});
  createBox(world, {x: 500., y: 125., width: 10., height: 250., fixed: true});
  world
}

function drawWorld(ctx, world) {
  Canvas.clear_rect(ctx, 0, 0, Dom.get_width(#game), Dom.get_height(#game))
  B2D_drawing.draw(world, ctx);
}

function step(ctx, world)() {
  timeStep = 1. / 60.
  B2D_World.step(world, timeStep, 1);
  drawWorld(ctx, world);
}

function showDemo(demo)(_) {
  ctx = Canvas.get(#game) |> Option.get
     |> Canvas.get_context_2d |> Option.get
  world = createWorld()
  Scheduler.timer(10, step(ctx, world));
  demo.buildWorld(world);
}

function page() {
    <canvas onready={showDemo(Stack)}id=#game width=600 height=400 ></>
}

Server.start(Server.http, {title: "Opa: HTML5 game demo", ~page})
