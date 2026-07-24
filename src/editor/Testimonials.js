import Grid from "@/components/ui/Grid";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import { resolveStyle } from "@/renderer/theme/resolveStyle";

export default function Testimonials({ block }) {
    const { content } = block;

    const gridColumns = content.layout === "SLIDER" ? 1 : content.columns || 3;

    return (
        <Grid columns={gridColumns} gap="MD">
            {content.items?.map((item, index) => (
                <Card key={index}>
                    <div style={{ textAlign: "center" }}>
                        
                        <Avatar
                            src={item.imagePublicId}
                            name={item.name}
                        />

                        <h4
                            style={resolveStyle({
                                fontSize: "H5",
                                color: "TEXT",
                                margin: "0"
                            })}
                        >
                            {item.name}
                        </h4>

                        <p
                            style={resolveStyle({
                                fontSize: "SMALL",
                                color: "GRAY",
                                marginTop: "4px",
                                marginBottom: "16px"
                            })}
                        >
                            {item.company}
                        </p>

                        <p
                            style={resolveStyle({
                                fontSize: "P",
                                color: "GRAY",
                                lineHeight: "1.5"
                            })}
                        >
                            {`"${item.text}"`}
                        </p>

                    </div>
                </Card>
            ))}
        </Grid>
    );
}