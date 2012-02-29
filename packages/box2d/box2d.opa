package box2d

type B2d.world = external
type B2d.body = external
type B2d.shape = external
type B2d.vec2 = external
type B2d.aabb = external

module B2D_AABB {

  function init(coords) {
      %%B2d.aabb_init%%(coords.x1, coords.y2, coords.x2, coords.y2);
  }

}

module B2D_Vec2 {

  function init(coords) {
      %%B2d.vec2_init%%(coords.x, coords.y);
  }

  function set(vec, coords) {
      %%B2d.vec2_set%%(vec, coords.x, coords.y);
  }

}

module B2D_Shape {

  function mk_box(size) {
      %%B2d.shape_box_init%%(size.width, size.height);
  }

  function set_restitution(shape, restitution) {
      %%B2d.shape_set_restitution%%(shape, restitution);
  }

  function set_density(shape, density) {
      %%B2d.shape_set_density%%(shape, density);
  }

  function set_friction(shape, friction) {
      %%B2d.shape_set_friction%%(shape, friction);
  }

}

module B2D_Body {

  function init(coords) {
      %%B2d.body_init%%(coords.x, coords.y);
  }

  function add_shape(body, shape) {
      %%B2d.body_add_shape%%(body, shape);
  }

  function get_position(body) {
      %%B2d.body_get_position%%(body)
  }



}

module B2D_World {

  function init(coords, gravity, doSleep) {
      %%B2d.world_init%%(coords, gravity, doSleep);
  }

  function addBody(world, body) {
      %%B2d.world_addBody%%(world, body);
  }

  function step(world, delta, iterations) {
      %%B2d.world_step%%(world, delta, iterations);
  }

}
