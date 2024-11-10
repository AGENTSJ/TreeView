import { Constants } from "../Constants.js";

export enum Colors {
    Black = "black",
    Blue = "blue"
}

export class Line 
{
    public Element : Element
    
    constructor(x1:number , y1 :number , x2 : number , y2:number ,color : Colors = Colors.Black)
    {
        this.Element = document.createElementNS(Constants.SVG_NS ,"line");
        this.UpdateLine(x1,y1,x2,y2,color);
    }

    public UpdateLine(x1:number , y1 :number , x2 : number , y2:number , color:Colors)
    {
        this.Element.setAttribute("x1",x1.toString());
        this.Element.setAttribute("y1",y1.toString());
        this.Element.setAttribute("x2",x2.toString());
        this.Element.setAttribute("y2",y2.toString());
        this.Element.setAttribute("stroke", color);
        this.Element.setAttribute("stroke-width", "2");
    }
}