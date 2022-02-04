console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


let pic = document.querySelector('#duck-pic')
const comp = ()=>{
	alert("On a scale from 1 to 10, you're an 11.")
}
pic.addEventListener('mouseover', comp)