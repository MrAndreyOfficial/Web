using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Employees.Data;
using Employees.Models;

namespace Employees.Pages
{
    public class CreateModel(EmployeesContext context) : PageModel
    {
        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Employee Employee { get; set; } = default!;

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
                return Page();

            context.Employee.Add(Employee);
            await context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
