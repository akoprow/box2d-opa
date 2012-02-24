##extern-type world
##extern-type shape
##extern-type body
##extern-type aabbb
##extern-type vec2

// ##############################################################################
// #################################### aabb ####################################
// ##############################################################################
##register aabb_init : float, float, float, float -> aabb
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

##register vec2_init : float, float -> vec2
##args(x, y)
{
    return new b2Vec2(x, y);
}

// ###############################################################################
// #################################### world ####################################
// ###############################################################################

##register world_init : aabb, vec2, bool -> world
##args(coordinates, grativity, doSleep)
{
    return new b2World(coordinates, grativity, doSleep);
}

##register world_addBody: world, body -> void
##args(world, body)
{
    return world.CreateBody(body);
}

##register world_step : world, int, int -> void
##args(world, delta, iterations)
{
    world.Step(dt, iterations);
}

// #############################################################################
// #################################### shape ##################################
// #############################################################################

##register shape_box_init : float, float -> shape
##args(width, height)
{
    var r = new b2BoxDef();
    r.extents.Set(width, height);
    return r;
}

##register shape_set_restitution : shape, float -> shape
##args(shape, restitution)
{
    shape.restitution = restitution;
}

##register shape_set_density : shape, float -> shape
##args(shape, density)
{
    shape.density = density;
}

##register shape_set_friction : shape, float -> shape
##args(shape, friction)
{
    shape.friction = friction;
}

// ############################################################################
// #################################### body ##################################
// ############################################################################

##register body_init : float, float -> body
##args(pos_x, pos_y)
{
    var r = new b2BodyDef();
    r.position.Set(pos_x, pos_y);
    return r;
}
