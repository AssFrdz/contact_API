export const API_URL = "https://localhost:7291/api";

export interface Contact {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  adresse: string;
  tel: number;
}

export async function getContacts(): Promise<Contact[]> {
  const res = await fetch(`${API_URL}/contact`);
  return res.json();
}

export async function getContact(id: number): Promise<Contact>{
    const res = await fetch(`${API_URL}/contact/${id}`);
    return res.json();
}


export async function addContact(contact: Omit<Contact,"id">){
    await fetch(`${API_URL}/contact`,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(contact)
    });
}

export async function updateContact(id: number, contact: Contact){
    await fetch(`${API_URL}/contact/${id}`,{
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(contact)
    });
}

export async function deleteContact(id: number){
    await fetch(`${API_URL}/contact/${id}`,{
        method:"DELETE"
    });
}
