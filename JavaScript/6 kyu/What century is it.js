// Return the century of the input year. The input will always be a 4 digit 
// string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"


function whatCentury(year)
{
    const indicator = ['st', 'nd', 'rd', 'th'];
    const century = Math.ceil(+year / 100).toString();

    if(century > 10 && century < 20) return century + indicator[3];
    else if(century.endsWith("1")) return century + indicator[0];
    else if(century.endsWith("2")) return century + indicator[1];
    else if(century.endsWith("3")) return century + indicator[2];
    else return century + indicator[3];
}