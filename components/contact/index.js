import { useState } from "react";
import { Container2 } from "../page/styles";
import {
  Button,
  InputGroup,
  Input,
  TextArea,
  Modal,
  ModalContent,
  DownloadLink
} from "./styles";
// import resume from "../../static/resume.pdf";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <Container2 style={{ position: "relative", overflow: "auto" }}>
      <div
        style={{
          width: "70%",
          margin: "auto",
          padding: "50px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img
              src="/static/sri.jpeg"
              style={{
                objectFit: "contain",
                borderRadius: "5px",
                height: "200px"
              }}
            />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <div style={{ fontWeight: "600", fontSize: "20px" }}>
              Srikanth Gowda
            </div>
            <div style={{ color: "#808080" }}>Full Stack Developer | Digio</div>

            <div style={{ color: "#424242" }}>
              Life Music and Code in between,Life Music and Code in betweenLife
              Music and Code in between
            </div>
            <br />
            <Button onClick={() => setModal(true)}>Preview Resume</Button>
            <DownloadLink
              href="/static/resume.pdf"
              style={{ marginLeft: "20px" }}
              download
            >
              Download Resume
            </DownloadLink>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0"
          }}
        >
          {[1, 2, 3, 4, 5].map(item => (
            <div
              key={item}
              style={{
                height: "50px",
                width: "50px",
                background: "#eee",
                borderRadius: "50%"
              }}
            ></div>
          ))}
        </div>

        <Modal style={{ display: modal ? "block" : "none" }}>
          <ModalContent>
            <embed src="/static/resume.pdf" width="100%" height="600px" />
            <hr />
            <Button onClick={() => setModal(false)}>Close</Button>
          </ModalContent>
        </Modal>

        <div
          style={{ fontWeight: "600", fontSize: "20px", margin: "50px 0 0 0" }}
        >
          Contact Me
        </div>
        <form>
          <InputGroup>
            <label>Name</label>
            <Input
              name="name"
              type="text"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </InputGroup>
          <InputGroup>
            <label>Email</label>
            <Input
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>
          <InputGroup>
            <label>Message</label>
            <TextArea
              type="text"
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
          </InputGroup>
          <Button style={{ margin: "20px 0", width: "100%" }}>Submit</Button>
        </form>
      </div>
    </Container2>
  );
};

export default Contact;
