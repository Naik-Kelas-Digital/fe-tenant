
import ListingForm from '@/components/ListingPage/ListingForm/ListingForm'
import ListingP from '@/components/ListingPage/ListingP'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'dropzone/dist/dropzone.css';

const Listing = () => {
  return (
    <div className="">
       <ListingP />
       <ListingForm />
    </div>
  )
}

export default Listing