import React, { useState } from 'react';

interface Location {
  city: string;
  state: string;
  zip: string;
}

interface FormData {
  situation: string;
  doctorPreference: string;
  referralPreference: string;
  travelCare: string;
  usageFrequency: string;
  costPreference: string;
  prescriptionNeeds: string;
  extraBenefits: string[];
  name: string;
  currentPlan: string;
  location: Location;
}

type InputValue = string | string[] | Location;

const QuestionnaireForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    situation: '',
    doctorPreference: '',
    referralPreference: '',
    travelCare: '',
    usageFrequency: '',
    costPreference: '',
    prescriptionNeeds: '',
    extraBenefits: [],
    name: '',
    currentPlan: '',
    location: { city: '', state: '', zip: '' }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const steps = [
    {
      title: "About You",
      description: "Let's start with some basic information",
      fields: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Current Medicare Plan</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.currentPlan}
              onChange={(e) => handleInputChange('currentPlan', e.target.value)}
            >
              <option value="">Select your current plan</option>
              <option value="none">None</option>
              <option value="original">Original Medicare only</option>
              <option value="advantage">Medicare Advantage</option>
              <option value="medigap">Medigap</option>
              <option value="snp">Special Needs Plan (SNP)</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.location.city}
                onChange={(e) => handleInputChange('location', {...formData.location, city: e.target.value})}
                placeholder="City"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.location.state}
                onChange={(e) => handleInputChange('location', {...formData.location, state: e.target.value})}
                placeholder="State"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">ZIP Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.location.zip}
                onChange={(e) => handleInputChange('location', {...formData.location, zip: e.target.value})}
                placeholder="ZIP"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Doctor Preferences",
      description: "Tell us about your preferences regarding doctors and specialists",
      fields: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">How important is keeping your current doctors?</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.doctorPreference}
              onChange={(e) => handleInputChange('doctorPreference', e.target.value)}
            >
              <option value="">Select your preference</option>
              <option value="must-keep">Must keep current doctors</option>
              <option value="prefer-keep">Prefer to keep but flexible</option>
              <option value="open">Open to new doctors</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">How do you feel about referrals for specialists?</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.referralPreference}
              onChange={(e) => handleInputChange('referralPreference', e.target.value)}
            >
              <option value="">Select your preference</option>
              <option value="no-referrals">Prefer direct access to specialists</option>
              <option value="ok-referrals">OK with referrals from primary doctor</option>
              <option value="no-preference">No preference</option>
            </select>
          </div>
        </div>
      )
    },
    {
      title: "Healthcare Usage",
      description: "Help us understand your healthcare needs",
      fields: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">How often do you typically need medical care?</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.usageFrequency}
              onChange={(e) => handleInputChange('usageFrequency', e.target.value)}
            >
              <option value="">Select frequency</option>
              <option value="rarely">Rarely (1-2 times per year)</option>
              <option value="occasionally">Occasionally (3-6 times per year)</option>
              <option value="regularly">Regularly (7-12 times per year)</option>
              <option value="frequently">Frequently (more than 12 times per year)</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">Do you need coverage while traveling?</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.travelCare}
              onChange={(e) => handleInputChange('travelCare', e.target.value)}
            >
              <option value="">Select travel needs</option>
              <option value="no-travel">Rarely travel</option>
              <option value="domestic">Travel within the US</option>
              <option value="international">International travel</option>
            </select>
          </div>
        </div>
      )
    },
    {
      title: "Cost & Coverage",
      description: "Let's understand your preferences for costs and coverage",
      fields: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">What's your preferred approach to costs?</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.costPreference}
              onChange={(e) => handleInputChange('costPreference', e.target.value)}
            >
              <option value="">Select cost preference</option>
              <option value="lower-premium">Lower monthly premium, higher out-of-pocket</option>
              <option value="higher-premium">Higher monthly premium, lower out-of-pocket</option>
              <option value="balanced">Balanced premium and out-of-pocket costs</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium">What are your prescription drug needs?</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.prescriptionNeeds}
              onChange={(e) => handleInputChange('prescriptionNeeds', e.target.value)}
            >
              <option value="">Select prescription needs</option>
              <option value="no-prescriptions">No regular prescriptions</option>
              <option value="few-generic">Few generic medications</option>
              <option value="some-brand">Some brand-name medications</option>
              <option value="many-medications">Many medications</option>
            </select>
          </div>
        </div>
      )
    },
    {
      title: "Additional Benefits",
      description: "Select any additional benefits that interest you",
      fields: (
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Which additional benefits interest you? (Select all that apply)</label>
            <div className="space-y-2">
              {[
                { value: 'dental', label: 'Dental coverage' },
                { value: 'vision', label: 'Vision coverage' },
                { value: 'hearing', label: 'Hearing aids' },
                { value: 'fitness', label: 'Fitness membership' },
                { value: 'transportation', label: 'Transportation to medical appointments' },
                { value: 'meal-delivery', label: 'Meal delivery after hospital stays' }
              ].map(benefit => (
                <label key={benefit.value} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.extraBenefits.includes(benefit.value)}
                    onChange={(e) => {
                      const newBenefits = e.target.checked
                        ? [...formData.extraBenefits, benefit.value]
                        : formData.extraBenefits.filter(b => b !== benefit.value);
                      handleInputChange('extraBenefits', newBenefits);
                    }}
                    className="rounded border-gray-300 text-[#005EB8] focus:ring-[#005EB8]"
                  />
                  <span>{benefit.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleInputChange = (field: keyof FormData, value: InputValue) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name) return false;
    if (!formData.location.city || !formData.location.state || !formData.location.zip) return false;
    if (!formData.currentPlan) return false;
    if (!formData.doctorPreference) return false;
    if (!formData.costPreference) return false;
    if (!formData.prescriptionNeeds) return false;
    return true;
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setError(null);

      if (!validateForm()) {
        setError('Please fill out all required fields');
        return;
      }

      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        formVersion: '1.0'
      };

      const response = await fetch('/api/submit-medicare-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      window.location.href = `/recommendations?id=${result.id}`;

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while submitting the form');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-[#005EB8]">Medicare Plan Finder</h1>
      </div>

      <div className="p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{steps[step].title}</h2>
            <span className="text-sm text-gray-500">Step {step + 1} of {steps.length}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-[#005EB8] rounded-full transition-all duration-300"
              style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 mb-6">{steps[step].description}</p>
          {steps[step].fields}
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-md">
            {error}
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className={`px-4 py-2 rounded transition-colors flex items-center ${
              step === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-[#005EB8] hover:bg-gray-100'
            }`}
          >
            ← Back
          </button>
          {step === steps.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`bg-[#005EB8] hover:bg-[#003F7A] text-white px-6 py-2 rounded transition-colors flex items-center ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-[#005EB8] hover:bg-[#003F7A] text-white px-6 py-2 rounded transition-colors flex items-center"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
