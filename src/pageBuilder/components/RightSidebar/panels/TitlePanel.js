"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import {
    PaddingControl,
    TextControl,
} from "../controls";

export default function TitlePanel({ block }) {
    const updateBlock = useBuilderStore(
        state => state.updateBlock
    );

    const { content } = block;

    const handleChange = (field, value) => {
        updateBlock(block.publicId, {
            [field]: value,
        });
    };

    const handlePaddingChange = changes => {
        updateBlock(block.publicId, changes);
    };

    return (
        <div>
            <h3>Título</h3>

            <TextControl
                label="Texto"
                value={content.text ?? ""}
                onChange={value =>
                    handleChange("text", value)
                }
            />

            {/* controles de texto, alinhamento, cor e nível */}

            <PaddingControl
                value={content}
                onChange={handlePaddingChange}
            />

            <h4>Dados do bloco</h4>

            <pre> {JSON.stringify(content, null, 2)} </pre>
        </div>
    );
}