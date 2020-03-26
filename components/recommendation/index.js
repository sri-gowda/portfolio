import { Container2 } from "../page/styles";
import { Card } from "./styles";

const Recommendation = () => {
  return (
    <Container2>
      <h5 style={{ textAlign: "center" }}>Recommendation</h5>
      <Card style={{ width: "60%", margin: "auto" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <div
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                background: "#eee",
                marginRight: "15px"
              }}
            ></div>
          </div>
          <div style={{ width: "100%" }}>
            <div>
              <div>Dipesh Desai</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>CEO & Co-Founder | Billtrim</div>
                <div>Aug 28th 2019</div>
              </div>
            </div>
          </div>
        </div>
        <p style={{ paddingTop: "10px", borderTop: "1px solid #eee" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic
        </p>
      </Card>
    </Container2>
  );
};

export default Recommendation;
