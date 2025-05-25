import Image from "next/image";

export default function Home() {
  return (
    <div>
    <h1>Welcome to the speed database</h1>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="http://localhost:3000/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          SERG Login
        </a>
      </footer>
    </div>
  );
}
