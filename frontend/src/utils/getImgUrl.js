
function getImgUrl(name){
  return new URL(`../assets/images/BooksImgaes/${name}`,import.meta.url)
}
export{getImgUrl}