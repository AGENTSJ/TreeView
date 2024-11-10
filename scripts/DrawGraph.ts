import { TreeNode } from "./TreeNode.js";
import { TreeLevel } from "./Components/GraphLevel.js";
import { TreeNodeView } from "./Components/TreeNodeView.js";
import { Constants } from "./Constants.js";

export class DrawGraph
{
    public static SVGcontainer : Element;
    public warperElement : HTMLElement;

    public constructor( graphWrapperId : string)
    {
        this. warperElement  =  document.getElementById(graphWrapperId);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.style.position = "absolute";
        svg.style.top = "0";
        svg.style.left = "0";
        // svg.style.minHeight="100vh"
        svg.style.pointerEvents = "none";
        DrawGraph.SVGcontainer = svg;
        this.warperElement.appendChild(svg);
    }

    public  DrawBfs(rootNode : TreeNode  ) : void
    {
        let nodeList = new Array<TreeNodeView>();
        let rootNodeView = new TreeNodeView(rootNode); 
        nodeList.push(rootNodeView);
        let previousMemberCount = 1;
        let memberCount = nodeList.length;
        let currentDepth = 0;

        let levelContainer = new TreeLevel();
        this.warperElement.appendChild(levelContainer.Element);

        while(nodeList.length!=0)
        {
            let parentNodeView : TreeNodeView = nodeList.shift();

            for(let i = 0 ; i < parentNodeView.Node.Children.length;i++ )
            {
                let childView = new TreeNodeView(parentNodeView.Node.Children[i],parentNodeView);
                nodeList.push(childView);
                parentNodeView.ChildViews.push(childView);
            }

            levelContainer.AddTreeNode(parentNodeView);

            memberCount--;
            if(memberCount == 0)
            {
                memberCount = nodeList.length;
                currentDepth++;
                let nextMargin = previousMemberCount*Constants.LEVEL_MARGIN_RATIO;
                previousMemberCount = nodeList.length;
                levelContainer.Element.style["marginTop"] = `${nextMargin}px`;
                levelContainer = new TreeLevel();
                this.warperElement.appendChild(levelContainer.Element);
            }
        }
    }
}