function zipcode(str) {
    let regexp=/^[0-9]{5}(?:-[0-9]{4})?$/;
    if(regexp.test(str))
    {
        return true;
    }

        return false;


}
zipcode("03201 - 2150");
console.log(zipcode());
zipcode(7892);
console.log(zipcode());
