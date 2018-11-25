using Microsoft.EntityFrameworkCore;

namespace PersonInfo.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public virtual DbSet<Person> Persons { get; set; }

    }
}