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
import Digio from "../../static/digio.svg";
import Billtrim from "../../static/billtrim.svg";
import Indianiti from "../../static/indianiti.svg";
import Entoss from "../../static/entoss.svg";

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
            <Digio />
            <div
              style={{
                display: "flex",
                padding: "0 15px",
                justifyContent: "space-between"
              }}
            >
              <div>Sep 2019</div>
              <div>Present</div>
            </div>
          </Card>
          <br />
          <Card>
            <h5>Project Description</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with including
              versions of Lorem Ipsum.
            </p>

            <h5>Role</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with including
              versions of Lorem Ipsum.
            </p>

            <h5>Features</h5>
            <ul>
              <li>
                type and scrambled it to make a type specimen book. It has
              </li>
              <li>
                type and scrambled it to make a type specimen book. It has
              </li>
              <li>
                type and scrambled it to make a type specimen book. It has
              </li>
              <li>
                type and scrambled it to make a type specimen book. It has
              </li>
              <li>
                type and scrambled it to make a type specimen book. It has
              </li>
            </ul>
          </Card>
        </CompanyDesc>
      </div>
    </Container2>
  );
};

export default Experience;
