function stringChop(str, size) {
  // your code here
	if(str.length == 0)
		return [];
	
  let ans=[], chunk="";
  
  for(let i=0;i<str.length;i++){
      if(i!=0 && i%size == 0){
          ans.push(chunk);
          chunk = str.charAt(i);
      }
      
      else{
          chunk+=str.charAt(i);
      }
  }
  
  ans.push(chunk);
  
  return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
