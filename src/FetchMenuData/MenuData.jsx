// In wordpress go to users/profile create app, generate password
// To get menu id value, fetch https://hlg-testing.co.uk/hush_staging/wp-json/wp/v2/menus and console.log the returned value

const MenuData = async (menuId) => {
    const username = 'marv@harrylarrygary.com'; // Replace with your WordPress username
    const appPassword = 'OB8g 09Vp Vubs INJu tZc5 0amZ'; // Replace with the generated password
    const response = await fetch(`https://hlg-testing.co.uk/hush_staging/wp-json/wp/v2/menu-items?menus=${menuId}`, {
      headers: {
        Authorization: 'Basic ' + btoa(`${username}:${appPassword}`),
      },
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const posts = await response.json();
    return posts;
  };
  
  export default MenuData