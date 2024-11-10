export class TreeNode
{
    public  Children : Array<TreeNode>;
    public Value : string;

    constructor(val : string)
    {
        this.Value = val;
        this.Children = new Array<TreeNode>();
    }
}