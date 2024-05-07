import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      TEST2 Hello World.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
