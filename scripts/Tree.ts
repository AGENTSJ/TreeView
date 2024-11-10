import { TreeNode } from "./TreeNode.js";

export class Tree
{
    public rootNode : TreeNode;
    
    constructor(depthLimit :number , widthLimit : number)
    {
        this.rootNode = new TreeNode("head");
        this.Generate(depthLimit , widthLimit);
    }

    public Generate(depthLimit : number , widthLimit : number ): void
    {
        let nodeArray : Array<TreeNode> = new Array<TreeNode>();
        nodeArray.push(this.rootNode);
        let currentDept = 0;
        let levelMemberCount = nodeArray.length;
        
        while(nodeArray.length != 0)
        {
            if(currentDept>depthLimit)
            {
                return;
            }   
            let parentNode : TreeNode = nodeArray.shift();
            for(let i  = 0 ; i < widthLimit ; i ++)
            {
                var newNode = new TreeNode(`${currentDept}--${i}`);
                parentNode.Children.push(newNode);
                nodeArray.push(newNode);
            }
            levelMemberCount--;
            if(levelMemberCount == 0)
            {
                levelMemberCount = nodeArray.length;
                currentDept++;
            }
        }
    }
}
