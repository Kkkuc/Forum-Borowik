using Application.Interfaces;

namespace Application.Services;

public class HomePageService : IHomePageService
{
    public string GetWelcomeMessage()
    {
        return "Worldh ello Kucu";
    }
}