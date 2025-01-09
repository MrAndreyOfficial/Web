using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace Employees.Models;

public class Employee
{
    [Key]
    public int ID { get; set; }

    [Required]
    public string FirstName { get; set; } = string.Empty;

    [Required]
    public string LastName { get; set; } = string.Empty;

    [Range(0, 100), Required]
    public int? Age { get; set; }

    [Required]
    public Professions? Profession { get; set; }
}
