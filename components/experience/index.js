import { useState } from "react";
import { Container2 } from "../page/styles";
import {
  CompanyRoleCard,
  ListItemsContainer,
  CardHeader,
  CardDesc
} from "./styles";
import appConfig from "../../constants/config";
import { theme } from "../../constants/GlobalStyle";

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Container2>
      <div
        style={{ display: "flex", justifyContent: "streach", height: "100%" }}
      >
        <div style={{ borderRight: "1px solid #C4C4C4" }}>
          <h4 style={{ background: "#eee", margin: 0, padding: "10px" }}>
            Companies & role i worked on
          </h4>
          <ListItemsContainer>
            {appConfig.experience.companiesNRoles.map((item, index) => {
              return (
                <CompanyRoleCard
                  onClick={() => setSelectedIndex(index)}
                  key={item.companyName + index}
                  style={{
                    borderRight:
                      index === selectedIndex
                        ? `4px solid ${theme.tertiary}`
                        : ""
                  }}
                >
                  <CardHeader>{item.companyName}</CardHeader>
                  <CardDesc>{item.role}</CardDesc>
                </CompanyRoleCard>
              );
            })}
          </ListItemsContainer>
        </div>
        <div>Right side content</div>
      </div>
    </Container2>
  );
};

export default Experience;
