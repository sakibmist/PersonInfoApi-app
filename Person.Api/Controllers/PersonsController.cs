using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Person.Api.Models;

namespace Person.Api.Controllers
{
    [Route("api/person")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public PersonsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        // GET api/person
        [HttpGet]
        public IActionResult GetAllPersons()
        {
            try
            {
                var persons = _dataContext.Persons.ToList();
                return Ok(persons);
            }
            catch (System.Exception)
            {

                return BadRequest();
            }
        }

        // GET api/persond
        [HttpGet("{id}", Name = "GetPerson")]
        public IActionResult GetPerson(int id)
        {
            try
            {
                var person = _dataContext.Persons.FirstOrDefault(z => z.Id == id);
                return Ok(person);
            }
            catch (System.Exception)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public IActionResult AddPerson(APerson person)
        {
            try
            {
                _dataContext.Persons.Add(person);
                _dataContext.SaveChanges();
                return CreatedAtAction("GetPerson", new { id = person.Id }, person); //201
            }
            catch (System.Exception)
            {
                return BadRequest(); // 400
            }

        }

        // PUT api/person
        [HttpPut("{id}")]
        public IActionResult PutForUpdate(int id, APerson person)
        {
            try
            {
                if (id != person.Id) return BadRequest("Invalid Data");
                var findData = _dataContext.Persons.FirstOrDefault(x => x.Id == id);
                if (findData == null) return NotFound("No Data "); //
                _dataContext.Persons.Update(findData);
                _dataContext.SaveChanges();
                return NoContent(); //204
            }
            catch (System.Exception)
            {

                return BadRequest(); // 400
            }
        }

        // DELETE api/person
        [HttpDelete("{id}")]
        public IActionResult DeletePersonData(int id)
        {

            try
            {
                var findData = _dataContext.Persons.FirstOrDefault(x => x.Id == id);
                if (findData == null) return null;
                _dataContext.Persons.Remove(findData);
                _dataContext.SaveChanges();
                return Ok();
            }
            catch (System.Exception)
            {

                return BadRequest(); // 400
            }

        }
    }

}