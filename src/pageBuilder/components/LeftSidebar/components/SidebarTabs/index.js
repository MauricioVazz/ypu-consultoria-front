import { TabsContainer, TabButton } from "../../styles";

export default function SidebarTabs({ activeTab, setActiveTab }) {
    return (
        <TabsContainer>
            <TabButton
                $active={activeTab === "elements"}
                onClick={() => setActiveTab("elements")}
            >
                Elementos
            </TabButton>

            <TabButton
                $active={activeTab === "structure"}
                onClick={() => setActiveTab("structure")}
            >
                Estrutura
            </TabButton>
        </TabsContainer>
    );
}
