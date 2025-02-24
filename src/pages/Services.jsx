import React from 'react'
import Component from '../components/Component'
import ServicesComponent from '../components/ServicesComponent'
import Started from '../components/Started'

function Services() {
  return (
    <>
         <Component name='Our Services' />
         <ServicesComponent/>
         <Started/>
    </>
  )
}

export default Services