<html>
    <body>
        <?php 
            // storing input in php variables
            $Exam_code = $_POST["code_name"];
            $teacher_emailID = $_POST["email_input"];
            $teacher_name = $_POST["teacher_input"];
            $exam_password = $_POST["password1_input"];
            $uni_col_input = $_POST["uc_input"];
            $examination_name = $_POST["examination"];
            $exam_date = $_POST["date_input"];
            $exam_time = $_POST["exam_time"];
            $exam_hour = $_POST["exam_hour"];
            $exam_min = $_POST["exam_min"];

            echo $exam_date;
        ?>
    </body>
</html>