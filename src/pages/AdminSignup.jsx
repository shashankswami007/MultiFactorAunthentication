import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormCard from '../components/FormCard';
import Input from '../components/Input';
import Button from '../components/Button';

const AdminSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    recoveryEmail: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // TODO: Call backend API to register admin
      // 1. Make a POST request to '/api/admin/register' with { username: formData.username, email: formData.recoveryEmail, password: formData.password }
      // 2. Handle success (201 Created): navigate to '/login' and optionally show a success toast notification.
      // 3. Handle errors (400 Bad Request, 409 Conflict): parse the error message and display it to the user (e.g., "Username already exists").
      
      setIsLoading(false);
      navigate('/login');
    }, 1000);
  };

  const isFormValid = Object.values(formData).every(val => val.length > 0);

  return (
    <FormCard 
      title="Admin Registration" 
      subtitle="Create your administrator account"
    >
      <form onSubmit={handleSubmit} className="space-y-1">
        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="admin_user"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Input
          id="recoveryEmail"
          label="Recovery Email"
          type="email"
          placeholder="admin@company.com"
          value={formData.recoveryEmail}
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
        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={error}
          required
        />
        
        <div className="pt-4">
          <Button type="submit" isLoading={isLoading} disabled={!isFormValid}>
            Create Account
          </Button>
        </div>
      </form>
    </FormCard>
  );
};

export default AdminSignup;
