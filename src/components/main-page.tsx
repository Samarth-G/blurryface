import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps, useState , useEffect} from "react";
import Upload from "./upload";

export function MainPage() {
  const [title, setTitle] = useState("Loading");
  const [objectList, setList] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then(res => res.json()) // convert data to json
      .then((data) =>  {
        setTitle(data.title);
        setList(data.objects);
      })
  }, []);

  return (
    <div className="flex justify-center bg-black">
      <div className="flex flex-col bg-gradient-to-r from-blue-400 via-white-500 to-green-500 min-h-screen w-full max-w-screen-xl">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#UploadVid">
            <CameraIcon className="h-6 w-6" />
            <span className="sr-only">BlurryFace</span>
          </Link>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 sm:py-24 md:py-36 lg:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                     {title}
                  </h1>
                  <p className="max-w-[800px] text-gray-500 md:text-xl text-left">
                    Upload your videos and we'll automatically blur all faces to protect privacy.
                  </p>
                </div>
                <Link href="#UploadVid">
                    <Button>Upload Video</Button>
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <ShieldCheckIcon className="h-10 w-10" />
                  <h2 className="text-2xl font-bold">Privacy First</h2>
                  <p className="max-w-[200px] text-gray-500 md:text-lg">
                    We value your privacy. Your videos are processed and immediately deleted.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <FastForwardIcon className="h-10 w-10" />
                  <h2 className="text-2xl font-bold">Fast Processing</h2>
                  <p className="max-w-[200px] text-gray-500 md:text-lg">
                    Our advanced AI processes your videos quickly, so you don't have to wait.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <UploadCloudIcon className="h-10 w-10" />
                  <h2 className="text-2xl font-bold">Easy to Use</h2>
                  <p className="max-w-[200px] text-gray-500 md:text-lg">
                    Just upload your video and we'll do the rest. It's that simple.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="UploadVid" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Upload Your Video</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Select your video and upload it!
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Upload />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Download Your Blurred Video</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Once your video has been processed, you can download the blurred version here.
              </p>
            </div>
            <Button className="w-full max-w-sm">Download Blurred Video</Button>
          </div>
        </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© 2024 BlurryFace. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}




function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function FastForwardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  )
}


function ShieldCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function UploadCloudIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  )
}
