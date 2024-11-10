import { Constants } from "../Constants.js";
import { DrawGraph } from "../DrawGraph.js";
import { TreeEvents } from "../Events.js";
export class TreeLevel {
    constructor() {
        this.Element = document.createElement("div");
        this.Element.classList.add(Constants.LEVEL_WRAP_CLASS_NAME);
        this.inputBox = document.createElement("input");
        this.inputBox.setAttribute("type", "number");
        this.inputBox.classList.add("small-input");
        this.updateBtn = document.createElement("button");
        this.updateBtn.innerText = "Update Margin";
        this.updateBtn.onclick = () => {
            this.UpdateMargin();
        };
        this.updateBtn.classList.add("small-btn");
        this.Element.appendChild(this.inputBox);
        this.Element.appendChild(this.updateBtn);
    }
    UpdateMargin() {
        this.Element.style["marginTop"] = `${this.inputBox.value}px`;
        DrawGraph.SVGcontainer.innerHTML = '';
        window.scrollTo(0, 0);
        document.dispatchEvent(TreeEvents.ReDrawConnections);
    }
    AddTreeNode(treeNode) {
        this.Element.appendChild(treeNode.Element);
    }
}
