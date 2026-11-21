using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomePageController(IHomePageService homePageService) : ControllerBase
{
    [HttpGet]
    public IActionResult GetMessage()
    {
        var text = homePageService.GetWelcomeMessage();
        return Ok(new { message = text });
    }
}