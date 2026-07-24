import BuilderProvider from "@/pageBuilder/providers/BuilderProvider";

export default async function BuilderPage({ params }) {
    const { publicId } = await params;

    return (
        <BuilderProvider publicId={publicId} />
    );
}