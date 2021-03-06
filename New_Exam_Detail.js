var detailBool = 1,correctBool = 1;

function timepass(){
    var r = document.getElementById("detail-form");
    alert(r.getAttribute("method"));
}

function details(){
    if(correctBool == 0)
        document.getElementById("Detail-Form").innerHTML = "";

    if(detailBool == 1){
        var div = document.getElementById("Detail-Form");
        //creating form
        var formID = document.createElement("form");
        // formID.setAttribute("id","detail-form");
        // formID.setAttribute("action","New_Exam.php");
        formID.setAttribute("method","POST");

        //creating field for exam code
        var code_div = document.createElement("div");
        code_div.setAttribute("id","code_div");

        var Code_Label = document.createElement("label");
        Code_Label.innerText = "Exam Code:";
        Code_Label.setAttribute("id","codeID");
        Code_Label.setAttribute("name","code");
        code_div.appendChild(Code_Label);

        var dummy_Label = document.createElement("label");
        dummy_Label.innerText = "Dummy Exam Code";
        dummy_Label.setAttribute("id","dummyID");
        dummy_Label.setAttribute("name","code");
        code_div.appendChild(dummy_Label);

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
        email_input.setAttribute("required","");
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
        teacher_input.setAttribute("required","");
        teacher_div.appendChild(teacher_input);

        //taking password
        var password_div = document.createElement("div");
        password_div.setAttribute("id","password_div");

        var password_label = document.createElement("label");
        password_label.setAttribute("id","password_label");
        password_label.innerText = "Password:";
        password_label.setAttribute("name","password");
        password_div.appendChild(password_label);

        var password_input = document.createElement("input");
        password_input.setAttribute("type","password");
        password_input.setAttribute("id","password_input");
        password_input.setAttribute("name","password");
        password_input.setAttribute("required","true");
        password_input.setAttribute("placeholder","Enter strong password");
        password_div.appendChild(password_input);

        //taking College/ University name
        var uni_col = document.createElement("div");
        uni_col.setAttribute("id","uni-col");

        var uni_col_label = document.createElement("label");
        uni_col_label.setAttribute("name","name");
        uni_col_label.setAttribute("id","uni-col-id");
        uni_col_label.innerText = "College/University:";
        uni_col.appendChild(uni_col_label);

        var uni_col_input = document.createElement("input");
        uni_col_input.setAttribute("id","uni-col-input");
        uni_col_input.setAttribute("name","name");
        uni_col_input.setAttribute("required","true");
        uni_col_input.setAttribute("placeholder","Enter College/University Name...");
        uni_col.appendChild(uni_col_input);

        //examination name
        var exam_div = document.createElement("div");
        exam_div.setAttribute("id","exam");

        var exam_label = document.createElement("label");
        exam_label.setAttribute("name","exam");
        exam_label.setAttribute("id","exam-id");
        exam_label.innerText = "Examination:";
        exam_div.appendChild(exam_label);

        var exam_input = document.createElement("input");
        exam_input.setAttribute("id","exam-input");
        exam_input.setAttribute("name","exam");
        exam_input.setAttribute("required","true");
        exam_input.setAttribute("placeholder","Enter Examination Name...");
        exam_div.appendChild(exam_input);

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
        date_input.setAttribute("required","");
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
        time_input.setAttribute("required","");
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
        hour_input.setAttribute("required","");
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
        minute_input.setAttribute("required","");
        duration.appendChild(minute_input);

        //submit button for the form
        var button_div = document.createElement("div");
        button_div.setAttribute("id","button");

        var submit_button = document.createElement("input");
        submit_button.setAttribute("type","submit");
        submit_button.setAttribute("onClick","timepass()");
        // submit_button.innerText = "Submit";
        button_div.appendChild(submit_button);

        var reset_button = document.createElement("input");
        reset_button.setAttribute("type","reset");
        button_div.appendChild(reset_button);

        //appending dynamically created elements above
        formID.appendChild(code_div);
        formID.appendChild(div_email);
        formID.appendChild(teacher_div);
        formID.appendChild(password_div);
        formID.appendChild(uni_col);
        formID.appendChild(exam_div);
        formID.appendChild(timedate);
        formID.appendChild(duration);
        formID.appendChild(button_div);

        div.appendChild(formID);

        detailBool = 0;
        correctBool = 1;
    }
}

function correct_form(){    
    if(detailBool == 0){
        document.getElementById("Detail-Form").innerHTML = "";
    }

    if(correctBool == 1){
        var div = document.getElementById("Detail-Form");
        
        var formID = document.createElement("form"); //getting div where form is present
        // formID.setAttribute("action","Correct-Mistake.php");
        formID.setAttribute("method","POST");

        var exam_code = document.createElement("div");
        exam_code.setAttribute("id","exam_code");

        var code_label = document.createElement("label");
        code_label.innerText = "Exam Code:";
        code_label.setAttribute("id","examcode_correct");
        code_label.setAttribute("name","code");
        exam_code.appendChild(code_label);

        var code_input = document.createElement("input");
        code_input.setAttribute("id","code_input_correct");
        code_input.setAttribute("name","code");
        code_input.setAttribute("placeholder","Enter Valid Exam Code...");
        exam_code.appendChild(code_input);

        //taking emailID
        var div_email = document.createElement("div");
        div_email.setAttribute("id","email_div");

        var email_Label = document.createElement("label");
        email_Label.innerText = "Email:";
        email_Label.setAttribute("id","emailID_correct");
        email_Label.setAttribute("name","email");
        div_email.appendChild(email_Label);

        var email_input = document.createElement("input");
        email_input.setAttribute("id","email-input_correct");
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
        password_label.setAttribute("name","password");
        password_div.appendChild(password_label);

        var password_input = document.createElement("input");
        password_input.setAttribute("type","password");
        password_input.setAttribute("id","password_input_correct");
        password_input.setAttribute("name","password");
        password_input.setAttribute("required","true");
        password_input.setAttribute("placeholder","Enter strong password");
        password_div.appendChild(password_input);

        //submit button
        var submit_button = document.createElement("input");
        submit_button.setAttribute("type","submit");
        submit_button.setAttribute("id","submit");
        submit_button.setAttribute("onclick","timepass()");


        //appending childs to form

        formID.appendChild(exam_code);
        formID.appendChild(div_email);
        formID.appendChild(password_div);
        formID.appendChild(submit_button);

        div.appendChild(formID);
        //===================================
        detailBool = 1;
        correctBool = 0;
    }
}