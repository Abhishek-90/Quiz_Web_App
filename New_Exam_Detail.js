function Exam_Code_Function() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 1; i <= 9; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));

       if(i%3==0 && i!=9)
        result = result + '-';
    }
    return result;
}

function details(){
        //creating form
    document.getElementById("Examiner_Section_Form").innerHTML = "";
    
    document.getElementById("Examiner_Section_Form").action = "new_Exam.php";

        //creating field for exam code
    var code_div = document.createElement("div");
    code_div.id = "code_div";

    var Code_Label = document.createElement("label");
    Code_Label.innerText = "Exam Code:";
    Code_Label.setAttribute("id","codeID");
    Code_Label.setAttribute("for","code");
    code_div.appendChild(Code_Label);

    var Exam_Code = document.createElement("input");
    Exam_Code.value = Exam_Code_Function();
    Exam_Code.id = "code";
    Exam_Code.name = "code_name";
    Exam_Code.setAttribute("readonly","");
    code_div.appendChild(Exam_Code);

        // creating input field to take email id
    var div_email = document.createElement("div");
    div_email.setAttribute("id","email_div");

    var email_Label = document.createElement("label");
    email_Label.innerText = "Email:";
    email_Label.setAttribute("id","emailID");
    email_Label.setAttribute("for","email");
    email_Label.setAttribute("name","email_name");
    div_email.appendChild(email_Label);

    var email_input = document.createElement("input");
    email_input.type = "text";
    email_input.setAttribute("id","email");
    email_input.setAttribute("placeholder","Enter Teacher's Email Id for Result...");
    email_input.setAttribute("required","");
    email_input.name = "email_input";
    div_email.appendChild(email_input);

        //creating input field to take Teachers Name
    var teacher_div = document.createElement("div");
    teacher_div.setAttribute("id","teacher_div");

    var teacher_label = document.createElement("label");
    teacher_label.innerText = "Teacher Name:";
    teacher_label.setAttribute("id","teacher_Label");
    teacher_label.setAttribute("for","teacher");
    teacher_div.appendChild(teacher_label);

    var teacher_input = document.createElement("input");
    teacher_input.setAttribute("id","teacher");
    teacher_input.setAttribute("placeholder","Teacher's Name...");
    teacher_input.setAttribute("required","");
    teacher_input.name = "teacher_input";
    teacher_div.appendChild(teacher_input);

        //taking password
    var password_div = document.createElement("div");
    password_div.setAttribute("id","password_div");

    var password_label = document.createElement("label");
    password_label.setAttribute("id","password1_label");
    password_label.innerText = "Password:";
    password_label.setAttribute("for","password1");
    password_div.appendChild(password_label);

    var password_input = document.createElement("input");
    password_input.type = "password";
    password_input.id = "password1";
    password_input.name = "password1_input";
    password_input.setAttribute("required","true");
    password_input.setAttribute("placeholder","Enter strong password");
    password_div.appendChild(password_input);

        //taking College/ University name
    var uni_col = document.createElement("div");
    uni_col.setAttribute("id","uni-col");

    var uni_col_label = document.createElement("label");
    uni_col_label.setAttribute("for","name");
    uni_col_label.setAttribute("id","uni-col-id");
    uni_col_label.innerText = "College/University:";
    uni_col.appendChild(uni_col_label);

    var uni_col_input = document.createElement("input");
    uni_col_input.id = "name";
    uni_col_input.name = "uc_input";
    uni_col_input.setAttribute("required","true");
    uni_col_input.setAttribute("placeholder","Enter College/University Name...");
    uni_col.appendChild(uni_col_input);

        //examination name
    var exam_div = document.createElement("div");
    exam_div.setAttribute("id","exam");

    var exam_label = document.createElement("label");
    exam_label.setAttribute("for","exam");
    exam_label.setAttribute("id","exam-id");
    exam_label.innerText = "Examination:";
    exam_div.appendChild(exam_label);

    var exam_input = document.createElement("input");
    exam_input.id = "exam";
    exam_input.name = "examination";
    exam_input.setAttribute("required","true");
    exam_input.setAttribute("placeholder","Enter Examination Name...");
    exam_div.appendChild(exam_input);

        //Taking Date and time of Exam
    var timedate = document.createElement("div")
    timedate.setAttribute("id","td");

    var date_label = document.createElement("label");
    date_label.setAttribute("for","date");
    date_label.setAttribute("id","dateID");
    date_label.innerText = "Date:"
    timedate.appendChild(date_label);

    var date_input = document.createElement("input");
    date_input.setAttribute("type","date");
    date_input.setAttribute("id","date");
    date_input.setAttribute("name","date_input");
    date_input.setAttribute("required","");
    timedate.appendChild(date_input);

    var time_label = document.createElement("label");
    time_label.setAttribute("for","time");
    time_label.setAttribute("id","timeID");
    time_label.innerText = "Time:"
    timedate.appendChild(time_label);

    var time_input = document.createElement("input");
    time_input.type = "time";
    time_input.id = "time";
    time_input.name = "exam_time";
    time_input.setAttribute("required","");
    timedate.appendChild(time_input);

        //Taking duration of Exam
    var duration = document.createElement("div")
    duration.setAttribute("id","duration");

    var hour_label = document.createElement("label");
    hour_label.for = "hour";
    hour_label.id = "hourID";
    hour_label.innerText = "Hour:"
    duration.appendChild(hour_label);

    var hour_input = document.createElement("input");
    hour_input.type = "number";
    hour_input.setAttribute("min","0");
    hour_input.id = "hour";
    hour_input.name = "exam_hour";
    hour_input.setAttribute("required","");
    duration.appendChild(hour_input);

    var minute_label = document.createElement("label");
    minute_label.setAttribute("for","minute");
    minute_label.setAttribute("id","minuteID");
    minute_label.innerText = "Minute:"
    duration.appendChild(minute_label);

    var minute_input = document.createElement("input");
    minute_input.setAttribute("id","minute");
    minute_input.name = "exam_min";
    minute_input.setAttribute("required","");
    duration.appendChild(minute_input);

        //submit button for the form
    var submit_button = document.createElement("button");
    submit_button.setAttribute("type","submit");
    submit_button.setAttribute("form","Examiner_Section_Form");
    submit_button.id = "submit";
    submit_button.innerText = "Submit";

        //appending dynamically created elements above
    formID.appendChild(code_div);
    formID.appendChild(div_email);
    formID.appendChild(teacher_div);
    formID.appendChild(password_div);
    formID.appendChild(uni_col);
    formID.appendChild(exam_div);
    formID.appendChild(timedate);
    formID.appendChild(duration);
    formID.appendChild(submit_button);
}

