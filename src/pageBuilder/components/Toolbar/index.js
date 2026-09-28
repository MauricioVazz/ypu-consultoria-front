"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import { ToolbarContainer, ToolbarActions } from "./styles";

import ToolbarLeft from "./components/ToolbarLeft";
import ToolbarCenter from "./components/ToolbarCenter";
import ToolbarDevices from "./components/ToolbarDevices";
import ToolbarRight from "./components/ToolbarRight";

export default function Toolbar() {

    const dirtyBlocks = useBuilderStore(
        state => state.dirtyBlocks
    );

    const saveBlock = useBuilderStore(
        state => state.saveBlock
    );

    const markBlockSaved = useBuilderStore(
        state => state.markBlockSaved
    );

    return (
        <ToolbarContainer>

            <ToolbarLeft />

            <ToolbarCenter />

            <ToolbarActions>
                <pre>
                    {JSON.stringify(dirtyBlocks, null, 2)}
                </pre>
                <ToolbarDevices />
                <ToolbarRight />
                <button
                    type="button"
                    onClick={() =>
                        markBlockSaved(
                            "cmr3qopf80008umvkls2lppxm"
                        )
                    }
                >
                    Marcar como salvo
                </button>
            </ToolbarActions>

        </ToolbarContainer>
    );
}