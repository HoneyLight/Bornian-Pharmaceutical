// The Supply The Sign Up Page With The Current Year 
const firstDate = new Date().getFullYear();
document.getElementById("signUpDate").textContent = "© Bornian Pharmaceuticals " + firstDate;

// The Sign Up Page Submit Button
const signUp = document.getElementById("signUpSubmit");
const signUpUserName = document.getElementById("signUpUserFullName");
const signUpUserEmail = document.getElementById("signUpUserEmail");
const signUpUserPassword = document.getElementById("signUpUserPassword");

function signUpSubmit() {
    function validateInputs() {
        const fullName = signUpUserName.value.trim();
        const email = signUpUserEmail.value.trim();
        const password = signUpUserPassword.value.trim();
        let isValid = true;

        if (fullName === "") {
            document.getElementById("signUpUserFullNameError").textContent = "Please enter your name";
            isValid = false;
        } else {
            document.getElementById("signUpUserFullNameError").textContent = "";
        }

        if (email === "") {
            document.getElementById("signUpUserEmailError").textContent = "Please enter your email";
            isValid = false;
        } else {
            document.getElementById("signUpUserEmailError").textContent = "";
        }

        if (password === "") {
            document.getElementById("signUpUserPasswordError").textContent = "Please enter your password";
            isValid = false;
        } else {
            document.getElementById("signUpUserPasswordError").textContent = "";
        }

        if (signUpUserName.value != "") {
            document.getElementById("signUpUserFullNameError").textContent = "";
        }
        if (signUpUserEmail.value != "") {
            document.getElementById("signUpUserEmailError").textContent = "";
        }
        if (signUpUserPassword.value.length < 8 && signUpUserPassword.value != "") {
            document.getElementById("signUpUserEmailError").textContent = "";
        }
        if (isValid) {
            const usersData = {
                fullName: fullName,
                email: email,
                password: password
            };
            const existingRegistration = JSON.parse(localStorage.getItem("usersData")) || [];
            existingRegistration.push(usersData);
            localStorage.setItem("usersData", JSON.stringify(existingRegistration));

            // Display success message
            alert("Your account has been created successfully");

            // Link To Another Page Which Is Login If The Account Was Successffully Created
            window.location.href = "signIn.html";

            // Clear input fields
            signUpUserName.value = "";
            signUpUserEmail.value = "";
            signUpUserPassword.value = "";

        }
        return isValid;
    }

    // Call the validateInputs() function
    validateInputs();
}

// Login Page Js

function signInButton() {
    let loginemailInput = document.getElementById("loginemail");
    let loginpasswordInput = document.getElementById("loginpassword");
    let loginemailError = document.getElementById("loginemailerror");
    let loginpasswordError = document.getElementById("loginpassworderror");
    if (loginemailInput.value === "") {
        loginemailError.textContent = "Email is required.";
    }


    if (loginpasswordInput.value === "") {
        loginpasswordError.textContent = "Password is required.";
    }

    // I Want To Check If The Email Exists In The LocalStorage
    const storedData = localStorage.getItem("usersData");
    if (storedData) {
        const usersData = JSON.parse(storedData);
        const matchedUserData = usersData.find(user => user.email === loginemailInput.value);
        if (matchedUserData) {
            // If The Email Exists In The Local Storage, I Want To Check If The Password Matches 
            if (matchedUserData.password === loginpasswordInput.value) {
                // If The Password Matches, I Want To Proceed With The Login
                loginpasswordInput.value = matchedUserData.password;
                alert("Login Successful!");
                loginemailInput.value == "";
                loginpasswordInput.value == "";
                setTimeout(function () {
                    loginemailInput.value == "";
                    loginpasswordInput.value == "";
                    window.location.href = "./index.html";
                }, 500);
            } else {
                // If The Password Did Not Match Or Was Not Found Or Was Invalid
                alert('Login unsuccessful. Invalid password.');
                setTimeout(function () {
                    // loginemailInput.value == "";
                    loginpasswordInput.value == "";
                }, 500);
            }
        } else {
            // If The Email Was Not Found Or Did Not Match
            alert('Login unsuccessful. Invalid email.');
        }
    } else {
        // If There Is No Data In The Local Storage For Any Reason 
        alert("404 Not Found, Please resgister first");
    }
};



// index Page Js
function physicianFunction() {
    window.location.href = "appointment.html";
}

function personalDiagnosis() {
    window.location.href = "p_diagnosis.html";
}

// Personal Diagnosis Js

window.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed(document.getElementById('typed-text'), {
        strings: ["Bornian Pharmaceuticals empowers patients <br> with personalized diagnosis aid, enhancing <br> care and well-being."],
        typeSpeed: 50,
        showCursor: false,
    });
});

