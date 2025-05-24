// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col items-center justify-center p-4">
      {/* Consistent Branding */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold dark:text-white text-gray-800 mb-2">DIGISTORE</h1>
        <p className="text-gray-600 dark:text-white">Join our digital shopping community</p>
      </div>
      
      {/* Matching Card Design */}
      <div className="w-full max-w-md bg-white dark:bg-gray-900  rounded-lg shadow-sm border border-gray-200 p-6">
        <SignUp
          appearance={{
            layout: {
              logoPlacement: 'none',
              socialButtonsPlacement: 'top',
              showOptionalFields: false // Cleaner form by hiding optional fields
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
              formFieldSuccessText: 'text-green-600 text-xs',
              formFieldWarningText: 'text-yellow-600 text-xs',
              formFieldErrorText: 'text-red-600 text-xs',
            },
            variables: {
              colorPrimary: '#2563eb', // Matching blue-600
              colorText: '#1f2937', // gray-800
              colorTextSecondary: '#4b5563', // gray-600
              colorDanger: '#dc2626', // red-600 for errors
            }
          }}
          afterSignUpUrl="/welcome" // Where to redirect after sign up
          signInUrl="/sign-in" // Link to sign in page
        />
        
        {/* Consistent Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link 
            href="/sign-in" 
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}