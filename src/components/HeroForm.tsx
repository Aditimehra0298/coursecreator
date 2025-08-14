import { useState, type ChangeEvent, type FormEvent } from 'react';

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Lead form submitted:', form);
    alert('Thanks! We will contact you shortly.');
    setForm({ name: '', email: '', phone: '', interest: 'Both', message: '' });
    if (onSubmitted) onSubmitted();
  };

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
        <button type="submit" className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
          Submit
        </button>
      </div>
    </form>
  );
};

export default HeroForm;


