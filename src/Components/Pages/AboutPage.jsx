import React from 'react'
import Card from '../Card'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis ut, porro accusantium velit sunt totam officiis ipsum eaque repudiandae magni, assumenda minima repellendus sint nemo eius id? Laboriosam, id!</p>
            <p>Version:1.1.0</p>
            <Link to='/'>
               <a href="">Back to main</a>
            </Link>
        </div>
    </Card>
  )
}

export default AboutPage