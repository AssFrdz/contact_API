import { useEffect, useState } from "react";
import { getContact, updateContact } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState<any>(null);

  useEffect(() => {
    getContact(Number(id)).then(setContact);
  }, [id]);

  async function handleSubmit(data: any) {
    await updateContact(Number(id), { ...data, id: Number(id) });
    navigate("/");
  }

  if (!contact) return <p>Chargement...</p>;

  return <ContactForm initial={contact} onSubmit={handleSubmit} />;
}
