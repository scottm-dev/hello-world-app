import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      TEST Hello World.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
