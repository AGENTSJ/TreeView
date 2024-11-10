import { Constants } from "./Constants.js";
import { DrawGraph } from "./DrawGraph.js";
import {Tree} from "./Tree.js";
import { TreeEvents } from "./Events.js";

let tree : Tree = new Tree(4,2);
TreeEvents.ReDrawConnections = new CustomEvent(Constants.DRAW_CONNECTION_EVENT_NAME);

let graphDraw : DrawGraph = new DrawGraph(Constants.CLASS_NAME_TREE_VIEW);
graphDraw.DrawBfs(tree.rootNode)
document.dispatchEvent(TreeEvents.ReDrawConnections);

window.onresize = ()=>{    
    DrawGraph.SVGcontainer.innerHTML = '';
    window.scrollTo(0,0);
    document.dispatchEvent(TreeEvents.ReDrawConnections);
}