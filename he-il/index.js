
window.onload = function(){
    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
        formEl: document.getElementById("myForm"),
        context: document.getElementById("cf-context"),
        submitCallback: function(){
            alert("Submit: check dev tools console for more");
            // be aware that this prevents default form submit.
            var formDataSerialized = conversationalForm.getFormData(true);
            // age calculation
            var birthday = new Date(formDataSerialized.birthday);
            var age = Math.floor((new Date() - birthday.getTime()) / 3.15576e+10);
            formDataSerialized.Age = age;
            console.log("age: ", age);
            // estimate risk level 0-10
            var risklevel = 0;
            if(age > 70){ risklevel += 2;}
            if(!formDataSerialized.places.includes("No, I was only in Israel")){risklevel ++;}
            if(!formDataSerialized.diseases.length != 0){risklevel += 2;}
            if(!formDataSerialized.symptoms.length != 0){risklevel += 2;}
            if(!formDataSerialized.infecter.includes("No")){risklevel += 3;}
            formDataSerialized.risklevel = risklevel;

            console.log("Formdata, serialized:", formDataSerialized);

        }
    }
)}