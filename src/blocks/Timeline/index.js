import { theme } from "@/styles/theme";

import { resolveStyle } from "@/renderer/theme/resolveStyle";
import {
    resolveFontSize,
    resolveColor,
    resolveSpacing,
} from "@/renderer/theme/resolveToken";

import {
    TimelineContainer,
    TimelineItem,
    TimelineTrack,
    TimelineDot,
    TimelineLine,
    TimelineContent,
    TimelineCard,
    TimelineDate,
    TimelineTitle,
    TimelineDescription,
} from "./styles";

export default function Timeline({ block }) {
    const { content } = block;

    const items = content.items ?? [];
    const style = resolveStyle(content);

    if (!items.length) return null;

    const cardStyle = content.cardStyle ?? "SURFACE";
    const radius = content.radius ?? "MD";

    const cardRadius = {
        NONE: "0px",
        SM: theme.radius.sm,
        MD: theme.radius.md,
        LG: theme.radius.lg,
    };

    return (
        <TimelineContainer $gap={resolveSpacing(content.gap ?? "LG")}>
            {items.map((item, index) => {
                const last = index === items.length - 1;

                return (
                    <TimelineItem key={item.id ?? index}>
                        <TimelineTrack>
                            <TimelineDot />

                            <TimelineLine $last={last} />
                        </TimelineTrack>

                        <TimelineContent
                            $gap={resolveSpacing(content.gap ?? "LG")}
                            $last={last}
                        >
                            <TimelineCard
                                $cardStyle={cardStyle}
                                $radius={cardRadius[radius] ?? theme.radius.md}
                            >
                                {content.showDate && item.date && (
                                    <TimelineDate>
                                        {item.date}
                                    </TimelineDate>
                                )}

                                <TimelineTitle
                                    $fontSize={resolveFontSize("H4")}
                                    $textAlign={content.align === "CENTER" ? "center" : style.textAlign}
                                >
                                    {item.title}
                                </TimelineTitle>

                                {item.description && (
                                    <TimelineDescription
                                        $fontSize={resolveFontSize("P")}
                                        $textAlign={content.align === "CENTER" ? "center" : style.textAlign}
                                    >
                                        {item.description}
                                    </TimelineDescription>
                                )}
                            </TimelineCard>
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </TimelineContainer>
    );
}