function correct_form(){    
    document.getElementById("Examiner_Section_Form").innerHTML = "";

    var formID = document.getElementById("Examiner_Section_Form"); //getting div where form is present
    formID.setAttribute("action","new_Exam.php");

    var exam_code = document.createElement("div");
    exam_code.setAttribute("id","exam_code");

    var code_label = document.createElement("label");
    code_label.innerText = "Exam Code:";
    code_label.setAttribute("id","examcode_correct");
    code_label.setAttribute("for","code");
    exam_code.appendChild(code_label);

    var code_input = document.createElement("input");
    code_input.setAttribute("id","code");
    code_input.setAttribute("name","code_name");
    code_input.setAttribute("placeholder","Enter Valid Exam Code...");
    exam_code.appendChild(code_input);

        //taking emailID
    var div_email = document.createElement("div");
    div_email.setAttribute("id","email_div");

    var email_Label = document.createElement("label");
    email_Label.innerText = "Email:";
    email_Label.setAttribute("id","emailID_correct");
    email_Label.setAttribute("for","email");
    div_email.appendChild(email_Label);

    var email_input = document.createElement("input");
    email_input.setAttribute("id","email");
    email_input.setAttribute("name","email");
    email_input.setAttribute("placeholder","Enter Teacher's Email Id for Result...");
    email_input.setAttribute("required","");
    div_email.appendChild(email_input);

        //taking password
    var password_div = document.createElement("div");
    password_div.setAttribute("id","password_div");

    var password_label = document.createElement("label");
    password_label.setAttribute("id","password_label_correct");
    password_label.innerText = "Password:";
    password_label.setAttribute("for","password");
    password_div.appendChild(password_label);

    var password_input = document.createElement("input");
    password_input.setAttribute("type","password");
    password_input.setAttribute("id","password");
    password_input.setAttribute("id","password");
    password_input.setAttribute("required","true");
    password_input.setAttribute("placeholder","Enter strong password");
    password_div.appendChild(password_input);

        //submit button
    var submit_button = document.createElement("button");
    submit_button.setAttribute("type","submit");
    submit_button.setAttribute("id","submit");
    submit_button.setAttribute("form","Examiner_Section_Form");
    submit_button.setAttribute("onclick","timepass()");


        //appending childs to form

    formID.appendChild(exam_code);
    formID.appendChild(div_email);
    formID.appendChild(password_div);
    formID.appendChild(submit_button);
}