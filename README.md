Forum Borowik

Karole dwa


remember to use
```bash
dotnet restore
```
(rider does it automaticly)
Migration how to is in `Infrastructure/README.md`

In TODO.MD

### 1. Environment variables (Docker)
In the root directory of the repository, create a `.env` file:
```env
POSTGRES_DB=your_database
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
```

### 2. Build

```bash
docker compose build
docker compose up
```


### 3. Workflow
You can work entirely using Docker, though it is not recommended because after every code change you have to run:

```bash
docker compose restart backend
```

Alternatively, if you prefer that workflow, you can add the "watch" flag to the ENTRYPOINT in `API/Dockerfile`:
```API/Dockerfile
ENTRYPOINT ["dotnet", "watch", "run", "etc"]
```
For watch to work you need to add polling in vite.config.ts


There is a 3rd option, which is running the backend directly via your IDE — for this, you need to configure the connection string.

### 4. Working via IDE appsettings.Development.json
You can edit the file mentioned above, just make sure not to commit it to Git!

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

### 5. Working via IDE user-secrets

In this case, leave `appsettings.Development.json` untouched.

Write:
(Apparently maybe init isn't needed because we have <UserSecretsId> in csproj)
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

Due to Windows enforcing localhost, you can access our services here:


  - Frontend: `http://192.168.126.50:5000`
  - Backend: `http://192.168.126.100:3000`
  - Database `postgres://192.168.126.150:5432`

if not, they will be here

  - Frontend: `http://localhost:5000`
  - Backend: `http://localhost:3000`
  - Database `postgres://localhost:5432`
