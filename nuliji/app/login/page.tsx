export default function HomePage() {
  return (
    <form>
      <div className="flex h-screen justify-center flex-col">
        <h1 className="pb-3">Log in</h1>
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
        <LoginButton />
      </div>
    </form>
  );
}

function LoginButton() {
    return (
      <div className="mx-auto mt-8">
        <button className="rounded-lg bg-login-inactive hover:bg-login-active">
        hi</button>
      </div>
    );
}