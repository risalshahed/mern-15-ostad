import styles from './home.module.css'

const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold hover:text-blue-600">
        Hello Next JS
      </h1>
      <p className={`${styles.title} px-5 py-3`}>
        CSS Module
      </p>
    </div>
  );
}

export default Home;