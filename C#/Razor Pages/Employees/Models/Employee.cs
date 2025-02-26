using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Employees.Models;

public class Employee
{
    public int Id { get; set; }

    [Required, Display(Name = "First Name")]
    public string FirstName { get; set; } = string.Empty;

    [Required, Display(Name = "Second Name")]
    public string SecondName { get; set; } = string.Empty;

    [Required, DataType(DataType.Date)]
    public DateOnly Birthday { get; set; }

    [Required, DataType(DataType.Currency), Column(TypeName = "deciman(16, 2)")]
    public decimal Salary { get; set; }

    public Profession Profession { get; set; }
}
