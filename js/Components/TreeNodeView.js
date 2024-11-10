import { Constants } from "../Constants.js";
import { DrawGraph } from "../DrawGraph.js";
import { Line } from "./Line.js";
export class TreeNodeView {
    constructor(node, parent = null) {
        this.ParentTreeNodeView = parent;
        this.Node = node;
        this.Element = document.createElement("div");
        this.Element.classList.add(Constants.NODE_ELEMENT_CLASS_NAME);
        this.Element.innerText = this.Node.Value;
        this.ChildViews = new Array();
        this.LineList = new Array();
        document.addEventListener(Constants.DRAW_CONNECTION_EVENT_NAME, () => {
            this.DrawConnection();
        });
    }
    DrawConnection() {
        if (this.ChildViews.length <= 0) {
            return;
        }
        let bounds = this.Element.getBoundingClientRect();
        let x1 = bounds.x + (bounds.width / 2);
        let y1 = bounds.y + bounds.height - Constants.PADDING_NODE_BOTTOM;
        this.ChildViews.forEach(childView => {
            let childBounds = childView.Element.getBoundingClientRect();
            let x2 = childBounds.x + (childBounds.width / 2);
            let y2 = childBounds.y - Constants.PADDING_NODE_TOP;
            let lineConnecting = new Line(x1, y1, x2, y2);
            DrawGraph.SVGcontainer.appendChild(lineConnecting.Element);
        });
    }
}
