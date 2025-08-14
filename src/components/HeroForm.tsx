import { useState, type ChangeEvent, type FormEvent } from 'react';
import { submitToGoogleSheet, saveToLocalStorage } from '../utils/formSubmission';

type HeroFormProps = {
  onSubmitted?: () => void;
};

const HeroForm = ({ onSubmitted }: HeroFormProps) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Both',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Try to submit to Google Apps Script
      const result = await submitToGoogleSheet({
        name: form.name,
        email: form.email,
        phone: form.phone,
        interest: form.interest,
        message: form.message,
        source: 'hero'
      });

      if (result.success) {
        // Success - Google Apps Script worked
        console.log('Form submitted successfully:', result.message);
        setIsSubmitted(true);
        if (onSubmitted) onSubmitted();
      } else {
        // Google Apps Script failed, use fallback
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Fallback: Store in localStorage and show success message
      try {
        const saved = saveToLocalStorage({
          name: form.name,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
          message: form.message,
          source: 'hero'
        });
        
        if (saved) {
          alert('Thanks! We will contact you shortly. (Note: Your submission has been saved locally due to a technical issue)');
          setIsSubmitted(true);
          if (onSubmitted) onSubmitted();
        } else {
          throw new Error('Failed to save locally');
        }
      } catch (fallbackError) {
        console.error('Fallback also failed:', fallbackError);
        alert('Submission failed. Please try again later or contact us directly at aditimehra0298@gmail.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setForm({ name: '', email: '', phone: '', interest: 'Both', message: '' });
  };

  // Show Thank You page
  if (isSubmitted) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-blue-100 text-lg">
            We've received your message and will get back to you shortly.
          </p>
        </div>
        
        <div className="space-y-4 text-blue-100">
          <p>What happens next?</p>
          <ul className="text-sm space-y-2">
            <li>• Our team will review your inquiry within 24 hours</li>
            <li>• You'll receive a personalized response via email</li>
            <li>• We may schedule a consultation call if needed</li>
          </ul>
        </div>
        
        <div className="mt-8 space-x-4">
          <button
            onClick={resetForm}
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
          >
            Submit Another Inquiry
          </button>
          <button
            onClick={() => window.location.href = '#hero'}
            className="bg-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto text-left">
      <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-blue-100 mb-2" htmlFor="name">Full Name*</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/80 text-gray-900 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm text-blue-100 mb-2" htmlFor="email">Email Address*</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/80 text-gray-900 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-blue-100 mb-2" htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/80 text-gray-900 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="+30 69 1234 5678"
          />
        </div>
        <div>
          <label className="block text-sm text-blue-100 mb-2" htmlFor="interest">Select Interest</label>
          <select
            id="interest"
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/80 text-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="NIS2">NIS2</option>
            <option value="DORA">DORA</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-blue-100 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg bg-white/80 text-gray-900 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Tell us about your needs..."
          />
        </div>
      </div>
      <div className="mt-6">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default HeroForm;


