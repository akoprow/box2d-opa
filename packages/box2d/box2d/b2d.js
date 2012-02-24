##extern-type world
##extern-type body
##extern-type bodyDef
##extern-type shapeDef

##extern-type vec2
 // AABB
##extern-type boundingBox

// ###############################################################################
// #################################### world ####################################
// ###############################################################################

##register world_init : boundingBox, vec2, bool -> world
##args(coordinates, grativity, doSleep)
{
    return new b2World(coordinates, grativity, doSleep);
}

##register world_createBody: world, bodyDef -> body
##args(world, body_def)
{
    return world.CreateBody(body_def);
}

##register world_step : world, int, int -> void
##args(world, delta, iterations)
{
    world.Step(dt, iterations);
}

// ###############################################################################
// ################################### bodyDef ###################################
// ###############################################################################

##register bodyDef_init : -> void
##args()
{
    return new b2BodyDef();
}

##register bodyDef_addShape : body, shapeDef -> void
##args(body, shape)
{
    body.AddShape(shape);
}

##register bodyDef_getPosition : body -> vec2
##args(body)
{
    return body.position;
}

// ###############################################################################
// ################################### shapeDef ##################################
// ###############################################################################

##register shapeDef_initBox : -> shapeDef
##args()
{
    return new b2BoxDef();
}

##register shapeDef_setDensity : shapeDef, float -> void
##args(shape, density)
{
    shape.density = density;
}

##register shapeDef_setFriction : shapeDef, float -> void
##args(shape, friction)
{
    shape.density = friction;
}

##register shapeDef_getExtends : shapeDef -> vec2
##args(shape)
{
    return shape.extends;
}

// ###############################################################################
// ##################################### vec2 ####################################
// ###############################################################################

##register vec2_init : -> vec2
##args()
{
    return new b2Vec2();
}

##register vec2_Set : vec2, float, float -> vec2
##args(vec, x, y)
{
    vec.Set(x, y);
}

