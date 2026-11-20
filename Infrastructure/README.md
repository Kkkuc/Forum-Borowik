# migrations

you need to install dotnet ef
```bash
dotnet tool install --global dotnet-ef
```
If you are using Visual Studio you can use diffrent tools but i don't remember which one


To create new migration:
```bash
dotnet ef migrations add <migration-name> --project Infrastructure --startup-project Api
```

To update database
```bash
dotnet ef database update --project Infrastructure --startup-project API
```

If we want to shorten a commend we need to add MigrationsAssembly (I guess, never tested it)

```Program.cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        b => b.MigrationsAssembly("Infrastructure") // this line
    ));
```

```Api/Api.csproj
<EFMigrationsProject>..\Infrastructure\Infrastructure.csproj</EFMigrationsProject>
```

Then it should work like that:
```bash
cd API
dotnet ef migrations add <migration-name>
dotnet ef database update
```