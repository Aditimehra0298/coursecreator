import { useState } from 'react';
import { testConnection, submitToGoogleSheet } from '../utils/formSubmission';

const TestConnection = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [isTesting, setIsTesting] = useState(false);

  const testGoogleScript = async () => {
    setIsTesting(true);
    setTestResult('Testing connection...');
    
    try {
      const isConnected = await testConnection();
      if (isConnected) {
        setTestResult('✅ Connection successful! Google Apps Script is accessible.');
      } else {
        setTestResult('❌ Connection failed! Google Apps Script is not accessible.');
      }
    } catch (error) {
      setTestResult(`❌ Error testing connection: ${error}`);
    } finally {
      setIsTesting(false);
    }
  };

  const testFormSubmission = async () => {
    setIsTesting(true);
    setTestResult('Testing form submission...');
    
    try {
      const result = await submitToGoogleSheet({
        name: 'Test User',
        email: 'test@example.com',
        phone: '+1234567890',
        interest: 'Both',
        message: 'This is a test submission',
        source: 'test'
      });
      
      if (result.success) {
        setTestResult(`✅ Form submission test successful! ${result.message}`);
      } else {
        setTestResult(`❌ Form submission test failed: ${result.message}`);
      }
    } catch (error) {
      setTestResult(`❌ Error testing form submission: ${error}`);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-semibold text-white mb-6">Test Google Apps Script Connection</h3>
      
      <div className="space-y-4">
        <button
          onClick={testGoogleScript}
          disabled={isTesting}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
        >
          {isTesting ? 'Testing...' : 'Test Connection'}
        </button>
        
        <button
          onClick={testFormSubmission}
          disabled={isTesting}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 disabled:opacity-50 ml-4"
        >
          {isTesting ? 'Testing...' : 'Test Form Submission'}
        </button>
      </div>
      
      {testResult && (
        <div className="mt-6 p-4 bg-white/20 rounded-lg">
          <p className="text-white text-sm">{testResult}</p>
        </div>
      )}
      
      <div className="mt-6 text-left text-blue-100 text-sm">
        <p><strong>Instructions:</strong></p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>Make sure your Google Apps Script is deployed as a Web App</li>
          <li>Set "Execute as: Me" and "Who has access: Anyone"</li>
          <li>Copy the Web App URL and update it in the code</li>
          <li>Test the connection first, then test form submission</li>
        </ol>
      </div>
    </div>
  );
};

export default TestConnection;
