import DefaultPanel from "./DefaultPanel";
import TitlePanel from "./TitlePanel";
import TextPanel from "./TextPanel";
import ImagePanel from "./ImagePanel";
import GalleryPanel from "./GalleryPanel/index.js";
import SectionPanel from "./SectionPanel";
import RowPanel from "./RowPanel";
import ColumnPanel from "./ColumnPanel";
import CTAPanel from "./CTAPanel";

export const panelMap = {
    TITLE: TitlePanel,
    TEXT: TextPanel,
    IMAGE: ImagePanel,
    GALLERY: GalleryPanel,
    SECTION: SectionPanel,
    ROW: RowPanel,
    COLUMN: ColumnPanel,
    CTA: CTAPanel,
    DEFAULT: DefaultPanel,
};

export default DefaultPanel;