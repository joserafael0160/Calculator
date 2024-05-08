
export function comprobation(){
  let content = display.value;
  let size = content.length;
  let lastElement = content[size-1];
  if(!((lastElement==="-") || (lastElement==="*") || (lastElement==="+") || (lastElement==="/"))) return true;
  return false;
} 