import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Error Detection System</h1>
      <p className="mb-4">This is a Next.js application with Firebase Firestore backend.</p>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Features:</h2>
        <ul className="list-disc pl-5">
          <li>Error Reports Collection</li>
          <li>Bug Fixes Collection</li>
          <li>AI Fixes Collection</li>
        </ul>
      </div>
    </div>
  )
}

export default Home