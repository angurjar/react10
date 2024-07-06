const authService = {
    login: async (username, password) => {
    
      if (username === 'admin' && password === 'admin') {
        return true;
      }
      return false;
    }
  };
  
  export default authService;
  