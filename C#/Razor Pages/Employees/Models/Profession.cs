using System.ComponentModel.DataAnnotations;

namespace Employees.Models;

public enum Profession
{
    Programmer,
    Designer,

    [Display(Name = "Data Analyst")]
    DataAnalyst,
}
