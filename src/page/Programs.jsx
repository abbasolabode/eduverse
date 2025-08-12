import React, { useEffect } from 'react'
import AcademicPrograms from '../ui/AcademicPrograms'

export default function Programs() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div >
      <AcademicPrograms/>
    </div>
  )
}
