import React, { useState } from 'react';

const contactSectionData = {
  title: 'Drop Us a Line',
  description: 'Your email address will not be published. Required fields are marked *',
  form: {
    namePlaceholder: 'Your Name',
    websitePlaceholder: 'Website',
    commentPlaceholder: 'Your Comment',
    submitButtonText: 'GET IN TOUCH',
  },
  contacts: {
    header: 'OUR CONTACT',
    subHeader: "Let’s Build Something Incredible Together!",
    description: 'Have questions? Want to talk about how we can bring your brand to life? We’d love to hear from you!',
    address: '27 Division St, New York, NY 10002, USA',
    phone: '+1 (659) 400-8283',
    email: 'info@infinitydesignhub.com',
  },
  socialLinks: [
    {
      platform: 'Twitter',
      url: 'https://twitter.com/Infinity_DH',
      icon: 'fab fa-twitter',
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/infinitydesignhub/?eid=ARCLTZCdUHvhxs9ypf5WNhDY5f8ZTHcm7DHkQCKRrvrknw3BTLvNiVTMRMrMDb1muGMpXRRh0NmN92OJ',
      icon: 'fab fa-facebook-f',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/company/31553220/admin/',
      icon: 'fab fa-linkedin-in',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/infinitydesignhub/?hl=en',
      icon: 'fab fa-instagram',
    },
  ],
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, website, comment } = formData;
    const emailBody = `Name: ${name}\nWebsite: ${website}\nComment: ${comment}`;
    const mailtoLink = `mailto:info@sagarbharvadiya.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    // Redirect to mailto link
    window.location.href = mailtoLink;

    // Reset form and show thank you message
    setFormData({ name: '', website: '', comment: '' });
    setSubmitted(true);
  };

  return (
    <section className="wpcf7 elementor-section elementor-top-section">
      <div className="container container-lg mx-auto">
        <div className='row flex-wrap'>
          <div className="elementor-widget-wrap bg-[#F5F5F5] col-md-6 p-4 md:p-5">
            <div className="">
              {/* Conditionally render title and description */}
              {!submitted && (
                <>
                  <div className="elementor-widget">
                    <h3 className="text-[1.875rem] font-bold mb-2 text-[#232323]">{contactSectionData.title}</h3>
                  </div>
                  <div className="elementor-widget mt-3">
                    <p className='text-[14px]'>{contactSectionData.description}</p>
                  </div>
                </>
              )}
              
              {submitted ? (
                <div className="thank-you-message">
                  <h3 className="text-[1.875rem] font-bold mb-2 text-[#232323]">Thank You!</h3>
                  <p>Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col contact">
                  <input
                    type="text"
                    name="name"
                    placeholder={contactSectionData.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border p-2 mb-4 !text-[#232323]"
                  />
                  <input
                    type="text"
                    name="website"
                    placeholder={contactSectionData.form.websitePlaceholder}
                    value={formData.website}
                    onChange={handleChange}
                    className="border p-2 mb-4 !text-[#232323]"
                  />
                  <textarea
                    name="comment"
                    placeholder={contactSectionData.form.commentPlaceholder}
                    value={formData.comment}
                    onChange={handleChange}
                    className="border p-2 mb-4 !text-[#232323]"
                  />
                  <button
                    type="submit"
                    className="no-underline text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300"
                  >
                    {contactSectionData.form.submitButtonText}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="elementor-column elementor-col-50 col-md-6 contact-details">
            <div className="elementor-widget-wrap pr-0">
              <div className="elementor-widget">
                <h4 className="font-semibold mb-3"><span className='text-[#ec008c] text-[14px] font-bold'>{contactSectionData.contacts.header}</span></h4>
                <h3 className="text-[38px] font-bold mt-4 mb-3 text-[#232323]">{contactSectionData.contacts.subHeader}</h3>
              </div>
              <div className="elementor-widget">
                <p className='pt-2 text-[18px] text-[#585858]'>{contactSectionData.contacts.description}</p>
              </div>
              <div className="elementor-widget">
                <ul className="list-none pl-0">
                  <li className='py-2 text-[18px] text-[#232323] font-normal'>{contactSectionData.contacts.address}</li>
                  <li className='py-2 text-[18px] text-[#232323] font-normal'>
                    <a className='hover:!text-[#ec008c]' href={`tel:${contactSectionData.contacts.phone}`}>{contactSectionData.contacts.phone}</a>
                  </li>
                  <li className='py-2 text-[18px] text-[#232323] font-normal'>
                    <a className='hover:!text-[#ec008c]' href={`mailto:${contactSectionData.contacts.email}`}>{contactSectionData.contacts.email}</a>
                  </li>
                </ul>
              </div>
              <div className="elementor-widget">
                <div className="flex space-x-4 pt-3 gap-[15px]">
                  {contactSectionData.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg socail-btn"
                      title={link.platform}
                    >
                      <i className={link.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
