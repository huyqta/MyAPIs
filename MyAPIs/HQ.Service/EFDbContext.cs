using HQ.Entity;
using Microsoft.EntityFrameworkCore;
using System;

namespace HQ.Service
{
    public class EFDbContext : DbContext
    {
        public EFDbContext(DbContextOptions<EFDbContext> options) : base(options)
        {
            
        }

        public DbSet<Product> Product { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Account> Account { get; set; }
        public DbSet<Article> Article { get; set; }
        public DbSet<Book> Book { get; set; }
        public DbSet<User> User { get; set; }
    }
}
