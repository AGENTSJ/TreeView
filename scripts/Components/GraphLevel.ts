import { Constants } from "../Constants.js";
import { DrawGraph } from "../DrawGraph.js";
import { TreeEvents } from "../Events.js";
import { TreeNodeView } from "./TreeNodeView.js";

export class TreeLevel
{
    public Element : HTMLElement;
    private inputBox :HTMLInputElement;
    private updateBtn :HTMLButtonElement;

    constructor()
    {
        
        this.Element = document.createElement("div");
        this.Element.classList.add(Constants.LEVEL_WRAP_CLASS_NAME);

        this. inputBox = document.createElement("input");
        this.inputBox.setAttribute("type","number");
        this.inputBox.classList.add("small-input");
        
        this.updateBtn = document.createElement("button");
        this.updateBtn.innerText = "Update Margin"
        this.updateBtn.onclick = ()=>{
            this.UpdateMargin();
        }
        this.updateBtn.classList.add("small-btn");
        this.Element.appendChild(this.inputBox);
        this.Element.appendChild(this.updateBtn);
    }

    private UpdateMargin()
    {
        this.Element.style["marginTop"] = `${this.inputBox.value}px`;
        let currentTop = window.scrollX;
        let currentBottom = window.scrollY;
        window.scrollTo(0,0)
        document.dispatchEvent(TreeEvents.ReDrawConnections);
        window.scrollTo(currentTop,currentBottom);

    }
    public AddTreeNode(treeNode : TreeNodeView)
    {
        this.Element.appendChild(treeNode.Element);
    }
}