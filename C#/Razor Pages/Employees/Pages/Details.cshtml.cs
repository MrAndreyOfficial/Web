using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Employees.Data;
using Employees.Models;

namespace Employees.Pages
{
    public class DetailsModel(EmployeesContext context) : PageModel
    {
        public Employee Employee { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
                return NotFound();

            var employee = await context.Employee.FirstOrDefaultAsync(m => m.Id == id);

            if (employee is not null)
            {
                Employee = employee;

                return Page();
            }

            return NotFound();
        }
    }
}
