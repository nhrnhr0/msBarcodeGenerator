<script>
	
	import Mustache from 'mustache'
	import {price_template} from './price_template'
	let product_name;
	let product_barcode;
	
	let product_price;
	function download() {
		var output = Mustache.render(price_template, {product_name: product_name, product_barcode:product_barcode, product_price: product_price});
		var blob = new Blob([output], {type: "text/plain;charset=utf-8"});
		downloadBlob(blob,`${product_name}.label`);

	}

	function downloadBlob(blob, name = 'file.txt') {
		if (
		window.navigator && 
		window.navigator.msSaveOrOpenBlob
		) return window.navigator.msSaveOrOpenBlob(blob);

		// For other browsers:
		// Create a link pointing to the ObjectURL containing the blob.
		const data = window.URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.href = data;
		link.download = name;

		// this is necessary as link.click() does not work on the latest firefox
		link.dispatchEvent(
		new MouseEvent('click', { 
			bubbles: true, 
			cancelable: true, 
			view: window 
		})
		);

		setTimeout(() => {
		// For Firefox it is necessary to delay revoking the ObjectURL
		window.URL.revokeObjectURL(data);
		link.remove();
		}, 100);
	}




</script>

<main>
	<form action="">
		<input type="text" name="product_name" placeholder="שם מוצר" bind:value={product_name} />
		<input type="text" name="barcode" id="" maxlength="11" placeholder="ברקוד" bind:value={product_barcode}/>
		<input type="text" name="price" id="" placeholder="מחיר" bind:value={product_price}/>

		<div id="target"></div>

		<button on:click|preventDefault="{download}" type="submit">הורד</button>
	</form>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		direction: rtl;

	}

</style>