import React from 'react'

const LogoNav = () => {

  let flag =0

  const openmenu =()=>{
    let menubar = document.querySelector(".menu-bar")
    
  
    if(flag===0){
      menubar.style.display="block"
      flag=1
    }
    else{
      menubar.style.display="none"
      flag=0
  
    }
  }
  
  return (
    <>
    <div className="toptop">
<div className="tonavbar1">
  <img src="./images/prlogo.png" alt="" />
</div>
<div className="menuimageicon">
<i class="ri-menu-line" onClick={openmenu}></i>
</div>


</div>
    
    
    </>
  )
}

export default LogoNav