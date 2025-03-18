export default function Option({ selected = false , value , innerText }) {
  return <option selected={selected} value={value} >{innerText}</option>;
}
