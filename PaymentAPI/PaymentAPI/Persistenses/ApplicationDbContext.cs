using Microsoft.EntityFrameworkCore;
using PaymentAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PaymentAPI.Persistenses
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options){}

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
