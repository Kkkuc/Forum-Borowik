using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Models;

public class TestModel
{
    [Key]
    [Column("pk_test-model_id", TypeName = "uuid")]
    public Guid TestModelId { get; set; }
    
    [Required]
    [MaxLength(255)]
    [Column("name", TypeName = "varchar(255)")]
    public string Name { get; set; } = string.Empty;

}