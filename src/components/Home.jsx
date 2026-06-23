import React, {useContext} from 'react';
import ThemeContext from "../context/ThemeContext"

const Home = () => {
   const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div style={{
        backgroundColor: 
        theme === 'light' ? '#fff' : '#333',
        color: 
        theme === 'light' ? '#000' : "#fff",
        // minHeight: '100vh',
        // padding: '20px'
    }}>
        <h1>{theme} mode</h1>

        <button onClick={toggleTheme}>Toggle Theme</button>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, itaque! Ipsam molestiae quam similique omnis numquam, deserunt esse fugit aliquam magni expedita non dignissimos debitis id iusto! Nisi, facilis deleniti recusandae, sit iure laudantium quae animi fuga esse at suscipit ullam nobis pariatur beatae dicta culpa? Nemo quam quod illo dicta quae voluptatum deserunt odit culpa tenetur aliquam. Velit, vitae qui voluptatibus accusamus voluptas quos enim aspernatur error perspiciatis tempora totam sapiente vero consectetur blanditiis maxime! Rem ad sint laboriosam dolores tempora recusandae eos alias quae repellendus eligendi dolore corrupti incidunt repudiandae dignissimos provident, odio corporis quas, vitae nemo voluptate.</p>
    </div>
  )
}

export default Home