import { Container2 } from "../page/styles";
import { CompanyRoleCard, ListItemsContainer } from "./styles";

const Experience = () => {
  return (
    <Container2>
      <div style={{ display: "flex", justifyContent: "streach" }}>
        <ListItemsContainer style={{ borderRight: "1px solid #C4C4C4" }}>
          <h4>Companies & role i worked on</h4>
          <CompanyRoleCard>
            <h5>Digio</h5>
            <div>Full Stack Developer</div>
          </CompanyRoleCard>
          <CompanyRoleCard>
            <h5>Digio</h5>
            <div>Full Stack Developer</div>
          </CompanyRoleCard>
          <CompanyRoleCard>
            <h5>Digio</h5>
            <div>Full Stack Developer</div>
          </CompanyRoleCard>
          <CompanyRoleCard>
            <h5>Digio</h5>
            <div>Full Stack Developer</div>
          </CompanyRoleCard>
        </ListItemsContainer>

        <div>Right side content</div>
      </div>
    </Container2>
  );
};

export default Experience;
