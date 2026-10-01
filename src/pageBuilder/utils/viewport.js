export const viewportWidths = {
    desktopFullHD: 1920,
    desktop: 1200,
    tablet: 768,
    mobile: 375,
};

export function getViewportWidth(viewport) {
    return viewportWidths[viewport] ?? viewportWidths.desktop;
}