import { FunctionComponent } from 'react'
import { Service } from '../types'
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{ service: Service }> = ({
   service: { Icon, title, about },
}) => {
   //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
   function createMarkup() {
      return {
         __html: about,
      }
   }

   return (
      <div className='flex items-center  ' style={{fontSize:"0.8rem"}}>
         <Icon className='w-12 h-12 pr-2 text-green' />
         <div className=''>
            <h6 className='font-bold'>{title}</h6>
            <p dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default ServiceCard
