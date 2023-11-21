import Link from "next/link"

export default function Home() {
    return (
        <main className="main">
            <h1>Hi, I am Ronald Lambino</h1>
            <p>This app is for Evelan Next.js/Typescript test.</p>
            <p>The goal is to show a list of users on initial page load.</p>
            <p>There should be a button to retrieve more users that will append on the users list.</p>
            <p className="my-3">I made it look like a list of active online users just to make it interesting.</p>
            <p>Go to <Link href='/users' className="font-bold">/users</Link> to see the output.</p>
        </main>
    )
}
