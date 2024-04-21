function validation(values){
    //alert("")
    let error = {} // store errors in this object
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //test emails with this pattern
    //test passwords with minimum length 8 with this pattern, a symbol, upper and lowercase letter and a number
    const password_pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ 
    //const username_pattern = /^[a-zA-Z0-9]+$/ //tests usernames with this pattern

    /*if(values.username === ""){
        error.username = "Username should not be blank."
    } else if(!username_pattern.test(values.username)){
        error.username = "Username is incorrect or does not exist in records."
    } else{
        error.username = ""
    }*/

    if(values.email === ""){
        error.email = "Email should not be blank."
    } else if(!email_pattern.test(values.email)){
        error.email = "Email is incorrect or does not match."
    } else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Password should not be blank."
    } else if(!password_pattern.test(values.password)){
        error.password = "Password is incorrect or does not match."
    } else {
        error.password = ""
    }
    return error;
}


export default validation;