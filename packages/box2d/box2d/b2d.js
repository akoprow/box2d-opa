##extern-type B2d.world
##extern-type B2d.shape
##extern-type B2d.body
##extern-type B2d.aabb
##extern-type B2d.vec2

// ##############################################################################
// #################################### aabb ####################################
// ##############################################################################
##register aabb_init : float, float, float, float -> B2d.aabb
##args(x1, y1, x2, y2)
{
    var r = new b2AABB();
    r.minVertex.Set(x1, y1);
    r.maxVertex.Set(x2, y2);
    return r;
}

// ##############################################################################
// #################################### aabb ####################################
// ##############################################################################

##register vec2_init : float, float -> B2d.vec2
##args(x, y)
{
    return new b2Vec2(x, y);
}

// ###############################################################################
// #################################### world ####################################
// ###############################################################################

##register world_init : B2d.aabb, B2d.vec2, bool -> B2d.world
##args(coordinates, grativity, doSleep)
{
    return new b2World(coordinates, grativity, doSleep);
}

##register world_addBody: B2d.world, B2d.body -> void
##args(world, body)
{
    return world.CreateBody(body);
}

##register world_step : B2d.world, int, int -> void
##args(world, delta, iterations)
{
    world.Step(dt, iterations);
}

// #############################################################################
// #################################### shape ##################################
// #############################################################################

##register shape_box_init : float, float -> B2d.shape
##args(width, height)
{
    var r = new b2BoxDef();
    r.extents.Set(width, height);
    return r;
}

##register shape_set_restitution : B2d.shape, float -> B2d.shape
##args(shape, restitution)
{
    shape.restitution = restitution;
}

##register shape_set_density : B2d.shape, float -> B2d.shape
##args(shape, density)
{
    shape.density = density;
}

##register shape_set_friction : B2d.shape, float -> B2d.shape
##args(shape, friction)
{
    shape.friction = friction;
}

// ############################################################################
// #################################### body ##################################
// ############################################################################

##register body_init : float, float -> B2d.body
##args(pos_x, pos_y)
{
    var r = new b2BodyDef();
    r.position.Set(pos_x, pos_y);
    return r;
}

##register body_add_shape : B2d.body, B2d.shape -> B2d.body
##args(body, shape)
{
    body.AddShape(shape);
    return body;
}
