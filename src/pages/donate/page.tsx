import { useState } from 'react';
import { submitFormToInbox } from '@/lib/web3forms';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('e-transfer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'Canada',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusError, setStatusError] = useState(false);

  const predefinedAmounts = ['25', '50', '100', '250', '500', '1000'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    const form = e.currentTarget;
    setIsSubmitting(true);

    const finalAmount = amount === 'custom' ? customAmount : amount;

    const result = await submitFormToInbox(form, {
      subject: 'New donation pledge — LDII website',
      extra: {
        form_name: 'Donation Pledge Form',
        donation_type: donationType,
        donation_amount_cad: finalAmount,
        payment_method: paymentMethod,
      },
    });

    if (result.ok) {
      form.reset();
      setAmount('');
      setCustomAmount('');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        country: 'Canada',
        message: ''
      });
    }
    setStatusError(!result.ok);
    setStatusMessage(result.message);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1E3D]/80 via-[#0A1E3D]/70 to-[#0A1E3D]/80"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Make a Difference Today</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Your gift supports newcomers, youth and seniors in Ontario and the partnerships we build abroad.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="font-display text-3xl font-semibold text-ldii-navy mb-3 text-center">Pledge a Donation</h2>
            <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">Tell us what you would like to give. We reply from admin@ldiinitiatives.org to confirm the payment details.</p>

            <form onSubmit={handleSubmit} id="donation-pledge-form" className="space-y-8 relative">
              <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly className="form-guard" />
              {/* Donation Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Donation Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`py-4 px-6 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      donationType === 'one-time'
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    One-Time Donation
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`py-4 px-6 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      donationType === 'monthly'
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Monthly Donation
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Select Amount (CAD)</label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {predefinedAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setAmount(amt);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap ${
                        amount === amt
                          ? 'bg-green-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setAmount('custom')}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all cursor-pointer whitespace-nowrap mb-3 ${
                    amount === 'custom'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Custom Amount
                </button>
                {amount === 'custom' && (
                  <input
                    type="number"
                    name="customAmount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter custom amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    min="1"
                    required
                  />
                )}
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">Payment Method</label>
                <div className="space-y-3">
                  <div
                    onClick={() => setPaymentMethod('e-transfer')}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'e-transfer'
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <i className="ri-mail-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                        <div>
                          <div className="font-semibold text-gray-900">Interac e-Transfer (Recommended)</div>
                          <div className="text-sm text-gray-600">Fast, secure, and easy</div>
                        </div>
                      </div>
                      {paymentMethod === 'e-transfer' && (
                        <i className="ri-checkbox-circle-fill w-6 h-6 flex items-center justify-center text-green-600"></i>
                      )}
                    </div>
                  </div>

                  <div
                    onClick={() => setPaymentMethod('bank-transfer')}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'bank-transfer'
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <i className="ri-bank-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                        <div>
                          <div className="font-semibold text-gray-900">Direct Bank Transfer</div>
                          <div className="text-sm text-gray-600">Wire transfer or EFT</div>
                        </div>
                      </div>
                      {paymentMethod === 'bank-transfer' && (
                        <i className="ri-checkbox-circle-fill w-6 h-6 flex items-center justify-center text-green-600"></i>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Province/State</label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    >
                      <option value="Canada">Canada</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                      placeholder="Share why you're supporting LDII (max 500 characters)"
                    ></textarea>
                    <div className="text-sm text-gray-500 mt-1 text-right">{formData.message.length}/500</div>
                  </div>
                </div>
              </div>

              {/* Payment Instructions */}
              {paymentMethod === 'e-transfer' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <i className="ri-information-line w-5 h-5 flex items-center justify-center text-green-600 mr-2"></i>
                    Interac e-Transfer Instructions
                  </h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>After submitting this form, please send your e-Transfer to:</p>
                    <p className="font-semibold text-green-700">admin@ldiinitiatives.org</p>
                    <p>Security Question: What organization are you supporting?</p>
                    <p className="font-semibold text-green-700">Answer: LDII</p>
                    <p className="mt-3">We will confirm by email once it arrives.</p>
                  </div>
                </div>
              )}

              {paymentMethod === 'bank-transfer' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <i className="ri-information-line w-5 h-5 flex items-center justify-center text-green-600 mr-2"></i>
                    Bank Transfer Instructions
                  </h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>After submitting this form, you will receive an email with our banking details including:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Bank name and branch</li>
                      <li>Account number</li>
                      <li>Transit number</li>
                      <li>SWIFT/BIC code (for international transfers)</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Tax Receipt Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <i className="ri-file-text-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2 inline"></i>
                  LDII is a Canadian nonprofit organization, not a registered charity, so gifts are not eligible for a charitable tax receipt. We acknowledge every gift by email.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send my pledge'}
              </button>
              {statusMessage && (
                <p className={`text-sm text-center ${statusError ? 'text-red-600' : 'text-green-700'}`}>{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Your Donation Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-heart-line text-3xl text-[#3CCB7F]"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Direct Impact</h3>
              <p className="text-gray-600">
                Your gift goes to LDII’s local programmes in Ontario: newcomers, youth and seniors.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-shield-check-line text-3xl text-[#3CCB7F]"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                Ask us at any time how your gift was used. Annual reports will be published on our Impact page.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-global-line text-3xl text-[#3CCB7F]"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Your gift supports our conferences, exchanges and youth and community programmes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <i className="ri-lock-line w-6 h-6 flex items-center justify-center"></i>
            <span className="font-semibold">Your information</span>
          </div>
          <p className="text-sm text-gray-600">
            This form sends your pledge to our team by email. It does not take card details, and we never share your information with third parties.
          </p>
        </div>
      </section>
    </div>
  );
}
