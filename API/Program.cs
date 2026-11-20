using Application.Interfaces;
using Application.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddScoped<IHomePageService, HomePageService>();

var app = builder.Build();

app.UseHttpsRedirection();

app.MapControllers();
app.Run();