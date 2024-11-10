import { Constants } from "../Constants.js";
import { DrawGraph } from "../DrawGraph.js";
import { Colors, Line } from "./Line.js";
export class TreeNodeView {
    constructor(node, parent = null) {
        this.selectedLineColor = Colors.Black;
        this.ParentTreeNodeView = parent;
        this.Node = node;
        this.Element = document.createElement("div");
        this.Element.classList.add(Constants.NODE_ELEMENT_CLASS_NAME);
        this.Element.innerText = this.Node.Value;
        this.ChildViews = new Array();
        this.LineList = new Array();
        document.addEventListener(Constants.DRAW_CONNECTION_EVENT_NAME, () => {
            this.removeOldLines();
            this.DrawConnection();
        });
        this.Element.onclick = () => {
            this.HandleOnSelect();
        };
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
            let lineConnecting = new Line(x1, y1, x2, y2, this.selectedLineColor);
            this.LineList.push(lineConnecting);
            DrawGraph.SVGcontainer.appendChild(lineConnecting.Element);
        });
    }
    HandleOnSelect() {
        console.log('clicked', this.LineList.length);
        if (this.selectedLineColor === Colors.Black) {
            this.selectedLineColor = Colors.Blue;
        }
        else {
            this.selectedLineColor = Colors.Black;
        }
        let currentTop = window.scrollX;
        let currentBottom = window.scrollY;
        window.scroll(0, 0);
        this.removeOldLines();
        this.DrawConnection();
        window.scroll(currentTop, currentBottom);
    }
    removeOldLines() {
        for (let i = 0; i < this.LineList.length; i++) {
            DrawGraph.SVGcontainer.removeChild(this.LineList[i].Element);
        }
        this.LineList = [];
    }
}
