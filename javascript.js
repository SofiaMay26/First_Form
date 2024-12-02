
let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let age = document.getElementById('age').value;
    let career = document.getElementById('career').value;
    let profile = document.getElementById('profile').value;
    let skills = document.getElementById('skills').value;
    let employmentHistory = document.getElementById('employmentHistory').value;
    let cellphone = document.getElementById('cellphone').value;
    let firstdate = document.getElementById('firstdate').value;
    let dateto = document.getElementById('dateto').value;
    let language = document.getElementById('language').value;
    let first_education_date = document.getElementById('first_education_date').value;
    let education_date_to = document.getElementById('education_date_to').value;
    let education = document.getElementById('education').value;
      



    // Create query parameters
    let params = new URLSearchParams({
        name: name,
        email: email,
        address: address,
        age: age,
        career: career,
        profile: profile,
        skills: skills,
        employmentHistory: employmentHistory,
        cellphone: cellphone,
        firstdate: firstdate,
        firstdateType: 'date',
        dateto : dateto,
        datetoType : 'date',
        language: language,
        first_education_date: first_education_date,
        education_date_to: education_date_to,
        education:education


    });

   
      
 
    // Redirect to the next page with the data
    window.location.href = `review.html?${params.toString()}`;
});


