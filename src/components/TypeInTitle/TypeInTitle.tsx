

// TypeInTitle

// animation effect of text appearing as-if typed from left to right
// achieved by transitioning the width
// we can't 'type in' using width transition *and* 'wrap' - it temporarily stacks vertically
// so, we don't wrap text, but dynamically set font size dependant upon text length

interface TypeInTitleProps {
   title: string
   tagline?: string
}

export default function TypeInTitle({ title, tagline }: TypeInTitleProps) {

   const get_modifier = () => {
      if(title.length < 14) return ''
      return title.length > 22 ? 'x_long_title' : 'long_title'
   }

   return (      
      <div className="overlay fade_in type_in_from_left_init">
         <h1 className={"no_user_select letter_1 " + get_modifier()}>
            {title}
         </h1>
         {tagline ? <h4>{tagline}</h4> : null}
      </div>
   )

}