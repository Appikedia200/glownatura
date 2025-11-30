import { toast } from 'sonner';

interface APIErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
    suggestion?: string;
  };
}

/**
 * Handle API errors and show appropriate toast notifications
 */
export const handleAPIError = (error: any): void => {
  // Check if it's a structured API error
  if (error.response?.data?.error) {
    const apiError = error.response.data.error;
    
    toast.error(apiError.message, {
      description: apiError.suggestion || undefined,
      duration: 6000,
    });
    return;
  }
  
  // Handle network errors
  if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
    toast.error('Connection Failed', {
      description: 'Please check your internet connection and try again.',
      duration: 5000
    });
    return;
  }
  
  // Handle rate limiting
  if (error.response?.status === 429) {
    const retryAfter = error.response.data?.error?.retryAfter || 'a few minutes';
    toast.error('Too Many Requests', {
      description: `Please wait ${retryAfter} before trying again.`,
      duration: 8000
    });
    return;
  }
  
  // Handle timeout
  if (error.code === 'ECONNABORTED') {
    toast.error('Request Timeout', {
      description: 'The server is taking too long to respond. Please try again.',
      duration: 5000
    });
    return;
  }
  
  // Handle server errors
  if (error.response?.status >= 500) {
    toast.error('Server Error', {
      description: 'Something went wrong on our end. Please try again later.',
      duration: 5000
    });
    return;
  }
  
  // Handle 404
  if (error.response?.status === 404) {
    toast.error('Not Found', {
      description: 'The requested resource could not be found.',
      duration: 5000
    });
    return;
  }
  
  // Generic error fallback
  toast.error('Something Went Wrong', {
    description: error.message || 'Please try again or contact support.',
    duration: 5000
  });
};

/**
 * Show success notification
 */
export const showSuccess = (message: string, description?: string): void => {
  toast.success(message, {
    description,
    duration: 4000
  });
};

/**
 * Show warning notification
 */
export const showWarning = (message: string, description?: string): void => {
  toast.warning(message, {
    description,
    duration: 5000
  });
};

/**
 * Show info notification
 */
export const showInfo = (message: string, description?: string): void => {
  toast.info(message, {
    description,
    duration: 4000
  });
};

/**
 * Loading toast with promise
 */
export const showLoadingToast = <T>(
  promise: Promise<T>,
  messages: {
    loading: string;
    success: string | ((data: T) => string);
    error: string | ((error: any) => string);
  }
): void => {
  toast.promise(promise, {
    loading: messages.loading,
    success: messages.success,
    error: messages.error
  });
};

