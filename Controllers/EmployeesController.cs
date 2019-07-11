using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Models;
using WebApplication2.Services;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeService _employeeService;

        public EmployeesController(EmployeeService employeeService)
        {
            _employeeService = employeeService;
        }


        // GET: api/Employees
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            return _employeeService.Get();
        }

        // GET: api/Employees/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<Employee> Get(string id)
        {
            var employee = _employeeService.Get(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // POST: api/Employees
        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee employee)
        {
            _employeeService.Create(employee);

            return CreatedAtRoute("Get", new { id = employee.Id.ToString() }, employee);
        }

        // PUT: api/Employees/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] Employee employeeIn)
        {
            var employee = _employeeService.Get(id);

            if (employee == null)
            {
                return NotFound();
            }

            _employeeService.Update(id, employeeIn);

            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var employee = _employeeService.Get(id);

            if (employee == null)
            {
                return NotFound();
            }

            _employeeService.Remove(employee.Id);

            return Ok();
        }
    }
}
