using Microsoft.EntityFrameworkCore;
using Employees.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddDbContext<EmployeesContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("EmployeesContext") ?? throw new InvalidOperationException("Connection string 'EmployeesContext' not found.")));

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseRouting();

app.MapStaticAssets();
app.MapRazorPages()
   .WithStaticAssets();

app.Run();
