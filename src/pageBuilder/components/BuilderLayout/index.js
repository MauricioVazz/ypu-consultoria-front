import {
    BuilderContainer,
    ToolbarContainer,
    ContentContainer,
} from "./styles";

import Toolbar from "../Toolbar";
import LeftSidebar from "../LeftSidebar";
import Canvas from "../Canvas";
import RightSidebar from "../RightSidebar";

export default function BuilderLayout() {
    return (
        <BuilderContainer>
            <ToolbarContainer>
                <Toolbar />
            </ToolbarContainer>

            <ContentContainer>
                <LeftSidebar />
                <Canvas />
                <RightSidebar />
            </ContentContainer>
        </BuilderContainer>
    );
}