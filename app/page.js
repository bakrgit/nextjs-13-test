import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-danger">home page</h1>
      <Link href={"/data"}>Data Page</Link>
      <button className="btn btn-danger">Click Me</button>
    </main>
  );
}
