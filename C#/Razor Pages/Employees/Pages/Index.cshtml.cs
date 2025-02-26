using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Employees.Data;
using Employees.Models;

namespace Employees.Pages;

public class IndexModel(EmployeesContext context) : PageModel
{
    public IList<Employee> Employee { get;set; } = default!;

    public async Task OnGetAsync() => Employee = await context.Employee.ToListAsync();
}
