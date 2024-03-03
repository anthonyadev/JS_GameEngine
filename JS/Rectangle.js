class Rectangle{
    constructor(_origin, _width, _height){
        this.origin = _origin;
        this.width = _width;
        this.height = _height;
    }

    BottomRight(){
        return new Vector2(this.origin.x + _width, this.origin.y + this.height)
    }

    IsIntersecting(other)
    {
        if(this.origin.x == other.origin.x || this.origin.y == other.origin.y || this.BottomRight().x == other.BottomRight().x || this.BottomRight.y == other.BottomRight().y){
            return false;
        }
        if(this.origin.x > other.origin.x || this.BottomRight().x > other.BottomRight().x){
            return false;
        }
        if(this.origin.y > other.BottomRight().y || this.BottomRight().y > other.origin.y)
        return true;
    }
}