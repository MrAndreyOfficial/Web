using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Employees.Data;
using Employees.Models;

namespace Employees.Pages
{
    public class DeleteModel(EmployeesContext context) : PageModel
    {
        [BindProperty]
        public Employee Employee { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var employee = await context.Employee.FirstOrDefaultAsync(m => m.ID == id);

            if (employee == null)
            {
                return NotFound();
            }
            else
            {
                Employee = employee;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

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
