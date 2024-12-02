
// Get the query parameters from the URL
let params = new URLSearchParams(window.location.search);

// Retrieve individual parameters
let name = params.get('name');
let email = params.get('email');
let address = params.get('address');
let career = params.get('career');
let profile = params.get('profile');
let skills = params.get('skills');
let employmentHistory = params.get('employmentHistory');
let cellphone = params.get('cellphone');
let first_date = params.get('first_date');
let date_to = params.get('date_to');
let language = params.get('language');
let first_education_date = params.get('first_education_date');
let education_date_to = params.get('education_date_to');
let education = params.get('education');

// Display the data on the page
document.querySelector('#nameDisplay').innerText = `${name}`;
document.querySelector('#emailDisplay').innerText = ` ${email}`;
document.querySelector('#addressDisplay').innerText = `${address}`;
document.querySelector('#careerDisplay').innerText = ` ${career}`;
document.querySelector('#profileDisplay').innerText = ` ${profile}`;
document.querySelector('#skillsDisplay').innerText = ` ${skills}`;
document.querySelector('#employmentHistoryDisplay').innerText = ` ${employmentHistory}`;
document.querySelector('#cellphoneDisplay').innerText = ` ${cellphone}`;
document.querySelector('#dateDisplay').innerText = ` ${first_date} to ${date_to}`;
document.querySelector('#languageDisplay').innerText = ` ${language}`;
document.querySelector('#educationdateDisplay').innerText = ` ${first_education_date} to ${education_date_to}`;
document.querySelector('#educationDisplay').innerText = ` ${education}`;

window.onload = function () {
    window.print(); // Trigger print dialog on page load
};
