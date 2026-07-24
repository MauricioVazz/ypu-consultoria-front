import {
    resolveSpacing,
    resolveFontSize,
    resolveColor,
    resolveBackground,
    resolveRadius,
    resolveJustify,
    resolveAlign,
    resolveTextAlign,
    resolveWidth,
    resolveObjectFit,
    resolveShadow,
    resolveMaxWidth,
    resolveMinHeight,
    resolveColumns,
    resolveGridSpan,
    resolveAspectRatio,
} from "./resolveToken";

export function resolveStyle(content = {}) {

    const style = {

        /* Layout */

        display: content.display,
        position: content.position,
        overflow: content.overflow,

        /* Espaçamento */

        paddingTop: resolveSpacing(content.paddingTop),
        paddingBottom: resolveSpacing(content.paddingBottom),
        paddingLeft: resolveSpacing(content.paddingLeft),
        paddingRight: resolveSpacing(content.paddingRight),

        padding: resolveSpacing(content.padding),

        marginTop: resolveSpacing(content.marginTop),
        marginBottom: resolveSpacing(content.marginBottom),
        marginLeft: resolveSpacing(content.marginLeft),
        marginRight: resolveSpacing(content.marginRight),

        gap: resolveSpacing(content.gap),

        /* Dimensões */

        width: resolveWidth(content.width),
        maxWidth: resolveMaxWidth(content.maxWidth),

        minHeight: resolveMinHeight(content.minHeight),
        height: content.height,

        /* Proporção */

        aspectRatio: resolveAspectRatio(content.aspectRatio),

        /* Cores */

        background: resolveBackground(content.background),
        color: resolveColor(content.color),

        /* Tipografia */

        fontSize: resolveFontSize(content.size),
        textAlign: resolveTextAlign(content.align),
        fontWeight: content.fontWeight
            ? theme.typography.fontWeight[content.fontWeight.toLowerCase()]
            : undefined,
        lineHeight: content.lineHeight,

        /* Bordas */

        borderRadius: resolveRadius(content.radius),

        /* Flex */

        justifyContent: resolveJustify(content.justify),
        alignItems: resolveAlign(content.align),
        flexDirection: content.direction?.toLowerCase(),
        flexWrap: content.wrap ? "wrap" : undefined,
        flex: content.flex,

        /* Grid */

        gridTemplateColumns: content.columns
            ? `repeat(${resolveColumns(content.columns)}, 1fr)`
            : undefined,

        /* Dimensionamento de Grid / Colunas */
        //flexBasis: content.desktop ? resolveGridSpan(content.desktop) : undefined,

        /* Imagem */

        objectFit: resolveObjectFit(content.objectFit),
        boxShadow: resolveShadow(content.shadow),

        /* Diversos */

        opacity: content.opacity,
        zIndex: content.zIndex,
    };

    return Object.fromEntries(
        Object.entries(style).filter(([_, value]) => value !== undefined)
    );
}