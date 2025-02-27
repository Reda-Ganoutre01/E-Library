

function getImgUrl(name){
  return new URL(`../../../backend/src/main/resources/static/images/BooksImgaes/${name}`,import.meta.url)
}
export{getImgUrl}