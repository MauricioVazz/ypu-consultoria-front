import { ToolbarContainer } from "./styles";

import ToolbarLeft from "./components/ToolbarLeft";
import ToolbarCenter from "./components/ToolbarCenter";
import ToolbarRight from "./components/ToolbarRight";

export default function Toolbar() {
    return (
        <ToolbarContainer>

            <ToolbarLeft />

            <ToolbarCenter />

            <ToolbarRight />

        </ToolbarContainer>
    );
}