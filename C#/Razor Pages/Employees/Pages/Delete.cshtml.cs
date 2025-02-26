using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Employees.Models;
using Employees.Data;

namespace Employees.Pages
{
    public class DeleteModel(EmployeesContext context) : PageModel
    {
        [BindProperty]
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

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
                return NotFound();

            var employee = await context.Employee.FindAsync(id);

            if (employee != null)
            {
                Employee = employee;
                context.Employee.Remove(Employee);

                await context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
