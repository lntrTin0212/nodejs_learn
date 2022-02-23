import React, { useEffect } from 'react'
import alert from '../img/alert2.png'
import vid1 from '../img/trongtin1.mp4'
import vid2 from '../img/trongtin2.mp4'
import vid3 from '../img/trongtin3.mp4'
function About() {
    const getVideo = document.querySelectorAll('.video')    
    const index = getVideo.length-1
    let curr = 0
    useEffect(() => {
        setInterval(()=> {
            for (let i = 0 ; i <= index ; i++) {
                if (curr === i) {
                    getVideo[i].classList.add('hidden')
                    getVideo[i+1].classList.remove('hidden')
                    return curr++
                }
                if (curr == index) {
                    curr = 0
                    getVideo[index].classList.add('hidden')
                    getVideo[0].classList.remove('hidden')
                    return curr
                }
            }
        }, 1500)
    },[])
    
  return (
    <div className="home-container ">
        <div className="home-content">
            <p className="title-alert">
                <img src={alert} alt="" />
                Covid19-alert
            </p>
            <div className="title-heading">
                <h1>Save yourself <br/> Save the world.</h1>
                <p>Coronavirus disease (COVID-19) is an infectious <br/>
                    disease caused by a new virus.</p>
            </div>
        </div>
        <div className="home-animation">
            <video className="video" width="180px" height="180px" autoPlay loop>
                <source src={vid1}/> 
            </video>
            <video className="video hidden" width="180px" height="180px" autoPlay loop>
                <source src={vid2}/> 
            </video>
            <video className="video hidden" width="180px" height="180px" autoPlay loop>
                <source src={vid3}/> 
            </video>
        </div>
    </div>
  )
}

export default About