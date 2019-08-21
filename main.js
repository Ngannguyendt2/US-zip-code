function zipcode(str) {
    let regexp=/^[0-9]{5}(?:-[0-9]{4})?$/;
    if(regexp.test(str))
    {
        return true;
    }
        return false;

}

console.log(zipcode("03501-2150"));
console.log(zipcode(7892));
