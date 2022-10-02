import Link from 'next/link'
import useCursorType from '../hooks/useCursorType'

const Custom404 = () => {
  const { changeCursorType } = useCursorType()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{ fontSize: '2.4rem', marginBottom: '2rem' }}>404</div>
      <Link href='/'>
        <a
          style={{ padding: '1rem', fontSize: '1.8rem', textDecoration: 'underline' }}
          onMouseEnter={() => changeCursorType('hamburger')}
          onMouseLeave={() => changeCursorType('default')}>
          Home page
        </a>
      </Link>
    </div>
  )
}

export default Custom404
