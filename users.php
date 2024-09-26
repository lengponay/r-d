<?php

require_once 'connect.php';

if (isset($_POST['submit'])) {
    // Get the email input
    $email = $_POST['email'];

    // Validate the email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Prepare the SQL query to insert the email into your database
        $sql = "INSERT INTO your_table_name (email) VALUES ('$email')";

        // Execute the query
        if (mysqli_query($conn, $sql)) {
            echo "You have successfully subscribed!";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    } else {
        echo "Invalid email format!";
    }
}
?>
