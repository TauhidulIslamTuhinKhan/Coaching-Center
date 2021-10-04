import React from 'react';
import './About.css'

const About = () => {
    return (
       <div className="bg-area">
            <div className="container py-5">
            <h2 className="text-center">This is our About page</h2>
            <p>Coaching is a process that aims to improve performance and focuses on the 'here and now' rather than on the distant past or future. ... Coaching is unlocking a person's potential to maximise their own performance. It is helping them to learn rather than teaching them.</p>
            <p>They give the students good training and make sure that they are free of any distractions. Some institutes even give the students career guidance and motivational classes to keep the students on track. A good coaching center would always be able to give attention to each of their students.</p>
            <h6>5 benefits of coaching in the workplace</h6>
            <ul>
                <li>Helping staff adapt to change. ...</li>
                <li>Improving productivity and performance. ...</li>
                <li>Making staff feel valued. ...</li>
                <li>Assisting in the return to work. ...</li>
                <li>Dealing with challenges more confidently.</li>
            </ul>
           <p>Coaching in the workplace can help create stronger bonds within your team. As team members become more comfortable with leaders, they'll be more willing to seek help when problems arise. Building more intentional relationships with employees through coaching makes them feel included.</p>
        </div>
       </div>
    );
};

export default About;