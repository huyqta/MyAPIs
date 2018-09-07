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
    public class ProductController : ControllerBase
    {
        private readonly ICoreService<Product> _coreService;

        public ProductController(ICoreService<Product> coreService)
        {
            this._coreService = coreService;
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<ActionResult> Products()
        {
            var totalItems = await _coreService.GetAllAsync();
            return Ok(totalItems);
        }

        [HttpGet]
        [Route("api/products/{id}")]
        public ActionResult GetById(int id)
        {
            var totalItems = _coreService.Get(id);
            return Ok(totalItems);
        }

        [HttpGet]
        [Route("api/products/category/{id}")]
        public ActionResult GetByCategoryId(int id)
        {
            var totalItems = _coreService.GetByForeignId("CategoryId", id);
            return Ok(totalItems);
        }

        [HttpPost]
        [Route("api/products/")]
        public ActionResult Create(Product product)
        {
            var res = _coreService.Insert(product);
            return Ok(res);
        }

        [HttpPut]
        [Route("api/products/")]
        public ActionResult Update(Product product)
        {
            var res = _coreService.Update(product);
            return Ok(res);
        }

        [HttpDelete]
        [Route("api/products/{id}")]
        public ActionResult Delete(int id)
        {
            var res = _coreService.Delete(id);
            return Ok(res);
        }

        /// <summary>
        /// option: 0 or 1
        /// Usage: 
        /// Declare: var years = GetStartEndYear(0);
        /// Start year: years[0];
        /// End year: years[1];
        /// </summary>
        /// <param name="option"></param>
        /// <returns></returns>
        private List<int> GetStartEndYear(int option)
        {
            switch (option)
            {
                case 0:
                    return new List<int>() { DateTime.Now.Year - 1, DateTime.Now.Year + 2 };
                case 1:
                    return new List<int>() { DateTime.Now.Year, DateTime.Now.Year - 1 };
            }
            return null;
        }
    }
}