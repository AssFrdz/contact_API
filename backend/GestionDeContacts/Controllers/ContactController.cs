using GestionDeContacts.Data;
using GestionDeContacts.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Transactions;

namespace GestionDeContacts.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {

        /*
        public static List<Contact> contacts = new List<Contact>
        {
            new Contact{Id=1,Prenom="John",Nom="Doe",Email="johnny@gmail.com",Adresse="1 allee de lespoir",Tel=0523154174 },
            new Contact{Id=2,Prenom="Doudou",Nom="Bebeb",Email="bebeb@gmail.com",Adresse="1 allee de la casse",Tel=0213457823 },
            new Contact{Id=3,Prenom="Koji",Nom="Debian",Email="kojdeb@gmail.com",Adresse="1 allee de loi",Tel=142762320 },
            new Contact{Id=4,Prenom="Kodoud",Nom="Kilou",Email="kod@gmail.com",Adresse="1 allee de leojfe",Tel=154235302 }
        };*/


       private readonly ContactAPIContext _context;


        public ContactController(ContactAPIContext context)
        {
            _context = context;
        }

        

        [HttpGet]
        public async Task<ActionResult<List<Contact>>> GetContacts()
        {
            return Ok(await _context.Contacts.ToListAsync());
        }

      

        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContactById(int id)
        {

            var contact = await _context.Contacts.FindAsync(id);

            if (contact == null) return NotFound();

            return Ok(contact);
        }

      
      [HttpPost]

      public async Task<ActionResult<Contact>> AddContact(Contact contact)
      {
             if(contact== null) return BadRequest();

              _context.Contacts.Add(contact);

              await _context.SaveChangesAsync();

              return CreatedAtAction(nameof(GetContactById), new {Id = contact.Id}, contact);
      }


        
     [HttpPut("{id}")]
     public async Task<IActionResult> UpdateContact(int id, Contact contact)
     {
         var currentContact =  await _context.Contacts.FindAsync(id);

         if (currentContact == null) return NotFound();

         currentContact.Nom = contact.Nom;
         currentContact.Prenom = contact.Prenom;
         currentContact.Email = contact.Email;
         currentContact.Adresse = contact.Adresse;
         currentContact.Tel = contact.Tel;

        await _context.SaveChangesAsync();

         return NoContent();

     }



     [HttpDelete("{id}")]

     public async Task<IActionResult> DeleteContact(int id)
     {
         var currentContact = await _context.Contacts.FindAsync(id);

         if (currentContact == null) return NotFound();

         _context.Contacts.Remove(currentContact);

           await _context.SaveChangesAsync();
         return NoContent();
     }


        /*

      */






    }
}
