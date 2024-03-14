export default function SignupForm() {
  return (
    <div className="w-96 p-4 sm:p-6 md:p-8">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-semibold text-cyan-600">Create an Account</h5>
        <div className="flex flex-col gap-8">
          <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="254-XXX-XXX-XXX"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">
              Your phone number
            </label>
            <input
              type="tel"
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
      </form>
    </div>
  );
}
