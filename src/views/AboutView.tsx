import HeroBanner from '../components/HeroBanner/HeroBanner'



// AboutView

export default function AboutView() {

   return (
      <>
         <HeroBanner 
            overlayHeading="about" 
            featureImg="/imgs/edk-workstation.jpg"/>

         <section className="mb_2 line_height_2 text_center">
            <p className="p_1">
               <span className="font_1.5 font_900">Why </span>
               <span className="font_2 font_900 italic p_.5">evolution desu ka?</span>
               This title brings together my music with two other enduring interests - Zoology and Japan.
               I spent four wonderful years studying Zoology at Aberdeen University in Scotland, and after a spell
               building web sites, several fabulous years as an English Assistant Teacher in Japan, before returning
               to Scotland, where I returned to my first love of music.
            </p>
            <p className="p_1">
               <span className="font_400 p_.25">In Japanese,</span>
               <span className="font_1.75 font_900 italic p_.25">desu ka</span>
               <span className="p_.25">implies a question.</span>
            </p>

            <p className="p_1">
               <span className="font_1.5">I </span> 
               <span className="font_2 font_900">discovered </span>
               music through the early Beatles' albums and their influences, and those songs remain
               my benchmark of great songwriting. 
               <span className="font_100 p_.5">'Baby It's You', 'You Really Got A Hold On Me', 'I'm A Loser', 
               'You're Going To Lose That Girl', 'From Me To You'</span> - the chord progressions and the lyrics
               blew me away back then and still do.
            </p>

            <p className="p_1">
               The
               <span className="font_1.5 font_900 p_.5">other side </span> of  
               <span className="italic p_.5">evolution desu ka</span> is that many 
               of my songs tend to be reflective and comment on my disconnection with the current 
               <span className="font_1.25 font_700 italic p_.5">zeitgeist</span>. 
               For a species that has so much knowledge and understanding literally at our fingertips, 
               a majority continue to ask:
            </p>
            <p className="">
               <span className="font_1.25 font_300 italic">Is evolution still happening to us..?</span>  
            </p>
            <p className="p_1">
               We're hardly breaking ground for the Star Trek utopia!
            </p>
            <p className="p_1">
               Another <span className="font_2 font_900 p_.5">recurring theme</span> in my writing is the sea.
               Living on the north-east coast of Scotland, I see it and I feel it everyday.
            </p>
         </section>
      </>
   )

}