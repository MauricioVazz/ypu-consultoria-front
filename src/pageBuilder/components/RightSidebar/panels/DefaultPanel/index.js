export default function DefaultPanel({ block }) {

    return (
        <>
            <h3>{block.type}</h3>

            <pre>
                {JSON.stringify(block.content, null, 2)}
            </pre>
        </>
    );

}