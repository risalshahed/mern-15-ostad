import ToggleTheme from '@/components/ToggleTheme.jsx';
import styles from './about.module.css'

const About = () => {

  // useState -> A Built-in React Hook
  return (
    <div className='py-20'>
      <p className={styles.title}>
        About Page
      </p>

      <ToggleTheme>
        Toggle Theme
      </ToggleTheme>
    </div>
  )
}

export default About;