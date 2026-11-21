Wish connection string would look like that

```appsettings.Development.json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=your_database;Username=your_user;Password=your_password"
  }
}
```

or by secrets

```bash
cd API
dotnet user-secrets init
dotnet user-secrets set "ConnectionStrings:DefaultConnection" "Host=localhost;Port=5432;Database=your_database;Username=your_user;Password=your_password"
```

Alternatively, you can set them through your IDE, e.g., in Rider:API -> Tools -> .Net User Secrets
and paste the following:

```secrets.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=your_database;Username=your_user;Password=your_password"
  }
}
```

Need to specify ports and create docker-compose and dockerfiles and .env :>