function submit_Personal_Diagnosis() {
    // Malaria
    let headAche = document.getElementById("headAche");
    let stomachPain = document.getElementById("stomachPain");
    let fever = document.getElementById("fever");
    let bodyPain = document.getElementById("bodyPain");

    if (
        headAche.checked ||
        stomachPain.checked ||
        fever.checked ||
        bodyPain.checked) {
        setTimeout(function () {

            let malariaOutput = `
        <div class="card text-center" id="successCard">
        <div class="card-body">
          <h5 class="card-title">You're diagnosed with Malaria</h5>
          <p class="card-text">Kindly locate the closest pharmacy and buy Lomartem and Paracetamol 5mg. Take one in the morning and evening.</p>
          <p class="card-text">It would cost at least #1,200</p>
          <p class="card-text">Kindly take a screenshot of this along</p>
        </div>
      </div>
`;
            document.body.innerHTML += malariaOutput;
            // Refresh the page after 10 seconds
            setTimeout(function () {
                location.reload();
            }, 100000);
        }, 10);
    }

    // Mental Health
    let lossOfSleep = document.getElementById("lossOfSleep");
    let lossOfMemory = document.getElementById("lossOfMemory");
    let depression = document.getElementById("depression");
    let lossOfAppetite = document.getElementById("lossOfAppetite");

    if (
        lossOfSleep.checked ||
        lossOfMemory.checked ||
        depression.checked ||
        lossOfAppetite.checked
    ) {
        setTimeout(function () {
            let mentalHealthOutput = `
    <div class="card text-center" id="successCard">
      <div class="card-body">
        <h5 class="card-title">You're diagnosed with Schizophrenia</h5>
        <p class="card-text">Kindly locate the closest pharmacy and buy Haloperidol. Take one in the morning and evening.</p>
        <p class="card-text">It would cost approximately #5,400 in total.</p>
        <p class="card-text">Kindly take a screenshot of this along</p>
      </div>
    </div>`;
            document.body.innerHTML += mentalHealthOutput;
            // Refresh the page after 10 seconds
            setTimeout(function () {
                location.reload();
            }, 100000);
        }, 10);
    }

    // Ulcer
    let abdominalDiscomfort = document.getElementById("abdominalDiscomfort");
    let chestBurn = document.getElementById("chestBurn");
    let indigestion = document.getElementById("indigestion");
    let nausea = document.getElementById("nausea");
    if (abdominalDiscomfort.checked || chestBurn.checked || indigestion.checked || nausea.checked) {
        setTimeout(function () {
            let ulcerOutput = `
    <div class="card text-center" id="successCard">
      <div class="card-body">
        <h5 class="card-title">You're diagnosed with Ulcer</h5>
        <p class="card-text">Kindly locate the closest pharmacy and buy Omeprazole. Take one in the morning and evening.</p>
        <p class="card-text">It would cost approximately #3,400 in total.</p>
        <p class="card-text">Kindly take a screenshot of this along</p>
      </div>
    </div>`;
            document.body.innerHTML += ulcerOutput;

            // Refresh the page after 10 seconds
            setTimeout(function () {
                location.reload();
            }, 100000);
        }, 10);
    }

    // Dermatology
    let skinRashes = document.getElementById("skinRashes");
    let acne = document.getElementById("acne");
    let eczema = document.getElementById("eczema");
    let blackHead = document.getElementById("blackHead");
    if (skinRashes.checked ||
        acne.checked ||
        eczema.checked ||
        blackHead.checked) {
        setTimeout(function () {
            let dermatologyOutput = `
                    <div class="card text-center" id="successCard">
              <div class="card-body">
                <h5 class="card-title">You're diagnosed with A Skin Disease</h5>
                <p class="card-text">Kindly locate the closest pharmacy and buy Azathioprine (Imuran) or methotrexate (Trexall). Take one in the morning and evening.</p>
                <p class="card-text">It would cost approximately #7,400 in total.</p>
                <p class="card-text">Kindly take a screenshot of this along</p>
              </div>
            </div>`;
            document.body.innerHTML += dermatologyOutput;
            // Refresh the page after 10 seconds
            setTimeout(function () {
                location.reload();
            }, 100000);
        }, 10);
    }

    // Allergies
    let sneezing = document.getElementById("sneezing");
    let coughing = document.getElementById("coughing");
    let itchyEyes = document.getElementById("itchyEyes");
    let itchyThroat = document.getElementById("itchyThroat");
    if (sneezing.checked ||
        coughing.checked ||
        itchyEyes.checked ||
        itchyThroat.checked) {
        setTimeout(function () {
            let allergiesOutput = `
            <div class="card text-center" id="successCard">
      <div class="card-body">
        <h5 class="card-title">You're diagnosed with an Allergy</h5>
        <p class="card-text">Kindly locate the closest pharmacy and buy Loratadine or Piritin. Take one in the morning and evening.</p>
        <p class="card-text">It would cost approximately #1,000 in total.</p>
        <p class="card-text">Kindly take a screenshot of this along</p>
      </div>
    </div>`
            document.body.innerHTML += allergiesOutput;
            // Refresh the page after 10 seconds
            setTimeout(function () {
                location.reload();
            }, 100000);
        }, 10);
    }

    // Migraine
    let blurredVision = document.getElementById("blurredVision");
    let fainting = document.getElementById("fainting");
    let pulsatingPain = document.getElementById("pulsatingPain");
    let throbbing = document.getElementById("throbbing");
    if (blurredVision.checked ||
        fainting.checked ||
        pulsatingPain.checked ||
        throbbing.checked) {
        setTimeout(function () {
            let migraineOutput = `
            <div class="card text-center" id="successCard">
            <div class="card-body">
              <h5 class="card-title">You're diagnosed with Migraine</h5>
              <p class="card-text">Kindly locate the closest pharmacy and buy Sumatriptan or Rizaptriptan or Acetaminophen. Take one in the morning and evening.</p>
              <p class="card-text">It would cost approximately #2,500 in total.</p>
              <p class="card-text">Kindly take a screenshot of this along</p>
            </div>
          </div>`
            document.body.innerHTML += migraineOutput;
            // Refresh the page after 10 seconds
            setTimeout(function () {
                location.reload();
            }, 100000);
        }, 10);
    }

    // Hypertension 
    let shortBreathe = document.getElementById("shortBreathe");
    let dizziness = document.getElementById("dizziness");
    let chestPain = document.getElementById("chestPain");
    let irregularHeartbeat = document.getElementById("irregularHeartbeat");
    if (shortBreathe.checked ||
        dizziness.checked ||
        chestPain.checked ||
        irregularHeartbeat.checked) {
        setTimeout(function () {
            let hypertensionOutput = `
            <div class="card text-center" id="successCard">
            <div class="card-body">
              <h5 class="card-title">You're diagnosed with High Blood Pressure</h5>
              <p class="card-text">Kindly locate the closest pharmacy and buy Prednisolone Or Amlodipine Or Losartan. Take one in the morning and evening.</p>
              <p class="card-text">It would cost approximately #6,500 in total.</p>
              <p class="card-text">Kindly take a screenshot of this along</p>
            </div>
          </div>`;
            document.body.innerHTML += hypertensionOutput;
            // Refresh the page after 10 seconds
            setTimeout(function () {
                location.reload();
            }, 100000);
        }, 10);
    }

    // Pneumonia
    let clammySkin = document.getElementById("clammySkin");
    let chills = document.getElementById("chills");
    let fatigue = document.getElementById("fatigue");
    let shortnessOfBreathe = document.getElementById("shortnessOfBreathe");
    if (clammySkin.checked ||
        chills.checked ||
        fatigue.checked ||
        shortnessOfBreathe.checked) {
        setTimeout(function () {
            let pneumoniaOutput = `
                <div class="card text-center" id="successCard">
            <div class="card-body">
              <h5 class="card-title">You're diagnosed with Pneumonia</h5>
              <p class="card-text">Kindly locate the closest pharmacy and buy Azithromycin or Clarithromycin or sulfamethoxazole. Take one in the morning and evening.</p>
              <p class="card-text">It would cost approximately #8,300 in total.</p>
              <p class="card-text">Kindly take a screenshot of this along.</p>
            </div>
          </div>`;
            document.body.innerHTML += pneumoniaOutput;
            // Refresh the page after 10 seconds
            setTimeout(function () {
                location.reload();
            }, 100000);
        }, 10);
    }


    if (!myTextArea.value) {
        alert("You did not fill the textarea");
    } else if (myTextArea.value) {
        alert("You have been linked to the book an appointment with a doctor or specialist");
        window.location.href = "appointment.html";
    }

}

