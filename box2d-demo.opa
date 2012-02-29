import box2d

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

function page() {
    <canvas id=#game width=600 height=400 ></>
}

Server.start(Server.http, {title: "Opa: HTML5 game demo", ~page})
