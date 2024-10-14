

export default function AppCopyright() {

   const get_current_year = () => {
      const today = new Date()
      return today.getFullYear()
   }

   return (
      <div className="foot_note">
         All Music and Lyrics Copyright Kevin Hastie 2016-{get_current_year()}
      </div>
   )

}