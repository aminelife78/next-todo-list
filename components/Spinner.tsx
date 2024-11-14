

const Spinner = ({text}:{text:string}) => {
  return (
    
<div className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
  <span className="sr-only">{text}</span>
</div>


  )
}

export default Spinner