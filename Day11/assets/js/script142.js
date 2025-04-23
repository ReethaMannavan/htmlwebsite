//   Create a survey form where responses are saved in SessionStorage. 

document
    .getElementById("surveyForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            let nameField =
                document.getElementById(
                    "name"
                );
            let ageField =
                document.getElementById(
                    "age"
                );
            let errorText =
                document.getElementById(
                    "errorText"
                );

            let name = nameField.value;
            let age = ageField.value;


            let Regex = /^[A-Za-z ]+$/;


            if (!name.match(Regex)) {
                nameField.classList.add(
                    "error"
                );
                errorText.innerHTML =
                    `Name field should only contain 
                     English alphabets and spaces`;
                errorText.classList.add(
                    "errorText"
                );
                return;
            }

           
            else if (
                isNaN(age) ||
                age < 1 ||
                age > 150
            ) {
                ageField.classList.add(
                    "error"
                );
                errorText.innerHTML =
                   
                errorText.classList.add(
                    "errorText"
                );
                return;
            }

         
            if (
                nameField.classList.contains(
                    "error"
                )
            )
                nameField.classList.remove(
                    "error"
                );

        
            if (
                ageField.classList.contains(
                    "error"
                )
            )
                ageField.classList.remove(
                    "error"
                );

           
            errorText.innerHTML =
                "Submitted Successfully";
            errorText.classList.add(
                "successText"
            );

            const formData =
                new FormData(
                    event.target
                );
            const formValues = {};

            const surveydata = localStorage.setItem('survey', JSON.stringify(formData));

           const survey_1 = localStorage.getItem(JSON.parse(surveydata));
        console.log(survey_1);
        





          
            formData.forEach(
                (value, key) => {
                    formValues[key] =
                        value;
                }
            );

           
          
            setTimeout(
                document
                    .getElementById(
                        "surveyForm"
                    )
                    .reset(),
                2000
            );
        }
    );