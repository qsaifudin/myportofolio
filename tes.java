public class ShapeFactor{
	private double factor1;
	private double factor2;
	private double factor3;
	
	public double getFactor1(){
		return factor1;
    }
    
    public double getFactor2(){
        return factor2;
    }

    public double getFactor3(){
        return factor3;
    }
}

public class ShapeCalculator{
    public ShapeCalculator(){
    }

    public double claculateAreaOrVolume(String idShare, ShapeFactor factor){
        if(idShare == "rectangle"){
            Rectangle rectangle = new Rectangle(factor.factor1, factor.factor2);
            return rectangle.calculateShape();
        }else if(idShare == "square"){
            Square square = new Square(factor.factor1);
            return square.calculateShape();
        }else if(idShare=="curcle"){
            Circle circle = new Circle(factor.factor1);
            return circle.calculateShape();
        } else if(idShare=="cube"){
            Cube cube = new Cube(factor.factor1);
            return cube.calculateShape();
        }else if(idShare=="cuboid"){
            Cuboid cuboid = new Cuboid(factor.factor1, factor.factor2, factor.factor3);
            return cuboid.calculateShape();
        }else if(idShare=="cone"){
            Cone cone = new Cone(factor.factor1, factor.factor2);
            return cone.calculateShape();
        }else if(idShare == "sphere"){
            Sphere sphare = new Sphere(factor.factor1);
            return sphare.calculateShape();
        }

        return 0.0;
    }
}