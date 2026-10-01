import DefaultPanel from "./DefaultPanel";
import TitlePanel from "./TitlePanel";
import TextPanel from "./TextPanel";
import ImagePanel from "./ImagePanel";
import GalleryPanel from "./GalleryPanel/index.js";
import SectionPanel from "./SectionPanel";

export const panelMap = {
    TITLE: TitlePanel,
    TEXT: TextPanel,
    IMAGE: ImagePanel,
    GALLERY: GalleryPanel,
    SECTION: SectionPanel,
    DEFAULT: DefaultPanel,
};

export default DefaultPanel;