let logOutButton = document.getElementById("logOutBtn");
function logOut() {
    alert("You have logged out successfully!");
    window.location.href = "signIn.html";
}


// Appointment Page Js 
function bookAppointment() {
    let fullname = document.getElementById('fullname').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let write = document.getElementById('write').value;
    let doctorCategory = document.getElementById('doctorCategory').value;

    if (!fullname || !gender || !email || !phone || !date || !time || !write || !doctorCategory) {
        alert('Please fill out all the fields to book an appointment with a doctor.');
        return;
    }

    let bornianDoctors = [
        {
            title: 'Your Booking Appointment Invoice',
            Doctor_name: "Doctor Okoli",
            specialization: "General Practitioner",
            time: time,
            date: date,
            write: write
        },
        {
            title: 'Your Booking Appointment Invoice',
            Doctor_name: "Doctor Ishaya",
            specialization: "Cardiologist",
            time: time,
            date: date,
            write: write
        },
        {
            title: 'Your Booking Appointment Invoice',
            Doctor_name: "Doctor Micheal",
            specialization: "Dermatologist",
            time: time,
            date: date,
            write: write
        },
        {
            title: 'Your Booking Appointment Invoice',
            Doctor_name: "Doctor Nana",
            specialization: "Neurologist",
            time: time,
            date: date,
            write: write
        },
        {
            title: 'Your Booking Appointment Invoice',
            Doctor_name: "Doctor Kevin",
            specialization: "Gastroentologist",
            time: time,
            date: date,
            write: write
        },
        {
            title: 'Your Booking Appointment Invoice',
            Doctor_name: "Doctor Felix",
            specialization: "Orthopedict",
            time: time,
            date: date,
            write: write
        },
        {
            title: 'Your Booking Appointment Invoice',
            Doctor_name: "Doctor Jasper",
            specialization: "Pulmonologist",
            time: time,
            date: date,
            write: write
        },
        {
            title: 'Your Booking Appointment Invoice',
            Doctor_name: "Doctor Brown",
            specialization: "Psychologist",
            time: time,
            date: date,
            write: write
        },
        {
            title: 'Your Booking Appointment Invoice',
            Doctor_name: "Doctor Ryan",
            specialization: "Opathalmologist",
            time: time,
            date: date,
            write: write
        }
    ];

    let selectedDoctor = '';
    switch (doctorCategory) {
        case 'generalPractitioner':
            selectedDoctor = bornianDoctors[0];
            break;
        case 'cardiologist':
            selectedDoctor = bornianDoctors[1];
            break;
        case 'dermatologist':
            selectedDoctor = bornianDoctors[2];
            break;
        case 'neurologist':
            selectedDoctor = bornianDoctors[3];
            break;
        case 'gastroentologist':
            selectedDoctor = bornianDoctors[4];
            break;
        case 'orthopedict':
            selectedDoctor = bornianDoctors[5];
            break;
        case 'pulmonologist':
            selectedDoctor = bornianDoctors[6];
            break;
        case 'psychologist':
            selectedDoctor = bornianDoctors[7];
            break;
        case 'opathalmologist':
            selectedDoctor = bornianDoctors[8];
            break;
        default:
            alert('Please select a valid doctor category.');
            return;
    }

    let patientInvoice = document.getElementById('patientInvoice');
    let result = `
        <div class="appointment-result">
            <h3>${selectedDoctor.title}</h3>
            <p>Patient: ${fullname}</p>
            <p>Age: ${age}</p>
            <p>Gender: ${gender}</p>
            <p>Phone Number: ${phone}</p>
            <p>Doctor: ${selectedDoctor.Doctor_name}</p>
            <p>Specialization: ${selectedDoctor.specialization}</p>
            <p>Date: ${selectedDoctor.date}</p>
            <p>Time: ${selectedDoctor.time}:00</p>
            <p>Comment: ${selectedDoctor.write}</p>
        </div>
    `;
    patientInvoice.innerHTML = result;
}

