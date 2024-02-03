
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

//Hakee express servulta mongoDB tiedot.
const apiHaku = async() =>{
  const response = await fetch("http://localhost:5000");
  const data = response.json();
  return data;
}

//Funktio etsii kontaktit queryn eli aplikaatiossa hakukentän perusteella.
export async function getContacts(query) {
  let response = await apiHaku();
  if (!response) response = [];
  if (query) {
  response = matchSorter(response, query, { keys: ["first", "last"] });
  }
  return response.sort(sortBy("last", "createdAt"));
}


//Funktio luo uuden mongoDB tablen, johon lisää id:n ja createdAt ajan.
export async function createContact() {

  let userId = Math.random().toString(36).substring(2, 9);
  const contact = {id: userId, createdAt: Date.now()}

  await fetch('http://localhost:5000/create',{
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(contact),
  }); 
  return contact;
} 

//Hakee tietokannan ja palauttaa tietyn kontaktin funktioon syötetyn id:n perusteella.
export async function getContact(id) {
  const contacts = await apiHaku();
  let contact = contacts.find(contact => contact.id === id);
  return contact ?? null;
}

//Päivittää tietokantaan updates arvot, id:n perusteella.
export async function updateContact(id, updates) {
  await fetch(`http://localhost:5000/editUser/${id}`, {
    method: "PUT",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updates)
  })
  return id; //palauttaa id:n, jotta edit näkymästä pääsee pois.
}

//Poistaa tietokannasta kontaktin id:n perusteella.
export async function deleteContact(id) {
  await fetch(`http://localhost:5000/delete/${id}`, {
    method: "DELETE",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(),
  })

}
