import { Constants } from "../Constants.js";
export var Colors;
(function (Colors) {
    Colors["Black"] = "black";
    Colors["Blue"] = "blue";
})(Colors || (Colors = {}));
export class Line {
    constructor(x1, y1, x2, y2, color = Colors.Black) {
        this.Element = document.createElementNS(Constants.SVG_NS, "line");
        this.UpdateLine(x1, y1, x2, y2, color);
    }
    UpdateLine(x1, y1, x2, y2, color) {
        this.Element.setAttribute("x1", x1.toString());
        this.Element.setAttribute("y1", y1.toString());
        this.Element.setAttribute("x2", x2.toString());
        this.Element.setAttribute("y2", y2.toString());
        this.Element.setAttribute("stroke", color);
        this.Element.setAttribute("stroke-width", "2");
    }
}
