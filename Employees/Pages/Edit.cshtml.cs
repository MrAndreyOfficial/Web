using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Employees.Data;
using Employees.Models;

namespace Employees.Pages
{
    public class EditModel(EmployeesContext context) : PageModel
    {
        [BindProperty]
        public Employee Employee { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
                return NotFound();

            var employee =  await context.Employee.FirstOrDefaultAsync(m => m.ID == id);
            
            if (employee == null)
                return NotFound();

            Employee = employee;

            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
                return Page();

            context.Attach(Employee).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (EmployeeExists(Employee.ID))
                    throw;

                return NotFound();
            }

            return RedirectToPage("./Index");
        }

        private bool EmployeeExists(int id) => context.Employee.Any(e => e.ID == id);
    }
}
