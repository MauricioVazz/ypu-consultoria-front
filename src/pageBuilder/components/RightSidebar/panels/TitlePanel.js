"use client";

import useBuilderStore from "@/pageBuilder/store/builderStore";
import {
    PaddingControl,
    TextControl,
    TypographyControl,
    FontWeightControl,
    TextAlignControl,
    ColorControl,
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

            <TypographyControl
                label="Nível"
                value={content.level ?? "H1"}
                options={[
                    { value: "H1", label: "H1" },
                    { value: "H2", label: "H2" },
                    { value: "H3", label: "H3" },
                    { value: "H4", label: "H4" },
                    { value: "H5", label: "H5" },
                ]}
                onChange={value =>
                    handleChange("level", value)
                }
            />

            <FontWeightControl
                value={content.fontWeight ?? "SEMIBOLD"}
                onChange={value =>
                    handleChange("fontWeight", value)
                }
            />

            <ColorControl
                value={content.color ?? "DEFAULT"}
                onChange={value =>
                    handleChange("color", value)
                }
            />

            <TextAlignControl
                value={content.align ?? "LEFT"}
                onChange={value =>
                    handleChange("align", value)
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