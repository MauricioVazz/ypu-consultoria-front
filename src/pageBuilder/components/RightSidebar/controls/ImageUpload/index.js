"use client";

import { useRef, useState } from "react";
import { uploadImages } from "@/services/media";

import {
    Container,
    UploadButton,
    HiddenInput,
    StatusMessage,
} from "./styles";

export default function ImageUpload({
    libraryPublicId,
    onUploadComplete,
    multiple = true,
}) {
    const inputRef = useRef(null);

    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(false);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = async event => {
        const files = Array.from(event.target.files || []);


        if (!files.length || !libraryPublicId) {
            return;
        }

        setUploading(true);
        setError(false);

        try {
            const uploadedImages = await uploadImages(
                libraryPublicId,
                files
            );

            onUploadComplete?.(uploadedImages);
        } catch (error) {
            console.error("Erro ao fazer upload das imagens:", error);
            setError(true);
        } finally {
            setUploading(false);

            // Permite selecionar novamente o mesmo arquivo.
            event.target.value = "";
        }

    };

    return (<Container>
        <UploadButton
            type="button"
            onClick={handleClick}
            disabled={uploading || !libraryPublicId}
        >
            {uploading ? "Enviando..." : "Adicionar imagem"} </UploadButton>

        <HiddenInput
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple={multiple}
            onChange={handleChange}
        />

        {error && (
            <StatusMessage>
                Não foi possível enviar as imagens.
            </StatusMessage>
        )}
    </Container>

    );
}
