'use client'
import { useState } from 'react';

function EmailSubscriptionForm() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
    // Add logic here to handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col p-4 gap-2'>
      <label htmlFor="email" className="sr-only">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-black px-4 py-2 rounded-md  hover:bg-yellow-600"
      >
        Subscribe
      </button>
    </form>
  );
}

export default EmailSubscriptionForm;
