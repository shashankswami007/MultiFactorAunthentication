import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormCard from '../components/FormCard';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // TODO: Call backend API to authenticate user
      // 1. Make a POST request to '/api/login' with { userId: formData.userId, password: formData.password }
      // 2. Handle success (200 OK): The response should indicate if MFA is required.
      // 3. If MFA is required and already set up: navigate to '/verify-mfa' (pass a temporary auth token if needed).
      // 4. If MFA is required but NOT set up (first login): navigate to '/setup-mfa'.
      // 5. If MFA is NOT required: save the final Auth Token (e.g., in localStorage or cookies) and navigate to the Dashboard.
      // 6. Handle errors (401 Unauthorized, etc.): Update state with error message to display to the user.
      
      setIsLoading(false);
      
      // For demo purposes, we will assume this is a first-time user and redirect to setup:
      navigate('/setup-mfa');
    }, 1000);
  };

  const isFormValid = Object.values(formData).every(val => val.length > 0);

  return (
    <FormCard 
      title="Welcome Back" 
      subtitle="Enter your credentials to access your account"
    >
      <form onSubmit={handleSubmit} className="space-y-1">
        <Input
          id="userId"
          label="User ID"
          type="text"
          placeholder="Enter your user ID"
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <div className="pt-4 flex flex-col gap-3">
          <Button type="submit" isLoading={isLoading} disabled={!isFormValid}>
            Sign In
          </Button>
          <div className="text-center">
            <span className="text-sm text-slate-500">Don't have an account? </span>
            <button 
              type="button" 
              onClick={() => navigate('/signup')}
              className="text-sm text-indigo-600 font-medium hover:underline"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default Login;
