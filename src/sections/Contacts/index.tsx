import sass from "./Contacts.module.scss";
import { FC } from "react";
import { Container, Title } from "../../components";
import { Form } from "./components";

export const Contacts: FC = () => {
  return (
    <section className={sass.sectionContacts}>
      <Container>
        <Title title="Contacts" />
        <div className={sass.contactsInner}>
          <Form />
        </div>
      </Container>
    </section>
  )
}