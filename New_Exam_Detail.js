function Exam_Code() {
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

function console(){
    var temp = document.getElementById("code");

    console.log(temp.value);
}

function details(){
    	document.getElementById("Examiner_Section_Form").innerHTML = "";

        //creating form
        var formID = document.getElementById("Examiner_Section_Form");
        formID.action = "new_Exam.php";

        //creating field for exam code
        var code_div = document.createElement("div");
        code_div.id = "code_div";

        var Code_Label = document.createElement("label");
        Code_Label.innerText = "Exam Code:";
        Code_Label.setAttribute("id","codeID");
        Code_Label.setAttribute("for","code");
        code_div.appendChild(Code_Label);

        var Exam_Code_Label = document.createElement("label");
        Exam_Code_Label.value = Exam_Code();
        Exam_Code_Label.id = "code";
        Exam_Code_Label.name = "code_name";
        code_div.appendChild(Exam_Code_Label);

        // creating input field to take email id
        var div_email = document.createElement("div");
        div_email.setAttribute("id","email_div");

        var email_Label = document.createElement("label");
        email_Label.innerText = "Email:";
        email_Label.setAttribute("id","emailID");
        email_Label.setAttribute("for","email");
        email_Label.name = "email_Label_name";
        div_email.appendChild(email_Label);

        var email_input = document.createElement("input");
        email_input.setAttribute("id","email");
        email_input.setAttribute("placeholder","Enter Teacher's Email Id for Result...");
        email_input.setAttribute("required","");
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
        teacher_div.appendChild(teacher_input);
        
        //submit button for the form
        var button_div = document.createElement("div");
        button_div.setAttribute("id","button");

        var submit_button = document.createElement("input");
        submit_button.setAttribute("type","submit");
        submit_button.onclick = "console()";

        // submit_button.innerText = "Submit";
        button_div.appendChild(submit_button);

        var reset_button = document.createElement("input");
        reset_button.setAttribute("type","reset");
        button_div.appendChild(reset_button);

        //appending dynamically created elements above
        formID.appendChild(code_div);
        formID.appendChild(div_email);
        formID.appendChild(teacher_div);
        formID.appendChild(button_div);
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
        var submit_button = document.createElement("input");
        submit_button.setAttribute("type","submit");
        submit_button.setAttribute("id","submit");
        submit_button.setAttribute("onclick","timepass()");


        //appending childs to form

        formID.appendChild(exam_code);
        formID.appendChild(div_email);
        formID.appendChild(password_div);
        formID.appendChild(submit_button);
}