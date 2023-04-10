using System.ComponentModel.DataAnnotations;

namespace MvcWebPackExample.Models;

public class ContactViewModel
{
    [Required]
    [StringLength(30, MinimumLength = 3)]
    public string Subject { get; set; } = null!;

    [Required(ErrorMessage = "Please enter a message.")]
    public string Message { get; set; } = null!;
}
