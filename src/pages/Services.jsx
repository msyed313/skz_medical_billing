import React from 'react'
import Component from '../components/Component'
import ServicesComponent from '../components/ServicesComponent'
import Started from '../components/Started'
import Industries from '../components/Industries'
import MouseTrail from '../components/MouseTrail'

function Services() {
  return (
    <>
         <Component name='Our Services' />
         <ServicesComponent/>
         <Industries/>
         <Started/>
         <MouseTrail/> 
    </>
  )
}

export default Services