// Form submission utility functions
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwHgje_ukm2D6y4lYfbyLpkuyLS5v372tdMMNs6uXQ5nM5LsYpXuOjz_8bcqopFy0X8A/exec';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  source: string;
}

export const submitToGoogleSheet = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const result = await response.json();
      return { success: true, message: 'Form submitted successfully' };
    } else {
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

export const getLocalSubmissions = (): any[] => {
  try {
    return JSON.parse(localStorage.getItem('formSubmissions') || '[]');
  } catch (error) {
    console.error('Error reading local submissions:', error);
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
  } catch (error) {
    return false;
  }
};
