// Contact Form
const contactForm = document.querySelector('#contact-form');

// Event Listener for contact form submission
contactForm.addEventListener('submit', validateForm);



// Validate form function
function validateForm(e) {
    e.preventDefault();
    let report;
    // Form element values
    const firstName = document.querySelector('#first-name').value,
          lastName = document.querySelector('#last-name').value,
          email = document.querySelector('#email-address').value,
          phoneNum = document.querySelector('#phone').value,
          purposeOfContact = document.querySelector('#purpose').value,
          comment = document.querySelector('#comment').value;

          // dynamic div element for error report
          let reportCard = document.createElement('div');
          reportCard.className = 'card card-body';
          // Contact form heading
          const quoteHeading = document.querySelector('#quote-heading');
          // contact form Parent element
          const contactFormParentDiv = document.querySelector('#quote-parent');
          contactFormParentDiv.insertBefore(reportCard,quoteHeading);
          // Time out function for error message
          setTimeout(function(){
            reportCard.style.display = 'none';
          }, 3000);

          // checking input values of the first name field
          if(firstName == ''){
            report = 'first name is required!';
            reportCard.innerText = report;
            return false;
          }else if(!isNaN(firstName)){
            report = 'first name only accepts alphabetic characters!';
            reportCard.innerText = report;
            return false;
          }else{
            firstName;
          }

          // checking input values of the last name field
          if(lastName == ''){
            report = 'last name is required!';
            reportCard.innerText = report;
            return false;
          }else if(!isNaN(lastName)){
            report = 'last name only accepts alphabetic characters!';
            reportCard.innerText = report;
            return false;
          }else{
            lastName;
          }

          // checking input values of the email address field

          if(email == ''){
            report = 'Email adress is required';
            alert(report);
            return false;
          }
    
}
// console.log(contactForm);