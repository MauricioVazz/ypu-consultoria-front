"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    ModalEyebrow,
    ModalTitle,
    ModalDescription,
    CloseButton,
    Stepper,
    Step,
    StepNumber,
    StepLabel,
    Form,
    FormGroup,
    Label,
    Input,
    TextArea,
    CoverSection,
    CoverDescription,
    CoverActions,
    ActionButton,
    CoverPreview,
    CoverImage,
    CoverInfo,
    FeedbackMessage,
    ModalFooter,
    CancelButton,
    SubmitButton,
} from "./styles";

import {
    createProject,
    updateProject,
} from "@/services/project.service";

import { getLibraryByProject } from "@/services/media";
import ProjectCoverUpload from "../ProjectCoverUpload";
import ProjectCoverPicker from "../ProjectCoverPicker";

export default function ProjectFormModal({
    open,
    onClose,
    project = null,
}) {
    const router = useRouter();

    const [title, setTitle] = useState(project?.title ?? "");
    const [category, setCategory] = useState(project?.category ?? "");
    const [summary, setSummary] = useState(project?.summary ?? "");

    const [createdProject, setCreatedProject] = useState(null);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    const [libraryPublicId, setLibraryPublicId] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [showCoverPicker, setShowCoverPicker] = useState(false);

    if (!open) return null;

    const isEditing = Boolean(project);
    const currentStep = createdProject ? 2 : 1;

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSaving(true);
        setError("");

        try {
            // Etapa 2: salvar a capa e abrir o Builder.
            if (createdProject) {
                if (coverImage) {
                    await updateProject(createdProject.publicId, {
                        cover: coverImage.publicId,
                    });
                }

                router.push(
                    `/admin/projetos/${createdProject.publicId}/builder`
                );

                return;
            }

            // Etapa 1: criar o projeto.
            const newProject = await createProject({
                title,
                category,
                summary,
                status: "DRAFT",
            });

            setCreatedProject(newProject);

            const library = await getLibraryByProject(
                newProject.publicId
            );

            setLibraryPublicId(library.publicId);

        } catch (error) {
            console.error("Erro ao salvar projeto:", error);
            setError("Não foi possível concluir a operação. Tente novamente.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <ModalHeader>
                    <div>
                        <ModalEyebrow>
                            {createdProject
                                ? "QUASE LÁ"
                                : "ÁREA ADMINISTRATIVA"}
                        </ModalEyebrow>

                        <ModalTitle>
                            {createdProject
                                ? "Escolha a imagem de capa"
                                : isEditing
                                    ? "Editar projeto"
                                    : "Vamos criar um projeto?"}
                        </ModalTitle>

                        <ModalDescription>
                            {createdProject
                                ? "Selecione uma imagem para representar seu projeto. Você poderá personalizar o restante da página no editor."
                                : "Preencha algumas informações iniciais para começar a montar a página do seu projeto."}
                        </ModalDescription>
                    </div>

                    <CloseButton type="button" onClick={onClose}>
                        ×
                    </CloseButton>
                </ModalHeader>

                <Stepper>
                    <Step $active={currentStep === 1} $done={currentStep > 1}>
                        <StepNumber $active={currentStep === 1} $done={currentStep > 1}>
                            {currentStep > 1 ? "✓" : "1"}
                        </StepNumber>

                        <StepLabel $active={currentStep === 1} $done={currentStep > 1}>
                            Dados do projeto
                        </StepLabel>
                    </Step>

                    <div className="step-line" />

                    <Step $active={currentStep === 2}>
                        <StepNumber $active={currentStep === 2}>
                            2
                        </StepNumber>

                        <StepLabel $active={currentStep === 2}>
                            Imagem de capa
                        </StepLabel>
                    </Step>
                </Stepper>

                <Form onSubmit={handleSubmit}>
                    {!createdProject ? (
                        <>
                            <FormGroup>
                                <Label htmlFor="project-title">
                                    Nome do projeto
                                </Label>

                                <Input
                                    id="project-title"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                    placeholder="Ex.: Recuperação de área degradada"
                                    required
                                    minLength={3}
                                    maxLength={255}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="project-category">
                                    Categoria
                                </Label>

                                <Input
                                    id="project-category"
                                    value={category}
                                    onChange={(event) => setCategory(event.target.value)}
                                    placeholder="Ex.: Licenciamento ambiental"
                                    required
                                    minLength={2}
                                    maxLength={100}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="project-summary">
                                    Breve descrição
                                </Label>

                                <TextArea
                                    id="project-summary"
                                    value={summary}
                                    onChange={(event) => setSummary(event.target.value)}
                                    placeholder="Conte brevemente sobre o projeto e seus objetivos..."
                                    required
                                    minLength={10}
                                    maxLength={500}
                                    rows={4}
                                />

                                <small>{summary.length}/500 caracteres</small>
                            </FormGroup>
                        </>
                    ) : (
                        <CoverSection>
                            <CoverDescription>
                                <strong>Apresente seu projeto visualmente.</strong>
                                <span>
                                    Escolha uma imagem que represente bem o trabalho
                                    realizado. Essa imagem será utilizada como capa
                                    do projeto.
                                </span>
                            </CoverDescription>

                            {coverImage && (
                                <CoverPreview>
                                    <CoverImage
                                        src={coverImage.url}
                                        alt={coverImage.alt || "Capa selecionada"}
                                    />

                                    <CoverInfo>
                                        <strong>Imagem selecionada</strong>
                                        <span>
                                            Sua capa está pronta para ser utilizada.
                                        </span>
                                    </CoverInfo>
                                </CoverPreview>
                            )}

                            <CoverActions>
                                <ActionButton
                                    type="button"
                                    disabled={!libraryPublicId}
                                    onClick={() => setShowCoverPicker((current) => !current)}
                                >
                                    {showCoverPicker
                                        ? "Fechar biblioteca"
                                        : "Escolher da biblioteca"}
                                </ActionButton>

                                <ProjectCoverUpload
                                    libraryPublicId={libraryPublicId}
                                    onUploadComplete={(images) => {
                                        setCoverImage(images[0]);
                                        setShowCoverPicker(false);
                                    }}
                                />
                            </CoverActions>

                            {showCoverPicker && (
                                <ProjectCoverPicker
                                    libraryPublicId={libraryPublicId}
                                    selectedImagePublicId={coverImage?.publicId}
                                    onSelect={(image) => {
                                        setCoverImage(image);
                                        setShowCoverPicker(false);
                                    }}
                                />
                            )}

                            {!coverImage && (
                                <FeedbackMessage $type="info">
                                    A imagem de capa é opcional. Você também poderá
                                    adicioná-la posteriormente.
                                </FeedbackMessage>
                            )}
                        </CoverSection>
                    )}

                    {error && (
                        <FeedbackMessage $type="error">
                            {error}
                        </FeedbackMessage>
                    )}

                    {createdProject && (
                        <FeedbackMessage $type="success">
                            <strong>Projeto criado com sucesso!</strong>
                            <span>
                                Agora você pode escolher uma capa e seguir para
                                a edição da página.
                            </span>
                        </FeedbackMessage>
                    )}

                    <ModalFooter>
                        <CancelButton type="button" onClick={onClose}>
                            Cancelar
                        </CancelButton>

                        <SubmitButton type="submit" disabled={saving}>
                            {saving
                                ? "Aguarde..."
                                : createdProject
                                    ? "Continuar para o editor"
                                    : "Criar projeto"}
                        </SubmitButton>
                    </ModalFooter>
                </Form>
            </ModalContainer>
        </ModalOverlay>
    );
}
