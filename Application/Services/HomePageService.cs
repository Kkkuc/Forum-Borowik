using Application.Interfaces;

namespace Application.Services;

public class HomePageService : IHomePageService
{
    public string GetWelcomeMessage()
    {
        return "Witajcie w mojej kuchni!!! El primo 67";
    }
}