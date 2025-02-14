
import { lazy } from "react"

const Hero=lazy(()=>import('../components/Hero/Hero.jsx'));
const TopBooks=lazy(()=>import('../components/TopBooks/TopBooks.jsx'));

export default function Home(){

  return(
    <>
    <Hero/>
    <TopBooks/>
    </>
  )
}