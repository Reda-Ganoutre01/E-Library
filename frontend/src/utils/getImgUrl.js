

function getImgUrl(name){
  return new URL(`../../../backend/src/main/resources/images/BooksImgaes/${name}`,import.meta.url)
}
export{getImgUrl}