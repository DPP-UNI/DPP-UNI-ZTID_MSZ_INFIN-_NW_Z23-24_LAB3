/*	
/	W oparciu o: https://base64.guru/learn/base64-algorithm
/	KODUJE TEKST W FORMACIE: ISO-8859-1
/	Testowane z dekoderem: https://www.base64decode.org
/	
/	Przykład użycia:
/	encode("ABC")
/	> 'QUJD'
/	decode("QUJD")
/	> 'ABC'
*/

function encode(input) {
    var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var output = "";
    var raw = "";
    for (var i = 0; i < input.length; i++){
    	var t = ((input.at(i).charCodeAt(0)).toString(2));
    	while (t.length < 8){
    		t = ("0" + t);
    	}
        raw += t;
    }
    for (var i = 0; (i * 6) < raw.length; i++){
        output += ALPHA.at(parseInt((raw.slice((i * 6), raw.length)).substring(0,6), 2));
    }
    return output;
}

function decode(input){
	var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var output = "";
	var raw = "";
	for (var i = 0; i < input.length; i++){
    	var t = (ALPHA.indexOf(input.at(i))).toString(2);
    	while (t.length < 6){
    		t = ("0" + t);
    	}
		while (t.length > 6){
			t = t.slice(1, t.length);
		}
        raw += t;
    }
	for (var i = 0; (i * 8) < raw.length; i++){
        output += String.fromCharCode(parseInt((raw.slice((i * 8), raw.length).substring(0,8)), 2));
    }
	return output;
}
