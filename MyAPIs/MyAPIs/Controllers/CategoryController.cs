using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using HQ.Entity;
using HQ.Service;
using HQ.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;

namespace MyAPIs.Controllers
{
    [Route("api/v1/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ICoreService<Category> _coreService;
        private readonly EFDbContext _context;

        public CategoryController(ICoreService<Category> coreService)
        {
            this._coreService = coreService;
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult Categories()
        {
            var totalItems = _coreService.GetAll();
            return Ok(totalItems);
        }

        [HttpGet]
        [Route("api/categories/{id}")]
        public ActionResult GetCategoryById(int id)
        {
            var totalItems = _coreService.Get(id);
            return Ok(totalItems);
        }

        [HttpPost]
        [Route("api/categories/")]
        public ActionResult CreateCategory(Category category)
        {
            var res = _coreService.Insert(category);
            return Ok(res);
        }

        [HttpPut]
        [Route("api/categories/")]
        public ActionResult UpdateCategory(Category category)
        {
            var res = _coreService.Update(category);
            return Ok(res);
        }

        [HttpDelete]
        [Route("api/categories/{id}")]
        public ActionResult DeleteCategory(int id)
        {
            var res = _coreService.Delete(id);
            return Ok(res);
        }
    }
}