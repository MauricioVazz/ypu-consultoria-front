import Grid from "@/components/ui/Grid";

import {
    MetricCard,
    MetricValue,
    MetricLabel,
} from "./styles";

import {
    resolveColor,
    resolveFontSize,
    resolveSpacing,
    resolveRadius,
} from "@/renderer/theme/resolveToken";

const ALIGNMENT = {
    LEFT: "flex-start",
    CENTER: "center",
};

export default function Metrics({ block }) {
    const { content } = block;

    const alignment = ALIGNMENT[content.align] ?? "center";

    return (
            <Grid
                columns={content.columns ?? 4}
                gap={content.gap ?? "MD"}
            >
                {content.items?.map((item, index) => (
                    <MetricCard
                        key={index}
                        $padding={resolveSpacing(content.padding ?? "LG")}
                        $radius={resolveRadius("MD")}
                        $align={alignment}
                    >
                        <MetricValue
                            $fontSize={resolveFontSize("H2")}
                            $color={resolveColor("PRIMARY")}
                        >
                            {item.value}
                            {item.suffix && ` ${item.suffix}`}
                        </MetricValue>

                        <MetricLabel
                            $fontSize={resolveFontSize("P")}
                            $color={resolveColor("GRAY")}
                            $marginTop={resolveSpacing("XS")}
                        >
                            {item.label}
                        </MetricLabel>
                    </MetricCard>
                ))}
            </Grid>
    );
}