
export const fetchTodos = async () => {
    
      const response = await fetch('http://localhost:5000');
      return response.json();
      
};

