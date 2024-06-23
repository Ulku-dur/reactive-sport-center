import React, { useState } from 'react';
import "./OurClasses.css"


function OurClasses() {
    const [selectedClass, setSelectedClass] = useState('yoga');

    const classContent = {
        yoga: (
          <>
            <div className="class-text">
              <h4>Why yoga?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam reprehenderit atque quod labore ad autem harum, aliquam quidem similique assumenda? Laboriosam similique quo dolores laborum at nulla dignissimos corrupti.</p>
              <h4>When comes yoga your time?</h4>
              <p>Saturday-Sunday: 8:00am-10:00am</p>
              <p>Monday-Tuesday: 10:00am-12:00am</p>
              <p>Wednesday-Friday: 3:00am-6:00am</p>
            </div>
            <img className="class-img" src="/images/yoga.jpg" alt="Yoga class" />
          </>
        ),
        group: (
          <>
            <img className="class-img" src="/images/group.webp" alt="Group class" />
            <div className="class-text">
              <h4>Group classes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam dolores, vitae dicta in harum molestias vel, dolor asperiores veritatis assumenda at accusamus neque repudiandae deserunt corporis incidunt, cupiditate a nemo perspiciatis exercitationem impedit aliquid veniam. Fuga sequi voluptas, quasi explicabo reprehenderit provident quo excepturi sapiente ex quae labore dolorem.</p>
            </div>
          </>
        ),
        solo: (
          <>
            <div className="class-text">
              <h4>Solo lessons</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <p>Velit, ducimus sint hic corporis ipsam nobis.</p>
              <p>Eum ipsa possimus cum aspernatur vel ad.</p>
              <p>Quasi cupiditate, amet libero necessitatibus accusantium ex.</p>
            </div>
            <img className="class-img" src="/images/solo.jpg" alt="Solo class" />
          </>
        ),
        stretching: (
          <>
            <img className="class-img" src="/images/stret.webp" alt="Stretching class" />
            <div className="class-text">
              <h4>Benefits of stretching exercises</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur totam!</p>
              <p>Ullam reiciendis debitis, sint molestias praesentium earum odit?</p>
              <h4>Before and after exercise</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas saepe minima laborum recusandae porro obcaecati delectus amet!</p>
            </div>
          </>
        ),
    };
  
  return (
    
    <article className="our-classes">

        <div className="class-start">
          <h2>OUR CLASSES</h2>
          <hr />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita non in mollitia quod voluptas. Explicabo, perspiciatis.</p>
        </div>

        <div className="class-btn">

          <button 
          className="yoga" 
          id="yoga"
          style={{ backgroundColor: selectedClass === 'yoga' ? '#ec9b00' : '' }}
          onClick={() => setSelectedClass('yoga')}>
            Yoga
          </button>

          <button 
          className="group" 
          id="group"
          style={{ backgroundColor: selectedClass === 'group' ? '#ec9b00' : '' }}
          onClick={() => setSelectedClass('group')}>
            Group
          </button>

          <button 
          className="solo" 
          id="solo"
          style={{ backgroundColor: selectedClass === 'solo' ? '#ec9b00' : '' }}
          onClick={() => setSelectedClass('solo')}>
            Solo
          </button>

          <button 
          className="stretching" 
          id="stretching"
          style={{ backgroundColor: selectedClass === 'stretching' ? '#ec9b00' : '' }}
          onClick={() => setSelectedClass('stretching')}>
            Stretching
          </button>

        </div>

        <div className="class-content">
            {classContent[selectedClass]}
        </div>
  
        <div className="bg-color-classes"></div>
    </article>
  )
}

export default OurClasses