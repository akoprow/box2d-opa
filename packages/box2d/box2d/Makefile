########################################
# USER VARIABLES
MKLIB = opa-plugin-builder
PLUGNAME = box2d.opp
SRC = common/b2Settings.js common/b2Settings.js common/math/b2Vec2.js common/math/b2Mat22.js common/math/b2Math.js collision/b2AABB.js collision/b2Bound.js collision/b2BoundValues.js collision/b2Pair.js collision/b2PairCallback.js collision/b2BufferedPair.js collision/b2PairManager.js collision/b2BroadPhase.js collision/b2Collision.js collision/Features.js collision/b2ContactID.js collision/b2ContactPoint.js collision/b2Distance.js collision/b2Manifold.js collision/b2OBB.js collision/b2Proxy.js collision/ClipVertex.js collision/shapes/b2Shape.js collision/shapes/b2ShapeDef.js collision/shapes/b2BoxDef.js collision/shapes/b2CircleDef.js collision/shapes/b2CircleShape.js collision/shapes/b2MassData.js collision/shapes/b2PolyDef.js collision/shapes/b2PolyShape.js dynamics/b2Body.js dynamics/b2BodyDef.js dynamics/b2CollisionFilter.js dynamics/b2Island.js dynamics/b2TimeStep.js dynamics/contacts/b2ContactNode.js dynamics/contacts/b2Contact.js dynamics/contacts/b2ContactConstraint.js dynamics/contacts/b2ContactConstraintPoint.js dynamics/contacts/b2ContactRegister.js dynamics/contacts/b2ContactSolver.js dynamics/contacts/b2CircleContact.js dynamics/contacts/b2Conservative.js dynamics/contacts/b2NullContact.js dynamics/contacts/b2PolyAndCircleContact.js dynamics/contacts/b2PolyContact.js dynamics/b2ContactManager.js dynamics/b2World.js dynamics/b2WorldListener.js dynamics/joints/b2JointNode.js dynamics/joints/b2Joint.js dynamics/joints/b2JointDef.js dynamics/joints/b2DistanceJoint.js dynamics/joints/b2DistanceJointDef.js dynamics/joints/b2Jacobian.js dynamics/joints/b2GearJoint.js dynamics/joints/b2GearJointDef.js dynamics/joints/b2MouseJoint.js dynamics/joints/b2MouseJointDef.js dynamics/joints/b2PrismaticJoint.js dynamics/joints/b2PrismaticJointDef.js dynamics/joints/b2PulleyJoint.js dynamics/joints/b2PulleyJointDef.js dynamics/joints/b2RevoluteJoint.js dynamics/joints/b2RevoluteJointDef.js b2d.js b2d_drawing.js
CONF = conf.jsconf

########################################
# MAKEFILE VARIABLES
ifeq ($(origin BUILDDIR), undefined)
	PWD := $(shell pwd)
	BUILDDIR := $(PWD)/_build/
	export BUILDDIR
endif

########################################
# PLUGIN BUILDING
$(PLUGNAME) : $(SRC)
	@echo "### Building plugin $(PLUGNAME)"
	@$(MKLIB) --js-validator-off -o $(@:%.opp=%) $? $(CONF) --build-dir $(BUILDDIR)

########################################
# CLEANING
clean :
	@echo "### Cleaning plugin $(PLUGNAME)"
	@rm -rf $(BUILDDIR)/$(PLUGNAME)

