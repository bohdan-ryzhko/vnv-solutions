import sass from "./Contacts.module.scss";
import { FC } from "react";
import { Container, Title, Form } from "../../components";

export const Contacts: FC = () => {
  return (
    <section id="contacts" className={sass.sectionContacts}>
      <Container>
        <div className={sass.contactsInner}>
          <Title title="Have an idea? Tell us about it" />
          <Form />
        </div>
      </Container>
    </section>
  )
}
