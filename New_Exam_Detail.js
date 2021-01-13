var detailBool = 1,correctBool = 1;

function details(){
    if(correctBool == 0)
        document.getElementById("detail").innerHTML = "";

    if(detailBool == 1){
        var formID = document.getElementById("detail"); //getting form id
        // creating input field to take email id
        var div_email = document.createElement("div");
        div_email.setAttribute("id","email_div");

        var email_Label = document.createElement("label");
        email_Label.innerText = "Email:";
        email_Label.setAttribute("id","emailID");
        email_Label.setAttribute("name","email");
        div_email.appendChild(email_Label);

        var email_input = document.createElement("input");
        email_input.setAttribute("id","email-input");
        email_input.setAttribute("name","email");
        email_input.setAttribute("placeholder","Enter Teacher's Email Id for Result...");
        div_email.appendChild(email_input);

        //creating input field to take Teachers Name
        var teacher_div = document.createElement("div");
        teacher_div.setAttribute("id","teacher_div");

        var teacher_label = document.createElement("label");
        teacher_label.innerText = "Teacher Name:";
        teacher_label.setAttribute("id","teacher_Label");
        teacher_label.setAttribute("name","teacher");
        teacher_div.appendChild(teacher_label);

        var teacher_input = document.createElement("input");
        teacher_input.setAttribute("id","teacherinput");
        teacher_input.setAttribute("name","teacher");
        teacher_input.setAttribute("placeholder","Teacher's Name...");
        teacher_div.appendChild(teacher_input);

        //Taking Date and time of Exam
        var timedate = document.createElement("div")
        timedate.setAttribute("id","td");

        var date_label = document.createElement("label");
        date_label.setAttribute("name","date");
        date_label.setAttribute("id","dateID");
        date_label.innerText = "Date:"
        timedate.appendChild(date_label);

        var date_input = document.createElement("input");
        date_input.setAttribute("type","date");
        date_input.setAttribute("id","dateinput");
        date_input.setAttribute("name","date");
        timedate.appendChild(date_input);

        var time_label = document.createElement("label");
        time_label.setAttribute("name","time");
        time_label.setAttribute("id","timeID");
        time_label.innerText = "Time:"
        timedate.appendChild(time_label);

        var time_input = document.createElement("input");
        time_input.setAttribute("type","time");
        time_input.setAttribute("id","timeinput");
        time_input.setAttribute("name","time");
        timedate.appendChild(time_input);

        //Taking duration of Exam
        var duration = document.createElement("div")
        duration.setAttribute("id","duration");

        var hour_label = document.createElement("label");
        hour_label.setAttribute("name","hour");
        hour_label.setAttribute("id","hourID");
        hour_label.innerText = "Hour:"
        duration.appendChild(hour_label);

        var hour_input = document.createElement("input");
        hour_input.setAttribute("type","number");
        hour_input.setAttribute("min","0");
        hour_input.setAttribute("id","hourinput");
        hour_input.setAttribute("name","hour");
        duration.appendChild(hour_input);

        var minute_label = document.createElement("label");
        minute_label.setAttribute("name","minute");
        minute_label.setAttribute("id","minuteID");
        minute_label.innerText = "Minute:"
        duration.appendChild(minute_label);

        var minute_input = document.createElement("input");
        // minute_input.setAttribute("type","time");
        minute_input.setAttribute("id","minuteinput");
        minute_input.setAttribute("name","minute");
        duration.appendChild(minute_input);

        //appending dynamically created elements above
        formID.appendChild(div_email);
        formID.appendChild(teacher_div);
        formID.appendChild(timedate);
        formID.appendChild(duration);

        detailBool = 0;
        correctBool = 1;
    }
}

function correct_form(){    
    if(detailBool == 0){
        document.getElementById("detail").innerHTML = "";

    }

    if(correctBool == 1){
        var formID = document.getElementById("detail"); //getting div where form is present

        var exam_code = document.createElement("div");
        exam_code.setAttribute("id","exam_code");

        var code_label = document.createElement("label");
        code_label.innerText = "Exam Code:";
        code_label.setAttribute("id","examcode");
        code_label.setAttribute("name","code");
        exam_code.appendChild(code_label);

        var code_input = document.createElement("input");
        code_input.setAttribute("id","code_input");
        code_input.setAttribute("name","code");
        code_input.setAttribute("placeholder","Enter Valid Exam Code...");
        exam_code.appendChild(code_input);

        //appending childs to form

        formID.appendChild(exam_code);
        //===================================
        detailBool = 1;
        correctBool = 0;
    }
}