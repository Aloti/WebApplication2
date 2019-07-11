using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Models;
using WebApplication2.Services;
using X.PagedList;

namespace WebApplication2.Controllers
{
    public class WebController : Controller
    {
        private readonly EmployeeService _employeeService;

        public WebController(EmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        // GET: /<controller>/
        public IActionResult Index(string currentSort, string sortOrder, string currentFilter, string searchString, int? page)
        {
            List<Employee> employeeList = _employeeService.Get();
            ViewBag.NameSortParam = sortOrder == "Name" ? "name_desc" : "Name";
            ViewBag.LastnameSortParam = sortOrder == "Lastname" ? "lastname_desc" : "Lastname";
            ViewBag.EmailSortParam = sortOrder == "Email" ? "email_desc" : "Email";
            ViewBag.PhoneSortParam = sortOrder == "Phone" ? "phone_desc" : "Phone";

            if (!String.IsNullOrEmpty(searchString))
            {
                employeeList = employeeList.Where(s => s.Email.Contains(searchString)
                                                    || s.Name.ToString().Contains(searchString)
                                                    || s.Lastname.Contains(searchString)
                                                    || s.Phone.Contains(searchString)).ToList();
                ViewBag.CurrentFilter = searchString;
            }
            else
            {
                if (!String.IsNullOrEmpty(currentFilter))
                {
                    ViewBag.CurrentFilter = currentFilter;
                    employeeList = employeeList.Where(s => s.Email.Contains(currentFilter)
                                                                || s.Name.Contains(currentFilter)
                                                                || s.Lastname.ToString().Contains(currentFilter)
                                                        || s.Phone.Contains(currentFilter)).ToList();
                }
            }

            if (String.IsNullOrEmpty(sortOrder))
            {
                sortOrder = currentSort;
            }
            switch (sortOrder)
            {
                case "Name":
                    employeeList = employeeList.OrderBy(s => s.Name).ToList();
                    ViewBag.CurrentSort = sortOrder;
                    break;
                case "name_desc":
                    employeeList = employeeList.OrderByDescending(s => s.Name).ToList();
                    ViewBag.CurrentSort = sortOrder;
                    break;
                case "Lastname":
                    employeeList = employeeList.OrderBy(s => s.Lastname).ToList();
                    ViewBag.CurrentSort = sortOrder;
                    break;
                case "lastname_desc":
                    employeeList = employeeList.OrderByDescending(s => s.Lastname).ToList();
                    ViewBag.CurrentSort = sortOrder;
                    break;
                case "Email":
                    employeeList = employeeList.OrderBy(s => s.Email).ToList();
                    ViewBag.CurrentSort = sortOrder;
                    break;
                case "email_desc":
                    employeeList = employeeList.OrderByDescending(s => s.Email).ToList();
                    ViewBag.CurrentSort = sortOrder;
                    break;
                case "Phone":
                    employeeList = employeeList.OrderBy(s => s.Phone).ToList();
                    ViewBag.CurrentSort = sortOrder;
                    break;
                case "phone_desc":
                    employeeList = employeeList.OrderByDescending(s => s.Phone).ToList();
                    ViewBag.CurrentSort = sortOrder;
                    break;

            }

            int pageSize = 10;
            var pageNumber = page ?? 1;
            return View(employeeList.ToPagedList(pageNumber, pageSize));
        }

        [HttpGet]
        public IActionResult EmployeeDetail(string Id)
        {
            Employee employee;
            if (Id != null)
            {
                employee = _employeeService.Get(Id);
            }
            else
            {
                employee = new Employee();
            }

            return View(employee);
        }


        [HttpPost]
        public IActionResult EmployeeDetail(Employee employee)
        {
            if (employee.Id != null)
            {
                Employee employee2 = _employeeService.Get(employee.Id);
                if (employee != null)
                {
                    _employeeService.Update(employee.Id, employee);
                }
            }
            else
            {
                _employeeService.Create(employee);
            }


            return RedirectToAction("Index", "Web");
        }


        // POST: Web/Create
        [HttpGet]
        public IActionResult RemoveEmployee(string Id)
        {
            Employee employee = _employeeService.Get(Id);
            if (employee != null)
            {
                _employeeService.Remove(Id);
            }
            else
            {
                return NotFound();
            }


            return RedirectToAction("Index", "Web");
        }

        [HttpGet]
        public IActionResult Detail(string Id)
        {
            Employee employee;
            if (Id != null)
            {
                employee = _employeeService.Get(Id);
            }
            else
            {
                employee = new Employee();
            }
            ViewBag.employee = employee;
            return View(employee);
        }

        [HttpPost]
        public IActionResult DetailEmployee(Employee input)
        {
            if (input.Id != null)
            {
                Employee employee = _employeeService.Get(input.Id);
                if (employee != null)
                {
                    _employeeService.Update(input.Id, input);
                }
            }
            else
            {
                _employeeService.Create(input);
            }


            return RedirectToAction("Index", "Web");
        }
    }
}