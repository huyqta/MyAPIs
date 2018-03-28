using HQ.Entity;
using HQ.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyAPIs.Controllers
{
    [Route("api/v1/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ICoreService<User> _coreService;

        public UserController(ICoreService<User> coreService)
        {
            this._coreService = coreService;
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult Users()
        {
            var totalItems = _coreService.GetAll();
            return Ok(totalItems);
        }

        [HttpGet]
        [Route("api/users/{id}")]
        public ActionResult GetUserById(string id)
        {
            var totalItems = _coreService.Get(id);
            return Ok(totalItems);
        }

        [HttpPost]
        [Route("api/users/")]
        public ActionResult CreateUser(User user)
        {
            var res = _coreService.Insert(user);
            return Ok(res);
        }

        [HttpPut]
        [Route("api/users/")]
        public ActionResult UpdateUser(User user)
        {
            var res = _coreService.Update(user);
            return Ok(res);
        }

        [HttpDelete]
        [Route("api/users/{id}")]
        public ActionResult DeleteUser(string id)
        {
            var res = _coreService.Delete(id);
            return Ok(res);
        }
    }
}
