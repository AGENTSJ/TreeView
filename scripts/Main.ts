import { Constants } from "./Constants.js";
import { DrawGraph } from "./DrawGraph.js";
import { Tree } from "./Tree.js";
import { TreeEvents } from "./Events.js";
import { TreeNodeView } from "./Components/TreeNodeView.js";

/// setimeout is here for ensuring lines are properly drawn when reload happen from a posotion of scroll other than 0 0
setTimeout(()=>{
    window.scrollTo(0,0);
    let tree : Tree = new Tree(10,2);
    TreeEvents.ReDrawConnections = new CustomEvent(Constants.DRAW_CONNECTION_EVENT_NAME);

    let graphDraw : DrawGraph = new DrawGraph(Constants.CLASS_NAME_TREE_VIEW);
    let rootViewNode : TreeNodeView =  graphDraw.DrawBfs(tree.rootNode)
    document.dispatchEvent(TreeEvents.ReDrawConnections);
    
    let rootNodeBounds = rootViewNode.Element.getBoundingClientRect();
    window.scrollTo(
        {
            left:rootNodeBounds.x - window.innerWidth*0.5,
            top:rootNodeBounds.y,
            behavior:'smooth'
        }
    )

    window.onresize = ()=>{    
        let currentTop = window.scrollX;
        let currentBottom = window.scrollY;
        window.scrollTo(0,0);

        document.dispatchEvent(TreeEvents.ReDrawConnections);
        
        window.scrollTo(currentTop,currentBottom);
    }
},100);
