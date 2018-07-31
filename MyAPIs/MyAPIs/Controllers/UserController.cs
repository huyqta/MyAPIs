using HQ.Entity;
using HQ.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MyAPIs.Helpers;
using MySql.Data.MySqlClient;

namespace MyAPIs.Controllers
{
    [Route("api/v1/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ICoreService<User> _coreService;
        public IConfiguration _configuration;

        public UserController(ICoreService<User> coreService, IConfiguration Configuration)
        {
            this._coreService = coreService;
            this._configuration = Configuration;
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult Users()
        {
            var totalItems = _coreService.GetAll();
            return Ok(totalItems);
        }

        //[HttpGet]
        //[Route("api/users/{id}")]
        //public ActionResult GetUserById(string id)
        //{
        //    var totalItems = _coreService.Get(id);
        //    return Ok(totalItems);
        //}

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

        //[HttpDelete]
        //[Route("api/users/{id}")]
        //public ActionResult DeleteUser(string id)
        //{
        //    var res = _coreService.Delete(id);
        //    return Ok(res);
        //}

        //[HttpGet]
        //[Route("api/users/createdb/{id}")]
        //public ActionResult Users(string id)
        //{
        //    var username = _coreService.Get(id);
        //    var dbname = "db_" + username.Username;
        //    var password = username.DatabasePassword;
            
        //    var conn = new MySqlConnection(this._configuration.GetConnectionString("DefaultConnection").ToString());
        //    conn.Open();
        //    var command = new MySqlCommand();
        //    command.CommandText = string.Format(MySqlHelpers.CREATE_DATABASE, dbname);
        //    command.Connection = conn;
        //    var result = command.ExecuteNonQuery();
        //    conn.Close();
        //    return Ok(result + " - " + dbname);
        //}
    }
}
