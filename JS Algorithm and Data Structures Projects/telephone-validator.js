/**
 *  Telephone number validator:
 * 
 *  Return 'true' if the passed string look like a valid US phone number.
 * 
 *  The user may fill out the form field any way they choose as long as it has the
 *  format of a valis US number. The following are examples of valid formats for
 *  US numbers:
 *  555-555-5555
 *  (555)555-5555
 *  555 555 5555
 *  5555555555
 *  1 555 555 5555
 * 
 *  For this challengs you will be present with a string such '800-849-5543' or
 *  '8oo-six427676;laskdjf'. Your job is to validate or reject the US phone number
 *  base on any combination of the formats provided above. The area code is
 *  required. If the country code is provided, you must confirm that the country
 *  code is 1.
 */

/**
 *  Basic code solution:
 */

function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));


/**
 *  Intermediate code solution:
 */

function telephoneCheck(str) {
    var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;
    return re.test(str);
}