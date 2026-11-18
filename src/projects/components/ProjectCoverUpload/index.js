"use client";

import { useRef, useState } from "react";
import { uploadImages } from "@/services/media";

import {
    UploadButton,
    HiddenInput,
    StatusMessage,
} from "./styles";

export default function ProjectCoverUpload({
    libraryPublicId,
    onUploadComplete,
}) {
    const inputRef = useRef(null);

    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = async (event) => {
        const files = Array.from(event.target.files || []);

        if (!files.length || !libraryPublicId) return;

        setUploading(true);
        setError("");

        try {
            const uploadedImages = await uploadImages(
                libraryPublicId,
                files
            );

            onUploadComplete?.(uploadedImages);
        } catch (error) {
            console.error("Erro ao enviar imagem:", error);
            setError("Não foi possível enviar a imagem.");
        } finally {
            setUploading(false);
            event.target.value = "";
        }
    };

    return (
        <div>
            <UploadButton
                type="button"
                onClick={handleClick}
                disabled={!libraryPublicId || uploading}
            >
                {uploading ? "Enviando..." : "Enviar imagem"}
            </UploadButton>

            <HiddenInput
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple={false}
                onChange={handleChange}
            />

            {error && (
                <StatusMessage>
                    {error}
                </StatusMessage>
            )}
        </div>
    );
}
