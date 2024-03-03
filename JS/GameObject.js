class GameObject{
    constructor(_position, _width, _height){
        this.position = _position;
        this.rigidBody = new RigidBody();
        this.width = _width;
        this.height = _height;
        this.isDrawable = true;
        this.rigidBody.mass = this.width * this.height
        this.collisionBox = new Rectangle(this.position, this.width, this.height);
    }

    Update(){
       // if(this.rigidBody.velocity.Magnitude > 0)
       // {
            this.position.Add(this.rigidBody.velocity)
            this.rigidBody.HandlePhysics();
       // }
        
    }

    Draw(){
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.width, this.height);
        ctx.stroke();
    }
}