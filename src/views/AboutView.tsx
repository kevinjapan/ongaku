import HeroBanner from '../components/HeroBanner/HeroBanner'



// AboutView
// future : replace legacy inline styling

export default function AboutView() {

   return (
      <>
         <HeroBanner 
            overlayHeading="about" 
            featureImg="/imgs/edk-workstation.jpg"
         />

         <section className="mb_2">
            <p style={{borderRadius:'.5rem',padding:'1rem',lineHeight:'2rem',textAlign:'center'}}>
               <span style={{fontSize:'1.75rem',fontWeight:700}}>Why </span>
               <span style={{fontSize:'2rem',fontWeight:900,fontStyle:'italic',padding:'.5rem'}}>evolution desu ka?</span>
               This title brings together my music with two other enduring interests - Zoology and Japan.
               I spent four wonderful years studying Zoology at Aberdeen University in Scotland, and after a spell
               building web sites, several fabulous years as an English Assistant Teacher in Japan, before returning
               to Scotland, where I returned to my first love of music.
            </p>
            <p style={{padding:'1rem',lineHeight:'2rem',textAlign:'center'}}>
               In 
               <span style={{fontSize:'1.5rem',fontWeight:400,paddingLeft:'.5rem'}}>Japanese, </span>
               <span style={{fontSize:'2rem',fontWeight:900,fontStyle:'italic',padding:'.5rem',paddingRight:'.5remd'}}>desu ka</span>
               implies a question.
            </p>

            <p style={{borderRadius:'.5rem',padding:'1rem',lineHeight:'2rem',textAlign:'center'}}>
               <span style={{fontSize:'1.5rem',fontWeight:400}}>I </span> 
               <span style={{fontSize:'2rem',fontWeight:900}}>discovered </span>
               music through the early Beatles' albums and their influences, and those songs remain
               my benchmark of great songwriting. 
               <span style={{fontWeight:100,paddingLeft:'.5rem'}}>'Baby It's You', 'You Really Got A Hold On Me', 'I'm A Loser', 
               'You're Going To Lose That Girl', 'From Me To You'</span> - the chord progressions and the lyrics
               blew me away back then and still do.
            </p>

            <p style={{borderRadius:'.5rem',padding:'1rem',lineHeight:'2rem',textAlign:'center'}}>
               The
               <span style={{fontSize:'2rem',fontWeight:900,paddingLeft:'.5rem'}}>other side </span> of  
               <span style={{fontStyle:'italic',paddingLeft:'.25rem'}}>evolution desu ka</span> is that many 
               of my songs tend to be reflective and comment on my disconnection with the current 
               <span style={{fontStyle:'italic',paddingLeft:'.5rem',fontWeight:700,fontSize:'1.2rem'}}>zeitgeist</span>. 
               For a species that has so much knowledge and understanding literally at our fingertips, 
               a majority continue to ask:
            </p>
            <p style={{borderRadius:'.5rem',padding:'1rem',lineHeight:'2rem',textAlign:'center'}}>
               <span style={{fontSize:'1.25rem',fontWeight:'300',fontStyle:''}}>Is evolution still happening to us</span>?  
            </p>
            <p style={{borderRadius:'.5rem',padding:'1rem',lineHeight:'2rem',textAlign:'center'}}>
               We're hardly breaking ground for the Star Trek utopia!
            </p>
            <p style={{borderRadius:'.5rem',padding:'1rem',lineHeight:'2rem',textAlign:'center'}}>
               Another <span style={{fontSize:'2rem',fontWeight:900,padding:'.5rem'}}>recurring theme</span> in my writing is the sea.
               Living on the north-east coast of Scotland, I see it and I feel it everyday.
            </p>
         </section>
      </>
   )

}