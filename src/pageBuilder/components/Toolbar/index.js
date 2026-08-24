import { ToolbarContainer } from "./styles";

import ToolbarLeft from "./components/ToolbarLeft";
import ToolbarCenter from "./components/ToolbarCenter";
import ToolbarDevices from "./components/ToolbarDevices";
import ToolbarRight from "./components/ToolbarRight";

export default function Toolbar() {
    return (
        <ToolbarContainer>

            <ToolbarLeft />

            <ToolbarCenter />

            <ToolbarDevices />

            <ToolbarRight />

        </ToolbarContainer>
    );
}