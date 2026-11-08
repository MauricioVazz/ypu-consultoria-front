import DefaultPanel from "./DefaultPanel";
import TitlePanel from "./TitlePanel";
import TextPanel from "./TextPanel";
import ImagePanel from "./ImagePanel";
import GalleryPanel from "./GalleryPanel/index.js";
import SectionPanel from "./SectionPanel";
import RowPanel from "./RowPanel";
import ColumnPanel from "./ColumnPanel";
import CTAPanel from "./CTAPanel";
import FeaturesPanel from "./FeaturesPanel";
import MetricsPanel from "./MetricsPanel";
import TimelinePanel from "./TimelinePanel";

export const panelMap = {
    TITLE: TitlePanel,
    TEXT: TextPanel,
    IMAGE: ImagePanel,
    GALLERY: GalleryPanel,
    SECTION: SectionPanel,
    ROW: RowPanel,
    COLUMN: ColumnPanel,
    CTA: CTAPanel,
    FEATURES: FeaturesPanel,
    METRICS: MetricsPanel,
    TIMELINE: TimelinePanel,
    DEFAULT: DefaultPanel,
};

export default DefaultPanel;