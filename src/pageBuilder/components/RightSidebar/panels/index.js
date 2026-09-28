import DefaultPanel from "./DefaultPanel.js";
import TitlePanel from "./TitlePanel";
import TextPanel from "./TextPanel";

export const panelMap = {
    TITLE: TitlePanel,
    TEXT: TextPanel,
    DEFAULT: DefaultPanel
};

export default DefaultPanel;