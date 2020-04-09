using System;
using Microsoft.EntityFrameworkCore;
using Domain;


namespace Persistence
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Value> Values { get; set; }  //table name inside sqlite

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
            .HasData(
                        new Value {Id= 1 , Navn = "Alex", Etternavn = "Messaritakis", Age= 24, Role= "Student", Type= "Deltaker"},
                        new Value {Id= 2 , Navn = "Dimi", Etternavn = "Ghanist", Age= 43, Role= "Ansatt", Type= "Admin"}
            );
        }
    }
}
