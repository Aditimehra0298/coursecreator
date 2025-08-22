// Form submission utility functions
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyqyaQDPdLYKSAJWWyZV_T61gdpOnZV4OTKXITxyujGhHOCRgMDTk_8AGhzbM_H6aZg/exec';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  source: string;
}

export const submitToGoogleSheet = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Use a CORS-friendly approach by creating a form data object
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('location', formData.location);

    form.append('message', formData.message);
    form.append('source', formData.source);
    form.append('timestamp', new Date().toISOString());

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: form,
      // Don't set Content-Type header - let the browser set it for FormData
    });

    if (response.ok) {
      const result = await response.text();
      console.log('Form submitted successfully:', result);
      return { success: true, message: 'Form submitted successfully' };
    } else {
      console.error('Google Apps Script error:', response.status, response.statusText);
      return { success: false, message: `Server error: ${response.status}` };
    }
  } catch (error) {
    console.error('Network error:', error);
    return { success: false, message: 'Network error occurred' };
  }
};

export const saveToLocalStorage = (formData: FormData): boolean => {
  try {
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    return true;
  } catch (error) {
    console.error('Local storage error:', error);
    return false;
  }
};

export const getLocalSubmissions = (): FormData[] => {
  try {
    return JSON.parse(localStorage.getItem('formSubmissions') || '[]');
  } catch {
    console.error('Error reading local submissions');
    return [];
  }
};

// Test the Google Apps Script connection
export const testConnection = async (): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'HEAD'
    });
    return response.ok;
  } catch {
    return false;
  }
};
