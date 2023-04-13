export default function Card({children, className}) {
  return (
        <div className={`bg-white shadow-lg dark:bg-dark rounded-xl p-4 mb-4 border border-apply ` + className}>
            {children}
        </div>
  )
}
