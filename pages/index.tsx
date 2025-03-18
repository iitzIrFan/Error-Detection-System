import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Error Detection System - AI-Powered Code Analysis</title>
        <meta name="description" content="Advanced AI-powered error detection system for code analysis and optimization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-500">ErrorDetect</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </Link>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  How It Works
                </Link>
                <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Detect Code Errors with
                <span className="text-blue-500"> AI Power</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced error detection system powered by artificial intelligence. Find and fix code issues before they become problems.
              </p>
              <div className="flex space-x-4">
                <Link href="/try-now" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                  Try Now
                </Link>
                <Link href="/demo" className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500/10 transition-colors">
                  Watch Demo
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                {/* Animated Code Analysis Illustration */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-xl">Real-time Code Analysis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "AI-Powered Detection",
                description: "Advanced machine learning algorithms for accurate error detection",
                icon: "🤖"
              },
              {
                title: "Real-time Analysis",
                description: "Instant feedback as you code with live error detection",
                icon: "⚡"
              },
              {
                title: "Multiple Languages",
                description: "Support for all major programming languages",
                icon: "🌐"
              },
              {
                title: "Detailed Reports",
                description: "Comprehensive error reports with suggested fixes",
                icon: "📊"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload Your Code",
                description: "Simply paste your code or upload your files"
              },
              {
                step: "2",
                title: "AI Analysis",
                description: "Our AI analyzes your code for potential errors"
              },
              {
                step: "3",
                title: "Get Results",
                description: "Receive detailed reports and suggested fixes"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}