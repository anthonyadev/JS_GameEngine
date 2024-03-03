class Vector2{
    constructor(x, y){
        this.x = x;
        this.y = y;
    } 

    
    Distance(other){
        return Math.abs(this.Subtract(other).Magnitude())
    }

    Add(other){
        return new Vector2(this.x += other.x, this.y += other.y)
    }

    Subtract(other){
        return new Vector2(this.x -= other.x, this.y -= other.y)
    }

    Multiply(other){
        return new Vector2(this.x * other.x, this.y * other.y)
    }

    Divide(other){
        if(this.x != 0 && other.x != 0 && this.y != 0 && other.y != 0){
            return new Vector2(this.x / other.x, this.y / other.y);
        }
        return new Vector2(this.x, this.y)
    }

    Inverse(){
        return new Vector2(this.x * -1, this.y * -1)
    }

    Magnitude(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    Normalize(){
        return new Vector2(this.x / this.Magnitude(), this.y / this.Magnitude())
    }
}