function submit(){
    bookAppointment();
    alert("You Have Successfully Booked An Appointment");
    setTimeout( function (){
        window.location.href = "index.html";
    }, 5000);
}

// let select = document.getElementById("select");
// let timing = 0;

// select.onchange = function (){
//     timing = parseInt(select.value); // 
//     setMeeting.then((result) => {
//         let details = document.getElementById("details");
//         let output = `
//         <div>
//         <h2>Meeting Details</h2>
//         <h3>Title</h3>
//         <p>${result.title}</p>
//         <h3>Time</h3>
//         <p>${result.time}</p>
//         <h3>Venue</h3>
//         <p>${result.venue}</p>
//         <h3>Dresscode</h3>
//         <p>${result.dressCode}</p>
//     </div>`;
//     details.innerHTML = output;
//     }).catch((error) => {
//         details.innerHTML = error;
//     });

//     const setMeeting = new Promise((resolve, reject) => {
//         let meetingDetails = {
//             title: "Salary Increment",
//             time: "9:30am",
//             venue: "Boardroom",
//             dressCode: "Black & White",
//         };
//         if(timing < 9){
//             this.style.display = "none";
//             resolve(meetingDetails);
//         } else{
//             this.style.display = "none";
//             reject("Sorry, you are unable to attend the meeting because of inappropriate time sccheduling");
//         }
//     });
// };
