import DefaultPanel from "./DefaultPanel";
import TitlePanel from "./TitlePanel";
import TextPanel from "./TextPanel";
import ImagePanel from "./ImagePanel";

export const panelMap = {
    TITLE: TitlePanel,
    TEXT: TextPanel,
    IMAGE: ImagePanel,
    DEFAULT: DefaultPanel,
};

export default DefaultPanel;