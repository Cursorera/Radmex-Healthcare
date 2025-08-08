import emailjs from '@emailjs/browser';

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export async function sendContactEmail(formData: ContactFormData): Promise<void> {
  const serviceId = 'service_98y5iz1';
  const templateId = 'template_y91cv0r';
  const publicKey = 'NNgTy4J06aPu5-Ed9';

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.');
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      to_email: 'radmexhealthcare@gmail.com',
    },
    {
      publicKey,
    }
  );
}


