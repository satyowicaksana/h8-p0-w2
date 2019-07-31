// Menyusun Barisan Bintang
var rows1 = 5;

for(var i = 0; i < rows1; i++){
    console.log('*');
}

// Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 7;

for(var i = 0; i < rows1; i++){
    var row = '';
    for(var j = 0; j < rows2; j++){
        row = row + '*';
    }
    console.log(row);
}

// Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 9;
var countRow = 0;
for(var i = 0; i < rows3; i++){
    var row = '';
    countRow += 1;
    for(var j = 0; j < countRow; j++){
        row = row + '*';
    }
    console.log(row);
}