import { redirect } from 'next/navigation'
import { Logo } from '../components/ui/logo'

export default function Page() {
  redirect('/home')

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Logo size={80} />
    </div>
  )
}
