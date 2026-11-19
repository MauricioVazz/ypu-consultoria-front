
import { resolveStyle } from "@/renderer/theme/resolveStyle";

import Container from "@/components/ui/Container";

import {
    SectionContainer,
    SectionOverlay,
    SectionContent,
    SectionChildren,
} from "./styles";

export default function Section({ block, children }) {
    const { content = {} } = block;

    const style = resolveStyle(content);

    return (
        <SectionContainer
            $paddingTop={style.paddingTop}
            $paddingBottom={style.paddingBottom}
            $background={style.background}
            $minHeight={style.minHeight}
        >
            {content.overlay && (
                <SectionOverlay
                    $opacity={content.overlayOpacity ?? 50}
                />
            )}

            <SectionContent>
                <Container maxWidth={content.maxWidth}>
                    <SectionChildren $gap={style.gap}>
                        {children}
                    </SectionChildren>
                </Container>
            </SectionContent>
        </SectionContainer>
    );
}
