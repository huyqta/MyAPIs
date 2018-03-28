using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using HQ.Entity;
using HQ.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

namespace MyAPIs.Controllers
{
    [Route("api/v1/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly EFDbContext _context;

        public CategoryController(EFDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<IActionResult> Categories()
        {
            var totalItems = await _context.Category.ToListAsync();
            return Ok(totalItems);
        }

        [HttpGet]
        [Route("api/categories/{id:int:min(11)}")]
        public IActionResult FindCategoryByID(int id)
        {
            var category = _context.Category.Where(cat => cat.Id == id).FirstOrDefault();
            return Ok(category);
        }

        //[HttpGet]
        //[Route("api/categories")]
        //public async Task<IActionResult> GetAllCategories()
        //{
        //    var totalItems = await _context.Category.ToListAsync();
        //    return Ok(totalItems);
        //}

        [HttpDelete]
        [Route("api/categories/{id:int}")]
        public IActionResult DeleteCategory(int id)
        {
            var category = _context.Category.Where(cat => cat.Id == id).FirstOrDefault();
            _context.Category.Remove(category);
            var result = _context.SaveChanges();
            return Ok(result);
        }

        [HttpPut]
        [Route("api/categories/{id:int}")]
        public IActionResult UpdateExistingCategory(int id, Category category)
        {
            var categoryToUpdate = _context.Category.Where(cat => cat.Id == id).FirstOrDefault();
            categoryToUpdate.Name = category.Name;
            categoryToUpdate.ParentId = category.ParentId;
            categoryToUpdate.ImageUrl = category.ImageUrl;
            categoryToUpdate.Description = category.Description;
            _context.Category.Attach(categoryToUpdate);
            _context.Category.Update(categoryToUpdate);
            var result = _context.SaveChanges();
            return Ok(result);
        }

        [HttpPost]
        [Route("api/categories/")]
        public IActionResult CreateCategory(Category category)
        {
            _context.Category.Attach(category);
            _context.Category.Update(category);
            var result = _context.SaveChanges();
            return Ok(result);
        }
    }
}