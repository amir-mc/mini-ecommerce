// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50  dark:bg-black flex flex-col items-center justify-center p-4">
      {/* Simplified Branding */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold dark:text-white text-gray-800 mb-2">DIGISTORE</h1>
        <p className="text-gray-600 dark:text-white">Welcome to your digital shopping experience</p>
      </div>
      
      {/* Clean Card Design */}
      <div className="w-full max-w-md bg-white  dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 p-6">
        <SignIn
          appearance={{
            layout: {
              logoPlacement: 'none',
              socialButtonsPlacement: 'top',
            },
            elements: {
              rootBox: 'w-full',
              card: 'bg-transparent shadow-none p-0',
              header: 'text-center',
              headerTitle: 'text-xl font-semibold text-gray-800 mb-1',
              headerSubtitle: 'text-gray-500 text-sm',
              socialButtonsBlockButton: 
                'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 rounded-md',
              dividerLine: 'bg-gray-200',
              dividerText: 'text-gray-400 text-xs',
              formFieldLabel: 'text-gray-700 text-sm font-medium',
              formFieldInput: 
                'border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-200',
              formButtonPrimary:
                'bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm font-medium',
              footerActionText: 'text-gray-500 text-sm',
              footerActionLink: 'text-blue-600 hover:text-blue-800 text-sm',
            },
            variables: {
              colorPrimary: '#2563eb', // blue-600
              colorText: '#1f2937', // gray-800
              colorTextSecondary: '#4b5563', // gray-600
            }
          }}
        />
        
        {/* Simple Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link 
            href="/sign-up" 
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}