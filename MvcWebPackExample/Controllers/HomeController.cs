using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MvcWebPackExample.Models;

namespace MvcWebPackExample.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index() => View();

    public IActionResult Privacy() => View();

    public IActionResult Contact() => View();

    [HttpPost]
    public IActionResult Contact(ContactViewModel contact)
    {
        if (ModelState.IsValid)
        {
            return RedirectToAction("Index");
        }

        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
