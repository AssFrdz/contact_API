using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GestionDeContacts.Migrations
{
    /// <inheritdoc />
    public partial class adddata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Adresse", "Email", "Nom", "Prenom", "Tel" },
                values: new object[,]
                {
                    { 1, "1 allee de lespoir", "johnny@gmail.com", "Doe", "John", 523154174L },
                    { 2, "1 allee de la casse", "bebeb@gmail.com", "Bebeb", "Doudou", 213457823L },
                    { 3, "1 allee de loi", "kojdeb@gmail.com", "Debian", "Koji", 142762320L },
                    { 4, "1 allee de leojfe", "kod@gmail.com", "Kilou", "Kodoud", 154235302L }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Contacts",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
