/*	
/	Przykład użycia:
/	gen()
/	> 'Xz4_h49P}</$s2;t;y1C50&7'
*/

function gen() {
	var ALPHA = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var ALPHA2 = "1234567890!@#$%&'()*+,^-./:;<=>?[]_`{~}|";
	var IMPLY1 = "abcdefghijklmnopqrstuvwxyz";
	var IMPLY2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var IMPLY3 = "1234567890";
	var IMPLY4 = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|";
    var output = "";
	var L = [1,2,3,4]
	for (var i = 0; i < 4; i++) {
		var t = Math.floor(Math.random() * L.length)
		switch (L[t]) {
            case 1:
                output += IMPLY1.at(Math.floor(Math.random() * IMPLY1.length));
                L.splice(L.indexOf(1), 1);
                break;
            case 2:
                output += IMPLY2.at(Math.floor(Math.random() * IMPLY2.length));
                L.splice(L.indexOf(2), 1);
                break;
            case 3:
                output += IMPLY3.at(Math.floor(Math.random() * IMPLY3.length));
                L.splice(L.indexOf(3), 1);
                break;
            case 4:
                output += IMPLY4.at(Math.floor(Math.random() * IMPLY4.length));
                L.splice(L.indexOf(4), 1);
                break;
        }
    }
	var mark = 0; 
	for (var i = 4; i < (8 + Math.floor(Math.random() * 56)); i++) {
        if(mark == 0 && Math.floor(Math.random() * 2) == 0){
			output += ALPHA.at(Math.floor(Math.random() * ALPHA.length));
			mark = 1;
		}
		else{
			output += ALPHA2.at(Math.floor(Math.random() * ALPHA2.length));
			mark = 0;
		}
    }
    return output;
}
