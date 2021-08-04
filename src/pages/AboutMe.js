import React from 'react';
import profile from "../images/profile2.jpg";

const AboutMe = () => {
    return (
        <div className="container card text-white bg-dark d-flex ">
            <img src={profile} className="img-fluid mx-auto" alt="profile" />
            <div className="d-flex justify-content-center">
                <h1 className="text-center mx-2 p-3">About Me</h1>
                <p className=" ">Welcome! My name is Dan Dunne, I am a software developer with a dream to make the internet a safer and better place for all, be it through security or accessibility
                Born in Cleveland Ohio to a single mother I naturally spent alot of time in front of screens, that time taught me alot as Id tinker with the families computer, looking through folders, files, programs and seeing
                what went where and what things did. This curiosity carried with me well into my teenage years where Id take several internships with companies like General Elevtric, NASA (Not a company but still works.), Rockwell automation and the Cleveland Water Department.
                learning alot through these internships and seeing how the tech world operated I decided to pursue a career into tech. Now with Case Western offering a Coding Bootcamp and the pandemic keeping me inside anyways, I figured now was the time.
                With all that background stated, I want to work with you! Feel free to shoot me a text, email, or twitter DM about the jobs you have avaliable via Freelance or full time employment opprtunities!</p>
            </div>
            <div className="container card text-white bg-dark d-flex">
                <h1 className="tect-center mx-2 p-3">More personal</h1>
                <p className=""> 
                Like many kids my age i grew up playing video games, for a long time my personal favorite series was Halo. I dreamed one day of helping work on game development for the Halo series. Leading to a facsination of app development and the background of development.
                Growing up a huge Browns fan and sports fan my dream has always been to be a Scout for the NFL, That dream then evolved into wanting to work in analytics for sports. My personal dream job is to work for a company called PFF, helping them create a more user friendly and efficent site to help show the value of analytics in sports.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;