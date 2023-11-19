const parseCode = (str) => {
  // your code here
	
	const parts = str.split('0');

  // Extract values for firstName, lastName, and id
	let arr=[]
	for(let i=0; i<parts.length; i++){
		if(parts[i]!=0){
			arr.push(parts[i]);
		}
	}
	console.log(arr);
  const firstName = arr[0];
  const lastName = arr[1];
  const id = arr[2];


  // Return an object with the extracted values
  return {
    firstName: firstName,
    lastName: lastName,
    id: id
  };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
