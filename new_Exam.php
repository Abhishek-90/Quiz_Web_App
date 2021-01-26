<html>
    <body>
        <?php 
            if(!isset($_GET["code_name"]))
                echo "Error";
            else
                echo $_GET["code_name"];

            echo $_GET["email_Label_name"];
        ?>
    </body>
</html>