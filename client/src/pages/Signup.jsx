import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white">
              Figuxsoe's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Welcome to Figuxsoe's Blog! Explore captivating articles on
            technology, arts, travel, lifestyle, and more. Join our vibrant
            community of readers and writers for inspiration and insight. Dive
            in and discover something new today!
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sing up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an acoount?</span>
            <Link to='/sign-in' className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
