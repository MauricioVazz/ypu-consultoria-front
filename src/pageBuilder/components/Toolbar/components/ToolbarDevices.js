"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";

const devices = [
    {
        id: "desktop",
        label: "Desktop",
    },
    {
        id: "tablet",
        label: "Tablet",
    },
    {
        id: "mobile",
        label: "Mobile",
    },
];

export default function ToolbarDevices() {

    const viewport = useBuilderStore(
        state => state.viewport
    );

    const setViewport = useBuilderStore(
        state => state.setViewport
    );

    return (
        <div>
            <select
                value={viewport}
                onChange={e =>
                    setViewport(e.target.value)
                }
            >
                {devices.map(device => (
                    <option
                        key={device.id}
                        value={device.id}
                    >
                        {device.label}
                    </option>
                ))}
            </select>
        </div>
    );
}