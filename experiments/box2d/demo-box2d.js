// Example base from http://lavadip.com/experiments/box2d_demo/
/*
notes:
check out:
http://quickb2.dougkoellmer.com/bin/qb2DemoReel.swf
http://www.iforce2d.net/b2dtut/top-down-car


*/

function createWorld() {
    var worldAABB = new b2AABB();
    worldAABB.minVertex.Set(-1000, -1000);
    worldAABB.maxVertex.Set(1000, 1000);
    var doSleep = true;
    var world = new b2World(worldAABB, gravity, doSleep);
    //createGround(world);
    createBox(world, 0, 225, 10, 250);
    createBox(world, 600, 225, 10, 250);
    return world;
}

function createGround(world) {
    var groundSd = new b2BoxDef();
    groundSd.extents.Set(1200, 50);
    groundSd.restitution = 0.5;
    groundSd.friction = 0.3;
    var groundBd = new b2BodyDef();
    groundBd.AddShape(groundSd);
    groundBd.position.Set(-600, 440);
    return world.CreateBody(groundBd)
}

function createBall(world, x, y) {
    var ballSd = new b2CircleDef();
    ballSd.density = 1.0;
    ballSd.radius = 20;
    ballSd.restitution = 0.6;
    ballSd.friction = 0.4;
    var ballBd = new b2BodyDef();
    ballBd.AddShape(ballSd);
    ballBd.position.Set(x,y);
    return world.CreateBody(ballBd);
}

function createBox(world, x, y, width, height, fixed) {
    if (typeof(fixed) == 'undefined') fixed = true;
    var boxSd = new b2BoxDef();
    boxSd.restitution = 0.6;
    boxSd.friction = .3;
    if (!fixed) boxSd.density = 1.0;
    boxSd.extents.Set(width, height);
    var boxBd = new b2BodyDef();
    boxBd.AddShape(boxSd);
    boxBd.position.Set(x,y);
    return world.CreateBody(boxBd)
}

function drawWorld(world, context) {
    for (var j = world.m_jointList; j; j = j.m_next) {
        //drawJoint(j, context);
    }
    for (var b = world.m_bodyList; b; b = b.m_next) {
        for (var s = b.GetShapeList(); s != null; s = s.GetNext()) {
            //drawShape(s, context, b);
        }
    }
}
