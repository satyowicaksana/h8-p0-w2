var nama = 'Satyo'; // assign nilai variabel dengan nama yang diinginkan!
var peran = 'Ksatria'; // assign nilai variabel dengan peran Ksatria, Tabib, atau Penyihir!

var namaKosong = ((nama === '') || (nama === null) || (nama === undefined));
var peranKosong = ((peran === '') || (peran === null) || (peran === undefined));

if(namaKosong){
    console.log("Nama harus diisi!")
} else {
    if(peranKosong){
        console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
    } else {
        console.log('Selamat datang di Dunia Proxytia, ' + nama);
        if(peran === 'Ksatria'){
            console.log('Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
        } else if(peran === 'Tabib'){
            console.log('Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
        } else if(peran === 'Penyihir'){
            console.log('Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
        } else {
            console.log('Maaf, Peran tidak tersedia!');
        }
    }
}