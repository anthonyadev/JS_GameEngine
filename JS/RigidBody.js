class RigidBody{
    constructor(){
        this.mass = 0
        this.acceleration = new Vector2(0,0);
        this.velocity = new Vector2(0,0);
        this.currentFriction = new Vector2(.9, .9);
        this.currentDrag = new Vector2(.3, .3);
    }

    HandlePhysics(){
        this.velocity.Add(this.acceleration);
        //possible mass code .Multiply(new Vector2(1 / this.mass * 1.25, 1 / this.mass* 1.25)
        this.acceleration = this.acceleration.Add(this.currentDrag)
        this.velocity = this.velocity.Add(this.currentFriction)
    }

    AddForce(_force){
        this.acceleration = _force;
    }

    SetVelocity(_velocity){
        this.velocity = _velocity;
    }
}