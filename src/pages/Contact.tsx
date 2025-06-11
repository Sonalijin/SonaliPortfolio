import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSuccess(true);
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Me</h1>
          <p className="text-textSecondary mb-8">
            Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-tertiary border border-gray-700 focus:border-secondary focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-tertiary border border-gray-700 focus:border-secondary focus:outline-none"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-tertiary border border-gray-700 focus:border-secondary focus:outline-none"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-tertiary border border-gray-700 focus:border-secondary focus:outline-none"
                placeholder="Your message"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}

            {success && (
              <div className="text-green-500 text-sm">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                loading
                  ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                  : 'bg-secondary hover:bg-secondary/90 text-primary'
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold mb-4">Other Ways to Connect</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:Sonalijain057@gmail.com"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/sonali-jain-33a6a713a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Sonalijin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 