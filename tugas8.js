function myObject(){

	var jeruk={
		jenis:'madu', harga:6000, berat:"1 Kg"
	}

//menampilkan isi dari object
	console.log(jeruk);

//sebelum diubah

	console.log(jeruk.harga);	

//mengubah nilai
	jeruk.harga=6500;
	console.log(jeruk.harga);


}

myObject();