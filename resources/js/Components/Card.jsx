export default function Card({children, className = ''}) {
    let p = 'p-4'
    if (className.includes('p-') || className.includes('px-') || className.includes('py-')) {
        p = ''
    }
  return (
        <div className={`bg-white shadow-lg dark:bg-dark rounded-xl ${p} mb-4 border border-apply ` + className}>
            {children}
        </div>
  )
}
