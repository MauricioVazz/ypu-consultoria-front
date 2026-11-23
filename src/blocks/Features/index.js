import { createElement } from "react";

import Grid from "@/components/ui/Grid";

import { resolveStyle } from "@/renderer/theme/resolveStyle";
import { resolveCardStyle } from "@/renderer/theme/resolveCardStyle";
import { resolveSpacing } from "@/renderer/theme/resolveToken";

import useResolvedIcon from "@/renderer/hooks/useResolvedIcon";

import {
    FeatureCard,
    IconContainer,
    FeatureTitle,
    FeatureDescription,
} from "./styles";

function FeatureItem({
    item,
    content,
    style,
    cardStyle,
}) {
    const Icon = useResolvedIcon(item.icon);

    const align =
        content.align ?? "CENTER";

    const textAlign =
        style.textAlign ?? "center";

    return (
        <FeatureCard
            $cardStyle={cardStyle}
            $padding={resolveSpacing(
                content.padding ?? "LG"
            )}
            $align={align}
            $textAlign={textAlign}
        >
            {Icon && (
                <IconContainer>
                    {createElement(Icon)}
                </IconContainer>
            )}

            <FeatureTitle>
                {item.title}
            </FeatureTitle>

            {item.description && (
                <FeatureDescription>
                    {item.description}
                </FeatureDescription>
            )}
        </FeatureCard>
    );
}

export default function Features({ block }) {
    const { content } = block;

    const style = resolveStyle(content);
    const cardStyle = resolveCardStyle(content);

    return (
        <Grid
            columns={content.columns}
            gap={content.gap}
        >
            {content.items?.map(
                (item, index) => (
                    <FeatureItem
                        key={index}
                        item={item}
                        content={content}
                        style={style}
                        cardStyle={cardStyle}
                    />
                )
            )}
        </Grid>
    );
}