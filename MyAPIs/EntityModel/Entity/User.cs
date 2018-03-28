using System;
using System.Collections.Generic;
using System.Text;

namespace HQ.Entity
{
    public class User : BaseEntity
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }
        public string DatabasePassword { get; set; }
    }
}
