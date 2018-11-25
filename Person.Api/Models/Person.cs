using System;
using System.ComponentModel.DataAnnotations;

namespace Person.Api.Models
{
    public class APerson
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        [StringLength(50)]
        public string Address { get; set; }

        [Required] 
        public DateTime CreatedAt { get; set; } = DateTime.Now;

    }
}