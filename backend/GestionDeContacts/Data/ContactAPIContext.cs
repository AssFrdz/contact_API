using GestionDeContacts.Models;
using Microsoft.EntityFrameworkCore;

namespace GestionDeContacts.Data
{
    public class ContactAPIContext : DbContext
    {
        public ContactAPIContext(DbContextOptions<ContactAPIContext> options) : base(options) { 
        
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Contact>().HasData(

            new Contact { Id = 1, Prenom = "John", Nom = "Doe", Email = "johnny@gmail.com", Adresse = "1 allee de lespoir", Tel = 0523154174 },
            new Contact { Id = 2, Prenom = "Doudou", Nom = "Bebeb", Email = "bebeb@gmail.com", Adresse = "1 allee de la casse", Tel = 0213457823 },
            new Contact { Id = 3, Prenom = "Koji", Nom = "Debian", Email = "kojdeb@gmail.com", Adresse = "1 allee de loi", Tel = 142762320 },
            new Contact { Id = 4, Prenom = "Kodoud", Nom = "Kilou", Email = "kod@gmail.com", Adresse = "1 allee de leojfe", Tel = 154235302 }
                
            );

         
        }

        public DbSet<Contact> Contacts { get; set; }

    }
}
