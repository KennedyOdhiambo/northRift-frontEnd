export default function LoginForm() {
  return (
    <div className="w-96 p-4 sm:p-6 md:p-8">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-semibold text-cyan-600">Log In to continue</h5>
        <div className="flex flex-col gap-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your Phone Number
            </label>
            <input
              type="tel"
              name="email"
              id="phoneNumber"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="254-XXX-XXX-XXX"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-cyan-500 hover:bg-cyan-800  focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login to your account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{' '}
          <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
}
