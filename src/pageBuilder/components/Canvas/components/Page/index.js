import { PageContainer } from "./styles";
import useBuilderStore from "@/pageBuilder/store/builderStore";
import BlockRenderer from "@/pageBuilder/renderer/BlockRenderer";

export default function Page() {

    const layout = useBuilderStore(
        state => state.layout
    );

    console.log("Layout atual:", layout);

    return (
        <PageContainer>

            {!layout.length ? (

                <p>Nenhum bloco adicionado.</p>

            ) : (

                layout.map((block) => (
                    <BlockRenderer
                        key={block.publicId}
                        block={block}
                    />
                ))

            )}

        </PageContainer>
    );
}