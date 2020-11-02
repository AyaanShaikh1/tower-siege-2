class Polygon{
	constructor(x,y,width,height){
		var options = {
			restitution:1,
			friction:0.04,
			density:1
		}
		this.body = Bodies.rectangle(x,y,width,height,options);
		this.w = width
		this.h = height
		this.image = loadImage("hexagon.png");
		
		World.add(world,this.body);
		}
		display(){
		var pos = this.body.position;
		push();
		translate(pos.x,pos.y);
		strokeWeight(5);
		stroke("blue");
		imageMode(CENTER);
		fill("purple");
		image(this.image,0,0,this.w,this.h);
		pop();
		}
		
		}

