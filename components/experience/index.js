import { useState } from "react";
import { Container2 } from "../page/styles";
import {
  CompanyRoleCard,
  ListItemsContainer,
  CardHeader,
  CardDesc,
  CompanyDesc,
  Card
} from "./styles";
import appConfig from "../../constants/config";
import { theme } from "../../constants/GlobalStyle";

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  let selectedObj = appConfig.experience.companiesNRoles[selectedIndex];
  return (
    <Container2>
      <div
        style={{ display: "flex", justifyContent: "streach", height: "100%" }}
      >
        <div style={{ borderRight: "1px solid #C4C4C4", width: "40%" }}>
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
        <CompanyDesc>
          <Card>
            <img
              src={selectedObj.logo}
              alt="company logo"
              style={{ height: "60px" }}
            />
            <div
              style={{
                display: "flex",
                padding: "0 15px",
                justifyContent: "space-between"
              }}
            >
              <div>{selectedObj.startDate}</div>
              <div>{selectedObj.endDate}</div>
            </div>
          </Card>
          <br />
          {selectedObj.projects.map(item => {
            return (
              <Card key={item.name}>
                <h5>{item.name}</h5>
                <p>Description</p>
                <p>{item.description}</p>

                <h5>Role</h5>
                <p>{item.myRole}</p>

                <h5>Features</h5>
                <ul>
                  {item.features.map((feature, i) => {
                    return <li key={i + "features"}>{feature}</li>;
                  })}
                </ul>
              </Card>
            );
          })}
        </CompanyDesc>
      </div>
    </Container2>
  );
};

export default Experience;
