class LineRenderer{
    constructor(_origin, _end){
        this.origin = _origin;
        this.end = _end;
    }

    Update( _origin, _end){
        this.origin = _origin;
        this.end = _end;
    }

    Draw(){
        ctx.beginPath();
        ctx.moveTo(this.origin.x, this.origin.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
    }
}