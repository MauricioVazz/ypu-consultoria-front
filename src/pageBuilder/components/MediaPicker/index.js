"use client";

import {
    Overlay,
    Modal,
    Header,
    Title,
    CloseButton,
    Content,
    Footer,
    CancelButton,
    SelectButton,
} from "./styles";

export default function MediaPicker({
    open = false,
    onClose,
    onConfirm,
}) {
    if (!open) {
        return null;
    }

    return (
        <Overlay>
            <Modal>
                <Header>
                    <Title>Biblioteca de mídia</Title>

                    <CloseButton
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar biblioteca de mídia"
                    >
                        ×
                    </CloseButton>
                </Header>

                <Content>
                    {/* Biblioteca de imagens será adicionada aqui */}
                </Content>

                <Footer>
                    <CancelButton
                        type="button"
                        onClick={onClose}
                    >
                        Cancelar
                    </CancelButton>

                    <SelectButton
                        type="button"
                        onClick={onConfirm}
                    >
                        Selecionar
                    </SelectButton>
                </Footer>
            </Modal>
        </Overlay>
    );
}