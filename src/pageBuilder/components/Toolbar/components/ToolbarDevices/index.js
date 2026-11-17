
"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";

import { DeviceSelect } from "./styles";

const devices = [
    {
        id: "desktopFullHD",
        label: "Desktop Full HD",
    },
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
        <DeviceSelect
            value={viewport}
            onChange={event => setViewport(event.target.value)}
        >
            {devices.map(device => (
                <option
                    key={device.id}
                    value={device.id}
                >
                    {device.label}
                </option>
            ))}
        </DeviceSelect>
    );
}
