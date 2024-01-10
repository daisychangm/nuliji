import Image from 'next/image'
import LoginButton from '../ui/login-button'

export default function LoginPage() {
  return (
    <form noValidate>
      <div className="flex h-screen justify-center flex-col">
        <h1 className="pb-3">Please log in to continue</h1>
        <div className="flex flex-col mx-auto">
          <label className="pb-1">Email</label>
          <input
            className="px-3 pt-2 pb-2 w-72 outline border-black rounded-md border-2"
            id="email"
            type="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="flex flex-col mx-auto pt-3">
          <label className="pb-1">Password</label>
          <input
            className="px-3 pt-2 pb-2 w-72 outline border-black rounded-md border-2"
            id="password"
            type="password"
            name="password"
            placeholder="●●●●●●●●"
            required
            minLength={8}
          />
        </div>
        <div className="mx-auto mt-8">
          <LoginButton />
        </div>
        <div className="flex items-center justify-center">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </form>
  );
}