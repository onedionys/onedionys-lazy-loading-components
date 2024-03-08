/**
 * Function to lazy load components dynamically.
 * @param {string} componentPath - Path to the component file.
 * @returns {Promise} - Promise that resolves when component is loaded.
 */
function lazyLoadComponent(componentPath) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = componentPath;
      script.onload = () => {
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.body.appendChild(script);
    });
  }
  
  module.exports = lazyLoadComponent;
  