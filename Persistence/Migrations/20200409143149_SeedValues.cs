using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedValues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Age", "Etternavn", "Navn", "Role", "Type" },
                values: new object[] { 1, 24, "Messaritakis", "Alex", "Student", "Deltaker" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Age", "Etternavn", "Navn", "Role", "Type" },
                values: new object[] { 2, 43, "Ghanist", "Dimi", "Ansatt", "Admin" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: 2);
        }
    }
}
