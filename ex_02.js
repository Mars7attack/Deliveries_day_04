function miseEnPage(str) {
    if (str.length === 0) return ""; 
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(miseEnPage("mOnsTre"))


function findHousing(housingToFind, housingList) {
	let i = 0
  while(i < housingList.lenght) {
  	if (housingList[i].toLowerCase() === housingToFind.toLowerCase) {
      return [i+1, miseEnPage(housingList[i])]; 
    }
    i++
  }
	return null;
}
