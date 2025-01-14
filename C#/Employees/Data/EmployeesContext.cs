using Microsoft.EntityFrameworkCore;
using Employees.Models;

namespace Employees.Data
{
    public class EmployeesContext(DbContextOptions<EmployeesContext> options) : DbContext(options)
    {
        public DbSet<Employee> Employee { get; set; } = default!;
    }
}
