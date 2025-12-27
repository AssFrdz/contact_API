import ContactForm from "../components/ContactForm";
import { addContact } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  const navigate = useNavigate();

  async function handleSubmit(data: any) {
    await addContact(data);
    navigate("/");
  }

  return <ContactForm onSubmit={handleSubmit} />;
}
