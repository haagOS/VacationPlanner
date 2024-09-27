var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.EnableTryItOutByDefault());
}

app.UseHttpsRedirection();
app.UseCors(c =>
{
    c.AllowAnyOrigin();
    c.AllowAnyHeader();
    c.AllowAnyMethod();
});

app.MapGet("/timestamp", () => DateTimeOffset.Now.ToString("F"))
    .WithName("timestamp")
    .WithOpenApi();

app.Run();