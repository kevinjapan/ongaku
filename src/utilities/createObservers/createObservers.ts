

// Create IntersectionObservers

interface IntersectionObserverOptions {
   root?:Element
   rootMargin?:string
   threshold?:number
}

export default function create_observers (elements: NodeListOf<Element>,active_class: string,options: IntersectionObserverOptions) {

   let observers_created = false

   const appearOnScroll = new IntersectionObserver(
      function(entries,appearOnScroll){
         entries.forEach(entry => {
            if(!entry.isIntersecting) return
            entry.target.classList.add(active_class)
            appearOnScroll.unobserve(entry.target)
         })
   },options)

   if(elements) {
      elements.forEach(element => {
         appearOnScroll.observe(element)
      })
      observers_created = true
   }
   return observers_created
}